import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const RECAPTCHA_ACTION = 'enquiryFormSubmit';
const MAX_BODY_BYTES = 64 * 1024;

function escapeHtml(s: string | undefined | null): string {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  website: 300,
  linkedin: 300,
  message: 4000,
} as const;

function clip(value: string | undefined, max: number): string {
  return (value ?? '').trim().slice(0, max);
}
function escapeTextBlock(s: string | undefined | null): string {
  if (s == null) return '(empty)';
  return String(s).replace(/\r?\n/g, '\n').trim() || '(empty)';
}

export async function POST(request: Request) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!secret) {
    return NextResponse.json(
      {
        status: 'failure',
        message: 'Server is missing reCAPTCHA configuration. Please try again later.',
      },
      { status: 500 },
    );
  }

  const contentLength = request.headers.get('content-length');
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { status: 'failure', message: 'Request body too large.' },
      { status: 413 },
    );
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return NextResponse.json(
      { status: 'failure', message: 'Invalid request.' },
      { status: 400 },
    );
  }

  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { status: 'failure', message: 'Request body too large.' },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { status: 'failure', message: 'Invalid request.' },
      { status: 400 },
    );
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json(
      { status: 'failure', message: 'Invalid request.' },
      { status: 400 },
    );
  }

  try {
    const { name, email, website, linkedin, message, gRecaptchaToken } = body as Record<
      string,
      string | undefined
    >;

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', gRecaptchaToken ?? '');

    const recaptchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      },
    );

    const recaptchaJson = (await recaptchaRes.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      'error-codes'?: string[];
    };

    const recaptchaFailed =
      !recaptchaJson?.success ||
      recaptchaJson.action !== RECAPTCHA_ACTION ||
      (recaptchaJson.score !== undefined && recaptchaJson.score <= 0.5);

    if (recaptchaFailed) {
      if (!recaptchaJson?.success) {
        console.error('reCAPTCHA verification failed', recaptchaJson?.['error-codes']);
      }
      return NextResponse.json(
        {
          status: 'failure',
          message: 'Verification failed. Please try again.',
        },
        { status: 400 },
      );
    }

    const emailRegexValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name?.trim()) {
      return NextResponse.json(
        { status: 'failure', message: 'Name is required.' },
        { status: 422 },
      );
    }
    if (!email?.trim() || !emailRegexValidate.test(email.trim())) {
      return NextResponse.json(
        { status: 'failure', message: 'A valid email address is required.' },
        { status: 422 },
      );
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { status: 'failure', message: 'Message is required.' },
        { status: 422 },
      );
    }
    if (
      name.trim().length > FIELD_LIMITS.name ||
      email.trim().length > FIELD_LIMITS.email ||
      (website ?? '').trim().length > FIELD_LIMITS.website ||
      (linkedin ?? '').trim().length > FIELD_LIMITS.linkedin ||
      message.trim().length > FIELD_LIMITS.message
    ) {
      return NextResponse.json(
        { status: 'failure', message: 'One of the fields is too long.' },
        { status: 422 },
      );
    }

    const safeName = clip(name, FIELD_LIMITS.name);
    const safeEmail = clip(email, FIELD_LIMITS.email);
    const safeWebsite = clip(website, FIELD_LIMITS.website);
    const safeLinkedin = clip(linkedin, FIELD_LIMITS.linkedin);
    const safeMessage = clip(message, FIELD_LIMITS.message);

    if (!resendKey || !to || !from) {
      console.warn(
        'Contact form: Resend env vars missing (RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM_EMAIL).',
      );
      return NextResponse.json(
        {
          status: 'failure',
          message: 'Contact delivery is not configured yet. Please email me directly.',
        },
        { status: 503 },
      );
    }

    const html = `
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Website:</strong> ${escapeHtml(safeWebsite)}</p>
      <p><strong>LinkedIn:</strong> ${escapeHtml(safeLinkedin)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(safeMessage).replace(/\n/g, '<br />')}</p>
    `.trim();

    const replyToSafe = emailRegexValidate.test(safeEmail) ? safeEmail : undefined;

    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      ...(replyToSafe ? { replyTo: replyToSafe } : {}),
      subject: `Portfolio enquiry from ${safeName.replace(/[\r\n]+/g, ' ')}`,
      html,
      text: `
Name: ${escapeTextBlock(safeName)}
Email: ${escapeTextBlock(safeEmail)}
Website: ${escapeTextBlock(safeWebsite)}
LinkedIn: ${escapeTextBlock(safeLinkedin)}

Message:
${escapeTextBlock(safeMessage)}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          status: 'failure',
          message: 'Could not send your message right now. Please try again.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      status: 'success',
      message: "Thanks! Your message has been sent. I'll be in touch soon.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        status: 'failure',
        message: 'Something went wrong submitting the form. Please try again later.',
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(s: string | undefined | null): string {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** Format body as readable plain text fallback */
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

  const MAX_BODY_BYTES = 8_192;
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { status: 'failure', message: 'Request body too large.' },
      { status: 413 },
    );
  }

  try {
    const body = await request.json();
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
    };

    if (!recaptchaJson?.success || (recaptchaJson.score !== undefined && recaptchaJson.score <= 0.5)) {
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
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Website:</strong> ${escapeHtml(website)}</p>
      <p><strong>LinkedIn:</strong> ${escapeHtml(linkedin)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `.trim();

    const replyToSafe = email && emailRegexValidate.test(email) ? email : undefined;

    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      ...(replyToSafe ? { replyTo: replyToSafe } : {}),
      subject: `Portfolio enquiry from ${escapeTextBlock(name)}`,
      html,
      text: `
Name: ${escapeTextBlock(name)}
Email: ${escapeTextBlock(email)}
Website: ${escapeTextBlock(website)}
LinkedIn: ${escapeTextBlock(linkedin)}

Message:
${escapeTextBlock(message)}
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

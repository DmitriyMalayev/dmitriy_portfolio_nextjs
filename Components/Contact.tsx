'use client';

import { useCallback, useState } from 'react';
import type { FormEvent } from 'react';
import { openCalendlyPopup } from '@/Components/ClientCalendly';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type NotificationType = 'success' | 'error';
type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

const RECAPTCHA_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [notification, setNotification] = useState('');
  const [notificationType, setNotificationType] = useState<NotificationType | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();
  const recaptchaReady = Boolean(executeRecaptcha);
  const canSubmit = RECAPTCHA_CONFIGURED && recaptchaReady && !isSubmitting;

  const clearStatus = useCallback(() => {
    setNotification('');
    setNotificationType(null);
  }, []);

  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      clearStatus();

      const errs: FieldErrors = {};
      if (!name.trim()) errs.name = 'Name is required.';
      if (!email.trim()) errs.email = 'Email is required.';
      else if (!isValidEmail(email)) errs.email = 'Enter a valid email address.';
      if (!message.trim()) errs.message = 'Message is required.';

      setFieldErrors(errs);
      if (Object.keys(errs).length > 0) return;

      if (!RECAPTCHA_CONFIGURED) {
        setNotificationType('error');
        setNotification(
          'The contact form is not configured yet. Please email me directly.',
        );
        return;
      }

      if (!executeRecaptcha) {
        setNotificationType('error');
        setNotification(
          'Security check is still loading. Please wait a moment and try again.',
        );
        return;
      }

      setIsSubmitting(true);

      executeRecaptcha('enquiryFormSubmit')
        .then((token) =>
          fetch('/api/enquiry', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              website,
              linkedin,
              message,
              gRecaptchaToken: token,
            }),
          }),
        )
        .then(async (res) => {
          let data: { status?: string; message?: string };
          try {
            data = await res.json();
          } catch {
            data = {
              status: 'failure',
              message: 'Unexpected response from server.',
            };
          }

          if (!res.ok) {
            setNotificationType('error');
            setNotification(
              data?.message ??
                'Something went wrong. Please try again or email directly.',
            );
            return;
          }

          if (data?.status === 'success') {
            setNotificationType('success');
            setNotification(data?.message ?? "Thanks! I'll get back to you shortly.");
            setName('');
            setEmail('');
            setWebsite('');
            setLinkedin('');
            setMessage('');
            setFieldErrors({});
          } else {
            setNotificationType('error');
            setNotification(
              data?.message ?? 'Could not send your message. Try again later.',
            );
          }
        })
        .catch(() => {
          setNotificationType('error');
          setNotification('Network error. Please check your connection.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [clearStatus, executeRecaptcha, email, linkedin, message, name, website],
  );

  return (
    <div className="mx-auto text-slate-200 sm:px-2 lg:pt-0">
      <div className="flex w-full flex-col items-center justify-center ">
        <form
          className="flex w-full max-w-[600px] flex-col border-8 p-8 pb-6 text-xl text-slate-900"
          onSubmit={handleSubmitForm}
          noValidate
        >
          <div className="pb-8">
            <p className="py-4 text-slate-200 sm:text-lg md:text-xl">
              Submit the form below&nbsp;
              <span className="hidden sm:inline">or drop me a line.</span>
              <br />
              <a
                href="mailto:dmitriy.malayev@gmail.com"
                className="text-sky-300 underline decoration-sky-400 underline-offset-4 hover:text-sky-100"
              >
                dmitriy.malayev@gmail.com
              </a>
            </p>
            <button
              type="button"
              onClick={openCalendlyPopup}
              className="mt-2 inline-flex items-center gap-2 rounded-lg border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-900/40 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule a Call
            </button>
          </div>

          {!RECAPTCHA_CONFIGURED ? (
            <p className="mb-4 rounded-md border border-amber-800 bg-amber-950/50 px-4 py-3 text-sm text-amber-100">
              Form delivery is being set up. Please use the email above or schedule a
              call in the meantime.
            </p>
          ) : null}

          {notification ? (
            <output
              aria-live="polite"
              role={notificationType === 'success' ? 'status' : 'alert'}
              className={`mb-6 rounded-md border px-4 py-3 text-base ${
                notificationType === 'success'
                  ? 'border-emerald-800 bg-emerald-950/60 text-emerald-100'
                  : 'border-red-800 bg-red-950/70 text-red-50'
              }`}
            >
              {notification}
            </output>
          ) : null}

          <div className="grid grid-cols-1 gap-2 text-slate-700 sm:grid-cols-2 ">
            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-100">
              Name *
              <input
                className={`custom-ring rounded-lg p-2 text-lg text-slate-900 ${
                  fieldErrors.name ? 'ring-4 ring-red-600' : ''
                }`}
                type="text"
                autoComplete="name"
                placeholder="Ada Lovelace"
                name="name"
                value={name}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? 'err-name' : undefined}
                onChange={(evt) => setName(evt.target.value)}
              />
              {fieldErrors.name ? (
                <span id="err-name" className="text-xs font-normal text-red-400">
                  {fieldErrors.name}
                </span>
              ) : null}
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-100">
              Email *
              <input
                className={`custom-ring rounded-lg p-2 text-lg text-slate-900 ${
                  fieldErrors.email ? 'ring-4 ring-red-600' : ''
                }`}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                name="email"
                value={email}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                onChange={(evt) => setEmail(evt.target.value)}
              />
              {fieldErrors.email ? (
                <span id="err-email" className="text-xs font-normal text-red-400">
                  {fieldErrors.email}
                </span>
              ) : null}
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-100">
              Website
              <input
                className="custom-ring rounded-lg p-2 text-lg text-slate-900"
                type="url"
                autoComplete="url"
                placeholder="https://"
                name="website"
                value={website}
                disabled={isSubmitting}
                onChange={(evt) => setWebsite(evt.target.value)}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-100">
              LinkedIn
              <input
                className="custom-ring rounded-lg p-2 text-lg text-slate-900"
                type="text"
                placeholder="linkedin.com/in/..."
                name="linkedin"
                value={linkedin}
                disabled={isSubmitting}
                onChange={(evt) => setLinkedin(evt.target.value)}
              />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold text-slate-100 sm:col-span-2">
              Message *
              <textarea
                className={`custom-ring min-h-[140px] rounded-lg p-2 text-lg text-slate-900 ${
                  fieldErrors.message ? 'ring-4 ring-red-600' : ''
                }`}
                name="message"
                rows={8}
                placeholder="What would you like to build or chat about?"
                value={message}
                disabled={isSubmitting}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'err-message' : undefined}
                onChange={(evt) => setMessage(evt.target.value)}
              />
              {fieldErrors.message ? (
                <span id="err-message" className="text-xs font-normal text-red-400">
                  {fieldErrors.message}
                </span>
              ) : null}
            </label>
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            aria-busy={isSubmitting}
            className="custom-ring mx-auto mt-8 flex min-h-[52px] min-w-[220px] items-center justify-center bg-slate-800 px-10 py-4 font-semibold text-orange-50 outline-none font-dance transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting
              ? 'Sending…'
              : !RECAPTCHA_CONFIGURED
                ? 'Form unavailable'
                : !recaptchaReady
                  ? 'Loading security check…'
                  : "Let's collaborate"}
          </button>
          <p className="mt-3 text-center text-sm text-stone-500">
            This site uses reCAPTCHA v3 behind the scenes to reduce spam.
          </p>
        </form>
      </div>
    </div>
  );
}

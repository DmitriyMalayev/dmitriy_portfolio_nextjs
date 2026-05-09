# Deployment notes

## Environment variables

Create these in **Vercel → Project → Settings → Environment Variables** (and locally in `.env.local`).

| Key                              | Required   | Description                                                                                                  |
| -------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Yes        | reCAPTCHA v3 **site** key (public).                                                                          |
| `RECAPTCHA_SECRET_KEY`           | Yes        | reCAPTCHA v3 **secret** key (server only).                                                                   |
| `RESEND_API_KEY`                 | Yes (prod) | API key from [Resend](https://resend.com). Without it the contact API returns `503` with a friendly message. |
| `CONTACT_TO_EMAIL`               | Yes (prod) | Inbox that should receive submissions.                                                                       |
| `RESEND_FROM_EMAIL`              | Yes (prod) | Verified sender, e.g. `Portfolio <mail@yourdomain.com>` or Resend’s onboarding address for testing.          |
| `SITE_URL`                       | Optional   | Canonical site URL for `next-sitemap` (defaults to `https://dmitriymalayev.com`).                            |
| `ANALYZE`                        | Optional   | Set to `true` locally when running `npm run analyze`.                                                        |

### reCAPTCHA

1. Open [Google reCAPTCHA admin](https://www.google.com/recaptcha/admin).
2. Create a **v3** key pair for your domain(s) (include `localhost` for local testing).
3. Paste the **site** key into `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
4. Paste the **secret** into `RECAPTCHA_SECRET_KEY`.

### Resend

1. Sign up and create an API key.
2. Verify a domain **or** use Resend’s shared testing domain for development.
3. Set `RESEND_FROM_EMAIL` to an address Resend allows you to send from.
4. Set `CONTACT_TO_EMAIL` to your real inbox.

## Vercel

1. Import the GitHub repo.
2. Framework preset: **Next.js** (defaults are fine).
3. Add all environment variables from the table above for **Production** and **Preview** as needed.
4. Deploy — `postbuild` runs `next-sitemap` to emit `public/sitemap.xml` and `public/robots.txt`.

## GitHub Actions

CI (`.github/workflows/ci.yml`) runs `npm run lint` and `npm run build` with dummy `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` so the bundle can compile without real secrets.

# Dmitriy Malayev — Portfolio

Personal marketing site built with **Next.js 14 (App Router)**, **React 18**, **Tailwind CSS**, **Framer Motion**, **reCAPTCHA v3**, **Resend** (contact email), and **Vercel Analytics**.

## Prerequisites

- Node.js **18+**
- npm (ships with Node)

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` using the comments in [`.env.example`](./.env.example). At minimum you need reCAPTCHA keys for local development; add Resend keys to actually deliver contact form email.

## Scripts

| Command                | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `npm run dev`          | Start the dev server on [http://localhost:3000](http://localhost:3000) |
| `npm run build`        | Production build (runs `next-sitemap` afterwards)                      |
| `npm run start`        | Serve the production build                                             |
| `npm run lint`         | ESLint (Next + import + jsx-a11y + Prettier config)                    |
| `npm run format`       | Prettier write for the whole repo                                      |
| `npm run format:check` | Prettier check (CI-friendly)                                           |
| `npm run analyze`      | Bundle analyzer (`ANALYZE=true next build`)                            |

## Project layout

```
app/                 App Router routes, layout, metadata, API handler
Components/          UI building blocks (client + server mix)
data/                Content modules (about, skills, certificates, projects)
public/              Static assets, résumé PDF, manifest, icons
styles/globals.css   Tailwind layers + local fonts
```

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for environment variables and Vercel notes.

## License

Private project — all rights reserved unless otherwise noted.

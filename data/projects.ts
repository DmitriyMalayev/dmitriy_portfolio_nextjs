import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'TorahAnytime content & admin',
    description:
      'User-facing playback, filtered search, and downloads alongside an admin panel — cutting content-update time by 20% for non‑technical staff. Cached REST APIs reduced metadata latency ~30%; Swagger, tests, and profiling keep APIs reliable.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Jira'],
    githubUrl: null,
    liveUrl: 'https://torahanytime.com',
  },
  {
    title: 'Ecosave sustainability portal',
    description:
      'Enterprise-facing Kotlin/JS + React portal for energy KPIs and 5,000+ monthly datapoints; GRI reports automated with JasperReports (≈20 hrs saved per cycle). New ELT/ETL validation raised uptime to 99.8% and cut data errors ~40%.',
    tags: ['Kotlin/JS', 'React', 'JasperReports', 'ETL', 'Figma'],
    githubUrl: null,
    liveUrl: 'https://ecosaveinc.com/turnkey-solutions/ecosave-watch/',
  },
  {
    title: 'Appointment & messaging stack',
    description:
      'FastAPI appointment bookings plus Twilio A2P messaging for client workflows — part of consultant delivery with Tailwind/HTML front ends and aggressive SEO/PageSpeed lifts (30%+ scores, ~40% faster loads).',
    tags: ['FastAPI', 'Twilio', 'Tailwind', 'SEO'],
    githubUrl: null,
    liveUrl: 'https://pbtucson.com/',
  },
  {
    title: 'Portfolio (this site)',
    description:
      'Personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion animations. Features reCAPTCHA v3 spam protection, Calendly scheduling integration, JSON-LD structured data, full OG/SEO metadata, and responsive design — deployed on Vercel.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Resend', 'Vercel'],
    githubUrl: 'https://github.com/DmitriyMalayev/dmitriy_portfolio_nextjs',
    liveUrl: 'https://dmitriymalayev.com',
  },
];

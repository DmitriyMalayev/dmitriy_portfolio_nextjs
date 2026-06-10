import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'BrightArchive — multi-tenant document SaaS',
    description:
      'Sole-engineered a multi-tenant document management platform from a Paperless-ngx fork — Django 5.2, Angular 20, PostgreSQL with row-level tenant isolation. AI/RAG layer with 6+ LLM providers, pgvector hybrid search, subscription portal (FastAPI + Chargebee + Keycloak), automated email/OCR ingestion, and CI/CD on self-hosted GitHub Actions.',
    tags: ['Django', 'Angular', 'PostgreSQL', 'FastAPI', 'AI/RAG', 'Keycloak'],
    githubUrl: null,
    liveUrl: null,
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

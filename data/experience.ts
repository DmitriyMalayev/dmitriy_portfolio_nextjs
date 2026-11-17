import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    company: 'SCYFOR Consulting, LLC',
    role: 'Senior Full Stack Software Engineer',
    period: 'Apr 2024 – Present',
    bullets: [
      'Owned BrightArchive, a multi-tenant document SaaS built in Python and Django on a Paperless-ngx base. Shipped row-level tenant isolation, S3 media storage, and automatic ORM query filtering on PostgreSQL (AWS RDS), plus a TypeScript client in Angular with real-time updates, PDF preview, and RAG chat.',
      'Built the subscription portal in Python with FastAPI and SQLAlchemy, integrating Chargebee billing, Keycloak OIDC SSO, and a 5-step async provisioning orchestrator that onboards a tenant in under 30 minutes.',
      'Built the Python ingestion and RAG layer: inbound email, OCR, metadata extraction, and 95%+ document classification, plus per-tenant summaries, auto-tagging, and Q&A with citations through pgvector hybrid search (OpenAI).',
      'Implemented tenant admin, editor, and viewer roles with an audit trail, and GitHub Actions CI (pytest, Jest, and Playwright) that cut suite runtime by 55% and gated production releases.',
    ],
    tech: [
      'Python',
      'Django',
      'Angular',
      'FastAPI',
      'PostgreSQL',
      'Keycloak',
      'pgvector',
      'GitHub Actions',
    ],
  },
  {
    company: 'Ecosave',
    role: 'Full Stack Software Engineer',
    period: 'Oct 2022 – Apr 2024',
    bullets: [
      'Built a client-facing sustainability portal in Next.js and React so enterprise clients can track energy KPIs, manage 5,000+ monthly data points, and review interactive compliance dashboards instead of static spreadsheet reports.',
      'Automated GRI-compliant sustainability report generation with Next.js API routes and TypeScript, reducing manual reporting cycles by 20+ hours per month.',
      'Architected an ELT/ETL testing pipeline with automated data validation and quality checks, increasing application uptime to 99.8% and cutting data-related errors by 40%.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'ETL/ELT'],
  },
  {
    company: 'IQTech Consultant, LLC',
    role: 'Full Stack Software Engineer',
    period: 'Jan 2021 – Oct 2022',
    bullets: [
      'Delivered Next.js and TypeScript/React applications for enterprise clients, with server-side rendering, shared component libraries, and Redux, cutting development time by 30%.',
      'Built Next.js API routes with React Query on the client, achieving 99.5%+ crash-free sessions and shortening feature-delivery cycles by 20%.',
      'Implemented RBAC across Next.js middleware and API routes, with protected routing, JWT authentication, and permission checks on client portals.',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Redux', 'React Query'],
  },
];

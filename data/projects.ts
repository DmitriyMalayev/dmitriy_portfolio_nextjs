import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'BrightArchive — multi-tenant document SaaS',
    description:
      'Multi-tenant document SaaS on a Paperless-ngx base — Python and Django with row-level tenant isolation, S3 media storage, and PostgreSQL (AWS RDS). TypeScript Angular client with real-time updates, PDF preview, and RAG chat. FastAPI subscription portal with Chargebee and Keycloak, plus ingestion and pgvector Q&A that classifies documents at 95%+.',
    tags: ['Django', 'Angular', 'PostgreSQL', 'FastAPI', 'AI/RAG', 'Keycloak'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Ecosave sustainability portal',
    description:
      'Client-facing sustainability portal in Kotlin/JS and React on a Spring Boot API for energy KPIs, 5,000+ monthly data points, and interactive compliance dashboards. GRI-compliant reports generated in Spring Boot, cutting manual reporting by 20+ hours per month. ELT/ETL validation against PostgreSQL raised uptime to 99.8% and cut data errors by 40%.',
    tags: ['Kotlin/JS', 'React', 'Spring Boot', 'PostgreSQL', 'ETL/ELT'],
    githubUrl: null,
    liveUrl: 'https://ecosaveinc.com/turnkey-solutions/ecosave-watch/',
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

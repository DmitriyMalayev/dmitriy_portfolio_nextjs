import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    company: 'SCYFOR Consulting, LLC',
    role: 'Senior Full Stack Software Engineer (Contract)',
    period: 'Apr 2024 – Present',
    bullets: [
      'Sole-engineered a multi-tenant document management SaaS (BrightArchive) from a Paperless-ngx fork, delivering 1,200+ commits across Django 5.2, Angular 20, and PostgreSQL (AWS RDS) with strict row-level tenant isolation, tenant-aware media storage, and automatic ORM query filtering.',
      'Built an AI/RAG document intelligence layer supporting 6+ LLM providers (OpenAI, Anthropic, DeepSeek, Novita) with pgvector embeddings, hybrid semantic/keyword search, and agentic retrieval — enabling per-tenant document summaries, auto-tagging, and conversational Q&A with source citations.',
      'Designed and shipped an end-to-end subscription portal (FastAPI + SQLAlchemy) integrating Chargebee billing, Keycloak OIDC single sign-on, and a 5-step async provisioning orchestrator that onboards tenants across BrightArchive, BrightSign, and Keycloak.',
      'Engineered automated document ingestion pipelines processing inbound email (IMAP/OAuth) through Tesseract OCR, Apache Tika, and Gotenberg, with sender whitelisting, metadata extraction into custom fields, and rule-based classification by document type.',
      'Implemented RBAC with teams and departments — tenant-admin/editor/viewer roles enforced via Django Guardian, Keycloak realm-role sync, WebSocket-aware permission checks, and a full audit trail (django-auditlog) surfaced in an admin activity feed.',
      'Established CI/CD on self-hosted GitHub Actions with sharded pytest (4 shards), Jest, and Playwright E2E suites, automated staging deploy on push, and a gated manual production release workflow requiring dispatch confirmation.',
      'Delivered a responsive Angular 20 UI with real-time WebSocket updates, PDF.js document preview, RAG chat interface, bulk editing, saved views, and dark-mode support — all tenant-scoped and permission-gated.',
    ],
    tech: [
      'Django',
      'Angular',
      'PostgreSQL',
      'FastAPI',
      'Keycloak',
      'Docker',
      'GitHub Actions',
      'pgvector',
    ],
  },
  {
    company: 'Ecosave',
    role: 'Full Stack Software Engineer',
    period: 'Oct 2022 – Apr 2024',
    bullets: [
      'Engineered a client-facing sustainability portal using Kotlin/JS and React, enabling enterprise clients to track energy KPIs and manage over 5,000 data points monthly.',
      'Automated the generation of GRI-compliant sustainability reports using JasperReports and Kotlin, saving an estimated 20 hours of manual work per reporting cycle.',
      'Increased application uptime to 99.8% and reduced data-related errors by 40% by architecting a new ELT/ETL testing pipeline and implementing robust data validation logic, while streamlining the development lifecycle through high-fidelity Figma mockups and Draw.io workflow diagrams that improved design hand-offs and reduced rework.',
    ],
    tech: ['Kotlin/JS', 'React', 'JasperReports', 'ETL/ELT', 'Figma', 'Draw.io'],
  },
  {
    company: 'IQTech Consultant, LLC',
    role: 'ReactJS Developer / Frontend Consultant (Contract)',
    period: 'Jan 2021 – Oct 2022',
    bullets: [
      'Architected and delivered custom React applications for 3 enterprise clients, building reusable component libraries and state management patterns that reduced development time by 30%.',
      'Built responsive, accessible UIs with React, Redux, and React Query, resolving 90%+ of production bugs within one business day and accelerating feature delivery across teams.',
      'Implemented a role-based access control system with protected routes, JWT authentication, and granular permission checks to secure sensitive user data across client portals.',
    ],
    tech: ['React', 'Redux', 'React Query', 'JWT', 'TypeScript'],
  },
];

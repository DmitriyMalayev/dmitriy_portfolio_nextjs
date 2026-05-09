import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    company: 'TorahAnytime',
    role: 'Full Stack Software Engineer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Developed video playback, filtered search, and content downloads with React and Next.js.',
      'Reduced API latency by 30% via cached RESTful endpoints.',
      'Cut content-update time by 20% with a custom admin panel for non-technical staff.',
      'Ensured API reliability via Swagger docs, automated testing, and data profiling.',
      'Delivered a responsive, mobile-first UI with Tailwind CSS and rigorous QA.',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Swagger', 'Jira', 'Git'],
  },
  {
    company: 'Self Employed',
    role: 'Independent Consultant',
    period: 'Apr 2024 – Jan 2025',
    bullets: [
      'Built three commercial websites with HTML, JavaScript, and Tailwind CSS, raising client visibility by 20%.',
      'Improved PageSpeed scores by 30% and cut load times by 40% via SEO strategies.',
      'Engineered a FastAPI appointment system and Twilio A2P messaging solution.',
      'Maintained a 24-hour SLA for all change requests and technical support.',
    ],
    tech: ['HTML', 'JavaScript', 'Tailwind CSS', 'FastAPI', 'Twilio', 'SEO'],
  },
  {
    company: 'Ecosave',
    role: 'Full Stack Software Engineer',
    period: 'Oct 2022 – Apr 2024',
    bullets: [
      'Built a client-facing sustainability portal with Kotlin/JS and React for 5,000+ monthly data points.',
      'Automated GRI-compliant report generation with JasperReports and Kotlin, saving 20 hrs per cycle.',
      'Raised uptime to 99.8% and cut data errors by 40% via a new ELT/ETL testing pipeline.',
      'Created Figma mockups and Draw.io diagrams to streamline design hand-offs and reduce rework.',
    ],
    tech: ['Kotlin/JS', 'React', 'JasperReports', 'ETL/ELT', 'Figma', 'Draw.io'],
  },
  {
    company: 'IQTech Consultant, LLC',
    role: 'Salesforce Administrator / Consultant',
    period: 'Jan 2021 – Oct 2022',
    bullets: [
      'Architected and deployed custom Salesforce solutions for 3 enterprise clients, reducing manual data entry by 30%.',
      'Integrated Salesforce with React (JSforce/LDS) and resolved 90%+ of user issues within one business day.',
      'Implemented object- and field-level security baseline to protect critical user data.',
    ],
    tech: ['Salesforce', 'React', 'JSforce', 'LDS'],
  },
];

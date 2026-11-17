import type { Skill } from './types';

/** Generates a devicons CDN URL for a given icon slug */
const D = (slug: string, filename = `${slug}-original`): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${filename}.svg`;

/** Simple Icons CDN — pass a hex color (no #) so marks stay visible on the dark background */
const S = (slug: string, color: string): string =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

/** Section order in the Skills UI, aligned with the résumé */
export const skillCategoryOrder: string[] = [
  'Languages',
  'Frontend',
  'Backend & APIs',
  'AI & LLM',
  'Databases & Cloud',
  'Architecture & Testing',
];

export const skillsList: Skill[] = [
  // Languages
  { title: 'Python', src: D('python'), category: 'Languages' },
  { title: 'TypeScript', src: D('typescript'), category: 'Languages' },
  { title: 'JavaScript', src: '/assets/javascript.webp', category: 'Languages' },
  { title: 'SQL', src: D('postgresql'), category: 'Languages' },
  { title: 'HTML5', src: D('html5'), category: 'Languages' },
  { title: 'CSS3', src: D('css3'), category: 'Languages' },

  // Frontend
  { title: 'Angular', src: D('angular'), category: 'Frontend' },
  { title: 'React', src: '/assets/react.webp', category: 'Frontend' },
  { title: 'React Query', src: S('reactquery', 'FF4154'), category: 'Frontend' },
  { title: 'Next.js', src: D('nextjs'), category: 'Frontend', invert: true },
  { title: 'Redux', src: D('redux'), category: 'Frontend' },
  { title: 'Tailwind CSS', src: D('tailwindcss'), category: 'Frontend' },

  // Backend & APIs
  {
    title: 'Django / DRF',
    src: D('django', 'django-plain'),
    category: 'Backend & APIs',
    invert: true,
  },
  { title: 'FastAPI', src: D('fastapi'), category: 'Backend & APIs' },
  { title: 'Express.js', src: D('express'), category: 'Backend & APIs', invert: true },
  { title: 'Node.js', src: '/assets/node.webp', category: 'Backend & APIs' },
  { title: 'Celery', src: S('celery', '37814A'), category: 'Backend & APIs' },
  {
    title: 'SQLAlchemy',
    src: D('sqlalchemy'),
    category: 'Backend & APIs',
    invert: true,
  },
  { title: 'Chargebee', src: '/assets/chargebee.svg', category: 'Backend & APIs' },

  // AI & LLM
  { title: 'OpenAI', src: '/assets/openai.svg', category: 'AI & LLM', invert: true },
  { title: 'Anthropic', src: S('anthropic', 'D4A27F'), category: 'AI & LLM' },
  { title: 'DeepSeek', src: S('deepseek', '4D6BFE'), category: 'AI & LLM' },
  { title: 'pgvector', src: D('postgresql'), category: 'AI & LLM' },

  // Databases & Cloud
  { title: 'PostgreSQL', src: D('postgresql'), category: 'Databases & Cloud' },
  { title: 'DynamoDB', src: D('dynamodb'), category: 'Databases & Cloud' },
  { title: 'MongoDB', src: '/assets/mongo.webp', category: 'Databases & Cloud' },
  { title: 'AWS', src: '/assets/aws.webp', category: 'Databases & Cloud' },
  { title: 'Docker', src: D('docker'), category: 'Databases & Cloud' },
  {
    title: 'GitHub Actions',
    src: D('githubactions'),
    category: 'Databases & Cloud',
  },

  // Architecture & Testing
  { title: 'Keycloak', src: S('keycloak', '4D9FFF'), category: 'Architecture & Testing' },
  { title: 'pytest', src: D('pytest'), category: 'Architecture & Testing' },
  { title: 'Playwright', src: D('playwright'), category: 'Architecture & Testing' },
  { title: 'Jest', src: D('jest', 'jest-plain'), category: 'Architecture & Testing' },
];

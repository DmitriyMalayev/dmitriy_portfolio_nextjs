import type { Skill } from './types';

/** Generates a devicons CDN URL for a given icon slug */
const D = (slug: string, filename = `${slug}-original`): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${filename}.svg`;

/** Section order in the Skills UI */
export const skillCategoryOrder: string[] = [
  'Languages',
  'Front-End',
  'Back-End',
  'AI & RAG',
  'DB & Data',
  'Cloud & DevOps',
  'Tools',
];

export const skillsList: Skill[] = [
  // Languages
  { title: 'JavaScript', src: '/assets/javascript.webp', category: 'Languages' },
  { title: 'TypeScript', src: D('typescript'), category: 'Languages' },
  { title: 'Python', src: D('python'), category: 'Languages' },
  { title: 'Kotlin', src: '/assets/kotlin.webp', category: 'Languages' },
  { title: 'SQL', src: D('mysql'), category: 'Languages' },
  { title: 'Ruby', src: D('ruby'), category: 'Languages' },
  { title: 'C#', src: D('csharp', 'csharp-original'), category: 'Languages' },

  // Front-End
  { title: 'Angular', src: D('angular', 'angular-original'), category: 'Front-End' },
  { title: 'React', src: '/assets/react.webp', category: 'Front-End' },
  { title: 'Next.js', src: '/assets/nextjs.webp', category: 'Front-End' },
  { title: 'Redux', src: D('redux'), category: 'Front-End' },
  { title: 'Tailwind CSS', src: '/assets/tailwind.webp', category: 'Front-End' },

  // Back-End
  { title: 'Django', src: D('django', 'django-plain'), category: 'Back-End' },
  {
    title: 'Django REST Framework',
    src: D('django', 'django-plain'),
    category: 'Back-End',
  },
  { title: 'FastAPI', src: D('fastapi', 'fastapi-original'), category: 'Back-End' },
  { title: 'Node.js', src: '/assets/node.webp', category: 'Back-End' },
  {
    title: 'Express.js',
    src: D('express', 'express-original'),
    category: 'Back-End',
    invert: true,
  },
  { title: 'Celery', src: D('python'), category: 'Back-End' },
  { title: 'Spring Boot', src: D('spring', 'spring-original'), category: 'Back-End' },
  {
    title: 'Ruby on Rails',
    src: D('rails', 'rails-original-wordmark'),
    category: 'Back-End',
  },

  // AI & RAG
  { title: 'RAG', src: D('openai', 'openai-original'), category: 'AI & RAG' },
  {
    title: 'LLM Integration',
    src: D('openai', 'openai-original'),
    category: 'AI & RAG',
  },
  {
    title: 'Vector Embeddings',
    src: D('postgresql', 'postgresql-original'),
    category: 'AI & RAG',
  },
  {
    title: 'pgvector',
    src: D('postgresql', 'postgresql-original'),
    category: 'AI & RAG',
  },
  {
    title: 'Hybrid Search',
    src: D('elasticsearch', 'elasticsearch-original'),
    category: 'AI & RAG',
  },
  {
    title: 'Agentic Retrieval',
    src: D('openai', 'openai-original'),
    category: 'AI & RAG',
  },

  // DB & Data
  {
    title: 'PostgreSQL',
    src: D('postgresql', 'postgresql-original'),
    category: 'DB & Data',
  },
  { title: 'MongoDB', src: '/assets/mongo.webp', category: 'DB & Data' },
  {
    title: 'ETL / ELT',
    src: D('apacheairflow', 'apacheairflow-original'),
    category: 'DB & Data',
  },

  // Cloud & DevOps
  { title: 'AWS', src: '/assets/aws.webp', category: 'Cloud & DevOps' },
  { title: 'Azure', src: D('azure', 'azure-original'), category: 'Cloud & DevOps' },
  { title: 'Docker', src: D('docker', 'docker-original'), category: 'Cloud & DevOps' },
  {
    title: 'Docker Compose',
    src: D('docker', 'docker-original'),
    category: 'Cloud & DevOps',
  },
  {
    title: 'GitHub Actions',
    src: D('githubactions', 'githubactions-original'),
    category: 'Cloud & DevOps',
  },
  {
    title: 'Jenkins',
    src: D('jenkins', 'jenkins-original'),
    category: 'Cloud & DevOps',
  },

  // Tools
  { title: 'Keycloak', src: D('java', 'java-original'), category: 'Tools' },
  { title: 'Chargebee', src: D('stripe', 'stripe-original'), category: 'Tools' },
  { title: 'Redis', src: D('redis', 'redis-original'), category: 'Tools' },
  {
    title: 'Playwright',
    src: D('playwright', 'playwright-original'),
    category: 'Tools',
  },
  { title: 'pytest', src: D('pytest', 'pytest-original'), category: 'Tools' },
  { title: 'Git', src: D('git', 'git-original'), category: 'Tools' },
  { title: 'GitHub', src: '/assets/github.webp', category: 'Tools' },
  { title: 'Postman', src: D('postman', 'postman-original'), category: 'Tools' },
  { title: 'Figma', src: D('figma', 'figma-original'), category: 'Tools' },
];

import type { Skill } from './types';

/** Generates a devicons CDN URL for a given icon slug */
const D = (slug: string, filename = `${slug}-original`): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${filename}.svg`;

/** Section order in the Skills UI */
export const skillCategoryOrder: string[] = [
  'Languages',
  'Front-End',
  'Back-End',
  'DB & Data',
  'Cloud & DevOps',
  'Tools',
];

export const skillsList: Skill[] = [
  // Languages
  { title: 'HTML', src: '/assets/html.webp', category: 'Languages' },
  { title: 'CSS', src: '/assets/css.webp', category: 'Languages' },
  { title: 'JavaScript', src: '/assets/javascript.webp', category: 'Languages' },
  { title: 'TypeScript', src: D('typescript'), category: 'Languages' },
  { title: 'Kotlin', src: '/assets/kotlin.webp', category: 'Languages' },
  { title: 'Python', src: D('python'), category: 'Languages' },
  { title: 'Ruby', src: D('ruby'), category: 'Languages' },
  { title: 'SQL', src: D('mysql'), category: 'Languages' },
  { title: 'C#', src: D('csharp'), category: 'Languages' },

  // Front-End
  { title: 'React', src: '/assets/react.webp', category: 'Front-End' },
  { title: 'Next.js', src: '/assets/nextjs.webp', category: 'Front-End' },
  { title: 'Redux', src: D('redux'), category: 'Front-End' },
  { title: 'Tailwind CSS', src: '/assets/tailwind.webp', category: 'Front-End' },
  { title: 'Kotlin / JS', src: '/assets/kotlin.webp', category: 'Front-End' },

  // Back-End
  { title: 'Node.js', src: '/assets/node.webp', category: 'Back-End' },
  {
    title: 'Express.js',
    src: D('express', 'express-original'),
    category: 'Back-End',
    invert: true,
  },
  { title: 'Spring Boot', src: D('spring', 'spring-original'), category: 'Back-End' },
  {
    title: 'Ruby on Rails',
    src: D('rails', 'rails-original-wordmark'),
    category: 'Back-End',
  },
  { title: '.NET', src: D('dot-net', 'dot-net-original'), category: 'Back-End' },

  // DB & Data
  {
    title: 'PostgreSQL',
    src: D('postgresql', 'postgresql-original'),
    category: 'DB & Data',
  },
  { title: 'MongoDB', src: '/assets/mongo.webp', category: 'DB & Data' },
  { title: 'Firebase', src: '/assets/firebase.webp', category: 'DB & Data' },
  { title: 'Azure Data', src: D('azure', 'azure-original'), category: 'DB & Data' },
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
    title: 'Jenkins',
    src: D('jenkins', 'jenkins-original'),
    category: 'Cloud & DevOps',
  },
  { title: 'Gradle', src: D('gradle', 'gradle-original'), category: 'Cloud & DevOps' },
  {
    title: 'Azure DevOps',
    src: D('azure', 'azure-original'),
    category: 'Cloud & DevOps',
  },
  {
    title: 'AWS CodePipeline',
    src: '/assets/aws-codepipeline.svg',
    category: 'Cloud & DevOps',
  },

  // Tools
  { title: 'Git', src: D('git', 'git-original'), category: 'Tools' },
  { title: 'GitHub', src: '/assets/github.webp', category: 'Tools' },
  { title: 'Postman', src: D('postman', 'postman-original'), category: 'Tools' },
  { title: 'Insomnia', src: D('insomnia', 'insomnia-original'), category: 'Tools' },
  { title: 'Figma', src: D('figma', 'figma-original'), category: 'Tools' },
  { title: 'Swagger', src: D('swagger', 'swagger-original'), category: 'Tools' },
  { title: 'Chrome DevTools', src: D('chrome', 'chrome-original'), category: 'Tools' },
  { title: 'Jira', src: D('jira', 'jira-original-wordmark'), category: 'Tools' },
  {
    title: 'Salesforce',
    src: D('salesforce', 'salesforce-original'),
    category: 'Tools',
  },
];

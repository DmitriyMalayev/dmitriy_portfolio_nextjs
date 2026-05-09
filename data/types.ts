export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageSrc: string | null;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface EducationItem {
  school: string;
  credential: string;
  period: string;
  notes: string;
}

export interface Skill {
  title: string;
  src: string;
  category: string;
  /** Apply CSS invert filter — use for black-on-transparent logos on dark backgrounds */
  invert?: boolean;
}

export interface Certificate {
  src: string;
  alt: string;
  name: string;
}

export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  linkedInUrl?: string;
}

export interface WritingItem {
  title: string;
  description: string;
  url: string;
  type: 'article' | 'repo';
}

export type IqtechClient = 'meridian' | 'atlas' | 'summit' | 'shared' | null;

export interface QAEntry {
  id: string;
  company: 'iqtech' | 'ecosave';
  category: string;
  client: IqtechClient;
  question: string;
  answer: string;
  tags?: string[];
}

export interface Metadata {
  title: string;
  author: string;
  subtitle: string;
  iqtechPeriod: string;
  ecosavePeriod: string;
  version: string;
}

export interface CategoryConfig {
  file: string;
  company: 'iqtech' | 'ecosave';
  category: string;
  count: number;
  client?: IqtechClient;
}

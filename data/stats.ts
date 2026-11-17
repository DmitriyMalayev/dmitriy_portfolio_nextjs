import type { Stat } from './types';

/** Key impact metrics (from résumé) for the StatsBar */
export const stats: Stat[] = [
  { value: '95%+', label: 'Document classification', context: 'BrightArchive' },
  { value: '55%', label: 'CI suite runtime cut', context: 'BrightArchive' },
  { value: '99.8%', label: 'Application uptime', context: 'Ecosave' },
  { value: '40%', label: 'Data errors reduced', context: 'Ecosave' },
  { value: '20+ hrs', label: 'Saved per month', context: 'Ecosave' },
];

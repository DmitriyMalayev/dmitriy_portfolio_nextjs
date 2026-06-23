#!/usr/bin/env npx tsx
/**
 * Generates all interview-prep JSON files (500+ Q&As).
 * Run: npm run interview-prep:generate
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { reactFundamentalsBank } from './lib/content/iqtech-react';
import { buildEcosaveAnswer, buildIqtechAnswer } from './lib/content/answer-builders';
import { makeEntry, padId } from './lib/generator-utils';
import type { IqtechClient, QAEntry } from './lib/types';

const DATA = path.join(__dirname, 'data');

const MERIDIAN = 'Meridian Health Partners';
const ATLAS = 'Atlas Freight Logistics';
const SUMMIT = 'Summit Capital Advisors';

type AngleFn = (topic: string, ctx: string) => string;

const ANGLES: AngleFn[] = [
  (t, c) => `How did you implement ${t}${c}?`,
  (t, c) => `Why did ${t} matter${c}?`,
  (t, c) => `What tradeoffs did you weigh for ${t}${c}?`,
  (t, c) => `Explain ${t}${c} as you would in a senior React interview.`,
  (t, c) => `What production issues did you see with ${t}${c}?`,
  (t, c) => `How did you test ${t}${c}?`,
  (t, c) => `How would you improve ${t}${c} if you rebuilt it today?`,
  (t, c) => `How did ${t} interact with Redux and React Query${c}?`,
  (t, c) => `What would junior developers learn from ${t}${c}?`,
  (t, c) => `How did stakeholders react to decisions around ${t}${c}?`,
];

function ctxClient(name: string | null): string {
  if (!name) return ' across IQTech client projects';
  return ` on the ${name} engagement`;
}

function generateIqtechCategory(
  prefix: string,
  category: string,
  client: IqtechClient,
  clientName: string | null,
  topics: string[],
  stack: string[],
  count: number,
): QAEntry[] {
  const out: QAEntry[] = [];
  const ctx = ctxClient(clientName);
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length];
    const angle = Math.floor(i / topics.length) % ANGLES.length;
    const q = ANGLES[angle](topic, ctx);
    const extra =
      client === 'summit'
        ? 'Summit Capital required stricter JWT refresh handling and separate advisor versus client route trees.'
        : client === 'atlas'
          ? 'Atlas Freight’s operations dashboard relied on React Query polling and URL-synced filters for dispatchers.'
          : client === 'meridian'
            ? 'Meridian Health’s intake wizard and clinic scheduling views were the first proving ground for this pattern.'
            : undefined;
    const sentences = buildIqtechAnswer(topic, angle, i, clientName, stack, extra);
    out.push(makeEntry(padId(prefix, i + 1), 'iqtech', category, client, q, ...sentences));
  }
  return out;
}

function generateEcosaveCategory(
  prefix: string,
  category: string,
  topics: string[],
  area: string,
  count: number,
  metric?: string,
): QAEntry[] {
  const out: QAEntry[] = [];
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length];
    const angle = Math.floor(i / topics.length) % ANGLES.length;
    const ctx = ' on the Ecosave sustainability portal';
    const q = ANGLES[angle](topic, ctx);
    const sentences = buildEcosaveAnswer(topic, angle, i, area, metric);
    out.push(makeEntry(padId(prefix, i + 1), 'ecosave', category, null, q, ...sentences));
  }
  return out;
}

async function writeJson(subdir: string, filename: string, data: QAEntry[]): Promise<void> {
  const dir = path.join(DATA, subdir);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), JSON.stringify(data, null, 2) + '\n', 'utf-8');
  console.log(`  ${subdir}/${filename}: ${data.length}`);
}

async function main(): Promise<void> {
  console.log('Generating interview prep Q&A JSON...\n');

  const reduxTopics = [
    'Redux Toolkit auth slice',
    'normalized entity caches in Redux',
    'middleware for API error toasts',
    'selectors with createSelector',
    'UI slice for sidebar and theme',
    'hydrating auth state on refresh',
    'dispatch patterns in DataTable bulk actions',
    'DevTools usage during bug triage',
    'splitting reducers by feature domain',
    'avoiding duplicate server state in Redux',
  ];

  const rqTopics = [
    'query key conventions',
    'staleTime and cacheTime tuning',
    'optimistic mutations for shipment updates',
    'invalidation after form submissions',
    'prefetching detail routes on row hover',
    'polling active shipments every sixty seconds',
    'pagination with useInfiniteQuery',
    'global QueryClient error handlers',
    'retry backoff for flaky endpoints',
    'dependent queries for detail drawers',
  ];

  const tsTopics = [
    'strict TypeScript configuration',
    'typed React component props',
    'generic DataTable column definitions',
    'discriminated unions for API responses',
    'typing Redux hooks with RootState',
    'enum versus union for role names',
    'type guards on JWT payload parsing',
    'shared API types package',
    ' narrowing on permission strings',
    'utility types for form schemas',
  ];

  const libTopics = [
    'Storybook documentation for ui-core',
    'DataTable sorting and filtering API',
    'StepWizard for multi-step flows',
    'Modal focus trap implementation',
    'shared Button and FormField tokens',
    'semantic color tokens for status badges',
    'versioning internal packages',
    'contributing guidelines for contractors',
    'Composable PageShell layout',
    'EmptyState and Skeleton loaders',
  ];

  const authTopics = [
    'JWT access and refresh token flow',
    'ProtectedRoute wrapper',
    'permissionMap RBAC configuration',
    'CanAccess render guard component',
    'Axios interceptors for 401 handling',
    'role-based navigation menus',
    'session timeout warnings',
    'logout and token revocation',
    'MFA challenge screen on Summit',
    'advisor versus client route separation',
  ];

  const meridianTopics = [
    'patient intake wizard steps',
    'clinic schedule day view',
    'front_desk role permissions',
    'nurse read-only chart access',
    'clinic_admin staff onboarding',
    'insurance capture validation',
    'consent e-signatures UI',
    'appointment conflict detection',
    'location switcher for multi-clinic',
    'audit log activity feed',
  ];

  const atlasTopics = [
    'shipment exception queue',
    'URL-synced filter state',
    'shipment detail drawer timeline',
    'CSV export for account managers',
    'dispatcher bulk status updates',
    'warehouse lead facility scoping',
    'lane and client filter presets',
    'delayed shipment badges',
    'document attachment list',
    'notes and comment threads',
  ];

  const summitTopics = [
    'advisor client list dashboard',
    'AUM summary cards',
    'report publish wizard',
    'client read-only portfolio view',
    'document vault uploads',
    'PDF statement viewer',
    'compliance audit export',
    'tax document season workflow',
    'MFA login challenge UI',
    'signed download URLs',
  ];

  const testTopics = [
    'Jest unit tests for selectors',
    'React Testing Library form flows',
    'mocking React Query in tests',
    'permissionMap regression tests',
    'ProtectedRoute navigation tests',
    'Storybook interaction tests',
    'CI running tests on pull requests',
    'snapshot testing for ui-core',
  ];

  const a11yTopics = [
    'keyboard navigation in DataTable',
    'ARIA labels on form fields',
    'focus management in modals',
    'color contrast for status badges',
    'screen reader announcements for toasts',
    'skip links on dashboard pages',
    'responsive layouts for tablets',
  ];

  const iqBehaviorTopics = [
    'onboarding as a frontend consultant',
    'gathering requirements from enterprise stakeholders',
    'demo cadence with non-technical clients',
    'handoff documentation between engagements',
    'estimating UI work for fixed-bid contracts',
    'code review standards across contractors',
    'resolving ninety percent of bugs within one day',
    'thirty percent faster delivery via ui-core reuse',
    'balancing three concurrent client codebases',
    'communicating tradeoffs to project managers',
  ];

  const ecoArchTopics = [
    'Kotlin/JS and React integration boundaries',
    'KPI dashboard module structure',
    'shared API client layer',
    'routing between Kotlin and React views',
    'build pipeline for mixed frontend',
    'environment configuration per stage',
    'feature flags for enterprise tenants',
    'module federation considerations',
    'state sharing across runtimes',
    'local development workflow',
  ];

  const ecoDataTopics = [
    'monthly KPI datapoint ingestion',
    'client-side validation rules',
    'schema validation for uploads',
    'data quality dashboards',
    'anomaly highlighting in charts',
    'unit normalization for energy metrics',
    'historical trend comparisons',
    'export formats for analysts',
    'row-level client scoping',
    'bulk import error reporting',
  ];

  const ecoJasperTopics = [
    'JasperReports template design',
    'GRI compliance section mapping',
    'parameterized report generation',
    'scheduling quarterly report jobs',
    'PDF output validation',
    'Kotlin report service integration',
    'twenty hour cycle time savings',
    'versioning report templates',
    'staging reports before client delivery',
    'error handling for failed renders',
  ];

  const ecoEltTopics = [
    'ELT pipeline test harness',
    'fixture data for regression suites',
    'ninety-nine point eight percent uptime goal',
    'forty percent error reduction metrics',
    'idempotent load steps',
    'data reconciliation reports',
    'alerting on failed batches',
    'rollback procedures for bad loads',
    'monitoring dashboard for ops',
    'CI gates before production promotion',
  ];

  const ecoCollabTopics = [
    'API contract reviews with backend',
    'Kotlin service integration testing',
    'pull request checklist',
    'sprint planning with product',
    'bug bash sessions before releases',
    'shared Slack triage rotation',
    'documentation in Confluence',
    'pairing on complex KPI calculations',
  ];

  const ecoDesignTopics = [
    'Figma component library alignment',
    'Draw.io ELT workflow diagrams',
    'design critique sessions',
    'handoff annotations for engineers',
    'responsive breakpoint decisions',
    'reducing rework from mockups',
    'accessibility review with design',
  ];

  const ecoPerfTopics = [
    'bundle size monitoring',
    'lazy loading chart modules',
    'database query optimization handoffs',
    'caching frequently accessed KPIs',
    'load testing before peak reporting',
    'incident response for outages',
    'postmortems after data incidents',
  ];

  const ecoDomainTopics = [
    'energy KPI definitions for clients',
    'Ecosave Watch portal features',
    'sustainability reporting timelines',
    'enterprise client onboarding',
    'utility benchmark comparisons',
    'carbon reduction storytelling in UI',
    'regional compliance display rules',
  ];

  const ecoBehaviorTopics = [
    'learning Kotlin/JS on the job',
    'collaborating with Richard Ulysse on features',
    'supporting teammates per Ecosave testimonials',
    'proactive initiative on data validation',
    'helping colleagues during crunch periods',
    'presenting ELT improvements to leadership',
    'translating business rules into code',
    'mentoring interns on React patterns',
  ];

  const iqtechFiles: Array<[string, QAEntry[]]> = [
    ['react-fundamentals.json', reactFundamentalsBank],
    [
      'redux.json',
      generateIqtechCategory('iqtech-redux', 'Redux', 'shared', null, reduxTopics, ['Redux Toolkit'], 35),
    ],
    [
      'react-query.json',
      generateIqtechCategory(
        'iqtech-rq',
        'React Query',
        'shared',
        null,
        rqTopics,
        ['React Query', 'Redux'],
        35,
      ),
    ],
    [
      'typescript.json',
      generateIqtechCategory('iqtech-ts', 'TypeScript', 'shared', null, tsTopics, ['TypeScript', 'React'], 25),
    ],
    [
      'component-library.json',
      generateIqtechCategory(
        'iqtech-lib',
        'Component Library',
        'shared',
        null,
        libTopics,
        ['Storybook', 'React'],
        30,
      ),
    ],
    [
      'auth-rbac.json',
      generateIqtechCategory('iqtech-auth', 'Auth & RBAC', 'shared', null, authTopics, ['JWT', 'Redux'], 40),
    ],
    [
      'client-meridian.json',
      generateIqtechCategory(
        'iqtech-meridian',
        'Meridian Health Partners',
        'meridian',
        MERIDIAN,
        meridianTopics,
        ['React', 'Redux'],
        25,
      ),
    ],
    [
      'client-atlas.json',
      generateIqtechCategory(
        'iqtech-atlas',
        'Atlas Freight Logistics',
        'atlas',
        ATLAS,
        atlasTopics,
        ['React Query', 'Redux'],
        25,
      ),
    ],
    [
      'client-summit.json',
      generateIqtechCategory(
        'iqtech-summit',
        'Summit Capital Advisors',
        'summit',
        SUMMIT,
        summitTopics,
        ['JWT', 'React Query'],
        25,
      ),
    ],
    [
      'testing.json',
      generateIqtechCategory('iqtech-test', 'Testing', 'shared', null, testTopics, ['Jest', 'RTL'], 20),
    ],
    [
      'a11y.json',
      generateIqtechCategory('iqtech-a11y', 'Accessibility', 'shared', null, a11yTopics, ['React', 'ARIA'], 15),
    ],
    [
      'behavioral.json',
      generateIqtechCategory(
        'iqtech-beh',
        'Behavioral',
        'shared',
        null,
        iqBehaviorTopics,
        ['consulting', 'delivery'],
        25,
      ),
    ],
  ];

  const ecosaveFiles: Array<[string, QAEntry[]]> = [
    [
      'architecture.json',
      generateEcosaveCategory('ecosave-arch', 'Portal Architecture', ecoArchTopics, 'Kotlin/JS and React', 30),
    ],
    [
      'data-kpis.json',
      generateEcosaveCategory(
        'ecosave-data',
        'Data & KPIs',
        ecoDataTopics,
        'validation logic and KPI modules',
        25,
        'Managing five thousand plus monthly datapoints required strict validation at the UI and pipeline layers.',
      ),
    ],
    [
      'jasper-gri.json',
      generateEcosaveCategory(
        'ecosave-jasper',
        'JasperReports & GRI',
        ecoJasperTopics,
        'JasperReports and Kotlin services',
        25,
        'Report automation saved roughly twenty hours of manual work each reporting cycle.',
      ),
    ],
    [
      'elt-etl.json',
      generateEcosaveCategory(
        'ecosave-elt',
        'ELT/ETL Pipeline',
        ecoEltTopics,
        'ELT/ETL testing pipelines',
        30,
        'Pipeline hardening raised uptime to ninety-nine point eight percent and cut data errors about forty percent.',
      ),
    ],
    [
      'collaboration.json',
      generateEcosaveCategory(
        'ecosave-collab',
        'Full-Stack Collaboration',
        ecoCollabTopics,
        'cross-functional delivery practices',
        20,
      ),
    ],
    [
      'design-handoff.json',
      generateEcosaveCategory(
        'ecosave-design',
        'Design Handoff',
        ecoDesignTopics,
        'Figma and Draw.io workflows',
        15,
      ),
    ],
    [
      'performance.json',
      generateEcosaveCategory(
        'ecosave-perf',
        'Performance & Reliability',
        ecoPerfTopics,
        'monitoring and performance tuning',
        15,
      ),
    ],
    [
      'domain.json',
      generateEcosaveCategory(
        'ecosave-domain',
        'Sustainability Domain',
        ecoDomainTopics,
        'Ecosave Watch and sustainability KPIs',
        15,
      ),
    ],
    [
      'behavioral.json',
      generateEcosaveCategory(
        'ecosave-beh',
        'Behavioral',
        ecoBehaviorTopics,
        'teamwork and continuous learning',
        25,
      ),
    ],
  ];

  console.log('IQTech:');
  for (const [file, data] of iqtechFiles) {
    await writeJson('iqtech', file, data);
  }

  console.log('\nEcosave:');
  for (const [file, data] of ecosaveFiles) {
    await writeJson('ecosave', file, data);
  }

  const total = [...iqtechFiles, ...ecosaveFiles].reduce((n, [, d]) => n + d.length, 0);
  console.log(`\nTotal: ${total} Q&As`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

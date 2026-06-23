const IQTECH_PERIOD = 'Jan 2021 – Oct 2022';
const ECOSAVE_PERIOD = 'Oct 2022 – Apr 2024';
const UI = '@iqtech/ui-core';

function capitalize(s: string): string {
  const t = s.trim();
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
}

function pick<T>(items: T[], index: number): T {
  return items[index % items.length];
}

const IQTECH_OUTCOMES = [
  'That consistency helped us resolve most production UI defects within one business day.',
  'Contractors onboarding mid-engagement could ship features faster because patterns were already documented.',
  'Client demos stayed on schedule because we were not reinventing primitives for every portal.',
  'Code review stayed focused on business logic instead of debating one-off UI implementations.',
  'The approach contributed to roughly thirty percent faster delivery on later IQTech clients.',
];

const ECOSAVE_OUTCOMES = [
  'These changes supported ninety-nine point eight percent uptime across reporting seasons.',
  'Data-related production errors dropped roughly forty percent after the pipeline hardening work.',
  'Stakeholders saved an estimated twenty hours per cycle once GRI reports were automated.',
  'Design handoffs went smoother because engineers and designers referenced the same workflow diagrams.',
  'Enterprise clients could trust KPI dashboards because validation caught bad uploads before they propagated.',
];

type AngleIdx = number;

function iqtechAngleOpener(topic: string, angle: AngleIdx, where: string): string {
  const subject = capitalize(topic);
  const openers: Record<number, string> = {
    0: `We implemented ${topic}${where} by extending patterns already proven in ${UI}.`,
    1: `${subject} mattered${where} because enterprise users expected predictable, permission-aware UX every session.`,
    2: `The main tradeoff around ${topic}${where} was speed of delivery versus long-term maintainability across three client codebases.`,
    3: `In a senior interview I would describe ${topic}${where} as the glue between shared UI standards and client-specific workflows.`,
    4: `Production issues involving ${topic}${where} usually surfaced as stale UI state, missing loading feedback, or RBAC gaps — not raw React bugs.`,
    5: `We tested ${topic}${where} with Jest, React Testing Library, and targeted Storybook stories before merging to client release branches.`,
    6: `If I rebuilt ${topic}${where} today I would keep the ${UI} contract but lean harder on React Query for server state boundaries.`,
    7: `${subject}${where} had to cooperate with Redux for session/auth data and React Query for anything fetched over REST.`,
    8: `Junior developers learned from ${topic}${where} that IQTech favored explicit data flow over clever abstractions.`,
    9: `Stakeholders cared about ${topic}${where} because it directly affected demo reliability and how quickly we could add new roles.`,
  };
  return openers[angle % 10] ?? openers[0];
}

function iqtechAngleDetail(topic: string, angle: AngleIdx, stack: string[], extra?: string): string {
  if (extra) return extra;
  const stackLine = stack.length
    ? `The implementation leaned on ${stack.join(', ')} with TypeScript types shared across repos.`
    : `We kept the implementation boring-on-purpose so contractors could grep for examples in ${UI}.`;
  const details: Record<number, string> = {
    0: `${stackLine} Feature teams copied the reference implementation instead of inventing local variants.`,
    1: `Meridian Health, Atlas Freight, and Summit Capital all exercised ${topic} under different role matrices, which stress-tested the design early.`,
    2: `We rejected shortcuts that would have duplicated markup in client repos — the shared library was the default path.`,
    3: `I walked interviewers through one concrete flow: auth gating, data fetch, empty state, and error recovery.`,
    4: `When something broke, we traced whether the bug lived in shared primitives, client feature code, or the API contract.`,
    5: `Regression tests covered happy paths plus permission-denied and token-expiry scenarios.`,
    6: `The core lesson was to isolate client branding while keeping behavioral contracts identical.`,
    7: `Redux held durable session fields; React Query owned fetched lists and detail views tied to ${topic}.`,
    8: `We paired on the trickiest cases during code review so knowledge transferred before contractors rolled off.`,
    9: `Project managers tracked fewer UI surprises once ${topic} behavior matched the Storybook documentation.`,
  };
  return details[angle % 10] ?? details[0];
}

export function buildIqtechAnswer(
  topic: string,
  angle: AngleIdx,
  index: number,
  clientLabel: string | null,
  stack: string[],
  extra?: string,
): string[] {
  const where = clientLabel ? ` on the ${clientLabel} engagement` : ' across IQTech client projects';
  const sentences = [
    iqtechAngleOpener(topic, angle, where),
    iqtechAngleDetail(topic, angle, stack, extra),
    `Shared ${UI} components meant ${topic} looked different per client theme but behaved the same under RBAC checks.`,
    pick(IQTECH_OUTCOMES, index + angle),
  ];
  if ((topic.length + angle + index) % 3 === 0) {
    sentences.splice(2, 0, `Protected routes and JWT refresh handling ensured ${topic} never leaked data across tenant boundaries.`);
  }
  return sentences.slice(0, 4 + ((index + angle) % 3));
}

function ecosaveAngleOpener(topic: string, angle: AngleIdx): string {
  const subject = capitalize(topic);
  const openers: Record<number, string> = {
    0: `We implemented ${topic} on the Ecosave sustainability portal using Kotlin/JS and React where each layer fit best.`,
    1: `${subject} mattered because enterprise clients tracked thousands of energy KPIs and expected audit-ready accuracy.`,
    2: `The tradeoff on ${topic} was shipping quickly for quarterly reporting versus hardening ELT coverage for peak load.`,
    3: `I explain ${topic} in interviews as the bridge between Figma-approved UX and data pipelines ops could trust.`,
    4: `Production pain around ${topic} usually meant bad uploads, failed Jasper renders, or KPI definitions drifting from finance expectations.`,
    5: `We tested ${topic} with pipeline fixtures, UI validation suites, and staged report previews before client delivery.`,
    6: `Rebuilding ${topic} today I would keep the same domain model but expand automated reconciliation earlier in ELT.`,
    7: `${subject} sat between React dashboards, Kotlin services, and JasperReports jobs — changes required coordinated releases.`,
    8: `New team members learned ${topic} by pairing on Draw.io workflow reviews and reading the KPI definition docs.`,
    9: `Leadership tracked ${topic} because it influenced uptime SLAs and manual hours spent each reporting cycle.`,
  };
  return openers[angle % 10] ?? openers[0];
}

function ecosaveAngleDetail(topic: string, angle: AngleIdx, area: string, metric?: string): string {
  if (metric && angle % 4 === 0) return metric;
  const details: Record<number, string> = {
    0: `Engineering applied ${area} with explicit API contracts so frontend and Kotlin services could evolve independently.`,
    1: `More than five thousand monthly datapoints flowed through validation rules tied to ${topic}.`,
    2: `We documented failure modes and rollback steps so ops could recover without redeploying the entire portal.`,
    3: `Interview stories focused on one end-to-end path: upload, validate, persist, visualize, and export.`,
    4: `Alerts and dashboards made ${topic} failures visible before clients opened quarterly PDF packs.`,
    5: `Fixture data let us reproduce edge cases — unit mismatches, partial uploads, stale benchmarks — in CI.`,
    6: `The domain model stayed stable even when we swapped chart libraries or report templates.`,
    7: `React views called Kotlin-backed endpoints; Jasper jobs consumed the same normalized tables as the KPI UI.`,
    8: `Richard Ulysse and I whiteboarded ${topic} flows before touching production schemas.`,
    9: `Product could commit dates to enterprise clients because ${topic} had measurable SLAs attached.`,
  };
  return details[angle % 10] ?? details[0];
}

export function buildEcosaveAnswer(
  topic: string,
  angle: AngleIdx,
  index: number,
  area: string,
  metric?: string,
): string[] {
  const sentences = [
    `At Ecosave (${ECOSAVE_PERIOD}) I worked full stack on the sustainability portal combining Kotlin/JS and React.`,
    ecosaveAngleOpener(topic, angle),
    ecosaveAngleDetail(topic, angle, area, metric),
    `Figma mockups and Draw.io ELT diagrams kept design and engineering aligned on ${topic}.`,
    pick(ECOSAVE_OUTCOMES, index + angle),
  ];
  if ((index + angle) % 2 === 0) {
    sentences.splice(3, 0, `Automating GRI-compliant JasperReports removed repetitive manual steps from each reporting cycle.`);
  }
  return sentences.slice(0, 4 + ((index + angle) % 3));
}

export { IQTECH_PERIOD, ECOSAVE_PERIOD, UI };

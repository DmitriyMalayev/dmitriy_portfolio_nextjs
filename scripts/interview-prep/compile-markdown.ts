import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { CATEGORY_INTROS } from './lib/category-intros';
import { loadAllQA, loadMetadata } from './lib/load-qa';
import type { QAEntry } from './lib/types';

const OUT_DIR = path.join(__dirname, 'output');

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function groupByCompanyAndCategory(entries: QAEntry[]): Map<string, QAEntry[]> {
  const map = new Map<string, QAEntry[]>();
  for (const e of entries) {
    const key = `${e.company}::${e.category}`;
    const list = map.get(key) ?? [];
    list.push(e);
    map.set(key, list);
  }
  return map;
}

function formatSection(
  title: string,
  company: 'iqtech' | 'ecosave',
  entries: QAEntry[],
  startNum: number,
): { md: string; next: number } {
  const slug = slugify(title);
  const intro = CATEGORY_INTROS[title];
  const companyClass = company === 'iqtech' ? 'iqtech' : 'ecosave';

  let md = `\n<div class="page-break"></div>\n\n`;
  md += `<section class="category-section ${companyClass}" id="${slug}">\n\n`;
  md += `# ${title}\n\n`;
  if (intro) {
    md += `<p class="category-intro">${intro}</p>\n\n`;
  }

  let n = startNum;
  for (const e of entries) {
    md += `<div class="qa-block">\n\n`;
    md += `<p class="question"><span class="q-label">Q${n}</span> ${e.question}</p>\n\n`;
    md += `<p class="answer">${e.answer}</p>\n\n`;
    md += `</div>\n\n`;
    n++;
  }

  md += `</section>\n`;
  return { md, next: n };
}

async function main(): Promise<void> {
  const [meta, entries] = await Promise.all([loadMetadata(), loadAllQA()]);
  const grouped = groupByCompanyAndCategory(entries);
  const iqtechCount = entries.filter((e) => e.company === 'iqtech').length;
  const ecosaveCount = entries.filter((e) => e.company === 'ecosave').length;
  const generated = new Date().toISOString().slice(0, 10);

  let body = '';
  let qNum = 1;

  const iqtechOrder = [
    'React Fundamentals',
    'Redux',
    'React Query',
    'TypeScript',
    'Component Library',
    'Auth & RBAC',
    'Meridian Health Partners',
    'Atlas Freight Logistics',
    'Summit Capital Advisors',
    'Testing',
    'Accessibility',
    'Behavioral',
  ];

  const ecosaveOrder = [
    'Portal Architecture',
    'Data & KPIs',
    'JasperReports & GRI',
    'ELT/ETL Pipeline',
    'Full-Stack Collaboration',
    'Design Handoff',
    'Performance & Reliability',
    'Sustainability Domain',
    'Behavioral',
  ];

  body += `<div class="cover">\n\n`;
  body += `# ${meta.title}\n\n`;
  body += `<p class="cover-subtitle">${meta.subtitle}</p>\n\n`;
  body += `<p class="cover-author">${meta.author}</p>\n\n`;
  body += `<div class="cover-stats">\n\n`;
  body += `- **IQTech** (${meta.iqtechPeriod}) — ${iqtechCount} questions\n`;
  body += `- **Ecosave** (${meta.ecosavePeriod}) — ${ecosaveCount} questions\n`;
  body += `- **Total** — ${entries.length} interview Q&amp;As\n\n`;
  body += `</div>\n\n`;
  body += `<p class="cover-meta">Generated ${generated} · Version ${meta.version}</p>\n\n`;
  body += `<p class="cover-hint">Each answer is 4–6 sentences, grounded in real project experience.</p>\n\n`;
  body += `</div>\n\n`;

  body += `<div class="page-break"></div>\n\n`;
  body += `## Table of Contents\n\n`;
  body += `### IQTech\n\n`;
  for (const cat of iqtechOrder) {
    const key = `iqtech::${cat}`;
    const count = grouped.get(key)?.length ?? 0;
    if (count > 0) body += `- [${cat}](#${slugify(cat)}) (${count})\n`;
  }
  body += `\n### Ecosave\n\n`;
  for (const cat of ecosaveOrder) {
    const key = `ecosave::${cat}`;
    const count = grouped.get(key)?.length ?? 0;
    if (count > 0) body += `- [${cat}](#${slugify(cat)}) (${count})\n`;
  }

  body += `\n<div class="page-break"></div>\n\n`;
  body += `<div class="company-divider iqtech">\n\n`;
  body += `# IQTech Consultant, LLC\n\n`;
  body += `*ReactJS Developer / Frontend Consultant · ${meta.iqtechPeriod}*\n\n`;
  body += `<p class="company-blurb">Enterprise React portals for Meridian Health Partners, Atlas Freight Logistics, and Summit Capital Advisors — with a shared @iqtech/ui-core component library.</p>\n\n`;
  body += `</div>\n`;

  for (const cat of iqtechOrder) {
    const key = `iqtech::${cat}`;
    const list = grouped.get(key);
    if (!list?.length) continue;
    const { md, next } = formatSection(cat, 'iqtech', list, qNum);
    body += md;
    qNum = next;
  }

  body += `\n<div class="page-break"></div>\n\n`;
  body += `<div class="company-divider ecosave">\n\n`;
  body += `# Ecosave\n\n`;
  body += `*Full Stack Software Engineer · ${meta.ecosavePeriod}*\n\n`;
  body += `<p class="company-blurb">Sustainability portal combining Kotlin/JS and React — KPI dashboards, ELT pipelines, and GRI-compliant JasperReports for enterprise clients.</p>\n\n`;
  body += `</div>\n`;

  for (const cat of ecosaveOrder) {
    const key = `ecosave::${cat}`;
    const list = grouped.get(key);
    if (!list?.length) continue;
    const { md, next } = formatSection(cat, 'ecosave', list, qNum);
    body += md;
    qNum = next;
  }

  await writeFile(path.join(OUT_DIR, 'interview-prep.md'), body, 'utf-8');
  console.log(`Wrote ${path.join(OUT_DIR, 'interview-prep.md')} (${entries.length} Q&As, numbered Q1–Q${qNum - 1})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

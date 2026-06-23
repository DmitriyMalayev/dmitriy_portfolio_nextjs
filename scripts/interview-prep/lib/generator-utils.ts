import type { IqtechClient, QAEntry } from './types';
import { assertSentenceCount } from './sentences';

export function buildAnswer(...sentences: string[]): string {
  const answer = sentences.join(' ');
  assertSentenceCount(answer);
  return answer;
}

export function makeEntry(
  id: string,
  company: 'iqtech' | 'ecosave',
  category: string,
  client: IqtechClient,
  question: string,
  ...sentences: string[]
): QAEntry {
  const answer = buildAnswer(...sentences);
  return { id, company, category, client, question, answer };
}

export function padId(prefix: string, n: number): string {
  return `${prefix}-${String(n).padStart(3, '0')}`;
}

/** Map a hand-written Q&A bank to entries without padding duplicates. */
export function bankToEntries(
  prefix: string,
  company: 'iqtech' | 'ecosave',
  category: string,
  client: IqtechClient,
  bank: Array<{ q: string; s: string[] }>,
): QAEntry[] {
  return bank.map((item, i) =>
    makeEntry(padId(prefix, i + 1), company, category, client, item.q, ...item.s),
  );
}

/** Rotate through topic banks to produce `count` unique entries. */
export function expandBank(
  prefix: string,
  company: 'iqtech' | 'ecosave',
  category: string,
  client: IqtechClient,
  bank: Array<{ q: string; s: string[] }>,
  count: number,
  variantAngles?: Array<(base: string, n: number) => string>,
): QAEntry[] {
  const angles =
    variantAngles ??
    ([
      (base, _n) => `${base.replace(/\?$/, '')} — scenario ${_n}?`,
      (base) => `Describe a real-world example related to: ${base.replace(/\?$/, '').toLowerCase()}?`,
      (base) => `What would you do differently today regarding: ${base.replace(/\?$/, '').toLowerCase()}?`,
      (base, n) => `How did this scale across multiple clients (part ${n})? ${base.replace(/\?$/, '')}?`,
    ] as Array<(base: string, n: number) => string>);

  const out: QAEntry[] = [];
  for (let i = 0; i < count; i++) {
    const item = bank[i % bank.length];
    const cycle = Math.floor(i / bank.length);
    const q =
      cycle === 0
        ? item.q
        : angles[(cycle - 1) % angles.length](item.q, i + 1);
    out.push(makeEntry(padId(prefix, i + 1), company, category, client, q, ...item.s));
  }
  return out;
}

import { loadAllQA } from './lib/load-qa';
import { countSentences } from './lib/sentences';

const MIN_SENTENCES = 4;
const MAX_SENTENCES = 6;
const MIN_TOTAL = 500;

async function main(): Promise<void> {
  const entries = await loadAllQA();
  const errors: string[] = [];
  const ids = new Set<string>();
  const questions = new Set<string>();

  let iqtech = 0;
  let ecosave = 0;

  for (const entry of entries) {
    if (ids.has(entry.id)) {
      errors.push(`Duplicate id: ${entry.id}`);
    }
    ids.add(entry.id);

    const qNorm = entry.question.trim().toLowerCase();
    if (questions.has(qNorm)) {
      errors.push(`Duplicate question: ${entry.id}`);
    }
    questions.add(qNorm);

    const sc = countSentences(entry.answer);
    if (sc < MIN_SENTENCES || sc > MAX_SENTENCES) {
      errors.push(`${entry.id}: ${sc} sentences (need ${MIN_SENTENCES}-${MAX_SENTENCES})`);
    }

    if (entry.company === 'iqtech') iqtech++;
    else ecosave++;
  }

  if (entries.length < MIN_TOTAL) {
    errors.push(`Total ${entries.length} < ${MIN_TOTAL} required`);
  }

  console.log(`\nValidation summary`);
  console.log(`  Total:   ${entries.length}`);
  console.log(`  IQTech:  ${iqtech}`);
  console.log(`  Ecosave: ${ecosave}`);

  if (errors.length > 0) {
    console.error(`\n${errors.length} error(s):`);
    errors.slice(0, 30).forEach((e) => console.error(`  - ${e}`));
    if (errors.length > 30) console.error(`  ... and ${errors.length - 30} more`);
    process.exit(1);
  }

  console.log('\nAll checks passed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

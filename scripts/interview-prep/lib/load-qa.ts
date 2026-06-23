import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Metadata, QAEntry } from './types';

const DATA_DIR = path.join(__dirname, '..', 'data');

export async function loadMetadata(): Promise<Metadata> {
  const raw = await readFile(path.join(DATA_DIR, 'metadata.json'), 'utf-8');
  return JSON.parse(raw) as Metadata;
}

async function loadJsonDir(subdir: string): Promise<QAEntry[]> {
  const dir = path.join(DATA_DIR, subdir);
  let files: string[];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  } catch {
    return [];
  }

  const entries: QAEntry[] = [];
  for (const file of files.sort()) {
    const raw = await readFile(path.join(dir, file), 'utf-8');
    const parsed = JSON.parse(raw) as QAEntry[];
    entries.push(...parsed);
  }
  return entries;
}

export async function loadAllQA(): Promise<QAEntry[]> {
  const [iqtech, ecosave] = await Promise.all([
    loadJsonDir('iqtech'),
    loadJsonDir('ecosave'),
  ]);
  return [...iqtech, ...ecosave];
}

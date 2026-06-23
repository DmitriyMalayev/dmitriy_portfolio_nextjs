/** Count sentences in text (4–6 required for interview prep answers). */
export function countSentences(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;

  // Split on sentence-ending punctuation followed by space or end of string.
  const parts = trimmed
    .replace(/\b(e\.g|i\.e|Mr|Mrs|Ms|Dr|vs|etc)\./gi, '$1\u0000')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.replace(/\u0000/g, '.').trim())
    .filter((s) => s.length > 0);

  return parts.length;
}

export function assertSentenceCount(text: string, min = 4, max = 6): void {
  const count = countSentences(text);
  if (count < min || count > max) {
    throw new Error(
      `Expected ${min}-${max} sentences, got ${count}: "${text.slice(0, 80)}..."`,
    );
  }
}

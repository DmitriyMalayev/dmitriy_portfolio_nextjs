import { execSync } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import mdToPdf from 'md-to-pdf';

const ROOT = path.join(__dirname);
const REPO_ROOT = path.join(__dirname, '..', '..');
const OUT_DIR = path.join(ROOT, 'output');
const OUTPUT_PDF = path.join(OUT_DIR, 'interview-prep-iqtech-ecosave.pdf');

const FOOTER_TEMPLATE = `
<div style="width: 100%; font-size: 8px; font-family: Helvetica, Arial, sans-serif; color: #888; padding: 0 0.9in;">
  <div style="display: flex; justify-content: space-between; width: 100%;">
    <span>Interview Prep — IQTech &amp; Ecosave</span>
    <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>
</div>
`.trim();

async function main(): Promise<void> {
  await mkdir(OUT_DIR, { recursive: true });

  execSync('npx tsx scripts/interview-prep/compile-markdown.ts', {
    cwd: REPO_ROOT,
    stdio: 'inherit',
  });

  const mdPath = path.join(OUT_DIR, 'interview-prep.md');
  const cssPath = path.join(ROOT, 'templates', 'pdf.css');

  console.log('Generating PDF (this may take a minute)...');

  await mdToPdf(
    { path: mdPath },
    {
      dest: OUTPUT_PDF,
      css: cssPath,
      pdf_options: {
        format: 'Letter',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div></div>',
        footerTemplate: FOOTER_TEMPLATE,
        margin: { top: '0.75in', right: '0.85in', bottom: '1in', left: '0.85in' },
      },
    },
  );

  console.log(`\nPDF written to ${OUTPUT_PDF}`);
  console.log('(Local only — not served from public/)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

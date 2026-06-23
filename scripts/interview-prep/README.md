# Interview Prep Q&A PDF

Generates a 500+ question interview prep PDF for **IQTech** (~300) and **Ecosave** (~200) roles.

## Commands

```bash
# 1. Generate JSON source files (500+ Q&As)
npm run interview-prep:generate

# 2. Validate sentence counts (4–6) and totals
npm run interview-prep:validate

# 3. Compile markdown and build PDF
npm run interview-prep:pdf
```

Output: `scripts/interview-prep/output/interview-prep-iqtech-ecosave.pdf` (local only, not deployed)

## Structure

- `data/iqtech/*.json` — IQTech Q&A by category
- `data/ecosave/*.json` — Ecosave Q&A by category
- `lib/content/` — hand-written banks + programmatic generators
- `output/interview-prep.md` and `output/interview-prep-iqtech-ecosave.pdf` — local outputs (gitignored)

## IQTech fictional clients

- **Meridian Health Partners** — intake/scheduling portal
- **Atlas Freight Logistics** — operations dashboard
- **Summit Capital Advisors** — secure client reporting portal

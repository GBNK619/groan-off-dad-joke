// The One-Liner Groan-Off — make.fun one-liner entry
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I named my dog Five Miles so I can tell everyone I walk Five Miles every day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
const expected = LINE + "\n";
writeFileSync(outPath, expected, "utf8");

// Read-back validation: the file on disk must equal the line exactly.
const written = readFileSync(outPath, "utf8");
if (written !== expected) {
  console.error(
    `Validation failed: entry.txt content does not match the entry line.\n` +
      `  expected: ${JSON.stringify(expected)}\n` +
      `  actual:   ${JSON.stringify(written)}`,
  );
  process.exit(1);
}

console.log(`Wrote entry to ${outPath} (validated, ${written.length} chars)`);

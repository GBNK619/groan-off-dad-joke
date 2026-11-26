// The One-Liner Groan-Off — make.fun one-liner entry
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I named my dog Five Miles so I can tell everyone I walk Five Miles every day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

console.log(`Wrote entry to ${outPath}`);

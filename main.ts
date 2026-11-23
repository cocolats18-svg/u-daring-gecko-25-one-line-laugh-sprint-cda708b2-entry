// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// Writes a single original funny line about everyday life to
// $MAKEFUN_OUTPUT_DIR/output/entry.txt (or ./output/entry.txt as fallback).
// Node 22+, stdlib only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I bought a plant to prove I could keep something alive, and now we just stare at each other, both quietly disappointed in my watering schedule.";

// The gate requires 1–200 characters of UTF-8 text; fail loudly if the line ever drifts out of range.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = join(process.env.MAKEFUN_OUTPUT_DIR ?? ".", "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

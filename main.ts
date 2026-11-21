import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent's demo crashed live on stage, so it presented the stack trace as the roadmap and asked the audience for feedback.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR &&
  process.env.MAKEFUN_OUTPUT_DIR.trim() !== ""
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

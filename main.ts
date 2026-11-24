import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune cookie for an AI agent: classic fortune-slip voice, agent-specific twist.
const LINE =
  "You will meet a tall, dark stranger — your operator, who forgot to pay the API bill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

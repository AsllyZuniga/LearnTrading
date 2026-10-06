import { copyFileSync, existsSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const basePath = process.env.BASE_PATH ?? "/";
const segment = basePath.replace(/^\/+|\/+$/g, "");
const outDir = path.resolve("build/client");
const baseDir = path.join(outDir, segment);

if (segment && existsSync(baseDir)) {
  for (const entry of readdirSync(baseDir)) {
    renameSync(path.join(baseDir, entry), path.join(outDir, entry));
  }
  rmSync(baseDir, { recursive: true, force: true });
}

const fallback = path.join(outDir, "__spa-fallback.html");
if (existsSync(fallback)) {
  copyFileSync(fallback, path.join(outDir, "404.html"));
}
writeFileSync(path.join(outDir, ".nojekyll"), "");

console.log(`prepare-pages: salida ajustada en ${outDir}`);

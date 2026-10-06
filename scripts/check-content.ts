import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

type Problem = [file: string, line: number, kind: string, content: string];

const roots = ["src", "app", "scripts"];
const files: string[] = [];

function walk(dir: string) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) walk(full);
    else if (/\.(ts|tsx|css|md|json|html|svg|xml|txt)$/.test(entry)) files.push(full);
  }
}

for (const root of roots) {
  try {
    walk(root);
  } catch {
    /* directorio aún inexistente */
  }
}

const PROBLEMS: Problem[] = [];

/** Chinos, japoneses y coreanos: el texto de este sitio es español. */
const CJK = /[\u3000-\u9fff\uf900-\ufaff\uac00-\ud7af]/;

/** Carácter de sustitución U+FFFD: la codificación ya perdió información. */
const REPLACEMENT = /\ufffd/;

/** Mojibake típico de leer UTF-8 como Latin-1 (letras C1/Latin-1 colgadas). */
const MOJIBAKE = /[\u00c2\u00c3\u00e2](?=[\u0080-\u00bf\u00a0-\u00ff])/;

/**
 * Letras latinas con acentos que no existen en español y aparecieron en las
 * corrupciones pasadas (o-circunflex, e-macron, n con grave).
 */
const STRAY_ACCENT = /[\u01f8-\u01ff\u01e0-\u01ef\u01eb-\u01f7\u0230-\u0233]/;

/**
 * Palabras inglesas de prosa. Se dejan fuera `false`, `true`, `price`,
 * `volume`, `level` o `label` porque aparecen como identificadores legítimos
 * en el código y solo generaban falsos positivos.
 */
const ENGLISH_PROSE = /\b(the|and|with|from|that|this|many|traders|stocks|their|about|which|would|should|because)\b/;

/** Un acento español junto a prosa inglesa apunta a texto mal pegado. */
const HAS_SPANISH = /[ÁÉÍÓÚáéíóúñ¿¡]/;

/**
 * Bytes altos sueltos de un doble mojibake que no se resolvieron
 * (una secuencia Latin-1 repetida dos veces).
 */
const RAW_BYTES = /(?:[\u00c3\u00c2][\u0081\u008d\u008f\u0090\u009d])/;

for (const file of files) {
  const text = readFileSync(file, "utf8");
  text.split("\n").forEach((line, i) => {
    const push = (kind: string) => PROBLEMS.push([file, i + 1, kind, line.trim()]);

    if (CJK.test(line)) return push("cjk");
    if (REPLACEMENT.test(line)) return push("replacement");
    if (MOJIBAKE.test(line)) return push("mojibake");
    if (RAW_BYTES.test(line)) return push("byte");
    if (STRAY_ACCENT.test(line)) return push("acento");
    if (ENGLISH_PROSE.test(line) && HAS_SPANISH.test(line)) return push("en?");
  });
}

if (PROBLEMS.length === 0) {
  console.log("OK: sin texto corrupto en", files.length, "archivos");
} else {
  for (const [file, line, kind, content] of PROBLEMS) {
    console.log(`${relative(process.cwd(), file)}:${line} [${kind}] ${content}`);
  }
  console.log(`\n${PROBLEMS.length} linea(s) sospechosa(s).`);
  process.exitCode = 1;
}

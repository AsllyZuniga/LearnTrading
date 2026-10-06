export interface PathParams {
  start: number;
  steps: number;
  stepPrice: number;
  wick: number;
  jitter: number;
}

export interface PathPoint {
  o: number;
  h: number;
  l: number;
  c: number;
}

/**
 * Genera una serie de precios totalmente determinista (sin aleatoriedad) para
 * poder ilustrar "qué pasa si el precio sube" o "qué pasa si el precio baja"
 * dentro de un ejemplo educativo.
 */
export function buildPath(params: PathParams): PathPoint[] {
  const { start, steps, stepPrice, wick, jitter } = params;
  const points: PathPoint[] = [];
  let price = start;

  for (let i = 0; i < steps; i += 1) {
    const open = price;
    const close = price + stepPrice;
    const wave = Math.sin(((i + 1) / steps) * Math.PI);
    const high = Math.max(open, close) + wick * (0.55 + wave * 0.45) + jitter;
    const low = Math.min(open, close) - wick * (0.55 + (1 - wave) * 0.45) - jitter;
    points.push({ o: open, h: high, l: low, c: close });
    price = close;
  }

  return points;
}

export function pathToCandles(points: PathPoint[], startTime = Date.UTC(2025, 0, 6, 9), barMs = 3_600_000) {
  return points.map((p, i) => ({
    t: startTime + i * barMs,
    o: round(p.o),
    h: round(p.h),
    l: round(p.l),
    c: round(p.c),
    v: 900 + i * 40,
  }));
}

function round(n: number) {
  return Number(n.toFixed(2));
}
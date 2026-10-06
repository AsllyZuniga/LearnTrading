import type { Candle } from "~/types";

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashSeed(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function gaussian(rand: () => number): number {
  const u = Math.max(rand(), 1e-9);
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export interface Segment {
  bars: number;
  drift: number;
  vol?: number;
  upperWick?: number;
  lowerWick?: number;
  volumeBias?: number;
}

export interface CandleRecipe {
  start: number;
  startTime?: number;
  barMs?: number;
  volatility?: number;
  decimals?: number;
  volumeBase?: number;
  segments: Segment[];
}

const HOUR = 3_600_000;

/**
 * Genera velas deterministas a partir de una receta por segmentos.
 * Determinista es esencial: el HTML prerenderizado y la hidratación del
 * cliente deben producir exactamente la misma serie o React warns de mismatch.
 */
export function buildCandles(recipe: CandleRecipe): Candle[] {
  const {
    start,
    startTime = Date.UTC(2025, 0, 6, 9),
    barMs = HOUR,
    volatility = 0.55,
    decimals = 2,
    volumeBase = 1200,
    segments,
  } = recipe;

  const rand = mulberry32(hashSeed(segments.map((s) => `${s.bars}:${s.drift}`).join("|") + start));
  const candles: Candle[] = [];
  let price = start;
  let time = startTime;

  for (const segment of segments) {
    for (let i = 0; i < segment.bars; i += 1) {
      const vol = volatility * (segment.vol ?? 1);
      const body = segment.drift + gaussian(rand) * vol;
      const open = price;
      const close = open + body;

      const upperNoise = Math.max(0, gaussian(rand) * vol * 0.75);
      const lowerNoise = Math.max(0, -gaussian(rand) * vol * 0.75);
      const high = Math.max(open, close) + upperNoise + (segment.upperWick ?? 0) * vol;
      const low = Math.min(open, close) - lowerNoise - (segment.lowerWick ?? 0) * vol;

      const moveStrength = Math.min(3.4, 0.65 + Math.abs(body) / (vol * 2.4));
      const volume = Math.round(
        volumeBase * (0.55 + rand() * 0.9) * moveStrength * (segment.volumeBias ?? 1),
      );

      const round = (n: number) => Number(n.toFixed(decimals));

      candles.push({
        t: time,
        o: round(open),
        h: round(high),
        l: round(low),
        c: round(close),
        v: volume,
      });

      price = close;
      time += barMs;
    }
  }

  return candles;
}

export interface MarkerRecipe {
  index: number;
  price: number;
}

export function closestIndex(candles: Candle[], price: number): number {
  let best = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  candles.forEach((candle, index) => {
    const dist = Math.abs(candle.c - price);
    if (dist < bestDist) {
      bestDist = dist;
      best = index;
    }
  });
  return best;
}

export function atPrice(candles: Candle[], price: number) {
  return closestIndex(candles, price);
}

export function minLow(candles: Candle[]): number {
  return candles.reduce((acc, c) => Math.min(acc, c.l), Number.POSITIVE_INFINITY);
}

export function maxHigh(candles: Candle[]): number {
  return candles.reduce((acc, c) => Math.max(acc, c.h), Number.NEGATIVE_INFINITY);
}

export function lastClose(candles: Candle[]): number {
  return candles[candles.length - 1]?.c ?? 0;
}
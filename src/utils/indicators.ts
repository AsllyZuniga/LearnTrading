import type { Candle } from "~/types";

export function sma(values: number[], period: number): (number | null)[] {
  const out: (number | null)[] = new Array(values.length).fill(null);
  if (period <= 0) return out;
  let sum = 0;
  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
    if (i >= period) sum -= values[i - period];
    if (i >= period - 1) out[i] = sum / period;
  }
  return out;
}

export function ema(values: number[], period: number): (number | null)[] {
  const out: (number | null)[] = new Array(values.length).fill(null);
  if (period <= 0 || values.length < period) return out;
  const k = 2 / (period + 1);
  let prev = values.slice(0, period).reduce((a, b) => a + b, 0) / period;
  out[period - 1] = prev;
  for (let i = period; i < values.length; i += 1) {
    prev = values[i] * k + prev * (1 - k);
    out[i] = prev;
  }
  return out;
}

export function rollingStdDev(values: number[], period: number): (number | null)[] {
  const out: (number | null)[] = new Array(values.length).fill(null);
  const mean = sma(values, period);
  for (let i = 0; i < values.length; i += 1) {
    if (i < period - 1) continue;
    let acc = 0;
    for (let j = i - period + 1; j <= i; j += 1) acc += (values[j] - mean[i]!) ** 2;
    out[i] = Math.sqrt(acc / period);
  }
  return out;
}

export interface RsiPoint {
  index: number;
  value: number;
}

export function rsi(closes: number[], period = 14): RsiPoint[] {
  if (closes.length <= period) return [];
  const out: RsiPoint[] = [];
  let gains = 0;
  let losses = 0;
  for (let i = 1; i <= period; i += 1) {
    const diff = closes[i] - closes[i - 1];
    if (diff >= 0) gains += diff;
    else losses -= diff;
  }
  let avgGain = gains / period;
  let avgLoss = losses / period;
  out.push({ index: period, value: toRsi(avgGain, avgLoss) });

  for (let i = period + 1; i < closes.length; i += 1) {
    const diff = closes[i] - closes[i - 1];
    const gain = diff > 0 ? diff : 0;
    const loss = diff < 0 ? -diff : 0;
    avgGain = (avgGain * (period - 1) + gain) / period;
    avgLoss = (avgLoss * (period - 1) + loss) / period;
    out.push({ index: i, value: toRsi(avgGain, avgLoss) });
  }
  return out;
}

function toRsi(avgGain: number, avgLoss: number): number {
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return Number((100 - 100 / (1 + rs)).toFixed(2));
}

export interface MacdPoint {
  index: number;
  macd: number;
  signal: number;
  histogram: number;
}

export function macd(
  closes: number[],
  fast = 12,
  slow = 26,
  signalPeriod = 9,
): MacdPoint[] {
  const fastLine = ema(closes, fast);
  const slowLine = ema(closes, slow);
  const diff: (number | null)[] = closes.map((_, i) =>
    fastLine[i] != null && slowLine[i] != null ? fastLine[i]! - slowLine[i]! : null,
  );
  const firstIndex = diff.findIndex((v) => v != null);
  if (firstIndex === -1) return [];

  const compact = diff.slice(firstIndex).map((v) => v!);
  const signal = ema(compact, signalPeriod);
  const out: MacdPoint[] = [];
  for (let i = 0; i < signal.length; i += 1) {
    if (signal[i] == null) continue;
    const macdValue = compact[i];
    out.push({
      index: i + firstIndex,
      macd: round(macdValue),
      signal: round(signal[i]!),
      histogram: round(macdValue - signal[i]!),
    });
  }
  return out;
}

export interface BollingerPoint {
  index: number;
  upper: number;
  middle: number;
  lower: number;
}

export function bollinger(closes: number[], period = 20, mult = 2): BollingerPoint[] {
  const middle = sma(closes, period);
  const sd = rollingStdDev(closes, period);
  const out: BollingerPoint[] = [];
  for (let i = 0; i < closes.length; i += 1) {
    if (middle[i] == null || sd[i] == null) continue;
    out.push({
      index: i,
      middle: round(middle[i]!),
      upper: round(middle[i]! + mult * sd[i]!),
      lower: round(middle[i]! - mult * sd[i]!),
    });
  }
  return out;
}

export const FIB_LEVELS = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];

export function fibLevels(swingLow: number, swingHigh: number) {
  const range = swingHigh - swingLow;
  return FIB_LEVELS.map((ratio) => ({
    ratio,
    price: round(swingHigh - range * ratio),
  }));
}

export function closesOf(candles: Candle[]): number[] {
  return candles.map((c) => c.c);
}

export function findSwing(candles: Candle[], lookback: number, mode: "low" | "high"): number {
  const slice = candles.slice(Math.max(0, candles.length - lookback));
  if (slice.length === 0) return 0;
  return mode === "low"
    ? Math.min(...slice.map((c) => c.l))
    : Math.max(...slice.map((c) => c.h));
}

export function round(value: number, decimals = 2): number {
  const f = 10 ** decimals;
  return Math.round(value * f) / f;
}
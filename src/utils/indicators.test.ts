import { describe, expect, it } from "vitest";
import { buildCandles, hashSeed, mulberry32 } from "~/utils/fakeMarket";
import { sma, ema, rsi, macd, bollinger } from "~/utils/indicators";

const recipe = {
  start: 100,
  volatility: 0.4,
  volumeBase: 1000,
  segments: [
    { bars: 10, drift: 0.5, vol: 1 },
    { bars: 8, drift: -0.4, vol: 0.9 },
  ],
};

describe("generador de velas", () => {
  it("produce series deterministas con la misma receta", () => {
    expect(buildCandles(recipe)).toEqual(buildCandles(recipe));
  });

  it("respeta la relación open/high/low/close de cada vela", () => {
    for (const candle of buildCandles(recipe)) {
      expect(candle.h).toBeGreaterThanOrEqual(Math.max(candle.o, candle.c));
      expect(candle.l).toBeLessThanOrEqual(Math.min(candle.o, candle.c));
      expect(candle.v).toBeGreaterThan(0);
    }
  });

  it("el PRNG es reproducible y cambia con la semilla", () => {
    const a = mulberry32(7);
    const b = mulberry32(7);
    expect(a()).toBe(b());

    const first = mulberry32(1)();
    const second = mulberry32(2)();
    expect(first).not.toBe(second);
  });

  it("hashSeed reparte semillas distintas", () => {
    expect(hashSeed("a")).not.toBe(hashSeed("b"));
  });
});

describe("indicadores", () => {
  const closes = Array.from({ length: 120 }, (_, i) => 100 + Math.sin(i / 6) * 8 + i * 0.15);

  it("la SMA devuelve null mientras no hay ventana completa", () => {
    const values = sma(closes, 20);
    expect(values[18]).toBeNull();
    expect(values[19]).not.toBeNull();
  });

  it("la SMA de una serie constante es esa constante", () => {
    const values = sma(new Array(30).fill(50), 10).filter((v): v is number => v !== null);
    expect(values.every((v) => Math.abs(v - 50) < 1e-9)).toBe(true);
  });

  it("la EMA converge hacia la media reciente", () => {
    const values = ema(closes, 20).filter((v): v is number => v !== null);
    expect(values.length).toBe(closes.length - 19);
    expect(Number.isFinite(values[values.length - 1])).toBe(true);
  });

  it("el RSI se mantiene dentro de 0 y 100", () => {
    for (const point of rsi(closes, 14)) {
      expect(point.value).toBeGreaterThanOrEqual(0);
      expect(point.value).toBeLessThanOrEqual(100);
    }
  });

  it("el MACD solo emite puntos donde ya hay señal", () => {
    const result = macd(closes, 12, 26, 9);
    // La EMA de 26 periodos deja 25 huecos y la señal de 9, otros 8.
    expect(result.length).toBe(closes.length - 33);
    expect(result[0].index).toBe(33);
    expect(result.every((p) => Number.isFinite(p.macd) && Number.isFinite(p.signal))).toBe(true);
  });

  it("las bandas de Bollinger envuelven el precio", () => {
    const points = bollinger(closes, 20, 2).filter((p) => p.upper !== null);
    expect(points.length).toBeGreaterThan(0);
    for (const point of points) {
      expect(point.upper!).toBeGreaterThan(point.middle!);
      expect(point.lower!).toBeLessThan(point.middle!);
    }
  });
});
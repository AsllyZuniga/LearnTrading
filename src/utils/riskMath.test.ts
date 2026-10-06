import { describe, expect, it } from "vitest";
import { calculatePosition, DEFAULT_INPUT } from "~/utils/riskMath";

describe("calculatePosition", () => {
  it("mantiene el riesgo en dinero constante al cambiar el stop", () => {
    const estrecho = calculatePosition({ ...DEFAULT_INPUT, stopLoss: 99 });
    const amplio = calculatePosition({ ...DEFAULT_INPUT, stopLoss: 80 });

    expect(estrecho.riskAmount).toBeCloseTo(amplio.riskAmount, 6);
    expect(estrecho.riskAmount).toBeCloseTo(50, 6);
  });

  it("reduce el tamaño de posición cuando el stop está más lejos", () => {
    const cercano = calculatePosition({ ...DEFAULT_INPUT, stopLoss: 99 });
    const lejano = calculatePosition({ ...DEFAULT_INPUT, stopLoss: 80 });

    expect(lejano.positionSizeLabel).toBeLessThan(cercano.positionSizeLabel);
  });

  it("calcula el punto de equilibrio a partir de la relación riesgo/beneficio", () => {
    const unoAUno = calculatePosition({ ...DEFAULT_INPUT, takeProfit: 105 });
    expect(unoAUno.riskRewardRatio).toBeCloseTo(1, 6);
    expect(unoAUno.breakEvenWinRate).toBeCloseTo(50, 6);

    const unoADos = calculatePosition({ ...DEFAULT_INPUT, takeProfit: 110 });
    expect(unoADos.riskRewardRatio).toBeCloseTo(2, 6);
    expect(unoADos.breakEvenWinRate).toBeCloseTo(33.3333, 3);
  });

  it("avisa cuando arriesga más del 2 % por operación", () => {
    const result = calculatePosition({ ...DEFAULT_INPUT, riskPct: 4 });
    expect(result.warnings.some((w) => w.includes("agresivo"))).toBe(true);
  });

  it("rechaza un stop en el lado equivocado de la entrada", () => {
    const result = calculatePosition({ ...DEFAULT_INPUT, stopLoss: 110 });
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it("suma spread y comisión a la pérdida potencial", () => {
    const limpio = calculatePosition({ ...DEFAULT_INPUT, spreadPips: 0, commissionPerLot: 0 });
    const conCostes = calculatePosition({ ...DEFAULT_INPUT, spreadPips: 20, commissionPerLot: 5 });

    expect(conCostes.potentialLoss).toBeGreaterThan(limpio.potentialLoss);
    expect(conCostes.netProfitAfterCosts).toBeLessThan(limpio.netProfitAfterCosts);
  });
});
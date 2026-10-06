export type InstrumentKind = "accion" | "cripto" | "forex" | "metal";

export interface PositionInput {
  capital: number;
  riskPct: number;
  entry: number;
  stopLoss: number;
  takeProfit: number;
  direction: "long" | "short";
  instrument: InstrumentKind;
  leverage?: number;
  /** Tamaño del contrato en unidades de la divisa base ( Forex: 100 000). */
  contractSize?: number;
  /** Valor en la divisa de la cuenta de un pip por lote estándar. */
  pipValuePerStandardLot?: number;
  pipSize?: number;
  spreadPips?: number;
  commissionPerLot?: number;
}

export interface PositionResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  riskAmount: number;
  riskAmountFormatted: number;
  stopDistance: number;
  stopDistancePct: number;
  stopDistancePips: number;
  rewardDistance: number;
  rewardDistancePct: number;
  rewardDistancePips: number;
  riskRewardRatio: number;
  breakEvenWinRate: number;
  potentialLoss: number;
  potentialProfit: number;
  positionSize: number;
  positionSizeLabel: number;
  positionSizeUnit: string;
  marginRequired: number;
  marginWithLeverage: number;
  notionalValue: number;
  lossAfterSpread: number;
  netProfitAfterCosts: number;
  effectiveRiskPct: number;
}

const CONTRACT_DEFAULTS: Record<
  InstrumentKind,
  { contractSize: number; pipSize: number; pipValue: number; unitLabel: string }
> = {
  accion: { contractSize: 1, pipSize: 0.01, pipValue: 0.01, unitLabel: "acciones" },
  cripto: { contractSize: 1, pipSize: 0.01, pipValue: 0.01, unitLabel: "unidades" },
  forex: { contractSize: 100_000, pipSize: 0.0001, pipValue: 10, unitLabel: "lotes" },
  metal: { contractSize: 100, pipSize: 0.01, pipValue: 1, unitLabel: "lotes" },
};

export const INSTRUMENT_LABELS: Record<InstrumentKind, string> = {
  accion: "Acción",
  cripto: "Criptomoneda",
  forex: "Par Forex (USD)",
  metal: "Metal (oro)",
};

export const DEFAULT_INPUT: PositionInput = {
  capital: 5_000,
  riskPct: 1,
  entry: 100,
  stopLoss: 95,
  takeProfit: 110,
  direction: "long",
  instrument: "accion",
  leverage: 1,
  spreadPips: 0,
  commissionPerLot: 0,
};

export function calculatePosition(input: PositionInput): PositionResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const {
    capital,
    riskPct,
    entry,
    stopLoss,
    takeProfit,
    direction,
    instrument,
  } = input;

  const contractSize = input.contractSize ?? CONTRACT_DEFAULTS[instrument].contractSize;
  const pipSize = input.pipSize ?? CONTRACT_DEFAULTS[instrument].pipSize;
  const pipValue = input.pipValuePerStandardLot ?? CONTRACT_DEFAULTS[instrument].pipValue;
  const unitLabel = CONTRACT_DEFAULTS[instrument].unitLabel;
  const leverage = Math.max(1, input.leverage ?? 1);

  if (!Number.isFinite(capital) || capital <= 0) errors.push("El capital debe ser mayor que cero.");
  if (!Number.isFinite(riskPct) || riskPct <= 0) errors.push("El riesgo debe ser mayor que cero.");
  if (!Number.isFinite(entry) || entry <= 0) errors.push("El precio de entrada debe ser mayor que cero.");
  if (riskPct > 100) errors.push("El riesgo no puede superar el 100 % del capital.");
  if (entry === stopLoss) errors.push("El stop loss no puede estar en el mismo precio que la entrada.");
  if (entry === takeProfit) errors.push("El take profit no puede estar en el mismo precio que la entrada.");

  const stopDistance = Math.abs(entry - stopLoss);
  const rewardDistance = Math.abs(takeProfit - entry);

  if (direction === "long" && stopLoss > entry) {
    errors.push("En una operación larga, el stop loss debe estar por debajo de la entrada.");
  }
  if (direction === "short" && stopLoss < entry) {
    errors.push("En una operación corta, el stop loss debe estar por encima de la entrada.");
  }
  if (direction === "long" && takeProfit < entry) {
    errors.push("En una operación larga, el take profit debe estar por encima de la entrada.");
  }
  if (direction === "short" && takeProfit > entry) {
    errors.push("En una operación corta, el take profit debe estar por debajo de la entrada.");
  }

  const riskAmount = capital * (riskPct / 100);
  const riskRewardRatio = stopDistance > 0 ? rewardDistance / stopDistance : 0;
  const breakEvenWinRate = riskRewardRatio > 0 ? 1 / (1 + riskRewardRatio) : 0;

  const positionSize = stopDistance > 0 ? riskAmount / stopDistance : 0;
  const positionSizeFormatted = positionSize / contractSize;
  const notionalValue = positionSize * entry;
  const marginRequired = notionalValue / leverage;
  const marginWithLeverage = marginRequired;

  const stopDistancePips = stopDistance / pipSize;
  const rewardDistancePips = rewardDistance / pipSize;
  const spreadPips = Math.max(0, input.spreadPips ?? 0);
  const commission = Math.max(0, input.commissionPerLot ?? 0) * positionSizeFormatted;
  const spreadCost = spreadPips * pipValue * positionSizeFormatted;

  const potentialLoss = riskAmount + spreadCost + commission;
  const grossProfit = rewardDistance * positionSize;
  const netProfitAfterCosts = grossProfit - spreadCost - commission;

  if (riskPct > 2) {
    warnings.push(
      `Arriesgar ${riskPct.toLocaleString("es-ES")} % en una sola operación es agresivo. El manual de gestión de riesgo suele situarse entre el 0,5 % y el 2 %.`,
    );
  }
  if (riskRewardRatio < 1) {
    warnings.push(
      `Con una relación riesgo/beneficio de ${riskRewardRatio.toFixed(2)} necesitas acertar más del ${(breakEvenWinRate * 100).toFixed(1)} % de las veces solo para no perder dinero.`,
    );
  }
  if (spreadPips >= stopDistancePips * 0.25) {
    warnings.push(
      `El spread representa ${((spreadPips / stopDistancePips) * 100).toFixed(0)} % de la distancia al stop loss: es un coste muy relevante para esta operación.`,
    );
  }
  if (errors.length === 0 && positionSizeFormatted < 0.01) {
    warnings.push(
      "El tamaño de posición calculado es muy pequeño para la mayoría de brokers. Revisa los lotes mínimos.",
    );
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    riskAmount,
    riskAmountFormatted: riskAmount,
    stopDistance: round(stopDistance, 6),
    stopDistancePct: (stopDistance / entry) * 100,
    stopDistancePips: round(stopDistancePips, 2),
    rewardDistance: round(rewardDistance, 6),
    rewardDistancePct: (rewardDistance / entry) * 100,
    rewardDistancePips: round(rewardDistancePips, 2),
    riskRewardRatio: round(riskRewardRatio, 2),
    breakEvenWinRate: breakEvenWinRate * 100,
    potentialLoss: round(potentialLoss),
    potentialProfit: round(netProfitAfterCosts),
    positionSize: round(positionSize, 6),
    positionSizeLabel: round(positionSizeFormatted, 4),
    positionSizeUnit: unitLabel,
    marginRequired: round(marginRequired),
    marginWithLeverage: round(marginWithLeverage),
    notionalValue: round(notionalValue),
    lossAfterSpread: round(spreadCost + commission),
    netProfitAfterCosts: round(netProfitAfterCosts),
    effectiveRiskPct: (potentialLoss / capital) * 100,
  };
}

export function round(value: number, decimals = 2): number {
  const f = 10 ** decimals;
  return Math.round(value * f) / f;
}

export interface SimPreset {
  id: string;
  label: string;
  description: string;
  input: PositionInput;
}

export const SIM_PRESETS: SimPreset[] = [
  {
    id: "basico",
    label: "Ejemplo del Stop Loss",
    description: "Entrada 100, stop 95, objetivo 110. Es el ejemplo clásico de la lección.",
    input: { ...DEFAULT_INPUT },
  },
  {
    id: "scalping",
    label: "Scalping con spread alto",
    description: "Objetivo cercano al precio y costes de spread típicos de operaciones muy cortas.",
    input: {
      ...DEFAULT_INPUT,
      capital: 2_000,
      riskPct: 0.5,
      entry: 1.085,
      stopLoss: 1.0835,
      takeProfit: 1.089,
      instrument: "forex",
      spreadPips: 8,
      commissionPerLot: 3.5,
      leverage: 30,
    },
  },
  {
    id: "sobreapalancado",
    label: "Apalancamiento excesivo",
    description: "El riesgo por operación se dispara: sirve para ver por qué el apalancamiento no es el problema, el tamaño de posición sí.",
    input: {
      ...DEFAULT_INPUT,
      capital: 1_000,
      riskPct: 25,
      entry: 100,
      stopLoss: 98,
      takeProfit: 110,
      instrument: "accion",
      leverage: 20,
    },
  },
  {
    id: "conservador",
    label: "Control de 1 %",
    description: "Riesgo del 1 %, relación 1:3 y apalancamiento bajo. El perfil de riesgo que suelen recomendar los manuales.",
    input: {
      ...DEFAULT_INPUT,
      capital: 10_000,
      riskPct: 1,
      entry: 64_500,
      stopLoss: 63_180,
      takeProfit: 68_460,
      instrument: "accion",
      leverage: 3,
    },
  },
];
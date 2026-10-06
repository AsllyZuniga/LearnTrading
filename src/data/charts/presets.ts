import type {
  BollingerChartSpec,
  CandlesChartSpec,
  ChartSpec,
  MacdChartSpec,
  PriceLevel,
  RiskRewardChartSpec,
  RsiChartSpec,
} from "../../types";
import { buildCandles, closestIndex, hashSeed } from "../../utils/fakeMarket";
import { buildPath, pathToCandles } from "../../utils/simulate";

const COLORS = {
  bull: "#2ec99a",
  bear: "#ff5f6a",
  brand: "#5f8fff",
  warn: "#f0b429",
  accent: "#e0a94a",
  violet: "#a78bfa",
  teal: "#22d3ee",
  grid: "#2a3545",
  axis: "#7c8ba1",
};

export { COLORS as chartColors };

const smaOverlay = (period: number, label: string, color: string) => ({
  kind: "sma" as const,
  period,
  label,
  color,
});

const emaOverlay = (period: number, label: string, color: string, dashed = false) => ({
  kind: "ema" as const,
  period,
  label,
  color,
  dashed,
});

export interface ScenarioPreset {
  id: string;
  label: string;
  summary: string;
  build: () => ChartSpec;
}

const timeframes = ["1h", "4h", "1D"];

function riskRewardChart(
  caption: string,
  description: string,
  scenario: {
    entry: number;
    stopLoss: number;
    takeProfit: number;
    direction: "long" | "short";
    instrument: string;
    outcome: "tp" | "sl" | "open";
    narrative: string;
  },
  swingOrder: "bullish" | "bearish" = "bullish",
): ChartSpec {
  const isLong = scenario.direction === "long";
  const range = Math.max(
    Math.abs(scenario.stopLoss - scenario.entry),
    Math.abs(scenario.takeProfit - scenario.entry),
  );
  const step = range / 14;

  const bearish: CandlesChartSpec = {
    kind: "candles",
    caption,
    description,
    timeframes,
    candles: pathToCandles(
      buildPath({
        start: scenario.entry + step * 2,
        steps: 14,
        stepPrice: -step,
        wick: step * 0.9,
        jitter: step * 0.35,
      }),
    ),
    levels: [
      { id: "entry", price: scenario.entry, label: "Entrada", kind: "entry" },
      { id: "sl", price: scenario.stopLoss, label: "Stop Loss", kind: "stop" },
      { id: "tp", price: scenario.takeProfit, label: "Take Profit", kind: "target" },
    ],
  };

  const bullish: CandlesChartSpec = {
    kind: "candles",
    caption,
    description,
    timeframes,
    candles: pathToCandles(
      buildPath({
        start: scenario.entry - step * 2,
        steps: 14,
        stepPrice: step,
        wick: step * 0.9,
        jitter: step * 0.35,
      }),
    ),
    levels: bearish.levels,
  };

  const flat: CandlesChartSpec = {
    kind: "candles",
    caption,
    description,
    timeframes,
    candles: pathToCandles(
      buildPath({
        start: scenario.entry - step,
        steps: 14,
        stepPrice: isLong ? 0 : 0,
        wick: step * 1.5,
        jitter: step * 0.5,
      }),
    ),
    levels: bearish.levels,
  };

  return {
    kind: "riskReward",
    caption,
    description,
    scenario,
    swings: swingOrder === "bearish" ? [bearish, bullish, flat] : [bullish, bearish, flat],
  } satisfies RiskRewardChartSpec;
}

export const chartPresets: ScenarioPreset[] = [
  {
    id: "tendencia-alcista",
    label: "Tendencia alcista",
    summary: "Serie con máximos y mínimos crecientes, con retrocesos controlados.",
    build: () =>
      ({
        kind: "candles",
        caption: "Ejemplo ficticio de tendencia alcista",
        description:
          "El precio sube formando máximos y mínimos cada vez más altos. Cada retroceso se queda por encima del mínimo anterior, que es lo que define la estructura alcista.",
        timeframes,
        candles: buildCandles({
          start: 100,
          volatility: 0.42,
          volumeBase: 1400,
          segments: [
            { bars: 8, drift: 0.15, vol: 1.1 },
            { bars: 5, drift: -0.55, vol: 0.85 },
            { bars: 9, drift: 0.62, vol: 1 },
            { bars: 5, drift: -0.4, vol: 0.8 },
            { bars: 10, drift: 0.78, vol: 1.05 },
            { bars: 4, drift: -0.32, vol: 0.75 },
            { bars: 8, drift: 0.9, vol: 1.1 },
          ],
        }),
        overlays: [smaOverlay(20, "SMA 20", COLORS.brand)],
        annotations: [
          { id: "s1", fromIndex: 2, toIndex: 10, label: "Tendencia", kind: "trend-up" },
        ],
        showVolume: true,
      }) as CandlesChartSpec,
  },
  {
    id: "tendencia-bajista",
    label: "Tendencia bajista",
    summary: "Máximos y mínimos decrecientes con rebotes débiles.",
    build: () =>
      ({
        kind: "candles",
        caption: "Ejemplo ficticio de tendencia bajista",
        description:
          "Cada rebote se queda por debajo del máximo anterior. Los máximos y mínimos decrecientes dibujan una estructura bajista.",
        timeframes,
        candles: buildCandles({
          start: 130,
          volatility: 0.44,
          volumeBase: 1500,
          segments: [
            { bars: 7, drift: -0.7, vol: 1.1 },
            { bars: 5, drift: 0.5, vol: 0.85 },
            { bars: 9, drift: -0.6, vol: 1 },
            { bars: 5, drift: 0.42, vol: 0.8 },
            { bars: 9, drift: -0.8, vol: 1.05 },
            { bars: 4, drift: 0.35, vol: 0.75 },
            { bars: 7, drift: -0.95, vol: 1.1 },
          ],
        }),
        overlays: [
          smaOverlay(20, "SMA 20", COLORS.bear),
          emaOverlay(50, "EMA 50", COLORS.warn),
        ],
        annotations: [
          { id: "s1", fromIndex: 2, toIndex: 10, label: "Tendencia", kind: "trend-down" },
        ],
        showVolume: true,
      }) as CandlesChartSpec,
  },
  {
    id: "soporte-resistencia",
    label: "Soporte y resistencia",
    summary: "El precio rebota dos veces en la misma zona por arriba y por abajo.",
    build: () => {
      const candles = buildCandles({
        start: 104,
        volatility: 0.4,
        volumeBase: 1300,
        segments: [
          { bars: 6, drift: 0.9, vol: 1 },
          { bars: 4, drift: -1.1, vol: 0.9, lowerWick: 1.4 },
          { bars: 5, drift: 0.8, vol: 1 },
          { bars: 4, drift: -0.9, vol: 0.95, lowerWick: 1.5 },
          { bars: 7, drift: 1.15, vol: 1.05 },
          { bars: 4, drift: -1, vol: 0.95, upperWick: 1.6 },
          { bars: 6, drift: 0.95, vol: 1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de soporte y resistencia",
        description:
          "La zona de resistencia en 110 rechaza el precio dos veces. La zona de soporte en 100 lo sostiene dos veces. Cuando una zona se rompe y el precio la vuelve a testeear, deja de ser soporte o resistencia.",
        timeframes,
        candles,
        levels: [
          { id: "r1", price: 110, label: "Resistencia", kind: "resistance" },
          { id: "s1", price: 100, label: "Soporte", kind: "support" },
        ],
      } as CandlesChartSpec;
    },
  },
  {
    id: "rango",
    label: "Mercado en rango",
    summary: "Precio lateral entre dos niveles durante muchas velas.",
    build: () => {
      const candles = buildCandles({
        start: 99.6,
        volatility: 0.5,
        volumeBase: 1100,
        segments: [
          { bars: 6, drift: 0.85, vol: 1 },
          { bars: 6, drift: -0.9, vol: 1.1 },
          { bars: 7, drift: 0.95, vol: 1 },
          { bars: 6, drift: -0.85, vol: 1.05 },
          { bars: 7, drift: 0.88, vol: 1 },
          { bars: 6, drift: -0.8, vol: 1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de mercado en rango",
        description:
          "El precio no consigue superar ni 105 ni 95 durante muchas velas. En este contexto la estrategia más simple es comprar abajo y vender arriba, nunca perseguir rupturas.",
        timeframes,
        candles,
        levels: [
          { id: "top", price: 105, label: "Techo del rango", kind: "resistance" },
          { id: "bottom", price: 95, label: "Suelo del rango", kind: "support" },
        ],
        annotations: [{ id: "r", fromIndex: 2, toIndex: 36, label: "Rango", kind: "range" }],
      } as CandlesChartSpec;
    },
  },
  {
    id: "stop-loss",
    label: "Stop Loss y Take Profit",
    summary: "Entrada 100, stop 95, objetivo 110 con las dos rutas posibles.",
    build: () =>
      riskRewardChart(
        "Ejemplo ficticio de Stop Loss y Take Profit",
        "Una misma entrada con dos finales posibles. El stop loss limita la pérdida a 5 unidades por unidad; el take profit apunta a 10. El gráfico muestra el escenario favorable y el adverso.",
        {
          entry: 100,
          stopLoss: 95,
          takeProfit: 110,
          direction: "long",
          instrument: "Activo ficticio",
          outcome: "tp",
          narrative:
            "Si el precio llega a 110 la operación gana 10 unidades por unidad comprada. Si baja a 95 se cierra la posición con 5 unidades de pérdida, que es justo el riesgo que se había calculado.",
        },
      ),
  },
  {
    id: "ruptura",
    label: "Ruptura de estructura",
    summary: "Salida de un rango con volumen y retest.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.4,
        volumeBase: 1200,
        segments: [
          { bars: 8, drift: 0.6, vol: 0.9 },
          { bars: 7, drift: -0.65, vol: 0.95 },
          { bars: 8, drift: 0.62, vol: 0.9 },
          { bars: 7, drift: -0.6, vol: 0.95 },
          { bars: 3, drift: 0.4, vol: 1.6, volumeBias: 2.6 },
          { bars: 5, drift: 1.6, vol: 1.5, volumeBias: 2.2 },
          { bars: 4, drift: -0.55, vol: 1.1 },
          { bars: 6, drift: 0.5, vol: 1.05 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de ruptura de estructura",
        description:
          "El precio consolida y rompe la parte alta del rango con más volumen. Después vuelve a testear la zona rota y continúa: ese testeo es lo que mejora la relación riesgo/beneficio.",
        timeframes,
        candles,
        levels: [
          { id: "res", price: 106.5, label: "Resistencia rota", kind: "resistance" },
          { id: "sup", price: 99, label: "Soporte del rango", kind: "support" },
        ],
        markers: [
          { index: 26, price: 107.5, label: "Entrada ruptura", kind: "buy" },
        ],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "pullback",
    label: "Pullback a la media",
    summary: "Tendencia alcista y retroceso hasta la media de 20.",
    build: () => {
      const candles = buildCandles({
        start: 96,
        volatility: 0.42,
        volumeBase: 1350,
        segments: [
          { bars: 10, drift: 1.1, vol: 1 },
          { bars: 3, drift: -0.5, vol: 0.7 },
          { bars: 10, drift: 1.05, vol: 1 },
          { bars: 4, drift: -0.85, vol: 0.7 },
          { bars: 4, drift: 0.15, vol: 0.65, lowerWick: 1.2 },
          { bars: 8, drift: 1, vol: 1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de pullback a media móvil",
        description:
          "En tendencia alcista el precio suele corregir hacia la media de 20 periodos. Muchos operadores esperan ese retroceso para entrar con un stop más corto y mejor relación riesgo/beneficio.",
        timeframes,
        candles,
        overlays: [smaOverlay(20, "SMA 20", COLORS.brand)],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "fibonacci",
    label: "Retroceso de Fibonacci",
    summary: "Subida y corrección hasta el 61,8 % del tramo.",
    build: () => {
      const low = 92;
      const high = 128;
      const upBars = 16;
      const downBars = 9;
      const candles = buildCandles({
        start: low,
        volatility: 0.4,
        volumeBase: 1300,
        segments: [
          { bars: upBars, drift: (high - low) / (upBars * 1.4), vol: 1 },
          { bars: downBars, drift: -(high - 103) / downBars, vol: 0.95, upperWick: 0.8 },
        ],
      });
      const levels: PriceLevel[] = [0, 0.236, 0.382, 0.5, 0.618, 0.786].map((ratio) => ({
        id: `fib-${ratio}`,
        price: Number((high - (high - low) * ratio).toFixed(2)),
        label: `${(ratio * 100).toFixed(1).replace(".0", "")} %`,
        kind: "fib",
        dashed: true,
      }));
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de retroceso de Fibonacci",
        description:
          "Tras una subida de 92 a 128, el precio corrige. Los niveles de Fibonacci marcan dónde suelen terminar las correcciones: 38,2 %, 50 % y 61,8 % son los más observados.",
        timeframes,
        candles,
        levels: [
          { id: "max", price: high, label: "Máximo", kind: "resistance" },
          { id: "min", price: low, label: "Mínimo", kind: "support" },
          ...levels,
        ],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "doble-techo",
    label: "Doble techo",
    summary: "Dos rechazos en la misma resistencia y ruptura a la baja.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.42,
        volumeBase: 1250,
        segments: [
          { bars: 9, drift: 1.05, vol: 1 },
          { bars: 4, drift: -1, vol: 0.95, upperWick: 1.5 },
          { bars: 5, drift: 0.75, vol: 1 },
          { bars: 3, drift: -0.35, vol: 0.8 },
          { bars: 3, drift: 0.3, vol: 0.85, upperWick: 1.4 },
          { bars: 7, drift: -1.1, vol: 1.1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de doble techo",
        description:
          "El precio intenta superar dos veces la misma zona y fracasa. El segundo intento fallido suele marcar el inicio de un movimiento bajista hacia el soporte anterior.",
        timeframes,
        candles,
        levels: [
          { id: "res", price: 110, label: "Techo doble", kind: "resistance" },
          { id: "sup", price: 100, label: "Soporte previo", kind: "support" },
        ],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "hombro-cabeza-hombro",
    label: "Hombro-cabeza-hombro",
    summary: "Tres máximos con el central más alto y ruptura del cuello.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.4,
        volumeBase: 1250,
        segments: [
          { bars: 5, drift: 1.5, vol: 1 },
          { bars: 4, drift: -1.3, vol: 0.9 },
          { bars: 4, drift: 0.45, vol: 0.9 },
          { bars: 5, drift: 1.9, vol: 1 },
          { bars: 4, drift: -1.4, vol: 0.9 },
          { bars: 4, drift: 0.4, vol: 0.9 },
          { bars: 8, drift: -1.5, vol: 1.1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de hombro-cabeza-hombro",
        description:
          "Patrón de inversión bajista: hombro izquierdo, cabeza más alta, hombro derecho más bajo y ruptura de la línea que une los mínimos (cuello). El objetivo habitual es la altura de la figura proyectada.",
        timeframes,
        candles,
        levels: [{ id: "neck", price: 112, label: "Cuello", kind: "support" }],
        annotations: [
          { id: "hcc", fromIndex: 2, toIndex: 24, label: "Figura", kind: "pattern" },
        ],
      } as CandlesChartSpec;
    },
  },
  {
    id: "rsi",
    label: "RSI con sobrecompra y sobreextensión",
    summary: "RSI(14) subiendo por encima de 70 y volviendo a la zona neutra.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.4,
        volumeBase: 1300,
        segments: [
          { bars: 8, drift: 0.7, vol: 0.95 },
          { bars: 7, drift: 0.1, vol: 0.85 },
          { bars: 9, drift: 1, vol: 1.05 },
          { bars: 4, drift: -0.9, vol: 1 },
          { bars: 6, drift: 0.3, vol: 0.9 },
        ],
      });
      return {
        kind: "indicator",
        caption: "Ejemplo ficticio de RSI",
        description:
          "El RSI mide la fuerza del movimiento en una escala de 0 a 100. Por encima de 70 se habla de sobrecompra y por debajo de 30 de sobreventa. En tendencia fuerte puede quedarse extremo mucho tiempo: es una señal de fuerza, no una orden de venta.",
        indicator: "rsi",
        candles,
      } as RsiChartSpec;
    },
  },
  {
    id: "macd",
    label: "Cruce de MACD",
    summary: "La línea MACD cruza la de señal y el histograma cambia de signo.",
    build: () => {
      const candles = buildCandles({
        start: 104,
        volatility: 0.4,
        volumeBase: 1300,
        segments: [
          { bars: 8, drift: -0.85, vol: 1 },
          { bars: 5, drift: 0.2, vol: 0.85 },
          { bars: 10, drift: 0.95, vol: 1.05 },
          { bars: 4, drift: -0.6, vol: 1 },
          { bars: 7, drift: 0.7, vol: 1 },
        ],
      });
      return {
        kind: "indicator",
        caption: "Ejemplo ficticio de MACD",
        description:
          "El MACD es la diferencia entre dos medias exponenciales. Cuando su línea cruza la línea de señal, el histograma cambia de color y suele anticipar un cambio de impulso, nunca un cambio de tendencia garantizado.",
        indicator: "macd",
        candles,
      } as MacdChartSpec;
    },
  },
  {
    id: "bollinger",
    label: "Bandas de Bollinger",
    summary: "Compresión de las bandas y posterior expansión.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.32,
        volumeBase: 1000,
        segments: [
          { bars: 10, drift: 0.18, vol: 0.7 },
          { bars: 10, drift: -0.16, vol: 0.7 },
          { bars: 8, drift: 0.1, vol: 0.75 },
          { bars: 9, drift: 1.5, vol: 1.7 },
          { bars: 8, drift: 0.9, vol: 1.4 },
        ],
      });
      return {
        kind: "indicator",
        caption: "Ejemplo ficticio de Bandas de Bollinger",
        description:
          "Las bandas son una media móvil de 20 periodos más y menos dos desviaciones típicas. Cuando se estrechan, el mercado está en calma relativa; la salida de las bandas suele venir con más impulso, no necesariamente con más dirección.",
        indicator: "bollinger",
        candles,
      } as BollingerChartSpec;
    },
  },
  {
    id: "mechazo-rechazo",
    label: "Vela de rechazo con mecha larga",
    summary: "Barrido de la mecha inferior y recuperación.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.36,
        volumeBase: 1150,
        segments: [
          { bars: 8, drift: -0.7, vol: 0.95 },
          { bars: 6, drift: 0.2, vol: 0.8 },
          { bars: 4, drift: -1.3, vol: 1.5, lowerWick: 2.6, volumeBias: 2.4 },
          { bars: 8, drift: 1.05, vol: 1.1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de vela de rechazo",
        description:
          "La mecha inferior larga indica que hubo ventas agresivas que se quedaron sin "
          + "continuidad: nadie defender ese precio más abajo. Muchos operadores leen esa vela "
          + "como un rechazo de la zona y buscan confirmación antes de entrar.",
        timeframes,
        candles,
        levels: [{ id: "s", price: 96, label: "Zona barrida", kind: "support" }],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "martillo",
    label: "Vela martillo y estrella fugaz",
    summary: "Dos patrones de reversa de una sola vela.",
    build: () => {
      const candles = buildCandles({
        start: 102,
        volatility: 0.38,
        volumeBase: 1200,
        segments: [
          { bars: 9, drift: -0.9, vol: 1 },
          { bars: 5, drift: 0.15, vol: 0.7, lowerWick: 2.8 },
          { bars: 8, drift: 1.1, vol: 1.05 },
          { bars: 4, drift: -0.2, vol: 0.7, upperWick: 2.9 },
          { bars: 7, drift: -0.85, vol: 1.05 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de martillo y estrella fugaz",
        description:
          "El martillo aparece tras una bajada con una mecha inferior larga y cuerpo pequeño arriba. La estrella fugaz es su equivalente con mecha superior. Ambos necesitan confirmación: lugar en la tendencia y volumen.",
        timeframes,
        candles,
      } as CandlesChartSpec;
    },
  },
  {
    id: "divergencia",
    label: "Divergencia en el RSI",
    summary: "Precio haciendo máximos más altos y RSI con máximos más bajos.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.36,
        volumeBase: 1250,
        segments: [
          { bars: 10, drift: 0.95, vol: 1 },
          { bars: 6, drift: -0.75, vol: 0.9 },
          { bars: 10, drift: 0.85, vol: 0.95 },
          { bars: 7, drift: -1.35, vol: 1.15 },
        ],
      });
      return {
        kind: "indicator",
        caption: "Ejemplo ficticio de divergencia en el RSI",
        description:
          "El precio marca un máximo más alto que el anterior pero el RSI no lo hace. Esa discrepancia se llama divergencia bajista y avisa de que el impulso está perdiendo fuerza.",
        indicator: "rsi",
        candles,
        annotations: [
          { id: "d", fromIndex: 8, toIndex: 26, label: "Divergencia", kind: "pattern" },
        ],
      } as RsiChartSpec;
    },
  },
  {
    id: "volatilidad",
    label: "Expansión de volatilidad",
    summary: "Velas cada vez más largas respecto a su media.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.3,
        volumeBase: 1000,
        segments: [
          { bars: 12, drift: 0.12, vol: 0.6 },
          { bars: 6, drift: 0.05, vol: 0.7 },
          { bars: 10, drift: 1.5, vol: 2.2 },
          { bars: 6, drift: -0.4, vol: 1.8 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de expansión de volatilidad",
        description:
          "Cuando el rango de las velas crece respecto a las anteriores, la volatilidad aumenta. En la práctica obliga a ampliar stops o a reducir el tamaño de la posición para mantener el mismo riesgo.",
        timeframes,
        candles,
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "entrada-ruptura",
    label: "Entrada, stop y objetivo en la misma vela",
    summary: "Plan completo dibujado sobre el gráfico.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.4,
        volumeBase: 1300,
        segments: [
          { bars: 8, drift: 0.7, vol: 0.95 },
          { bars: 6, drift: -0.55, vol: 0.85 },
          { bars: 5, drift: 0.6, vol: 0.9 },
          { bars: 6, drift: 1.1, vol: 1.15 },
          { bars: 5, drift: 0.75, vol: 1.1 },
          { bars: 6, drift: -0.5, vol: 1 },
        ],
      });
      const entryPrice = candles[19].c;
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de una operación planificada",
        description:
          "Entrada, stop y objetivo marcados sobre el mismo gráfico. La distancia al stop define cuánto se arriesga; la distancia al objetivo define cuánto se busca. Ese reparto es la relación riesgo/beneficio.",
        timeframes,
        candles,
        levels: [
          { id: "entry", price: Number(entryPrice.toFixed(2)), label: "Entrada", kind: "entry" },
          {
            id: "stop",
            price: Number((entryPrice - 3.2).toFixed(2)),
            label: "Stop Loss",
            kind: "stop",
          },
          {
            id: "target",
            price: Number((entryPrice + 6.4).toFixed(2)),
            label: "Take Profit",
            kind: "target",
          },
        ],
        markers: [
          { index: 19, price: Number(entryPrice.toFixed(2)), label: "Entrada", kind: "buy" },
        ],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "cripto-24h",
    label: "Cripto con velas de 24 horas",
    summary: "Mercado abierto todo el día, con huecos por noticias.",
    build: () => {
      const candles = buildCandles({
        start: 42,
        volatility: 1.15,
        volumeBase: 9000,
        barMs: 86_400_000,
        decimals: 2,
        segments: [
          { bars: 8, drift: 1.4, vol: 1.2 },
          { bars: 5, drift: -2.6, vol: 1.6 },
          { bars: 7, drift: 1.9, vol: 1.3 },
          { bars: 5, drift: -1.5, vol: 1.1 },
          { bars: 7, drift: 2.6, vol: 1.5 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de velas diarias de cripto",
        description:
          "El mercado cripto funciona 24 horas y los movimientos noticiosos producen velas muy largas. Por eso el tamaño de posición suele ser más pequeño que en otros mercados.",
        timeframes: ["1D", "4h"],
        candles,
        overlays: [smaOverlay(20, "SMA 20", COLORS.violet)],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "escala-forex",
    label: "Par Forex con pips",
    summary: "Precio con 4 decimales y distances medidas en pips.",
    build: () => {
      const candles = buildCandles({
        start: 1.0842,
        volatility: 0.0021,
        volumeBase: 42000,
        decimals: 4,
        segments: [
          { bars: 8, drift: 0.0026, vol: 1 },
          { bars: 6, drift: -0.0022, vol: 1 },
          { bars: 9, drift: 0.0031, vol: 1.05 },
          { bars: 6, drift: -0.0019, vol: 0.95 },
          { bars: 7, drift: 0.0028, vol: 1.1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de un par de divisas",
        description:
          "En Forex los precios tienen cuatro decimales y las distancias se miden en pips. El pip es el cambio mínimo de precio que la mayoría de brokerage considera relevante.",
        timeframes,
        candles,
        overlays: [smaOverlay(20, "SMA 20", COLORS.teal)],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "cruce-medias",
    label: "Cruce de medias móviles",
    summary: "La media rápida pasa por encima de la lenta.",
    build: () => {
      const candles = buildCandles({
        start: 98,
        volatility: 0.38,
        volumeBase: 1250,
        segments: [
          { bars: 9, drift: -0.75, vol: 1 },
          { bars: 6, drift: 0.25, vol: 0.85 },
          { bars: 9, drift: 0.9, vol: 1.05 },
          { bars: 6, drift: 0.4, vol: 0.95 },
          { bars: 7, drift: 0.95, vol: 1.05 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de cruce de medias móviles",
        description:
          "Cuando la media rápida (20) pasa por encima de la lenta (50) se habla de cruce alcista. El cruce llega tarde a favor de la tendencia, por eso se usa más como confirmación que como entrada.",
        timeframes,
        candles,
        overlays: [
          smaOverlay(20, "SMA 20", COLORS.brand),
          smaOverlay(50, "SMA 50", COLORS.accent),
        ],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
  {
    id: "sweep",
    label: "Barrido de liquidez",
    summary: "Mecha que perfora un mínimo y vuelve dentro.",
    build: () => {
      const candles = buildCandles({
        start: 100,
        volatility: 0.34,
        volumeBase: 1100,
        segments: [
          { bars: 10, drift: 0.45, vol: 0.9 },
          { bars: 6, drift: -0.85, vol: 1 },
          { bars: 3, drift: -0.2, vol: 0.9, lowerWick: 2.2, volumeBias: 2.2 },
          { bars: 9, drift: 0.95, vol: 1.1 },
        ],
      });
      return {
        kind: "candles",
        caption: "Ejemplo ficticio de barrido de liquidez",
        description:
          "El precio perfora el mínimo anterior apenas, se activa un barrage de ventas y vuelve dentro de la zona. Se interpreta como prueba de que había órdenes agrupadas bajo ese nivel.",
        timeframes,
        candles,
        levels: [{ id: "sweep", price: 95, label: "Barrido de mínimos", kind: "support" }],
        showVolume: true,
      } as CandlesChartSpec;
    },
  },
];

export function buildPreset(id: string): ChartSpec {
  const preset = chartPresets.find((p) => p.id === id);
  if (!preset) throw new Error(`Preset de gráfico desconocido: ${id}`);
  return preset.build();
}

export function buildScenario(
  id: string,
  overrides: {
    entry?: number;
    stopLoss?: number;
    takeProfit?: number;
    caption?: string;
    description?: string;
    direction?: "long" | "short";
    outcome?: "tp" | "sl" | "open";
  } = {},
): ChartSpec {
  // El id de la lección determina el orden de los swings para que cada ejemplo
  // tenga una forma distinta pero siempre la misma entre builds.
  const swingOrder = hashSeed(id) % 2 === 0 ? "bullish" : "bearish";
  const base = riskRewardChart(
    overrides.caption ?? "Ejemplo de operación",
    overrides.description ?? "Escenarios de resultado favorable y adverso.",
    {
      entry: overrides.entry ?? 100,
      stopLoss: overrides.stopLoss ?? 95,
      takeProfit: overrides.takeProfit ?? 110,
      direction: overrides.direction ?? "long",
      instrument: "Activo ficticio",
      outcome: overrides.outcome ?? "tp",
      narrative: "",
    },
    swingOrder,
  );
  if (base.kind !== "riskReward") return base;
  return {
    ...base,
    scenario: {
      ...base.scenario,
      entry: overrides.entry ?? base.scenario.entry,
      stopLoss: overrides.stopLoss ?? base.scenario.stopLoss,
      takeProfit: overrides.takeProfit ?? base.scenario.takeProfit,
      outcome: overrides.outcome ?? base.scenario.outcome,
    },
  };
}

export { closestIndex };
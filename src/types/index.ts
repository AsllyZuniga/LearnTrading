export type CategoryId =
  | "fundamentos"
  | "mercados"
  | "graficos"
  | "operaciones"
  | "analisis-tecnico"
  | "indicadores"
  | "estrategias"
  | "gestion-riesgo"
  | "psicologia"
  | "broker"
  | "financiero";

export interface Category {
  id: CategoryId;
  label: string;
  shortLabel: string;
  description: string;
}

export type LevelId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Level {
  id: LevelId;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  accent: "brand" | "bull" | "bear" | "warn" | "accent";
}

export interface Candle {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
}

export interface Overlay {
  kind: "sma" | "ema";
  period: number;
  label: string;
  color: string;
  width?: number;
  dashed?: boolean;
}

export interface PriceLevel {
  id: string;
  price: number;
  label: string;
  kind: "support" | "resistance" | "entry" | "stop" | "target" | "fib" | "note";
  color?: string;
  dashed?: boolean;
  extend?: boolean;
}

export interface Marker {
  index: number;
  price: number;
  label: string;
  kind: "entry" | "stop" | "target" | "sell" | "buy";
}

export interface Annotation {
  id: string;
  fromIndex: number;
  toIndex: number;
  label: string;
  kind: "trend-up" | "trend-down" | "range" | "fib" | "pattern";
}

export interface LineSeries {
  id: string;
  label: string;
  color: string;
  values: (number | null)[];
  dashed?: boolean;
}

export interface Band {
  id: string;
  label: string;
  upper: number[];
  lower: number[];
  color: string;
  fillOpacity?: number;
}

export interface Threshold {
  value: number;
  label: string;
  color: string;
}

export interface CandlesChartSpec {
  kind: "candles";
  caption: string;
  description: string;
  candles: Candle[];
  overlays?: Overlay[];
  levels?: PriceLevel[];
  markers?: Marker[];
  annotations?: Annotation[];
  showVolume?: boolean;
  timeframes?: string[];
}

export interface IndicatorChartSpec {
  kind: "indicator";
  caption: string;
  description: string;
  indicator: "rsi" | "macd" | "bollinger" | "sma";
  candles: Candle[];
  lines?: LineSeries[];
  bands?: Band[];
  thresholds?: Threshold[];
  overlayOnPrice?: LineSeries[];
}

export type RsiChartSpec = IndicatorChartSpec & { indicator: "rsi" };
export type MacdChartSpec = IndicatorChartSpec & { indicator: "macd" };
export type BollingerChartSpec = IndicatorChartSpec & { indicator: "bollinger" };

export interface RiskRewardChartSpec {
  kind: "riskReward";
  caption: string;
  description: string;
  scenario: TradeScenario;
  swings?: CandlesChartSpec[];
}

export type ChartSpec =
  | CandlesChartSpec
  | IndicatorChartSpec
  | RiskRewardChartSpec;

export type TradeOutcome = "tp" | "sl" | "open" | "breakeven";

export interface TradeScenario {
  instrument: string;
  direction: "long" | "short";
  entry: number;
  stopLoss: number;
  takeProfit: number;
  outcome: TradeOutcome;
  narrative: string;
  capital?: number;
  riskPct?: number;
}

export interface Mistake {
  mistake: string;
  why: string;
  fix: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Lesson {
  slug: string;
  levelId: LevelId;
  order: number;
  title: string;
  shortTitle: string;
  category: CategoryId;
  tags: string[];
  summary: string;
  keywords: string[];
  readMinutes: number;
  updatedAt: string;
  explanation: {
    intro: string;
    paragraphs: string[];
    bullets?: string[];
  };
  technical: {
    term: string;
    body: string;
    formula?: string;
    gloss?: string;
  };
  example: {
    title: string;
    narrative: string;
    bullets?: string[];
  };
  chart: ChartSpec;
  tradeExample: TradeScenario;
  mistakes: Mistake[];
  related: string[];
  glossary: string[];
  quiz: QuizQuestion[];
}

export interface TermEntry {
  slug: string;
  term: string;
  aliases?: string[];
  category: CategoryId;
  short: string;
  definition: string;
  extended: string;
  example?: { title: string; text: string };
  seeAlso: string[];
  relatedLessons: string[];
}

export type PostSection =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; id: string; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "callout"; tone: "info" | "risk"; title: string; text: string }
  | { kind: "chart"; spec: ChartSpec }
  | { kind: "ad" };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryId;
  tags: string[];
  readMinutes: number;
  updatedAt: string;
  author: string;
  relatedLessons: string[];
  relatedTerms: string[];
  sections: PostSection[];
}
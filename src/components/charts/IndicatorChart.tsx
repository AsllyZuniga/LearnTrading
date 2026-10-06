import { useMemo } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { IndicatorChartSpec } from "~/types";
import { bollinger, macd, rsi } from "~/utils/indicators";
import { useElementWidth } from "~/hooks/useUi";
import { cn } from "~/utils/cn";

const CANDLE_H = 132;
const PANE_H = 190;
const PAD = { right: 58 };

function axisDecimals(candles: { h: number; l: number }[]) {
  const max = Math.max(...candles.map((c) => c.h));
  const min = Math.min(...candles.map((c) => c.l));
  const span = Math.max(max - min, 0.0001);
  return span > 50 ? 1 : span > 0.5 ? 3 : 5;
}

function fmtTime(ts: number) {
  return new Date(ts).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  });
}

export function IndicatorChart({
  spec,
  className,
}: {
  spec: IndicatorChartSpec;
  className?: string;
}) {
  const { ref, width } = useElementWidth<HTMLDivElement>(880);
  const candles = spec.candles;
  const closes = candles.map((c) => c.c);

  const data = useMemo(() => {
    const rsiSeries = spec.indicator === "rsi" ? rsi(closes, 14) : [];
    const macdSeries = spec.indicator === "macd" ? macd(closes) : [];
    const bbSeries = spec.indicator === "bollinger" ? bollinger(closes, 20, 2) : [];

    const rsiMap = new Map(rsiSeries.map((p) => [p.index, p.value]));
    const macdMap = new Map(macdSeries.map((p) => [p.index, p]));
    const bbMap = new Map(bbSeries.map((p) => [p.index, p]));

    return candles.map((candle, i) => {
      const r = rsiMap.get(i);
      const m = macdMap.get(i);
      const b = bbMap.get(i);
      return {
        i,
        t: candle.t,
        o: candle.o,
        h: candle.h,
        l: candle.l,
        c: candle.c,
        rsi: r,
        macd: m?.macd ?? null,
        signal: m?.signal ?? null,
        hist: m?.histogram ?? null,
        bbu: b?.upper ?? null,
        bbm: b?.middle ?? null,
        bbl: b?.lower ?? null,
      };
    });
  }, [candles, closes, spec.indicator]);

  const { minPrice, maxPrice, bodyWidth, y } = useMemo(() => {
    const high = Math.max(...candles.map((c) => c.h));
    const low = Math.min(...candles.map((c) => c.l));
    const pad = (high - low) * 0.1 || 1;
    const min = low - pad;
    const max = high + pad;
    const plotW = Math.max(120, width - PAD.right);
    const band = plotW / Math.max(1, candles.length);
    const body = Math.max(1.4, Math.min(band * 0.62, 11));
    const scale = (price: number) => 10 + ((max - price) / (max - min)) * (CANDLE_H - 22);
    return { minPrice: min, maxPrice: max, bodyWidth: body, y: scale };
  }, [candles, width]);

  const decimals = axisDecimals(candles);
  const lastIndex = candles.length - 1;
  const candleCount = candles.length;
  const tickIndexes = useMemo(() => {
    const step = Math.max(1, Math.floor(candleCount / 6));
    return Array.from({ length: candleCount }, (_, i) => i).filter((i) => i % step === 0);
  }, [candleCount]);

  const isBollinger = spec.indicator === "bollinger";

  return (
    <div className={cn("w-full", className)}>
      <div ref={ref} className="w-full">
        <svg
          width={width}
          height={CANDLE_H}
          viewBox={`0 0 ${width} ${CANDLE_H}`}
          role="img"
          aria-label={`${spec.caption}. ${spec.description}`}
          className="block max-w-full"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const price = minPrice + (maxPrice - minPrice) * ratio;
            const gy = y(price);
            return (
              <g key={ratio}>
                <line
                  x1={4}
                  x2={width - PAD.right}
                  y1={gy}
                  y2={gy}
                  stroke="var(--color-line)"
                  strokeDasharray="2 5"
                />
                <text
                  x={width - PAD.right + 8}
                  y={gy + 3.5}
                  fill="var(--color-muted)"
                  fontSize="10.5"
                  className="tabular-nums"
                >
                  {price.toLocaleString("es-ES", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                  })}
                </text>
              </g>
            );
          })}
          {candles.map((candle, i) => {
            const up = candle.c >= candle.o;
            const color = up ? "var(--color-bull)" : "var(--color-bear)";
            const cx =
              4 +
              ((width - PAD.right - 8) / Math.max(1, candles.length)) * (i + 0.5);
            const yOpen = y(candle.o);
            const yClose = y(candle.c);
            return (
              <g key={candle.t}>
                <line x1={cx} x2={cx} y1={y(candle.h)} y2={y(candle.l)} stroke={color} strokeWidth="1.1" />
                <rect
                  x={cx - bodyWidth / 2}
                  y={Math.min(yOpen, yClose)}
                  width={bodyWidth}
                  height={Math.max(1.4, Math.abs(yClose - yOpen))}
                  fill={color}
                  fillOpacity="0.9"
                />
              </g>
            );
          })}
          {tickIndexes.map((i) => {
            const cx =
              4 + ((width - PAD.right - 8) / Math.max(1, candles.length)) * (i + 0.5);
            return (
              <text
                key={candles[i].t}
                x={cx}
                y={CANDLE_H - 4}
                fill="var(--color-muted)"
                fontSize="9.5"
                textAnchor="middle"
              >
                {fmtTime(candles[i].t)}
              </text>
            );
          })}
        </svg>

        <div style={{ height: PANE_H, width: "100%" }} className="mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 6, right: PAD.right, bottom: 18, left: 0 }}>
              <CartesianGrid stroke="var(--color-line)" strokeDasharray="2 5" vertical={false} />
              <XAxis
                dataKey="t"
                tickFormatter={fmtTime}
                tick={{ fontSize: 10, fill: "var(--color-muted)" }}
                axisLine={false}
                tickLine={false}
                minTickGap={28}
              />
              <YAxis
                orientation="right"
                domain={
                  spec.indicator === "rsi" ? [0, 100] : isBollinger ? ["auto", "auto"] : ["auto", "auto"]
                }
                tick={{ fontSize: 10, fill: "var(--color-muted)" }}
                axisLine={false}
                tickLine={false}
                width={PAD.right}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line-strong)",
                  borderRadius: 10,
                  fontSize: 12,
                  color: "var(--color-ink)",
                }}
                labelFormatter={(value) => fmtTime(Number(value))}
                formatter={(value, name) => {
                  if (value == null) return "—";
                  const numeric = Number(value);
                  const decimals = spec.indicator === "rsi" ? 1 : spec.indicator === "macd" ? 3 : 2;
                  return [
                    numeric.toLocaleString("es-ES", {
                      minimumFractionDigits: decimals,
                      maximumFractionDigits: decimals,
                    }),
                    String(name),
                  ];
                }}
              />

              {spec.indicator === "rsi" ? (
                <>
                  <ReferenceLine y={70} stroke="var(--color-bear)" strokeDasharray="4 4" strokeOpacity={0.6} />
                  <ReferenceLine y={30} stroke="var(--color-bull)" strokeDasharray="4 4" strokeOpacity={0.6} />
                  <ReferenceLine
                    y={50}
                    stroke="var(--color-line-strong)"
                    strokeDasharray="2 4"
                    strokeOpacity={0.7}
                  />
                  <Area
                    type="monotone"
                    dataKey="rsi"
                    stroke="var(--color-brand)"
                    strokeWidth={1.8}
                    fill="var(--color-brand)"
                    fillOpacity={0.12}
                    isAnimationActive={false}
                    dot={false}
                    connectNulls
                    name="RSI"
                  />
                </>
              ) : null}

              {spec.indicator === "macd" ? (
                <>
                  <ReferenceLine y={0} stroke="var(--color-line-strong)" strokeWidth={1} />
                  <Bar dataKey="hist" isAnimationActive={false} name="Histograma">
                    {data.map((row) => (
                      <rect
                        key={row.t}
                        fill={
                          (row.hist ?? 0) >= 0 ? "var(--color-bull)" : "var(--color-bear)"
                        }
                        fillOpacity={0.45}
                      />
                    ))}
                  </Bar>
                  <Line
                    type="monotone"
                    dataKey="macd"
                    stroke="var(--color-brand)"
                    strokeWidth={1.8}
                    dot={false}
                    isAnimationActive={false}
                    name="MACD"
                  />
                  <Line
                    type="monotone"
                    dataKey="signal"
                    stroke="var(--color-warn)"
                    strokeWidth={1.4}
                    dot={false}
                    strokeDasharray="5 4"
                    isAnimationActive={false}
                    name="Señal"
                  />
                </>
              ) : null}

              {isBollinger ? (
                <>
                  <Area
                    type="monotone"
                    dataKey="c"
                    stroke="var(--color-brand)"
                    strokeWidth={1.6}
                    fill="var(--color-brand)"
                    fillOpacity={0.05}
                    isAnimationActive={false}
                    dot={false}
                    name="Precio"
                  />
                  <Line
                    type="monotone"
                    dataKey="bbu"
                    stroke="var(--color-muted)"
                    strokeWidth={1.2}
                    dot={false}
                    isAnimationActive={false}
                    name="Banda superior"
                  />
                  <Line
                    type="monotone"
                    dataKey="bbm"
                    stroke="var(--color-warn)"
                    strokeWidth={1.2}
                    dot={false}
                    strokeDasharray="4 3"
                    isAnimationActive={false}
                    name="Media 20"
                  />
                  <Line
                    type="monotone"
                    dataKey="bbl"
                    stroke="var(--color-muted)"
                    strokeWidth={1.2}
                    dot={false}
                    isAnimationActive={false}
                    name="Banda inferior"
                  />
                </>
              ) : null}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="sr-only">
        {spec.description} Última vela: cierre {candles[lastIndex]?.c ?? ""}.
      </p>
    </div>
  );
}
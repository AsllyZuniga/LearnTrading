import { useMemo, useState } from "react";
import type { CandlesChartSpec, Overlay, PriceLevel } from "~/types";
import { sma, ema } from "~/utils/indicators";
import { useElementWidth } from "~/hooks/useUi";
import { cn } from "~/utils/cn";

const PAD = { top: 14, right: 66, bottom: 26, left: 10 };
const VOL_RATIO = 0.18;
const HEIGHT = 380;

const KIND_COLOR: Record<PriceLevel["kind"], string> = {
  support: "var(--color-bull)",
  resistance: "var(--color-bear)",
  entry: "var(--color-brand)",
  stop: "var(--color-bear)",
  target: "var(--color-bull)",
  fib: "var(--color-accent)",
  note: "var(--color-muted)",
};

const KIND_DASH: Record<PriceLevel["kind"], string | undefined> = {
  support: "6 4",
  resistance: "6 4",
  entry: undefined,
  stop: undefined,
  target: undefined,
  fib: "3 4",
  note: "2 4",
};

export interface CandleChartProps {
  spec: CandlesChartSpec;
  className?: string;
  showControls?: boolean;
  initialVisible?: number;
}

function decimalsFor(min: number, max: number): number {
  const span = Math.max(Math.abs(max - min), 0.0001);
  if (span > 500) return 0;
  if (span > 50) return 1;
  if (span > 5) return 2;
  if (span > 0.5) return 3;
  return 4;
}

function formatAxis(value: number, decimals: number): string {
  return value.toLocaleString("es-ES", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", timeZone: "UTC" });
}

function overlayValues(candles: CandlesChartSpec["candles"], overlay: Overlay) {
  const closes = candles.map((c) => c.c);
  return overlay.kind === "sma" ? sma(closes, overlay.period) : ema(closes, overlay.period);
}

export function CandleChart({
  spec,
  className,
  showControls = true,
  initialVisible,
}: CandleChartProps) {
  const { ref, width } = useElementWidth<HTMLDivElement>(880);
  const total = spec.candles.length;
  const defaultVisible = Math.min(initialVisible ?? total, total);
  const [visible, setVisible] = useState(defaultVisible);

  const slice = useMemo(() => {
    const count = Math.max(12, Math.min(visible, total));
    return spec.candles.slice(total - count);
  }, [spec.candles, total, visible]);

  const geometry = useMemo(() => {
    const plotW = Math.max(120, width - PAD.left - PAD.right);
    const plotH = HEIGHT - PAD.top - PAD.bottom;
    const volH = spec.showVolume ? plotH * VOL_RATIO : 0;
    const priceH = plotH - volH - (spec.showVolume ? 8 : 0);

    const lows = slice.map((c) => c.l);
    const highs = slice.map((c) => c.h);
    const levelPrices = (spec.levels ?? []).map((l) => l.price);
    let min = Math.min(...lows, ...levelPrices);
    let max = Math.max(...highs, ...levelPrices);
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
      min = 0;
      max = 1;
    }
    const padding = (max - min) * 0.09 || 1;
    min -= padding;
    max += padding;

    const band = plotW / Math.max(1, slice.length);
    const body = Math.max(1.5, Math.min(band * 0.66, 13));
    const decimals = decimalsFor(min + padding, max - padding);
    const maxVolume = Math.max(...slice.map((c) => c.v), 1);

    const x = (i: number) => PAD.left + band * (i + 0.5);
    const y = (price: number) =>
      PAD.top + priceH - ((price - min) / (max - min)) * priceH;
    const volY = (v: number) => PAD.top + priceH + 8 + volH - (v / maxVolume) * volH;

    return { plotW, priceH, volH, min, max, band, body, decimals, maxVolume, x, y, volY };
  }, [slice, spec.levels, spec.showVolume, width]);

  const gridTicks = useMemo(() => {
    const ticks = 5;
    return Array.from({ length: ticks + 1 }, (_, i) => {
      const price = geometry.min + ((geometry.max - geometry.min) / ticks) * i;
      return { price, y: geometry.y(price) };
    });
  }, [geometry]);

  const timeTicks = useMemo(() => {
    const maxTicks = Math.max(3, Math.floor(geometry.plotW / 110));
    const stepIndex = Math.max(1, Math.floor(slice.length / maxTicks));
    return slice
      .map((candle, i) => ({ candle, i }))
      .filter(({ i }) => i % stepIndex === 0);
  }, [geometry.plotW, slice]);

  const overlays = useMemo(
    () =>
      (spec.overlays ?? []).map((overlay) => ({
        overlay,
        values: overlayValues(spec.candles, overlay).slice(total - slice.length),
      })),
    [spec.candles, spec.overlays, slice.length, total],
  );

  const annotations = spec.annotations ?? [];
  const markers = spec.markers ?? [];

  return (
    <div className={cn("w-full", className)}>
      <div ref={ref} className="w-full">
        <svg
          width={width}
          height={HEIGHT}
          viewBox={`0 0 ${width} ${HEIGHT}`}
          role="img"
          aria-label={`${spec.caption}. ${spec.description}`}
          className="block max-w-full"
        >
          <defs>
            <linearGradient id="fade-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {gridTicks.map((tick) => (
            <g key={tick.price}>
              <line
                x1={PAD.left}
                x2={width - PAD.right}
                y1={tick.y}
                y2={tick.y}
                stroke="var(--color-line)"
                strokeWidth="1"
                strokeDasharray="2 5"
              />
              <text
                x={width - PAD.right + 8}
                y={tick.y + 3.5}
                fill="var(--color-muted)"
                fontSize="10.5"
                className="tabular-nums"
              >
                {formatAxis(tick.price, geometry.decimals)}
              </text>
            </g>
          ))}

          {annotations.map((annotation) => {
            const from = slice[annotation.fromIndex];
            const to = slice[annotation.toIndex];
            if (!from || !to) return null;
            if (annotation.kind === "range" || annotation.kind === "pattern") {
              const x1 = geometry.x(annotation.fromIndex);
              const x2 = geometry.x(annotation.toIndex);
              const y1 = geometry.y(geometry.max);
              const y2 = geometry.y(geometry.min);
              return (
                <g key={annotation.id}>
                  <rect
                    x={x1}
                    y={y1}
                    width={Math.max(0, x2 - x1)}
                    height={Math.max(0, y2 - y1)}
                    fill="color-mix(in oklab, var(--color-brand) 5%, transparent)"
                    stroke="var(--color-brand)"
                    strokeOpacity="0.35"
                    strokeDasharray="4 4"
                    rx="8"
                  />
                  <text
                    x={x1 + 8}
                    y={y1 + 16}
                    fill="var(--color-brand)"
                    fontSize="10.5"
                    fontWeight="600"
                  >
                    {annotation.label}
                  </text>
                </g>
              );
            }
            const up = annotation.kind === "trend-up";
            const p1 = { x: geometry.x(annotation.fromIndex), y: geometry.y(up ? from.l : from.h) };
            const p2 = { x: geometry.x(annotation.toIndex), y: geometry.y(up ? to.h : to.l) };
            return (
              <g key={annotation.id}>
                <line
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="var(--color-brand)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  strokeOpacity="0.75"
                />
                <text
                  x={(p1.x + p2.x) / 2}
                  y={(p1.y + p2.y) / 2 - 8}
                  fill="var(--color-brand)"
                  fontSize="10.5"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {annotation.label}
                </text>
              </g>
            );
          })}

          {(spec.levels ?? []).map((level) => {
            const y = geometry.y(level.price);
            const color = level.color ?? KIND_COLOR[level.kind];
            const labelWidth = level.label.length * 6.1 + 14;
            return (
              <g key={level.id}>
                <line
                  x1={PAD.left}
                  x2={width - PAD.right + (level.extend ? 0 : 4)}
                  y1={y}
                  y2={y}
                  stroke={color}
                  strokeWidth={level.kind === "entry" ? 1.8 : 1.2}
                  strokeDasharray={KIND_DASH[level.kind]}
                  strokeOpacity="0.85"
                />
                <rect
                  x={width - PAD.right + 6}
                  y={y - 9}
                  width={Math.min(labelWidth, PAD.right - 8)}
                  height="18"
                  rx="5"
                  fill={color}
                  fillOpacity="0.16"
                  stroke={color}
                  strokeOpacity="0.5"
                  strokeWidth="0.8"
                />
                <text
                  x={width - PAD.right + 11}
                  y={y + 3.5}
                  fill={color}
                  fontSize="9.5"
                  fontWeight="700"
                >
                  {level.label.length > 13 ? `${level.label.slice(0, 12)}…` : level.label}
                </text>
              </g>
            );
          })}

          {slice.map((candle, i) => {
            const up = candle.c >= candle.o;
            const color = up ? "var(--color-bull)" : "var(--color-bear)";
            const cx = geometry.x(i);
            const yHigh = geometry.y(candle.h);
            const yLow = geometry.y(candle.l);
            const yOpen = geometry.y(candle.o);
            const yClose = geometry.y(candle.c);
            const bodyTop = Math.min(yOpen, yClose);
            const bodyHeight = Math.max(1.5, Math.abs(yClose - yOpen));
            return (
              <g key={candle.t}>
                <line x1={cx} x2={cx} y1={yHigh} y2={yLow} stroke={color} strokeWidth="1.2" />
                <rect
                  x={cx - geometry.body / 2}
                  y={bodyTop}
                  width={geometry.body}
                  height={bodyHeight}
                  rx={geometry.body > 5 ? 1 : 0}
                  fill={color}
                  fillOpacity={up ? 0.92 : 0.88}
                />
                {spec.showVolume ? (
                  <rect
                    x={cx - geometry.body / 2}
                    y={geometry.volY(candle.v)}
                    width={geometry.body}
                    height={Math.max(1, PAD.top + geometry.priceH + 8 + geometry.volH - geometry.volY(candle.v))}
                    fill={color}
                    fillOpacity="0.28"
                  />
                ) : null}
              </g>
            );
          })}

          {overlays.map(({ overlay, values }) => (
            <polyline
              key={overlay.label}
              fill="none"
              stroke={overlay.color}
              strokeWidth={overlay.width ?? 1.6}
              strokeDasharray={overlay.dashed ? "5 4" : undefined}
              strokeLinejoin="round"
              strokeLinecap="round"
              points={values
                .map((value, i) =>
                  value == null ? null : `${geometry.x(i)},${geometry.y(value)}`,
                )
                .filter(Boolean)
                .join(" ")}
            />
          ))}

          {markers.map((marker, idx) => {
            const i = Math.min(marker.index, slice.length - 1);
            const cx = geometry.x(i);
            const up = marker.kind === "buy" || marker.kind === "entry";
            const cy = geometry.y(marker.price) + (up ? -14 : 14);
            const size = 5;
            return (
              <g key={`${marker.label}-${idx}`}>
                <path
                  d={
                    up
                      ? `M ${cx} ${cy + size} L ${cx - size} ${cy - size} L ${cx + size} ${cy - size} Z`
                      : `M ${cx} ${cy - size} L ${cx - size} ${cy + size} L ${cx + size} ${cy + size} Z`
                  }
                  fill="var(--color-brand)"
                />
                <text
                  x={cx}
                  y={cy + (up ? -11 : 17)}
                  fill="var(--color-brand)"
                  fontSize="9.5"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {marker.label}
                </text>
              </g>
            );
          })}

          {timeTicks.map(({ candle, i }) => (
            <text
              key={candle.t}
              x={geometry.x(i)}
              y={HEIGHT - 8}
              fill="var(--color-muted)"
              fontSize="10"
              textAnchor="middle"
            >
              {formatTime(candle.t)}
            </text>
          ))}
        </svg>
      </div>

      {showControls && total > 20 ? (
        <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-line pt-3">
          <label className="flex min-w-56 flex-1 items-center gap-3">
            <span className="shrink-0 text-[11px] font-medium tracking-wide text-muted uppercase">
              Zoom
            </span>
            <input
              type="range"
              min={Math.min(20, total)}
              max={total}
              step={2}
              value={Math.min(visible, total)}
              onChange={(e) => setVisible(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full accent-brand"
              aria-label="Número de velas visibles"
            />
          </label>
          <span className="text-[11px] text-muted tabular-nums">
            {slice.length} de {total} velas
          </span>
        </div>
      ) : null}
    </div>
  );
}
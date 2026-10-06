import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Minus, Info } from "lucide-react";
import type { ChartSpec } from "~/types";
import { CandleChart } from "./CandleChart";
import { IndicatorChart } from "./IndicatorChart";
import { Badge, EducationalBadge } from "~/components/ui";
import { cn } from "~/utils/cn";
import { formatNumber, formatPercent } from "~/utils/format";

interface FrameProps {
  caption: string;
  description: string;
  meta?: string;
  children: React.ReactNode;
  legend?: { label: string; color: string; dashed?: boolean }[];
  className?: string;
}

function ChartFrame({ caption, description, meta, children, legend, className }: FrameProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[16px] border border-line bg-surface shadow-soft",
        className,
      )}
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2/60 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-ink">{caption}</p>
          {meta ? <p className="text-[11px] text-muted">{meta}</p> : null}
        </div>
        <EducationalBadge />
      </figcaption>

      <div className="px-2 pt-3 sm:px-3">{children}</div>

      {legend?.length ? (
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-4 pt-1 pb-3 sm:px-5">
          {legend.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5 text-[11px] text-muted">
              <span
                className="h-0.5 w-4 rounded-full"
                style={{
                  background: item.dashed
                    ? `repeating-linear-gradient(90deg, ${item.color} 0 4px, transparent 4px 7px)`
                    : item.color,
                }}
                aria-hidden="true"
              />
              {item.label}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="flex gap-2.5 border-t border-line bg-surface-2/40 px-4 py-3.5 sm:px-5">
        <Info className="mt-0.5 size-3.5 shrink-0 text-muted" aria-hidden="true" />
        <p className="text-[12.5px] leading-relaxed text-muted">{description}</p>
      </div>
    </figure>
  );
}

function riskRewardSummary(scenario: {
  entry: number;
  stopLoss: number;
  takeProfit: number;
  direction: "long" | "short";
  narrative: string;
}) {
  const risk = Math.abs(scenario.entry - scenario.stopLoss);
  const reward = Math.abs(scenario.takeProfit - scenario.entry);
  const riskPct = (risk / scenario.entry) * 100;
  const rewardPct = (reward / scenario.entry) * 100;
  const rr = risk > 0 ? reward / risk : 0;
  const decimals = scenario.entry > 1000 ? 2 : scenario.entry > 5 ? 2 : 4;

  const rows = [
    {
      label: "Entrada",
      value: formatNumber(scenario.entry, decimals),
      sub: "Precio de referencia",
      tone: "text-ink",
    },
    {
      label: "Stop Loss",
      value: formatNumber(scenario.stopLoss, decimals),
      sub: `Riesgo ${formatNumber(risk, decimals)} (${formatPercent(riskPct, 2)})`,
      tone: "text-bear",
    },
    {
      label: "Take Profit",
      value: formatNumber(scenario.takeProfit, decimals),
      sub: `Beneficio ${formatNumber(reward, decimals)} (${formatPercent(rewardPct, 2)})`,
      tone: "text-bull",
    },
  ];

  return (
    <div className="border-t border-line bg-surface-2/40 px-4 py-4 sm:px-5">
      <div className="grid gap-3 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-line bg-surface px-3.5 py-3">
            <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">
              {row.label}
            </p>
            <p className={cn("text-lg font-semibold tabular-nums", row.tone)}>{row.value}</p>
            <p className="text-[11px] text-muted tabular-nums">{row.sub}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12.5px] text-ink-2">
        Relación riesgo/beneficio:{" "}
        <strong className="text-ink tabular-nums">{formatNumber(rr, 2)} : 1</strong> · Con esta
        distribución necesitarías acertar al menos un{" "}
        <strong className="text-ink tabular-nums">{formatPercent((1 / (1 + rr)) * 100, 1)}</strong>{" "}
        de las operaciones solo para no perder dinero.
      </p>
    </div>
  );
}

export function ChartRenderer({
  spec,
  className,
  showControls = true,
}: {
  spec: ChartSpec;
  className?: string;
  showControls?: boolean;
}) {
  const [scenarioIndex, setScenarioIndex] = useState(0);

  if (spec.kind === "candles") {
    return (
      <ChartFrame
        caption={spec.caption}
        description={spec.description}
        meta={`Datos ficticios · ${spec.candles.length} velas · temporalidad de ejemplo: ${spec.timeframes?.[0] ?? "1h"}`}
        legend={[
          ...(spec.overlays ?? []).map((o) => ({
            label: o.label,
            color: o.color,
            dashed: o.dashed,
          })),
          ...(spec.levels ?? [])
            .filter((l) => l.kind === "support" || l.kind === "resistance")
            .map((l) => ({ label: l.label, color: l.kind === "support" ? "#2ec99a" : "#ff5f6a", dashed: true })),
          ...(spec.levels ?? [])
            .filter((l) => l.kind === "entry" || l.kind === "stop" || l.kind === "target")
            .map((l) => ({
              label: l.label,
              color:
                l.kind === "entry" ? "#5f8fff" : l.kind === "stop" ? "#ff5f6a" : "#2ec99a",
            })),
        ]}
        className={className}
      >
        <CandleChart spec={spec} showControls={showControls} />
      </ChartFrame>
    );
  }

  if (spec.kind === "indicator") {
    const legend =
      spec.indicator === "rsi"
        ? [
            { label: "RSI (14)", color: "#5f8fff" },
            { label: "Sobrecompra 70", color: "#ff5f6a", dashed: true },
            { label: "Sobreventa 30", color: "#2ec99a", dashed: true },
          ]
        : spec.indicator === "macd"
          ? [
              { label: "MACD (12, 26, 9)", color: "#5f8fff" },
              { label: "Señal", color: "#f0b429", dashed: true },
              { label: "Histograma", color: "#2ec99a" },
            ]
          : [
              { label: "Banda superior", color: "#8794a8" },
              { label: "Media 20", color: "#f0b429", dashed: true },
              { label: "Banda inferior", color: "#8794a8" },
            ];

    return (
      <ChartFrame
        caption={spec.caption}
        description={spec.description}
        meta={`Datos ficticios · ${spec.candles.length} velas · panel superior: precio`}
        legend={legend}
        className={className}
      >
        <IndicatorChart spec={spec} />
      </ChartFrame>
    );
  }

  const swings = spec.swings ?? [];
  const active = swings[scenarioIndex] ?? swings[0];
  const tabs = [
    { label: "El precio sube", icon: <ArrowUpRight className="size-3.5" aria-hidden="true" /> },
    { label: "El precio baja", icon: <ArrowDownRight className="size-3.5" aria-hidden="true" /> },
    { label: "El precio se queda igual", icon: <Minus className="size-3.5" aria-hidden="true" /> },
  ];

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[16px] border border-line bg-surface shadow-soft",
        className,
      )}
    >
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-2/60 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-ink">{spec.caption}</p>
          <p className="text-[11px] text-muted">Datos ficticios · tres desenlaces posibles</p>
        </div>
        <EducationalBadge />
      </figcaption>

      <div className="flex flex-wrap gap-1.5 border-b border-line px-4 py-3 sm:px-5">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setScenarioIndex(index)}
            aria-pressed={index === scenarioIndex}
            disabled={!swings[index]}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] font-medium transition-colors",
              index === scenarioIndex
                ? "bg-brand text-brand-ink shadow-soft"
                : "text-muted hover:bg-surface-2 hover:text-ink",
              !swings[index] && "pointer-events-none opacity-40",
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {active ? (
        <div className="px-2 pt-3 sm:px-3">
          <CandleChart spec={active} showControls={false} />
        </div>
      ) : null}

      {riskRewardSummary(spec.scenario)}

      <div className="flex gap-2.5 border-t border-line bg-surface-2/40 px-4 py-3.5 sm:px-5">
        <Info className="mt-0.5 size-3.5 shrink-0 text-muted" aria-hidden="true" />
        <p className="text-[12.5px] leading-relaxed text-muted">{spec.description}</p>
      </div>
      {spec.scenario.narrative ? (
        <div className="px-4 pb-4 sm:px-5">
          <Badge tone="brand">Cómo se lee</Badge>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
            {spec.scenario.narrative}
          </p>
        </div>
      ) : null}
    </figure>
  );
}
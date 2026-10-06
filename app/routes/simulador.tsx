import type { MetaFunction } from "react-router";
import { useMemo, useState } from "react";
import { TriangleAlert } from "lucide-react";
import {
  Alert,
  Badge,
  Card,
  Container,
  Field,
  NumberInput,
  Section,
  SegmentedControl,
  Select,
  Slider,
} from "~/components/ui";
import {
  calculatePosition,
  DEFAULT_INPUT,
  INSTRUMENT_LABELS,
  SIM_PRESETS,
  type InstrumentKind,
  type PositionInput,
} from "~/utils/riskMath";
import { formatCurrency, formatNumber, formatPercent, formatRatio } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Simulador de riesgo y posición",
    description:
      "Calcula el tamaño de posición, el riesgo en dinero y el punto de equilibrio con datos ficticios, sin conexión con ningún broker.",
  }, { location });

export default function Simulador() {
  const [input, setInput] = useState<PositionInput>(DEFAULT_INPUT);

  const result = useMemo(() => calculatePosition(input), [input]);

  function update<K extends keyof PositionInput>(key: K, value: PositionInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function flipStop() {
    setInput((prev) => {
      const distance = Math.abs(prev.entry - prev.stopLoss);
      return {
        ...prev,
        stopLoss: prev.direction === "long" ? prev.entry - distance : prev.entry + distance,
      };
    });
  }

  const rows = [
    { label: "Riesgo en dinero", value: formatCurrency(result.riskAmount), tone: "text-bear" },
    {
      label: "Distancia al stop",
      value: `${formatNumber(result.stopDistance, 2)} (${formatPercent(result.stopDistancePct, 2)})`,
      tone: "text-ink",
    },
    {
      label: "Distancia al objetivo",
      value: `${formatNumber(result.rewardDistance, 2)} (${formatPercent(result.rewardDistancePct, 2)})`,
      tone: "text-ink",
    },
    { label: "Relación riesgo/beneficio", value: formatRatio(result.riskRewardRatio), tone: "text-ink" },
    {
      label: "Acierto mínimo",
      value: formatPercent(result.breakEvenWinRate, 1),
      tone: "text-ink",
    },
    {
      label: "Tamaño de posición",
      value: `${formatNumber(result.positionSizeLabel, 4)} ${result.positionSizeUnit}`,
      tone: "text-brand",
    },
    { label: "Valor nocional", value: formatCurrency(result.notionalValue), tone: "text-ink" },
    {
      label: "Margen necesario",
      value: formatCurrency(result.marginRequired),
      tone: "text-ink",
    },
    {
      label: "Pérdida con costes",
      value: formatCurrency(result.potentialLoss),
      tone: "text-bear",
    },
    {
      label: "Beneficio neto",
      value: formatCurrency(result.potentialProfit),
      tone: "text-bull",
    },
    {
      label: "Riesgo efectivo",
      value: formatPercent(result.effectiveRiskPct, 2),
      tone: "text-ink",
    },
    {
      label: "Margen libre restante",
      value: formatCurrency(input.capital - result.marginRequired),
      tone: "text-ink",
    },
  ];

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr]">
          <Card className="h-fit p-6">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold text-ink">Datos de la operación</h1>
            </div>
            <p className="mt-2 text-sm text-muted">
              Todos los números son inventados. Esta herramienta no se conecta con ningún broker.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <Field label="Tipo de activo">
                <Select
                  value={input.instrument}
                  onChange={(event) => update("instrument", event.target.value as InstrumentKind)}
                >
                  {(Object.keys(INSTRUMENT_LABELS) as InstrumentKind[]).map((key) => (
                    <option key={key} value={key}>
                      {INSTRUMENT_LABELS[key]}
                    </option>
                  ))}
                </Select>
              </Field>

              <div>
                <p className="mb-1.5 text-[12px] font-medium tracking-wide text-muted uppercase">
                  Dirección
                </p>
                <SegmentedControl
                  ariaLabel="Dirección de la operación"
                  value={input.direction}
                  onChange={(value) => {
                    setInput((prev) => {
                      const distance = Math.abs(prev.entry - prev.stopLoss);
                      const reward = Math.abs(prev.takeProfit - prev.entry);
                      return {
                        ...prev,
                        direction: value,
                        stopLoss: value === "long" ? prev.entry - distance : prev.entry + distance,
takeProfit:
                           value === "long" ? prev.entry + reward : prev.entry - reward,
                       };
                     });
                  }}
                  options={[
                    { value: "long", label: "Largo (compra)" },
                    { value: "short", label: "Corto (venta)" },
                  ]}
                />
              </div>

              <Field label="Capital de la cuenta">
                <NumberInput
                  value={input.capital}
                  min={0}
                  step={100}
                  onChange={(event) => update("capital", Number(event.target.value))}
                />
              </Field>

              <Slider
                label="Riesgo por operación"
                value={input.riskPct}
                onChange={(value) => update("riskPct", value)}
                min={0.1}
                max={5}
                step={0.1}
                format={(value) => formatPercent(value, 1)}
                ticks={[
                  { value: 0.1, label: "0,1 %" },
                  { value: 1, label: "1 %" },
                  { value: 2, label: "2 %" },
                  { value: 5, label: "5 %" },
                ]}
              />

              <Field label="Precio de entrada">
                <NumberInput
                  value={input.entry}
                  step={0.01}
                  onChange={(event) => update("entry", Number(event.target.value))}
                />
              </Field>

              <Field label="Stop loss" hint="En largo, por debajo de la entrada.">
                <div className="flex gap-2">
                  <NumberInput
                    value={input.stopLoss}
                    step={0.01}
                    onChange={(event) => update("stopLoss", Number(event.target.value))}
                  />
                  <button
                    type="button"
                    onClick={flipStop}
                    className="shrink-0 rounded-xl border border-line px-3 text-xs text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    Girar
                  </button>
                </div>
              </Field>

              <Field label="Take profit">
                <NumberInput
                  value={input.takeProfit}
                  step={0.01}
                  onChange={(event) => update("takeProfit", Number(event.target.value))}
                />
              </Field>

              <Slider
                label="Apalancamiento"
                value={input.leverage ?? 1}
                onChange={(value) => update("leverage", value)}
                min={1}
                max={100}
                step={1}
                format={(value) => `${value} : 1`}
              />

              {input.instrument === "forex" || input.instrument === "metal" ? (
                <>
                  <Field label="Spread" hint="En pips. Se aplica al entrar y al salir.">
                    <NumberInput
                      value={input.spreadPips ?? 0}
                      step={0.1}
                      onChange={(event) => update("spreadPips", Number(event.target.value))}
                    />
                  </Field>
                  <Field label="Comisión por lote">
                    <NumberInput
                      value={input.commissionPerLot ?? 0}
                      step={0.5}
                      onChange={(event) => update("commissionPerLot", Number(event.target.value))}
                    />
                  </Field>
                </>
              ) : null}
            </div>

            <div className="mt-7 border-t border-line pt-5">
              <p className="text-[12px] font-medium tracking-wide text-muted uppercase">
                Ejemplos precargados
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {SIM_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setInput(preset.input)}
                    className="rounded-xl border border-line bg-surface-2 px-3.5 py-2.5 text-left transition-colors hover:border-line-strong"
                  >
                    <span className="block text-[13px] font-medium text-ink">{preset.label}</span>
                    <span className="mt-0.5 block text-xs text-muted">{preset.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          <div className="min-w-0">
            {result.errors.length > 0 ? (
              <Alert tone="risk" title="Revisa estos datos" className="mb-4">
                <ul className="flex flex-col gap-1">
                  {result.errors.map((error, index) => (
                    <li key={index} className="flex gap-2">
                      <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      {error}
                    </li>
                  ))}
                </ul>
              </Alert>
            ) : null}

            {result.warnings.length > 0 ? (
              <Alert tone="info" title="Ten en cuenta" className="mb-4">
                <ul className="flex flex-col gap-1">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="flex gap-2">
                      <TriangleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      {warning}
                    </li>
                  ))}
                </ul>
              </Alert>
            ) : null}

            <Card className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-ink">Resultado</h2>
                <Badge tone={result.valid ? "bull" : "bear"}>
                  {result.valid ? "Cálculo válido" : "Datos inconsistentes"}
                </Badge>
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {rows.map((row) => (
                  <div key={row.label} className="rounded-xl border border-line bg-surface-2 px-4 py-3">
                    <dt className="text-[11px] tracking-wide text-muted uppercase">{row.label}</dt>
                    <dd className={cn("mt-1 text-[15px] font-semibold tabular-nums", row.tone)}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>

            <Card className="mt-4 p-6">
              <h2 className="text-lg font-semibold text-ink">Cómo leer estos números</h2>
              <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-ink-2">
                <p>
                  El <strong className="text-ink">tamaño de posición</strong> sale de dividir el
                  riesgo en dinero entre la distancia al stop loss. Si esa distancia es pequeña, el
                  tamaño crece; si es grande, el tamaño baja. El riesgo en dinero es siempre el
                  mismo.
                </p>
                <p>
                  El <strong className="text-ink">acierto mínimo</strong> es el porcentaje de
                  operaciones que necesitas ganar para no perder dinero con esa relación
                  riesgo/beneficio. Con 1:2, el 33,3 %. Con 1:1, el 50 %.
                </p>
                <p>
                  El <strong className="text-ink">apalancamiento</strong> no aparece en el cálculo
                  del riesgo: determina el margen bloqueado, no la pérdida. Subir el apalancamiento
                  sin cambiar el tamaño de posición no aumenta lo que pierdes.
                </p>
                <p>
                  La <strong className="text-ink">pérdida con costes</strong> incluye el spread y
                  la comisión. En markets de muchos pips de recorrido, esos costes pueden superar
                  con facilidad el 30 % del objetivo.
                </p>
              </div>
            </Card>

            <Alert tone="risk" className="mt-4" title="Esto no es asesoramiento financiero">
              Esta herramienta existe para entender la aritmética de la gestión de riesgo con
              números ficticios. No predice resultados y no sustituye a formarte antes de operar
              con dinero real.
            </Alert>
          </div>
        </div>
      </Container>
    </Section>
  );
}
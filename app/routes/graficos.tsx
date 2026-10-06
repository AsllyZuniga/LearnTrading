import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Gauge, Ruler, Sliders } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Badge,
  Card,
  Container,
  Section,
  SectionHeading,
  SegmentedControl,
} from "~/components/ui";
import { ChartRenderer } from "~/components/charts/ChartRenderer";
import { chartPresets } from "~/data/charts/presets";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Gráficos y datos ficticios",
    description:
      "Gráficos de velas, indicadores y gestión de riesgo generados con datos sintéticos para explicar conceptos sin depender de cotizaciones reales.",
  }, { location });

/**
 * Los presets no llevan grupo en los datos: la clasificación editorial vive en
 * la ruta para poder reordenarla sin tocar los gráficos.
 */
const GROUPS: { id: string; label: string; icon: typeof Sliders; ids: string[] }[] = [
  {
    id: "conceptos",
    label: "Conceptos",
    icon: Sliders,
    ids: [
      "soporte-resistencia",
      "rango",
      "ruptura",
      "pullback",
      "volatilidad",
      "mechazo-rechazo",
      "martillo",
      "sweep",
      "entrada-ruptura",
    ],
  },
  {
    id: "patrones",
    label: "Patrones",
    icon: Ruler,
    ids: ["doble-techo", "hombro-cabeza-hombro", "fibonacci", "cripto-24h", "escala-forex"],
  },
  {
    id: "riesgo",
    label: "Riesgo",
    icon: Gauge,
    ids: ["stop-loss", "cruce-medias", "rsi", "macd", "bollinger", "divergencia"],
  },
];

export default function Graficos() {
  const [group, setGroup] = useState(GROUPS[0].id);
  const [presetId, setPresetId] = useState(GROUPS[0].ids[0]);

  const groupPresets = useMemo(() => {
    const entry = GROUPS.find((item) => item.id === group) ?? GROUPS[0];
    return entry.ids
      .map((id) => chartPresets.find((preset) => preset.id === id))
      .filter((preset): preset is (typeof chartPresets)[number] => Boolean(preset));
  }, [group]);

  const active =
    groupPresets.find((preset) => preset.id === presetId) ?? groupPresets[0] ?? null;

  function selectGroup(id: string) {
    setGroup(id);
    const entry = GROUPS.find((item) => item.id === id);
    if (entry?.ids[0]) setPresetId(entry.ids[0]);
  }

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Gráficos"
          title="Ver los conceptos sobre el gráfico"
          description="Todas las series se generan con una semilla fija: son datos ficticios, pensados para explicar qué hace cada herramienta, no para anticipar precios."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <Card className="h-fit p-5">
            <SegmentedControl
              ariaLabel="Categoría del gráfico"
              value={group}
              onChange={selectGroup}
              options={GROUPS.map((entry) => ({ value: entry.id, label: entry.label }))}
            />

            <p className="mt-5 text-[12px] font-medium tracking-wide text-muted uppercase">
              Ejemplos
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {groupPresets.map((preset) => (
                <li key={preset.id}>
                  <button
                    type="button"
                    onClick={() => setPresetId(preset.id)}
                    aria-pressed={active?.id === preset.id}
                    className={cn(
                      "w-full rounded-xl px-3.5 py-2.5 text-left transition-colors",
                      active?.id === preset.id
                        ? "bg-brand/10 text-brand"
                        : "text-ink-2 hover:bg-surface-2",
                    )}
                  >
                    <span className="block text-[13px] font-medium">{preset.label}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">
                      {preset.summary}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          <div className="min-w-0">
            {active ? (
              <>
                <Card className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-ink">{active.label}</h2>
                    <Badge tone="neutral" size="sm">
                      Datos ficticios
                    </Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {active.summary}
                  </p>
                  <div className="mt-5">
                    <ChartRenderer spec={active.build()} />
                  </div>
                </Card>

                <Card className="mt-4 p-5 sm:p-6">
                  <h2 className="text-[15px] font-semibold text-ink">Siguiente paso</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    Este gráfico es una maqueta. Si quieres ver la aritmética del riesgo con tus
                    propios números, la calculadora te da tamaño de posición, pérdida y punto de
                    equilibrio.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to="/simulador"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-line px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-line-strong"
                    >
                      Calcular posición
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                    <Link
                      to="/ruta"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-line px-3.5 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-line-strong"
                    >
                      Ir a la ruta
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </>
            ) : (
              <Card className="border-dashed p-12 text-center">
                <p className="text-sm text-muted">Todavía no hay ejemplos en esta categoría.</p>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
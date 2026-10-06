import { ArrowRight, BookOpen, CandlestickChart, Calculator, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { ButtonLink, Container, Section, SectionHeading, Badge, Card, EducationalBadge } from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { ChartRenderer } from "~/components/charts/ChartRenderer";
import { buildPreset } from "~/data/charts/presets";
import { allPosts } from "~/data/blog";
import { allTerms } from "~/data/dictionary";
import { getTotalLessons, lessonsByLevel } from "~/data/lessons";
import { categories, DISCLAIMER_SHORT, LEVEL_ACCENT_CLASS, levels, site } from "~/data/site";
import { formatDate, truncate } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({ title: site.tagline, description: site.description }, { location });

const pillars = [
  {
    icon: BookOpen,
    title: "Lecciones progresivas",
    description:
      "Un recorrido ordenado en siete niveles: qué es el trading, cómo se lee un gráfico, cómo se controla el riesgo y qué hábitos cambian el resultado.",
    to: "/ruta",
    cta: "Ver la ruta",
  },
  {
    icon: CandlestickChart,
    title: "Gráficos explicados",
    description:
      "Cada concepto tiene un gráfico generado con datos ficticios y deterministas, con niveles, anotaciones y lectura paso a paso.",
    to: "/graficos",
    cta: "Abrir el laboratorio",
  },
  {
    icon: Calculator,
    title: "Simulador de riesgo",
    description:
      "Calcula tamaño de posición, riesgo en dinero y punto de equilibrio. Datos inventados, sin conexión con ningún broker.",
    to: "/simulador",
    cta: "Calcular una operación",
  },
  {
    icon: Layers,
    title: "Diccionario y artículos",
    description:
      `${allTerms.length} términos explicados uno por uno y artículos que desarrollan los temas que más confunden.`,
    to: "/diccionario",
    cta: "Consultar el diccionario",
  },
];

const firstLesson = lessonsByLevel[0]?.lessons[0];
const heroChart = buildPreset("tendencia-alcista");

export default function Home() {
  const latestPosts = allPosts.slice(0, 3);
  const totalLessons = getTotalLessons();

  return (
    <>
      <Section className="pt-10 pb-16 sm:pt-16 sm:pb-24">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">Proyecto educativo</Badge>
                <Badge tone="warn" icon={<ShieldCheck className="size-3" aria-hidden="true" />}>
                  Datos ficticios
                </Badge>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Aprende trading desde cero,{" "}
                <span className="text-brand">con el riesgo por delante</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                {site.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/ruta" size="lg">
                  Empezar por el nivel 1
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink to={firstLesson ? `/ruta/${levels[0].slug}/${firstLesson.slug}` : "/ruta"} variant="secondary" size="lg">
                  Ver una lección de ejemplo
                </ButtonLink>
              </div>

              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {[
                  { label: "Niveles", value: levels.length },
                  { label: "Lecciones", value: totalLessons },
                  { label: "Términos", value: allTerms.length },
                  { label: "Artículos", value: allPosts.length },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] tracking-wide text-muted uppercase">{stat.label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-ink tabular-nums">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <ChartRenderer spec={heroChart} />
              <p className="mt-3 text-xs leading-relaxed text-muted">{DISCLAIMER_SHORT}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="alt">
        <Container size="wide">
          <SectionHeading
            eyebrow="Qué incluye"
            title="Cuatro piezas que juntas hacen que se aprenda"
            description="Cada parte resuelve un problema distinto: entender el lenguaje, ver el precio, controlar el dinero y saber cuándo parar."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.to} delay={index * 70}>
                <Card interactive className="h-full p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
                  <Link
                    to={pillar.to}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-strong"
                  >
                    {pillar.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            eyebrow="Ruta de aprendizaje"
            title="Siete niveles, en orden"
            description="Cada nivel tiene un objetivo concreto. Puedes avanzar en cualquier momento, aunque el orden recomendado empieza por los fundamentos."
            action={
              <ButtonLink to="/ruta" variant="secondary" size="sm">
                Ver el recorrido completo
              </ButtonLink>
            }
          />

          <ol className="mt-10 grid gap-4 lg:grid-cols-2">
            {lessonsByLevel.map(({ level, lessons }, index) => {
              const accent = LEVEL_ACCENT_CLASS[level.accent];
              return (
                <Reveal as="li" key={level.slug} delay={index * 50}>
                  <Link
                    to={`/ruta/${level.slug}`}
                    className="group flex h-full gap-5 rounded-[14px] border border-line bg-surface p-5 transition-all hover:border-line-strong hover:shadow-lift"
                  >
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-xl text-sm font-bold tabular-nums",
                        accent.bg,
                        accent.text,
                      )}
                    >
                      {level.id}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[15px] font-semibold text-ink">{level.title}</h3>
                        <span className="text-[11px] text-muted tabular-nums">
                          {lessons.length} {lessons.length === 1 ? "lección" : "lecciones"}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-muted">{level.tagline}</p>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-2">{truncate(level.description, 150)}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      <Section tone="alt">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Temario"
                title="Once categorías para no dejar huecos"
                description="Puedes filtrar por categoría cuando buscas un concepto concreto."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <li key={category.id} className="rounded-xl border border-line bg-surface px-4 py-3">
                    <p className="text-[13px] font-semibold text-ink">{category.label}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{category.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="Blog"
                title="Artículos para approfondir"
                description="Sin promesas de rentabilidad: solo explicación de conceptos y errores frecuentes."
                action={
                  <ButtonLink to="/blog" variant="secondary" size="sm">
                    Ver todos los artículos
                  </ButtonLink>
                }
              />
              <ul className="mt-8 flex flex-col gap-3">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                        <EducationalBadge label={categories.find((c) => c.id === post.category)?.shortLabel ?? "Artículo"} />
                        <span>{post.readMinutes} min</span>
                        <span>·</span>
                        <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                      </div>
                      <p className="mt-2 text-[15px] font-semibold text-ink">{post.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow" className="text-center">
          <Sparkles className="mx-auto size-6 text-brand" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
            Empieza por el principio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            El primer nivel está pensado para alguien que no sabe nada: qué es el trading, qué
            mercados existen y por qué el control del riesgo importa más que cualquier indicador.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/ruta" size="lg">
              <Compass className="size-4" aria-hidden="true" />
              Abrir la ruta de aprendizaje
            </ButtonLink>
            <ButtonLink to="/dashboard" variant="secondary" size="lg">
              Ver mi progreso
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  Icon,
  ProgressBar,
  Section,
  SectionHeading,
} from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { useProgress } from "~/hooks";
import { lessonsByLevel } from "~/data/lessons";
import { categories, LEVEL_ACCENT_CLASS } from "~/data/site";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Ruta de aprendizaje de trading",
    description:
      "Siete niveles progresivos para aprender trading desde cero: fundamentos, gráficos, gestión de operaciones, análisis técnico, estrategias, gestión del riesgo y psicología.",
  }, { location });

export default function Ruta() {
  const progress = useProgress();
  const completed = new Set(progress.completedLessons);
  const totalLessons = lessonsByLevel.reduce((acc, entry) => acc + entry.lessons.length, 0);
  const doneCount = lessonsByLevel.reduce(
    (acc, entry) => acc + entry.lessons.filter((lesson) => completed.has(lesson.slug)).length,
    0,
  );

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Ruta de aprendizaje"
          title="De cero a operar con un método"
          description="El recorrido está pensado para que cada nivel se apoye en el anterior. Puedes saltarte lo que ya domines, pero el orden recomendado evita huecos."
        />

        <Card className="mt-8 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[15px] font-semibold text-ink">
                {doneCount} de {totalLessons} lecciones completadas
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Tu progreso se guarda solo en este navegador.
              </p>
            </div>
            <ButtonLink to="/dashboard" variant="secondary" size="sm">
              Ver dashboard
            </ButtonLink>
          </div>
          <ProgressBar
            className="mt-4"
            value={doneCount}
            max={totalLessons}
            label="Progreso total de la ruta"
          />
        </Card>

        <ol className="mt-10 flex flex-col gap-6">
          {lessonsByLevel.map(({ level, lessons }, index) => {
            const accent = LEVEL_ACCENT_CLASS[level.accent];
            const done = lessons.filter((lesson) => completed.has(lesson.slug)).length;

            return (
              <Reveal as="li" key={level.slug} delay={index * 60}>
                <Card className="overflow-hidden">
                  <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
                    <span
                      className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-xl",
                        accent.bg,
                        accent.text,
                      )}
                    >
                      <Icon name={level.icon} className="size-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge tone="neutral">Nivel {level.id}</Badge>
                        <h2 className="text-lg font-semibold text-ink">{level.title}</h2>
                      </div>
                      <p className="mt-1 text-sm text-brand">{level.tagline}</p>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-2">
                        {level.description}
                      </p>

                      {lessons.length > 0 ? (
                        <>
                          <ProgressBar
                            className="mt-5 max-w-md"
                            value={done}
                            max={lessons.length}
                            label={`Progreso del nivel ${level.id}`}
                          />
                          <p className="mt-2 text-xs text-muted tabular-nums">
                            {done} de {lessons.length} completadas
                          </p>
                        </>
                      ) : (
                        <p className="mt-4 text-xs text-muted">
                          Las lecciones de este nivel están en preparación.
                        </p>
                      )}

                      <div className="mt-5">
                        <ButtonLink to={`/ruta/${level.slug}`} size="sm" variant="secondary">
                          {lessons.length > 0 ? "Abrir el nivel" : "Ver el temario"}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </ButtonLink>
                      </div>
                    </div>
                  </div>

                  {lessons.length > 0 ? (
                    <ul className="divide-y divide-line border-t border-line bg-surface-2/30">
                      {lessons.map((lesson) => {
                        const isDone = completed.has(lesson.slug);
                        return (
                          <li key={lesson.slug}>
                            <Link
                              to={`/ruta/${level.slug}/${lesson.slug}`}
                              className="flex items-center gap-3 px-6 py-3.5 text-sm transition-colors hover:bg-surface-2"
                            >
                              <span
                                className={cn(
                                  "grid size-5 shrink-0 place-items-center rounded-full border",
                                  isDone ? "border-bull bg-bull text-canvas" : "border-line-strong",
                                )}
                                aria-hidden="true"
                              >
                                {isDone ? <Check className="size-3" /> : null}
                              </span>
                              <span className={cn(isDone ? "text-muted line-through" : "text-ink-2")}>
                                {lesson.shortTitle}
                              </span>
                              <span className="ml-auto shrink-0 text-[11px] text-muted tabular-nums">
                                {lesson.readMinutes} min
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </Card>
              </Reveal>
            );
          })}
        </ol>

        <SectionHeading
          className="mt-14"
          eyebrow="Categorías"
          title="Ocho formas de usar este sitio"
          description="Elige la entrada que necesitas en este momento."
        />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <li key={category.id}>
              <Card className="h-full p-5">
                <p className="text-[14px] font-semibold text-ink">{category.label}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  {category.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
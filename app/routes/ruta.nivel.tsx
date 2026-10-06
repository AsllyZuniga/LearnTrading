import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Check, Clock, TriangleAlert } from "lucide-react";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  EmptyState,
  Icon,
  Section,
} from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { useLessonState } from "~/hooks";
import { getLessonsForLevel } from "~/data/lessons";
import { categoryMap, LEVEL_ACCENT_CLASS, levelMap, levels, site } from "~/data/site";
import { truncate } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export function loader({ params }: { params: { levelSlug?: string } }) {
  const level = params.levelSlug ? levelMap.get(params.levelSlug) : undefined;
  if (!level) throw new Response("Nivel no encontrado", { status: 404 });
  return { levelSlug: level.slug };
}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const level = data?.levelSlug ? levelMap.get(data.levelSlug) : undefined;
  if (!level) return [{ title: `Nivel no encontrado · ${site.name}` }];
  return pageMeta(
    { title: `Nivel ${level.id}: ${level.title}`, description: level.description },
    { location },
  );
};

export default function NivelRoute({ loaderData }: { loaderData: { levelSlug: string } }) {
  const level = levelMap.get(loaderData.levelSlug);
  if (!level) return null;

  const lessons = getLessonsForLevel(level.id);
  const accent = LEVEL_ACCENT_CLASS[level.accent];
  const previousLevel = levels.filter((entry) => entry.id < level.id).at(-1);
  const nextLevel = levels.find((entry) => entry.id > level.id);

  return (
    <Section>
      <Container size="wide">
        <Link
          to="/ruta"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Ruta de aprendizaje
        </Link>

        <div className="mt-6 flex items-start gap-5">
          <span
            className={cn(
              "grid size-14 shrink-0 place-items-center rounded-2xl",
              accent.bg,
              accent.text,
            )}
          >
            <Icon name={level.icon} className="size-6" />
          </span>
          <div>
            <Badge tone="neutral">Nivel {level.id} de 7</Badge>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {level.title}
            </h1>
            <p className="mt-2 text-[15px] text-brand">{level.tagline}</p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-2">{level.description}</p>

        {lessons.length === 0 ? (
          <EmptyState
            className="mt-10"
            icon={<TriangleAlert className="size-6" aria-hidden="true" />}
            title="Este nivel está en preparación"
            description="Las lecciones se están escribiendo con el mismo cuidado que las del primer nivel. Mientras tanto puedes avanzar por los niveles que ya están disponibles."
            action={
              <ButtonLink to="/ruta" variant="secondary" size="sm">
                Volver a la ruta
              </ButtonLink>
            }
          />
        ) : (
          <>
            <ul className="mt-10 flex flex-col gap-4">
              {lessons.map((lesson, index) => (
                <Reveal as="li" key={lesson.slug} delay={index * 60}>
                  <LessonRow
                    lessonSlug={lesson.slug}
                    shortTitle={lesson.shortTitle}
                    summary={lesson.summary}
                    category={categoryMap.get(lesson.category)?.shortLabel ?? lesson.category}
                    readMinutes={lesson.readMinutes}
                    levelSlug={level.slug}
                    index={index + 1}
                  />
                </Reveal>
              ))}
            </ul>

            <nav
              aria-label="Navegación entre niveles"
              className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between"
            >
              {previousLevel ? (
                <ButtonLink to={`/ruta/${previousLevel.slug}`} variant="ghost" size="sm">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Nivel {previousLevel.id}: {previousLevel.title}
                </ButtonLink>
              ) : (
                <span />
              )}
              {nextLevel ? (
                <ButtonLink to={`/ruta/${nextLevel.slug}`} variant="secondary" size="sm">
                  Nivel {nextLevel.id}: {nextLevel.title}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              ) : null}
            </nav>
          </>
        )}
      </Container>
    </Section>
  );
}

function LessonRow({
  lessonSlug,
  shortTitle,
  summary,
  category,
  readMinutes,
  levelSlug,
  index,
}: {
  lessonSlug: string;
  shortTitle: string;
  summary: string;
  category: string;
  readMinutes: number;
  levelSlug: string;
  index: number;
}) {
  const { isCompleted } = useLessonState(lessonSlug);

  return (
    <Card interactive as={Link} to={`/ruta/${levelSlug}/${lessonSlug}`} className="block p-5">
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-xl text-sm font-semibold tabular-nums",
            isCompleted ? "bg-bull/12 text-bull" : "bg-surface-2 text-muted",
          )}
        >
          {isCompleted ? <Check className="size-4" aria-hidden="true" /> : index}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-ink">{shortTitle}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{truncate(summary, 160)}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" aria-hidden="true" />
              {readMinutes} min
            </span>
            <span aria-hidden="true">·</span>
            <span>{category}</span>
          </div>
        </div>
        <ArrowRight className="mt-1 size-4 shrink-0 text-muted" aria-hidden="true" />
      </div>
    </Card>
  );
}
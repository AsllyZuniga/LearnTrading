import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import {
  ArrowRight,
  BookMarked,
  CheckCircle2,
  Circle,
  Flame,
  RotateCcw,
  Target,
  Trash2,
} from "lucide-react";
import { useSyncExternalStore } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Section,
  SectionHeading,
} from "~/components/ui";
import { getLesson, lessonsByLevel } from "~/data/lessons";
import { levels } from "~/data/site";
import { progressStore } from "~/hooks/useProgress";
import { formatDate, formatPercent } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Tu progreso",
    description:
      "Lecciones completadas, cuestionarios resueltos y horas de estudio. Todo se guarda solo en tu navegador.",
  }, { location });

export default function Dashboard() {
  const state = useSyncExternalStore(
    progressStore.subscribe,
    progressStore.getSnapshot,
    progressStore.getServerSnapshot,
  );

  const completed = state.completedLessons
    .map((slug) => getLesson(slug))
    .filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson));

  const saved = state.savedLessons
    .map((slug) => getLesson(slug))
    .filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson));

  const quizEntries = Object.entries(state.quiz);
  const averageScore =
    quizEntries.length > 0
      ? quizEntries.reduce((acc, [, result]) => acc + result.score / result.total, 0) /
        quizEntries.length
      : 0;

  const totalStudyMinutes = Object.values(state.studyLog).reduce((acc, value) => acc + value, 0);
  const streak = Object.keys(state.studyLog).length;

  const levelCounts = levels.map((level) => {
    const total = lessonsByLevel.find((entry) => entry.level.id === level.id)?.lessons.length ?? 0;
    const done = completed.filter((lesson) => lesson.levelId === level.id).length;
    const pct = total > 0 ? Math.min(100, (done / total) * 100) : 0;
    return { level, done, total, pct };
  });

  const hasAnyData =
    completed.length > 0 || saved.length > 0 || quizEntries.length > 0 || totalStudyMinutes > 0;

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Panel"
          title="Tu progreso"
          description="Todo se guarda en el almacenamiento local de este navegador. Si borras los datos del sitio, este panel vuelve a empezar."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            icon={CheckCircle2}
            label="Lecciones completadas"
            value={String(completed.length)}
          />
          <Stat
            icon={Target}
            label="Cuestionarios resueltos"
            value={String(quizEntries.length)}
          />
          <Stat
            icon={Flame}
            label="Días con estudio"
            value={String(streak)}
          />
          <Stat
            icon={BookMarked}
            label="Puntos de quiz"
            value={quizEntries.length > 0 ? formatPercent(averageScore, 0) : "—"}
          />
        </div>

        {hasAnyData ? (
          <>
            <Card className="mt-6 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-[15px] font-semibold text-ink">Progreso por nivel</h2>
                <Button variant="ghost" size="sm" onClick={() => progressStore.reset()}>
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  Reiniciar
                </Button>
              </div>

              <ul className="mt-5 flex flex-col gap-4">
                {levelCounts.map(({ level, done, total, pct }) => (
                  <li key={level.id}>
                    <div className="flex items-center justify-between gap-3 text-[13px]">
                      <span className="truncate text-ink-2">
                        <span className="font-medium text-ink">Nivel {level.id}</span>{" "}
                        {level.title}
                      </span>
                      <span className="shrink-0 text-muted tabular-nums">
                        {total > 0 ? `${done} / ${total}` : "sin lecciones"}
                      </span>
                    </div>
                    <div
                      className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2"
                      role="progressbar"
                      aria-valuenow={done}
                      aria-valuemin={0}
                      aria-valuemax={Math.max(total, 1)}
                      aria-label={`Progreso del nivel ${level.id}`}
                    >
                      <div
                        className="h-full rounded-full bg-brand transition-[width]"
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <Card className="p-5 sm:p-6">
                <h2 className="text-[15px] font-semibold text-ink">
                  Lecciones completadas ({completed.length})
                </h2>
                {completed.length === 0 ? (
                  <p className="mt-3 text-sm text-muted">Todavía no has completado ninguna lección.</p>
                ) : (
                  <ul className="mt-4 flex flex-col gap-2">
                    {completed.map((lesson) => {
                      const level = levels.find((entry) => entry.id === lesson.levelId);
                      return (
                        <li key={lesson.slug}>
                          <Link
                            to={`/ruta/${level?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 transition-colors hover:border-line-strong"
                          >
                            <span className="min-w-0">
                              <span className="block text-[13px] font-medium text-ink">
                                {lesson.shortTitle}
                              </span>
                              <span className="block text-xs text-muted">
                                Nivel {lesson.levelId} · {lesson.readMinutes} min
                              </span>
                            </span>
                            <ArrowRight
                              className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </Card>

              <Card className="p-5 sm:p-6">
                <h2 className="text-[15px] font-semibold text-ink">
                  Resultados de quiz ({quizEntries.length})
                </h2>
                {quizEntries.length === 0 ? (
                  <p className="mt-3 text-sm text-muted">
                    Cuando respondas el cuestionario de una lección, el resultado aparecerá aquí.
                  </p>
                ) : (
                  <ul className="mt-4 flex flex-col gap-3">
                    {quizEntries
                      .sort((a, b) => b[1].completedAt.localeCompare(a[1].completedAt))
                      .map(([slug, result]) => {
                        const lesson = getLesson(slug);
                        const pct = result.score / result.total;
                        return (
                          <li key={slug} className="rounded-xl border border-line px-4 py-3">
                            <div className="flex items-center justify-between gap-3">
                              <span className="truncate text-[13px] font-medium text-ink">
                                {lesson?.shortTitle ?? slug}
                              </span>
                              <Badge tone={pct >= 0.8 ? "bull" : pct >= 0.5 ? "warn" : "bear"} size="sm">
                                {result.score} / {result.total}
                              </Badge>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                                <div
                                  className={cn(
                                    "h-full rounded-full",
                                    pct >= 0.8 ? "bg-bull" : pct >= 0.5 ? "bg-warn" : "bg-bear",
                                  )}
                                  style={{ width: `${pct * 100}%` }}
                                />
                              </div>
                              <time dateTime={result.completedAt} className="text-[11px] text-muted">
                                {formatDate(result.completedAt)}
                              </time>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </Card>
            </div>

            {saved.length > 0 ? (
              <Card className="mt-4 p-5 sm:p-6">
                <h2 className="text-[15px] font-semibold text-ink">
                  Lecciones guardadas ({saved.length})
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {saved.map((lesson) => (
                    <li key={lesson.slug}>
                      <Link
                        to={`/ruta/${levels.find((entry) => entry.id === lesson.levelId)?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`}
                        className="inline-flex rounded-full border border-line bg-surface-2 px-3 py-1.5 text-[12px] text-ink-2 transition-colors hover:border-line-strong"
                      >
                        {lesson.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}

            {totalStudyMinutes > 0 ? (
              <Card className="mt-4 p-5">
                <p className="text-[13px] text-muted">
                  Sesiones registradas: {totalStudyMinutes}. Última visita:{" "}
                  {state.lastVisited ?? "sin datos"}.
                </p>
              </Card>
            ) : null}

            <div className="mt-6 flex justify-end">
              <Button variant="secondary" size="sm" onClick={() => progressStore.reset()}>
                <Trash2 className="size-3.5" aria-hidden="true" />
                Borrar progreso
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-8 grid gap-4">
            <Card className="border-dashed p-10 text-center">
              <Circle className="mx-auto size-6 text-muted" aria-hidden="true" />
              <h2 className="mt-3 text-lg font-semibold text-ink">Aún no hay progreso registrado</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                Marca una lección como completada o responde a su cuestionario y este panel se
                llenará automáticamente.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  to="/ruta"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-medium text-ink-inverse"
                >
                  Empezar por el Nivel 1
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>

            <Alert tone="info" title="Dónde se guardan estos datos">
              El progreso vive en el almacenamiento local de tu navegador, bajo la clave{" "}
              <code>ta:progress:v1</code>. No hay servidor ni cuenta de usuario detrás.
            </Alert>
          </div>
        )}

        </Container>
    </Section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CheckCircle2;
  label: string;
  value: string;
}) {
  return (
    <Card className="p-5">
      <Icon className="size-4 text-brand" aria-hidden="true" />
      <p className="mt-3 text-2xl font-semibold text-ink tabular-nums">{value}</p>
      <p className="mt-1 text-[12px] leading-snug text-muted">{label}</p>
    </Card>
  );
}
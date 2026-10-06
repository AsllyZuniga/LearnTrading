import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Check,
  CircleAlert,
  Lightbulb,
  Repeat,
  X,
} from "lucide-react";
import {
  Alert,
  Badge,
  Button,
  ButtonLink,
  Card,
  Container,
  EducationalBadge,
  Prose,
  Section,
} from "~/components/ui";
import { ChartRenderer } from "~/components/charts/ChartRenderer";
import { AdSlot } from "~/components/ads/AdSlot";
import { Reveal } from "~/components/layout/Reveal";
import { getLesson, getLessonNeighbors } from "~/data/lessons";
import { getTerm } from "~/data/dictionary";
import { categoryMap, DISCLAIMER_SHORT, levelMap, levels, site } from "~/data/site";
import { useLessonState, toggleLessonComplete, toggleLessonSaved, saveQuizResult } from "~/hooks";
import { formatNumber, formatPercent } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export function loader({ params }: { params: { levelSlug?: string; lessonSlug?: string } }) {
  const lesson = getLesson(params.lessonSlug);
  if (!lesson) throw new Response("Lección no encontrada", { status: 404 });

  const level = levels.find((entry) => entry.id === lesson.levelId);
  if (!level) throw new Response("Nivel no encontrado", { status: 404 });

  return { levelSlug: level.slug, lessonSlug: lesson.slug };
}

function levelSlugFor(levelId: number): string {
  return levels.find((entry) => entry.id === levelId)?.slug ?? `nivel-${levelId}`;
}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const lesson = getLesson(data?.lessonSlug);
  if (!lesson) return [{ title: `Lección no encontrada · ${site.name}` }];
  return pageMeta({ title: lesson.title, description: lesson.summary, type: "article" }, { location });
};

export default function LeccionRoute({ loaderData }: { loaderData: { levelSlug: string; lessonSlug: string } }) {
  // Los hooks se ejecutan siempre: el guard de `lesson` va después para no
  // romper el orden de hooks cuando el slug no existe.
  const lesson = getLesson(loaderData.lessonSlug) ?? null;
  const { isCompleted, isSaved, quiz: quizResult } = useLessonState(loaderData.lessonSlug);
  const { prev, next } = getLessonNeighbors(loaderData.lessonSlug);
  const category = categoryMap.get(lesson?.category ?? "fundamentos");

  const glossaryTerms = (lesson?.glossary ?? [])
    .map((slug) => getTerm(slug))
    .filter((term): term is NonNullable<typeof term> => Boolean(term));

  if (!lesson) return null;

  const level = levelMap.get(loaderData.levelSlug);

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="min-w-0">
            <nav aria-label="Miga de pan" className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <Link to="/ruta" className="transition-colors hover:text-ink">
                Ruta
              </Link>
              <span aria-hidden="true">/</span>
              {level ? (
                <Link to={`/ruta/${level.slug}`} className="transition-colors hover:text-ink">
                  Nivel {level.id}: {level.title}
                </Link>
              ) : null}
            </nav>

            <header className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">{category?.shortLabel ?? lesson.category}</Badge>
                <Badge tone="neutral">{lesson.readMinutes} min de lectura</Badge>
                <EducationalBadge label="Ejemplo con datos ficticios" />
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{lesson.summary}</p>
            </header>

            <div className="mt-8">
              <Prose>
                <p className="text-[16px] font-medium text-ink">{lesson.explanation.intro}</p>
                {lesson.explanation.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </Prose>

              {lesson.explanation.bullets?.length ? (
                <ul className="mt-6 flex flex-col gap-2.5 rounded-[14px] border border-line bg-surface p-5">
                  {lesson.explanation.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                      <Check className="mt-1 size-4 shrink-0 text-bull" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Card className="mt-8 p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
                {lesson.technical.term}
              </p>
              <Prose className="mt-3">
                <p>{lesson.technical.body}</p>
              </Prose>
              {lesson.technical.formula ? (
                <p className="mt-4 rounded-xl border border-line bg-surface-2 px-4 py-3 font-mono text-[13px] text-ink">
                  {lesson.technical.formula}
                </p>
              ) : null}
              {lesson.technical.gloss ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">{lesson.technical.gloss}</p>
              ) : null}
            </Card>

            <div className="mt-8">
              <ChartRenderer spec={lesson.chart} />
            </div>

            <Card className="mt-8 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent">
                  <Lightbulb className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-[16px] font-semibold text-ink">{lesson.example.title}</h2>
                  <Prose className="mt-2">
                    <p>{lesson.example.narrative}</p>
                  </Prose>
                  {lesson.example.bullets?.length ? (
                    <ul className="mt-4 flex flex-col gap-2">
                      {lesson.example.bullets.map((bullet, index) => (
                        <li key={index} className="flex gap-2.5 text-sm text-ink-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Card>

            <section className="mt-10" aria-labelledby="escenario-heading">
              <h2 id="escenario-heading" className="text-xl font-semibold text-ink">
                Operación de ejemplo
              </h2>
              <p className="mt-2 text-sm text-muted">
                Números inventados para ilustrar el cálculo. No corresponden a ningún mercado real.
              </p>

              <dl className="mt-5 grid gap-3 sm:grid-cols-4">
                {[
                  { label: "Activo", value: lesson.tradeExample.instrument },
                  {
                    label: "Dirección",
                    value: lesson.tradeExample.direction === "long" ? "Largo" : "Corto",
                  },
                  { label: "Entrada", value: formatNumber(lesson.tradeExample.entry, 2) },
                  { label: "Stop loss", value: formatNumber(lesson.tradeExample.stopLoss, 2) },
                ].map((row) => (
                  <Card key={row.label} className="p-4">
                    <dt className="text-[11px] tracking-wide text-muted uppercase">{row.label}</dt>
                    <dd className="mt-1 text-[15px] font-semibold text-ink tabular-nums">{row.value}</dd>
                  </Card>
                ))}
              </dl>

              <Card className="mt-4 p-6">
                <Prose>
                  <p>{lesson.tradeExample.narrative}</p>
                </Prose>
                <RiskSummary
                  entry={lesson.tradeExample.entry}
                  stopLoss={lesson.tradeExample.stopLoss}
                  takeProfit={lesson.tradeExample.takeProfit}
                />
              </Card>
            </section>

            <section className="mt-10" aria-labelledby="errores-heading">
              <h2 id="errores-heading" className="text-xl font-semibold text-ink">
                Errores frecuentes
              </h2>
              <ul className="mt-5 flex flex-col gap-4">
                {lesson.mistakes.map((mistake, index) => (
                  <Reveal as="li" key={index} delay={index * 50}>
                    <Card className="p-5">
                      <div className="flex gap-3">
                        <CircleAlert className="mt-0.5 size-4 shrink-0 text-bear" aria-hidden="true" />
                        <div>
                          <p className="text-[15px] font-semibold text-ink">{mistake.mistake}</p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-2">
                            <strong className="font-semibold text-muted">Por qué ocurre: </strong>
                            {mistake.why}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                            <strong className="font-semibold text-muted">Cómo corregirlo: </strong>
                            {mistake.fix}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </ul>
            </section>

            <div className="mt-10">
              <AdSlot placement="in-article" />
            </div>

            <section className="mt-10" aria-labelledby="quiz-heading">
              <h2 id="quiz-heading" className="text-xl font-semibold text-ink">
                Comprueba lo aprendido
              </h2>
              <p className="mt-2 text-sm text-muted">
                Cuatro preguntas. El resultado se guarda en este navegador.
              </p>
              <Quiz slug={lesson.slug} questions={lesson.quiz} savedResult={quizResult} />
            </section>

            {glossaryTerms.length > 0 ? (
              <section className="mt-10" aria-labelledby="glosario-heading">
                <h2 id="glosario-heading" className="text-xl font-semibold text-ink">
                  Términos de esta lección
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {glossaryTerms.map((term) => (
                    <li key={term.slug}>
                      <Link
                        to={`/diccionario/${term.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink"
                      >
                        {term.term}
                        <ArrowRight className="size-3 text-muted" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <nav
              aria-label="Navegación entre lecciones"
              className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2"
            >
              {prev ? (
                <ButtonLink to={`/ruta/${level?.slug}/${prev.slug}`} variant="secondary" size="md">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-[11px] text-muted">Anterior</span>
                    <span className="block text-sm">{prev.shortTitle}</span>
                  </span>
                </ButtonLink>
              ) : (
                <span />
              )}
              {next ? (
                <ButtonLink
                  to={`/ruta/${level?.slug}/${next.slug}`}
                  variant="primary"
                  size="md"
                  className="justify-end text-right"
                >
                  <span>
                    <span className="block text-[11px] opacity-75">Siguiente</span>
                    <span className="block text-sm">{next.shortTitle}</span>
                  </span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </ButtonLink>
              ) : null}
            </nav>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="p-5">
              <p className="text-[15px] font-semibold text-ink">Tu progreso</p>
              <p className="mt-1 text-sm text-muted">
                {isCompleted ? "Lección completada" : "Lección pendiente"}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button
                  variant={isCompleted ? "secondary" : "primary"}
                  onClick={() => toggleLessonComplete(lesson.slug)}
                >
                  {isCompleted ? (
                    <>
                      <Repeat className="size-4" aria-hidden="true" />
                      Marcar como pendiente
                    </>
                  ) : (
                    <>
                      <Check className="size-4" aria-hidden="true" />
                      Marcar como completada
                    </>
                  )}
                </Button>
                <Button variant="ghost" onClick={() => toggleLessonSaved(lesson.slug)}>
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="size-4" aria-hidden="true" />
                      Quitar de guardados
                    </>
                  ) : (
                    <>
                      <Bookmark className="size-4" aria-hidden="true" />
                      Guardar lección
                    </>
                  )}
                </Button>
              </div>
            </Card>

            <Card className="mt-4 p-5">
              <p className="text-[13px] font-semibold text-ink">Datos de la lección</p>
              <dl className="mt-3 flex flex-col gap-2.5 text-[13px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Actualizada</dt>
                  <dd className="text-ink-2">
                    <time dateTime={lesson.updatedAt}>{lesson.updatedAt}</time>
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Lectura</dt>
                  <dd className="text-ink-2 tabular-nums">{lesson.readMinutes} min</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Categoría</dt>
                  <dd className="text-right text-ink-2">{category?.label ?? lesson.category}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Preguntas</dt>
                  <dd className="text-ink-2 tabular-nums">{lesson.quiz.length}</dd>
                </div>
              </dl>
            </Card>

            {lesson.related.length > 0 ? (
              <Card className="mt-4 p-5">
                <p className="text-[13px] font-semibold text-ink">Lecciones relacionadas</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {lesson.related
                    .map((slug) => getLesson(slug))
                    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
                    .map((entry) => (
                      <li key={entry.slug}>
                        <Link
                          to={`/ruta/${levelSlugFor(entry.levelId)}/${entry.slug}`}
                          className="text-[13px] text-ink-2 transition-colors hover:text-brand"
                        >
                          {entry.shortTitle}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Card>
            ) : null}

            <Alert tone="risk" className="mt-4" title="Aviso">
              {DISCLAIMER_SHORT}
            </Alert>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function RiskSummary({
  entry,
  stopLoss,
  takeProfit,
}: {
  entry: number;
  stopLoss: number;
  takeProfit: number;
}) {
  const risk = Math.abs(entry - stopLoss);
  const reward = Math.abs(takeProfit - entry);
  const rr = risk > 0 ? reward / risk : 0;
  const winRate = rr > 0 ? (1 / (1 + rr)) * 100 : 0;

  return (
    <dl className="mt-5 grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3">
        <dt className="text-[11px] tracking-wide text-muted uppercase">Riesgo</dt>
        <dd className="mt-1 text-[15px] font-semibold text-bear tabular-nums">
          {formatNumber(risk, 2)}
        </dd>
      </div>
      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3">
        <dt className="text-[11px] tracking-wide text-muted uppercase">Recorrido</dt>
        <dd className="mt-1 text-[15px] font-semibold text-bull tabular-nums">
          {formatNumber(reward, 2)}
        </dd>
      </div>
      <div className="rounded-xl border border-line bg-surface-2 px-4 py-3">
        <dt className="text-[11px] tracking-wide text-muted uppercase">Acierto mínimo</dt>
        <dd className="mt-1 text-[15px] font-semibold text-ink tabular-nums">
          {formatPercent(winRate, 1)}
        </dd>
      </div>
    </dl>
  );
}

function Quiz({
  slug,
  questions,
  savedResult,
}: {
  slug: string;
  questions: { id: string; question: string; options: string[]; correct: number; explanation: string }[];
  savedResult: { answers: number[]; score: number; total: number } | null;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>(() =>
    Object.fromEntries((savedResult?.answers ?? []).map((answer, index) => [questions[index]?.id ?? String(index), answer])),
  );
  // `savedResult` solo se lee al montar: el estado local ya refleja lo que el
  // alumno respondió, así que no hace falta resincronizar con un efecto.
  const [graded, setGraded] = useState(Boolean(savedResult));

  const answeredCount = Object.keys(answers).length;
  const correctIndexes = questions.map((question) => question.correct);
  const score = questions.reduce(
    (acc, question) => (answers[question.id] === question.correct ? acc + 1 : acc),
    0,
  );

  function submit() {
    const ordered = questions.map((question) => answers[question.id] ?? -1);
    saveQuizResult(slug, ordered, correctIndexes);
    setGraded(true);
  }

  function reset() {
    setAnswers({});
    setGraded(false);
  }

  return (
    <div className="mt-6">
      <ol className="flex flex-col gap-5">
        {questions.map((question, index) => {
          const selected = answers[question.id];
          const isRight = selected === question.correct;
          return (
            <li key={question.id}>
              <Card className="p-5">
                <p className="text-[15px] font-medium text-ink">
                  {index + 1}. {question.question}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex;
                    const isAnswer = optionIndex === question.correct;
                    return (
                      <button
                        key={optionIndex}
                        type="button"
                        disabled={graded}
                        onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))}
                        className={cn(
                          "flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition-colors",
                          isAnswer && graded
                            ? "border-bull/40 bg-bull/8 text-ink"
                            : isSelected
                              ? "border-brand/40 bg-brand/8 text-ink"
                              : "border-line bg-surface-2 text-ink-2 hover:border-line-strong",
                          graded && "cursor-default",
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-5 shrink-0 place-items-center rounded-full border text-[11px]",
                            isAnswer && graded
                              ? "border-bull bg-bull text-canvas"
                              : isSelected
                                ? "border-brand bg-brand text-brand-ink"
                                : "border-line-strong",
                          )}
                          aria-hidden="true"
                        >
                          {isAnswer && graded ? (
                            <Check className="size-3" />
                          ) : isSelected ? (
                            <Check className="size-3" />
                          ) : (
                            String.fromCharCode(65 + optionIndex)
                          )}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {graded ? (
                  <div
                    className={cn(
                      "mt-3 flex items-start gap-2 text-[13px] leading-relaxed",
                      isRight ? "text-bull" : "text-warn",
                    )}
                  >
                    {isRight ? (
                      <Check className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <X className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                    )}
                    <span>{question.explanation}</span>
                  </div>
                ) : null}
              </Card>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {graded ? (
          <>
            <p className="text-sm text-ink-2">
              Resultado:{" "}
              <strong className="text-ink tabular-nums">
                {score} de {questions.length}
              </strong>
            </p>
            <Button variant="secondary" size="sm" onClick={reset}>
              <Repeat className="size-4" aria-hidden="true" />
              Repetir
            </Button>
          </>
        ) : (
          <Button onClick={submit} disabled={answeredCount < questions.length}>
            Corregir respuestas
          </Button>
        )}
        {!graded && answeredCount < questions.length ? (
          <p className="text-xs text-muted">
            Responde las {questions.length} preguntas para poder corregir.
          </p>
        ) : null}
      </div>
    </div>
  );
}
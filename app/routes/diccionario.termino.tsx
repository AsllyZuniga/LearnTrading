import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Badge,
  ButtonLink,
  Card,
  Container,
  EducationalBadge,
  Prose,
  Section,
} from "~/components/ui";
import { AdSlot } from "~/components/ads/AdSlot";
import { getLesson, getLessonNeighbors } from "~/data/lessons";
import { allTerms, getTerm } from "~/data/dictionary";
import { categoryMap, DISCLAIMER_SHORT, levels, site } from "~/data/site";
import { pageMeta } from "~/utils/meta";

export function loader({ params }: { params: { termSlug?: string } }) {
  const term = getTerm(params.termSlug);
  if (!term) throw new Response("Término no encontrado", { status: 404 });
  return { termSlug: term.slug };
}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const term = getTerm(data?.termSlug);
  if (!term) return [{ title: `Término no encontrado · ${site.name}` }];
  return pageMeta(
    {
      title: `${term.term}: qué es y cómo funciona`,
      description: term.short,
      type: "article",
    },
    { location },
  );
};

export default function TerminoRoute({ loaderData }: { loaderData: { termSlug: string } }) {
  const term = getTerm(loaderData.termSlug);
  if (!term) return null;

  const seeAlso = term.seeAlso
    .map((slug) => getTerm(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const relatedLessons = term.relatedLessons
    .map((slug) => getLesson(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const neighbors = relatedLessons.length > 0 ? getLessonNeighbors(relatedLessons[0].slug) : {};

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="min-w-0">
            <Link
              to="/diccionario"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Diccionario
            </Link>

            <header className="mt-6">
              <Badge tone="brand">
                {categoryMap.get(term.category)?.shortLabel ?? term.category}
              </Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {term.term}
              </h1>
              {term.aliases?.length ? (
                <p className="mt-2 text-sm text-muted">
                  También se conoce como: {term.aliases.join(", ")}
                </p>
              ) : null}
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{term.short}</p>
            </header>

            <Prose className="mt-8">
              <p className="text-[16px] font-medium text-ink">{term.definition}</p>
              <p className="mt-4">{term.extended}</p>
            </Prose>

            {term.example ? (
              <Card className="mt-8 p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
                  Ejemplo
                </p>
                <h2 className="mt-2 text-[16px] font-semibold text-ink">{term.example.title}</h2>
                <Prose className="mt-2">
                  <p>{term.example.text}</p>
                </Prose>
              </Card>
            ) : null}

            <div className="mt-8">
              <AdSlot placement="in-article" />
            </div>

            {seeAlso.length > 0 ? (
              <section className="mt-8" aria-labelledby="ver-tambien">
                <h2 id="ver-tambien" className="text-xl font-semibold text-ink">
                  Ver también
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {seeAlso.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        to={`/diccionario/${entry.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong"
                      >
                        <span className="min-w-0">
                          <span className="block text-[14px] font-medium text-ink">{entry.term}</span>
                          <span className="block truncate text-[13px] text-muted">{entry.short}</span>
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {relatedLessons.length > 0 ? (
              <section className="mt-10" aria-labelledby="lecciones-relacionadas">
                <h2 id="lecciones-relacionadas" className="text-xl font-semibold text-ink">
                  Aprende este tema en la ruta
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {relatedLessons.map((lesson) => {
                    const level = levels.find((entry) => entry.id === lesson.levelId);
                    return (
                      <li key={lesson.slug}>
                        <Link
                          to={`/ruta/${level?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`}
                          className="group block rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
                        >
                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                            <Badge tone="neutral" size="sm">
                              Nivel {lesson.levelId}
                            </Badge>
                            <span>{lesson.readMinutes} min</span>
                          </div>
                          <p className="mt-2 text-[15px] font-semibold text-ink">{lesson.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{lesson.summary}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <nav className="mt-6 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                  {neighbors.prev ? (
                    <ButtonLink
                      to={`/ruta/${levels.find((entry) => entry.id === neighbors.prev?.levelId)?.slug ?? `nivel-${neighbors.prev?.levelId}`}/${neighbors.prev.slug}`}
                      variant="ghost"
                      size="sm"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" />
                      <span className="text-left text-sm">{neighbors.prev.shortTitle}</span>
                    </ButtonLink>
                  ) : null}
                  {neighbors.next ? (
                    <ButtonLink
                      to={`/ruta/${levels.find((entry) => entry.id === neighbors.next?.levelId)?.slug ?? `nivel-${neighbors.next?.levelId}`}/${neighbors.next.slug}`}
                      variant="secondary"
                      size="sm"
                      className="justify-end text-right"
                    >
                      <span className="text-sm">{neighbors.next.shortTitle}</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                </nav>
              </section>
            ) : null}
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="p-5">
              <p className="text-[13px] font-semibold text-ink">En pocas palabras</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{term.short}</p>
              <div className="mt-4 border-t border-line pt-4">
                <EducationalBadge />
                <p className="mt-2 text-xs leading-relaxed text-muted">{DISCLAIMER_SHORT}</p>
              </div>
            </Card>

            <Card className="mt-4 p-5">
              <p className="text-[13px] font-semibold text-ink">Explorar más</p>
              <ul className="mt-3 flex flex-col gap-2 text-[13px]">
                <li>
                  <Link to="/diccionario" className="text-ink-2 transition-colors hover:text-brand">
                    Ver los {allTerms.length} términos del diccionario
                  </Link>
                </li>
                <li>
                  <Link to="/ruta" className="text-ink-2 transition-colors hover:text-brand">
                    Ruta de aprendizaje
                  </Link>
                </li>
                <li>
                  <Link to="/simulador" className="text-ink-2 transition-colors hover:text-brand">
                    Simulador de riesgo
                  </Link>
                </li>
              </ul>
            </Card>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
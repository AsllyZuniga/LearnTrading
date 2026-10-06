import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Badge,
  Card,
  Container,
  Input,
  Section,
  SectionHeading,
} from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { allTerms, searchTerms } from "~/data/dictionary";
import { categories, categoryMap } from "~/data/site";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Diccionario de trading",
    description: `${allTerms.length} términos de trading explicados uno por uno, con ejemplos, términos relacionados y enlaces a las lecciones correspondientes.`,
  }, { location });

export default function Diccionario() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const results = useMemo(() => {
    const base = searchTerms(query);
    return category ? base.filter((term) => term.category === category) : base;
  }, [query, category]);

  const sorted = useMemo(
    () => [...results].sort((a, b) => a.term.localeCompare(b.term, "es")),
    [results],
  );

  const usedCategories = categories.filter((entry) =>
    allTerms.some((term) => term.category === entry.id),
  );

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Diccionario"
          title={`${allTerms.length} términos explicados uno por uno`}
          description="Cada entrada define el término, explica cómo funciona en la práctica y enlaza con las lecciones donde se desarrolla."
        />

        <div className="mt-8 flex flex-col gap-4">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Busca un término: spread, pip, lote, stop loss…"
              aria-label="Buscar en el diccionario"
              className="pl-10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="absolute top-1/2 right-3 grid size-6 -translate-y-1/2 place-items-center rounded-md text-muted hover:bg-surface-2 hover:text-ink"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setCategory(null)}
              aria-pressed={category === null}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
                category === null
                  ? "border-brand/30 bg-brand/10 text-brand"
                  : "border-line text-muted hover:text-ink",
              )}
            >
              Todas
            </button>
            {usedCategories.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setCategory(entry.id)}
                aria-pressed={category === entry.id}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
                  category === entry.id
                    ? "border-brand/30 bg-brand/10 text-brand"
                    : "border-line text-muted hover:text-ink",
                )}
              >
                {entry.shortLabel}
              </button>
            ))}
          </div>

          <p className="text-xs text-muted tabular-nums">
            {sorted.length} {sorted.length === 1 ? "término" : "términos"}
            {query ? ` para «${query}»` : ""}
          </p>
        </div>

        {sorted.length === 0 ? (
          <Card className="mt-8 border-dashed p-12 text-center">
            <p className="text-[15px] font-semibold text-ink">Sin resultados</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              No hay términos que coincidan con esa búsqueda. Prueba con una palabra más general,
              como “riesgo” o “precio”.
            </p>
          </Card>
        ) : (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((term, index) => (
              <Reveal as="li" key={term.slug} delay={Math.min(index, 8) * 40}>
                <Card interactive as={Link} to={`/diccionario/${term.slug}`} className="block h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-[15px] font-semibold text-ink">{term.term}</h2>
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{term.short}</p>
                  <Badge tone="neutral" className="mt-3" size="sm">
                    {categoryMap.get(term.category)?.shortLabel ?? term.category}
                  </Badge>
                </Card>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
}
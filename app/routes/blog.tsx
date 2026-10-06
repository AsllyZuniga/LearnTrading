import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Search, X } from "lucide-react";
import { useState } from "react";
import { Badge, Card, Container, Input, Section, SectionHeading } from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { allPosts } from "~/data/blog";
import { categories, categoryMap } from "~/data/site";
import { formatDate, truncate } from "~/utils/format";
import { cn } from "~/utils/cn";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Blog",
    description:
      "Artículos sobre qué es el trading, Forex, Bitcoin, brokers, stop loss, costes y psicología, escritos con fines educativos y sin promesas de rentabilidad.",
  }, { location });

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const usedCategories = categories.filter((entry) =>
    allPosts.some((post) => post.category === entry.id),
  );

  // La lista es corta, así que filtrar en render es más barato que memorizar.
  const needle = query.trim().toLowerCase();
  const results = allPosts.filter((post) => {
    if (category && post.category !== category) return false;
    if (!needle) return true;
    return [post.title, post.excerpt, ...post.tags].join(" ").toLowerCase().includes(needle);
  });

  const [featured, ...rest] = results;

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Blog"
          title="Artículos para profundizar"
          description="Explicaciones más largas sobre los temas que más confunden, sin promesas de resultados y sin recomendación de brokers."
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
              placeholder="Busca un artículo: stop loss, brokers, Bitcoin…"
              aria-label="Buscar artículos"
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
              Todos
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
        </div>

        {results.length === 0 ? (
          <Card className="mt-8 border-dashed p-12 text-center">
            <p className="text-[15px] font-semibold text-ink">Sin resultados</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              No hay artículos que coincidan con esa búsqueda.
            </p>
          </Card>
        ) : (
          <>
            {featured ? (
              <Reveal className="mt-8">
                <Card interactive as={Link} to={`/blog/${featured.slug}`} className="block p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="brand">
                      {categoryMap.get(featured.category)?.shortLabel ?? featured.category}
                    </Badge>
                    <span className="text-[11px] text-muted">{featured.readMinutes} min</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={featured.updatedAt} className="text-[11px] text-muted">
                      {formatDate(featured.updatedAt)}
                    </time>
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {featured.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Leer el artículo
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Card>
              </Reveal>
            ) : null}

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, index) => (
                <Reveal as="li" key={post.slug} delay={Math.min(index, 8) * 40}>
                  <Card interactive as={Link} to={`/blog/${post.slug}`} className="block h-full p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                      <Badge tone="neutral" size="sm">
                        {categoryMap.get(post.category)?.shortLabel ?? post.category}
                      </Badge>
                      <span>{post.readMinutes} min</span>
                    </div>
                    <h2 className="mt-3 text-[16px] font-semibold text-ink">{post.title}</h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">
                      {truncate(post.excerpt, 130)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand">
                      Leer
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </>
        )}
      </Container>
    </Section>
  );
}
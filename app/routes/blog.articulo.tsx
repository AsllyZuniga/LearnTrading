import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Info, Quote, TriangleAlert } from "lucide-react";
import {
  Badge,
  Card,
  Container,
  EducationalBadge,
  Prose,
  Section,
} from "~/components/ui";
import { AdSlot } from "~/components/ads/AdSlot";
import { ChartRenderer } from "~/components/charts/ChartRenderer";
import { getPost, allPosts } from "~/data/blog";
import { getLesson } from "~/data/lessons";
import { getTerm } from "~/data/dictionary";
import { categoryMap, DISCLAIMER_SHORT, levels, site } from "~/data/site";
import { buildPreset } from "~/data/charts/presets";
import { formatDate } from "~/utils/format";
import { pageMeta } from "~/utils/meta";

export function loader({ params }: { params: { postSlug?: string } }) {
  const post = getPost(params.postSlug);
  if (!post) throw new Response("Artículo no encontrado", { status: 404 });
  return { postSlug: post.slug };
}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
  const post = getPost(data?.postSlug);
  if (!post) return [{ title: `Artículo no encontrado · ${site.name}` }];
  return pageMeta({ title: post.title, description: post.excerpt, type: "article" }, { location });
};

export default function ArticuloRoute({ loaderData }: { loaderData: { postSlug: string } }) {
  const post = getPost(loaderData.postSlug);
  if (!post) return null;

  const relatedPosts = allPosts
    .filter((entry) => entry.slug !== post.slug && entry.category === post.category)
    .slice(0, 3);

  const relatedLessons = post.relatedLessons
    .map((slug) => getLesson(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const relatedTerms = post.relatedTerms
    .map((slug) => getTerm(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const currentIndex = allPosts.findIndex((entry) => entry.slug === post.slug);
  const previous = allPosts[currentIndex - 1];
  const next = allPosts[currentIndex + 1];

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="min-w-0">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Blog
            </Link>

            <header className="mt-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">
                  {categoryMap.get(post.category)?.shortLabel ?? post.category}
                </Badge>
                <span className="text-[11px] text-muted tabular-nums">{post.readMinutes} min</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.updatedAt} className="text-[11px] text-muted">
                  {formatDate(post.updatedAt)}
                </time>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
              <p className="mt-4 text-[13px] text-muted">Por {post.author}</p>
            </header>

            <div className="mt-8 flex flex-col gap-6">
              {post.sections.map((section, index) => {
                if (section.kind === "paragraph") {
                  return (
                    <Prose key={index}>
                      <p>{section.text}</p>
                    </Prose>
                  );
                }

                if (section.kind === "heading") {
                  return (
                    <h2
                      key={index}
                      id={section.id}
                      className="scroll-mt-24 text-xl font-semibold text-ink sm:text-2xl"
                    >
                      {section.text}
                    </h2>
                  );
                }

                if (section.kind === "list") {
                  return (
                    <ul key={index} className="flex flex-col gap-2.5">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                          <span
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (section.kind === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="rounded-[14px] border-l-2 border-brand bg-surface px-5 py-4"
                    >
                      <Quote className="size-4 text-brand" aria-hidden="true" />
                      <p className="mt-2 text-[15px] leading-relaxed text-ink italic">
                        {section.text}
                      </p>
                      {section.attribution ? (
                        <footer className="mt-2 text-[13px] text-muted not-italic">
                          — {section.attribution}
                        </footer>
                      ) : null}
                    </blockquote>
                  );
                }

                if (section.kind === "callout") {
                  return (
                    <Card
                      key={index}
                      className={
                        section.tone === "risk"
                          ? "border-warn/30 bg-warn/6 p-5"
                          : "border-brand/25 bg-brand/6 p-5"
                      }
                    >
                      <div className="flex gap-3">
                        {section.tone === "risk" ? (
                          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-warn" aria-hidden="true" />
                        ) : (
                          <Info className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        )}
                        <div>
                          <p
                            className={
                              section.tone === "risk"
                                ? "text-[14px] font-semibold text-warn"
                                : "text-[14px] font-semibold text-brand"
                            }
                          >
                            {section.title}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{section.text}</p>
                        </div>
                      </div>
                    </Card>
                  );
                }

                if (section.kind === "chart") {
                  return <ChartRenderer key={index} spec={section.spec} />;
                }

                return (
                  <div key={index}>
                    <AdSlot placement="blog-inline" />
                  </div>
                );
              })}
            </div>

            <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
              {previous ? (
                <Link
                  to={`/blog/${previous.slug}`}
                  className="group rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
                >
                  <span className="flex items-center gap-1.5 text-[11px] text-muted">
                    <ArrowLeft className="size-3" aria-hidden="true" />
                    Artículo anterior
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-ink">{previous.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={`/blog/${next.slug}`}
                  className="group rounded-xl border border-line bg-surface p-4 text-right transition-colors hover:border-line-strong"
                >
                  <span className="flex items-center justify-end gap-1.5 text-[11px] text-muted">
                    Artículo siguiente
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-ink">{next.title}</span>
                </Link>
              ) : null}
            </nav>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="p-5">
              <p className="text-[13px] font-semibold text-ink">Sobre este artículo</p>
              <dl className="mt-3 flex flex-col gap-2.5 text-[13px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Categoría</dt>
                  <dd className="text-ink-2">{categoryMap.get(post.category)?.shortLabel}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Actualizado</dt>
                  <dd className="text-ink-2">
                    <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            {relatedLessons.length > 0 ? (
              <Card className="mt-4 p-5">
                <p className="text-[13px] font-semibold text-ink">Lecciones relacionadas</p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {relatedLessons.map((lesson) => {
                    const level = levels.find((entry) => entry.id === lesson.levelId);
                    return (
                      <li key={lesson.slug}>
                        <Link
                          to={`/ruta/${level?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`}
                          className="block text-[13px] leading-snug text-ink-2 transition-colors hover:text-brand"
                        >
                          {lesson.shortTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            ) : null}

            {relatedTerms.length > 0 ? (
              <Card className="mt-4 p-5">
                <p className="text-[13px] font-semibold text-ink">Términos</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {relatedTerms.map((term) => (
                    <li key={term.slug}>
                      <Link
                        to={`/diccionario/${term.slug}`}
                        className="inline-flex rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-muted transition-colors hover:text-ink"
                      >
                        {term.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}

            {relatedPosts.length > 0 ? (
              <Card className="mt-4 p-5">
                <p className="text-[13px] font-semibold text-ink">Del mismo tema</p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {relatedPosts.map((entry) => (
                    <li key={entry.slug}>
                      <Link
                        to={`/blog/${entry.slug}`}
                        className="block text-[13px] leading-snug text-ink-2 transition-colors hover:text-brand"
                      >
                        {entry.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : null}

            <Card className="mt-4 p-5">
              <EducationalBadge />
              <p className="mt-2 text-xs leading-relaxed text-muted">{DISCLAIMER_SHORT}</p>
            </Card>

            <div className="mt-4">
              <ChartRenderer spec={buildPreset("soporte-resistencia")} showControls={false} />
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
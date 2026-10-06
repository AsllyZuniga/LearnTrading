import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, BookOpen, Calculator, Newspaper, ScrollText } from "lucide-react";
import { Card, Container, Section, SectionHeading } from "~/components/ui";
import { Reveal } from "~/components/layout/Reveal";
import { allTerms } from "~/data/dictionary";
import { allPosts } from "~/data/blog";
import { lessonsByLevel } from "~/data/lessons";
import { levels, site } from "~/data/site";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Recursos y glosario",
    description:
      "Punto de partida para aprender trading: glosario de términos, ruta por niveles, artículos de referencia y la calculadora de posición.",
  }, { location });

const totalLessons = lessonsByLevel.reduce((acc, entry) => acc + entry.lessons.length, 0);

const RESOURCES = [
  {
    to: "/ruta",
    icon: BookOpen,
    title: "Ruta de aprendizaje",
    description: `Siete niveles ordenados, desde qué es un pip hasta gestión de portfolios. ${totalLessons} lecciones escritas hasta ahora.`,
    cta: "Ver niveles",
  },
  {
    to: "/diccionario",
    icon: ScrollText,
    title: `Diccionario (${allTerms.length} términos)`,
    description:
      "Definiciones, ejemplos y referencias cruzadas para consultar antes o después de leer una lección.",
    cta: "Consultar términos",
  },
  {
    to: "/simulador",
    icon: Calculator,
    title: "Simulador de riesgo",
    description:
      "Calculadora de tamaño de posición, riesgo en dinero y punto de equilibrio con datos inventados.",
    cta: "Abrir calculadora",
  },
  {
    to: "/blog",
    icon: Newspaper,
    title: `Artículos (${allPosts.length})`,
    description:
      "Textos largos sobre temas que suelen generar confusión: costes, brokers, Bono y psicología.",
    cta: "Leer artículos",
  },
];

export default function Recursos() {
  const firstLessons = levels
    .map((level) => {
      const group = lessonsByLevel.find((entry) => entry.level.id === level.id);
      const lesson = group?.lessons[0];
      return lesson ? { level, lesson } : null;
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 4);

  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="Recursos"
          title="Por dónde empezar"
          description="Cuatro piezas que funcionan juntas: leer la ruta, consultar términos, calcular con números propios y profundizar cuando algo no quadre."
        />

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {RESOURCES.map((resource, index) => (
            <Reveal as="li" key={resource.to} delay={index * 60}>
              <Card interactive as={Link} to={resource.to} className="block h-full p-6">
                <resource.icon className="size-5 text-brand" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-semibold text-ink">{resource.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{resource.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  {resource.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Card>
            </Reveal>
          ))}
        </ul>

        {firstLessons.length > 0 ? (
          <section className="mt-12" aria-labelledby="primera-sesion">
            <h2 id="primera-sesion" className="text-xl font-semibold text-ink">
              Primera lección de cada nivel
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {firstLessons.map(({ level, lesson }) => (
                <li key={lesson.slug}>
                  <Link
                    to={`/ruta/${level.slug}/${lesson.slug}`}
                    className="group block rounded-xl border border-line bg-surface p-4 transition-colors hover:border-line-strong"
                  >
                    <p className="text-[11px] font-medium tracking-wide text-brand uppercase">
                      Nivel {level.id} · {level.title}
                    </p>
                    <p className="mt-1.5 text-[15px] font-semibold text-ink">{lesson.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{lesson.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-12" aria-labelledby="primer-dia">
          <h2 id="primer-dia" className="text-xl font-semibold text-ink">
            Sugerencia para el primer día
          </h2>
          <ol className="mt-4 flex flex-col gap-3">
            {[
              "Lee la introducción del Nivel 1 completa, aunque parezca obvia.",
              "Abre el diccionario y apunta tres términos que no entendías.",
              "Calcula una operación con la herramienta de riesgo usando 1 % de riesgo.",
              "Vuelve a la lección de stops y compara tu plan con lo que habrías hecho.",
            ].map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-[12px] font-semibold text-brand tabular-nums">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-10 text-xs text-muted">
          Última actualización de contenidos: {site.name}. Todo el material es educativo y no
          constituye asesoramiento financiero.
        </p>
      </Container>
    </Section>
  );
}
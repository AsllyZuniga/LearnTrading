import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Home, Search } from "lucide-react";
import { ButtonLink, Card, Container, Section } from "~/components/ui";
import { allTerms } from "~/data/dictionary";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) => [
  ...pageMeta({ title: "Página no encontrada" }, { location }),
  { name: "robots", content: "noindex" },
];

const SUGGESTIONS = [
  { to: "/ruta", label: "Ruta de aprendizaje", hint: "Empieza por el Nivel 1" },
  { to: "/diccionario", label: "Diccionario", hint: `${allTerms.length} términos consultables` },
  { to: "/simulador", label: "Simulador", hint: "Calcula tamaño y riesgo" },
  { to: "/recursos", label: "Recursos", hint: "Índice de todo el material" },
];

export default function NotFound() {
  return (
    <Section>
      <Container size="narrow">
        <div className="py-12 text-center">
          <p className="text-[64px] font-semibold leading-none tracking-tight text-brand tabular-nums">
            404
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
            Esta página no existe
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
            Puede que el enlace esté mal escrito o que la página haya cambiado de sitio. Aquí van
            cuatro caminos que sí funcionan:
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {SUGGESTIONS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 transition-colors hover:border-line-strong"
              >
                <span className="min-w-0">
                  <span className="block text-[14px] font-medium text-ink">{item.label}</span>
                  <span className="block text-[13px] text-muted">{item.hint}</span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Card className="mt-6 border-dashed p-6 text-center">
          <Search className="mx-auto size-5 text-muted" aria-hidden="true" />
          <p className="mt-2 text-sm font-medium text-ink">¿Buscas un término concreto?</p>
          <p className="mx-auto mt-1 max-w-sm text-[13px] leading-relaxed text-muted">
            El diccionario tiene entradas para casi todo lo que aparece en las lecciones.
          </p>
          <div className="mt-4 flex justify-center">
            <ButtonLink to="/diccionario" size="sm">
              Ir al diccionario
            </ButtonLink>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            <Home className="size-4" aria-hidden="true" />
            Volver a la portada
          </Link>
        </div>
      </Container>
    </Section>
  );
}
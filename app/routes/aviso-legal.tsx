import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Card, Container, Prose, Section } from "~/components/ui";
import { site } from "~/data/site";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Aviso legal",
    description:
      "Aviso legal del proyecto educativo: no somos bróker, no operamos con tu dinero y todo el contenido es informativo.",
  }, { location });

export default function AvisoLegal() {
  return (
    <Section>
      <Container size="narrow">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">Aviso legal</h1>
        <p className="mt-2 text-sm text-muted">Última actualización: enero de 2026</p>

        <Prose className="mt-8">
          <h2>1. Naturaleza del proyecto</h2>
          <p>
            {site.name} es un proyecto educativo independiente cuyo objetivo es explicar cómo
            funciona el trading mediante texto, gráficos y cálculos con datos ficticios. No es una
            entidad financiera, no ofrece servicios de inversión y no actúa como bróker, gestor o
            asesor financiero.
          </p>

          <h2>2. Ausencia de asesoramiento financiero</h2>
          <p>
            Nada de lo publicado en este sitio constituye asesoramiento financiero, recomendación
            de inversión ni una invitación a operar en un mercado concreto. Las decisiones que
            tomes y las consecuencias dearlas son exclusivamente tuyas.
          </p>

          <h2>3. Datos simulados</h2>
          <p>
            Todas las cotizaciones, series de velas, resultados del simulador y ejemplos numéricos
            son inventados o simplificados. No proceden de ninguna fuente de mercado en tiempo real
            y no deben usarse para evaluar estrategias, herramientas o intermediarios.
          </p>

          <h2>4. Riesgos del trading</h2>
          <p>
            El trading de derivados, divisas, criptoactivos y otros instrumentos apalancados
            comporte un riesgo elevado de pérdida de capital. Las estrategias
            pueden dejar de funcionar, las plataformas pueden añadir o retirar restricciones y los
            mercados pueden moverse con violencia. Nada de lo publicado en este sitio reduce esos
            riesgos.
          </p>

          <h2>5. Enlaces externos</h2>
          <p>
            Si en el futuro se incluyen enlaces a sitios de terceros, no controlamos sus contenidos
            y no respondemos por ellos. Su inclusión no implica respaldo ni recomendación.
          </p>

          <h2>6. Propiedad intelectual</h2>
          <p>
            Los textos, gráficos y código de este sitio son originales de este proyecto. Puedes
            citarlos indicando la fuente. No se autoriza la republicación comercial sin permiso
            escrito.
          </p>

          <h2>7. Cambios en este aviso</h2>
          <p>
            Este aviso puede actualizarse a medida que el proyecto cambie de alcance. La fecha
            indicada arriba refleja la última versión publicada.
          </p>
        </Prose>

        <Card className="mt-8 p-6">
          <p className="text-sm leading-relaxed text-ink-2">
            Si detectas un error en el contenido o tienes una duda jurídica sobre este aviso,
            puedes escribir al correo indicado en los metadatos del sitio.
          </p>
          <Link
            to="/privacidad"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            Ver el aviso de privacidad
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Card>
      </Container>
    </Section>
  );
}
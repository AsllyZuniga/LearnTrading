import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { ArrowRight, Database, Lock, Trash2 } from "lucide-react";
import { Card, Container, Prose, Section } from "~/components/ui";
import { site } from "~/data/site";
import { pageMeta } from "~/utils/meta";

export const meta: MetaFunction = ({ location }) =>
  pageMeta({
    title: "Aviso de privacidad",
    description:
      "Qué datos guarda este sitio: tu progreso y tu preferencia de tema, guardados solo en tu navegador. Sin analítica ni envío a servidores.",
  }, { location });

export default function Privacidad() {
  return (
    <Section>
      <Container size="narrow">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          Aviso de privacidad
        </h1>
        <p className="mt-2 text-sm text-muted">Última actualización: enero de 2026</p>

        <Prose className="mt-8">
          <h2>Resumen</h2>
          <p>
            {site.name} no tiene cuentas de usuario, no tiene servidor de backend y no registra tu
            actividad en ningún servidor. Todo lo que aprendes se guarda únicamente en el
            almacenamiento local de tu navegador.
          </p>

          <h2>Qué se guarda en tu dispositivo</h2>
          <ul>
            <li>
              <strong>Progreso de aprendizaje:</strong> lecciones marcadas como completadas,
              respuestas de los cuestionarios y puntuaciones.
            </li>
            <li>
              <strong>Preferencia de tema:</strong> elección entre tema claro y oscuro.
            </li>
            <li>
              <strong>Contador de visitas al simulador:</strong> un número local para mostrarlo en
              la interfaz.
            </li>
          </ul>
          <p>
            Estos datos se guardan con claves como{" "}
            <code>trading-academy-progress</code> y <code>trading-academy-theme</code>.
          </p>

          <h2>Qué no hacemos</h2>
          <ul>
            <li>No hay registro de usuarios ni contraseñas.</li>
            <li>No hay analítica, píxeles de seguimiento ni perfiles de publicidad.</li>
            <li>No vendemos ni cedemos datos de navegación.</li>
            <li>No hay integración con brokers ni acceso a cuentas de trading reales.</li>
          </ul>

          <h2>Botones de terceros</h2>
          <p>
            Si el proyecto mostrara publicidad en el futuro, los anuncios serían servidos por
            redes externas con sus propias políticas de privacidad. Mientras
            <code>ads.enabled</code> siga en <code>false</code>, no se carga ningún recurso
            publicitario.
          </p>

          <h2>Cómo borrar tus datos</h2>
          <p>
            Puedes borrarlos en cualquier momento. Usa el botón “Borrar progreso” de la página de{" "}
            <Link to="/dashboard" className="text-brand underline">
              progreso
            </Link>
            , o limpia el almacenamiento local del sitio desde las opciones de tu navegador.
          </p>

          <h2>Menores de edad</h2>
          <p>
            El contenido está pensado para personas mayores de edad. Si eres menor, hazlo bajo
            supervisión de un adulto responsable.
          </p>
        </Prose>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Lock, label: "Sin cuentas", text: "No pedimos ningún dato personal." },
            { icon: Database, label: "Solo local", text: "Nada sale de tu dispositivo." },
            { icon: Trash2, label: "Borrable", text: "Un clic y desaparecen tus datos." },
          ].map((item) => (
            <Card key={item.label} className="p-5">
              <item.icon className="size-4 text-brand" aria-hidden="true" />
              <p className="mt-2 text-[13px] font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p>
            </Card>
          ))}
        </div>

        <Link
          to="/aviso-legal"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
        >
          Ver el aviso legal
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Container>
    </Section>
  );
}
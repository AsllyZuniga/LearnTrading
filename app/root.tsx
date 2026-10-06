import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
} from "react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Container } from "~/components/ui";
import { RootLayout } from "~/components/layout/RootLayout";
import { progressStore } from "~/hooks/useProgress";
import { THEME_STORAGE_KEY } from "~/hooks/useTheme";
import { site } from "~/data/site";
import appCss from "./app.css?url";
import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: appCss },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "icon",
    href: `${import.meta.env.BASE_URL}favicon.svg`,
    type: "image/svg+xml",
  },
];

export const meta: Route.MetaFunction = ({ error }) => {
  // Cuando un loader responde con un error (404 incluido) React Router llega a
  // este meta sin que ninguna ruta hija aporte el suyo, así que aquí se evita
  // indexar la página de error que renderiza el ErrorBoundary.
  const failed = Boolean(error);
  const title = failed
    ? `Página no encontrada · ${site.name}`
    : `${site.name} · ${site.tagline}`;

  return [
    { title },
    { name: "description", content: site.description },
    ...(failed ? [{ name: "robots", content: "noindex" }] : []),
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: title },
    { property: "og:description", content: site.description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: site.description },
  ];
};

/**
 * Script en línea que aplica el tema antes de pintar. Sin esto, el tema
 * guardado en localStorage provocaría un parpadeo en cada carga.
 */
const themeScript = `(() => {
  try {
    const stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.add("dark");
  }
})();`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="theme-color"
          content={site.themeColor.dark}
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content={site.themeColor.light}
          media="(prefers-color-scheme: light)"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/*
          React Router reemplaza la meta de cada ruta en lugar de fusionarla, así
          que la meta de root solo se aplicaría si ninguna ruta hija declarara la
          suya. Los datos de Open Graph comunes a todo el sitio van aquí como
          etiquetas literales: `<Meta />` deja el title y la descripción a cargo
          de cada ruta.
        */}
        <meta property="og:site_name" content={site.name} />
        <meta property="og:locale" content={site.locale} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${site.url}${site.ogImage}`} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    progressStore.init();
  }, []);

  useEffect(() => {
    progressStore.update((current) => {
      if (current.lastVisited === location.pathname) return current;
      return { ...current, lastVisited: location.pathname };
    });
  }, [location.pathname]);

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let title = "Algo no ha ido bien";
  let detail =
    "Se ha producido un error inesperado al cargar esta página. Puedes volver al inicio e intentarlo de nuevo.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "Página no encontrada" : `Error ${error.status}`;
    detail =
      error.status === 404
        ? "La dirección que has abierto no existe o ha cambiado. Desde la ruta de aprendizaje puedes volver al contenido principal."
        : error.statusText || detail;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-4 py-20">
      <Container size="narrow" className="text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-brand uppercase">
          Trading Academy
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">{detail}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center rounded-xl bg-brand px-5 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-strong"
          >
            Volver al inicio
          </Link>
          <Link
            to="/ruta"
            className="inline-flex h-11 items-center rounded-xl border border-line-strong px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
          >
            Ruta de aprendizaje
          </Link>
        </div>
      </Container>
    </main>
  );
}

export function HydrateFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas">
      <p className="text-sm text-muted">Cargando contenido…</p>
    </div>
  );
}
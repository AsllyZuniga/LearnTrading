import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Moon, Sun, Menu, X, ArrowRight, LayoutDashboard, BookOpen } from "lucide-react";
import { Container, ButtonLink } from "~/components/ui";
import { AdSlot } from "~/components/ads/AdSlot";
import { useTheme } from "~/hooks/useTheme";
import { useProgress } from "~/hooks";
import { getLevelLessonTotal } from "~/data/lessons";
import { DISCLAIMER_SHORT, site } from "~/data/site";
import { cn } from "~/utils/cn";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="border-t border-line bg-canvas lg:hidden">
      <Container className="flex flex-col gap-1 py-4">
        {site.nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive ? "bg-brand/10 text-brand" : "text-ink-2 hover:bg-surface-2",
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/dashboard"
          onClick={onClose}
          className={({ isActive }) =>
            cn(
              "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              isActive ? "bg-brand/10 text-brand" : "text-ink-2 hover:bg-surface-2",
            )
          }
        >
          Dashboard
        </NavLink>
      </Container>
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const progress = useProgress();
  const total = getLevelLessonTotal();
  const done = progress.completedLessons.length;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/92 backdrop-blur-md">
      <Container size="wide">
        <div className="flex h-16 items-center gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-brand-ink">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 18V9m5 9V5m5 13v-6m5 6V8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hidden text-[15px] font-semibold tracking-tight text-ink sm:block">
              Trading Academy
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden flex-1 items-center gap-1 lg:flex">
            {site.nav.slice(0, 4).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                    isActive ? "bg-surface-2 text-ink" : "text-muted hover:text-ink",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/dashboard"
              className="hidden items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 py-2 text-[13px] font-medium text-ink-2 transition-colors hover:border-line-strong hover:text-ink sm:inline-flex"
              title={`${done} de ${total} lecciones completadas`}
            >
              <LayoutDashboard className="size-4" aria-hidden="true" />
              <span className="tabular-nums">
                {done}/{total}
              </span>
            </Link>
            <ThemeToggle />
            <ButtonLink to="/ruta" size="sm" className="hidden sm:inline-flex">
              <BookOpen className="size-4" aria-hidden="true" />
              Empezar
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-ink-2 transition-colors hover:text-ink lg:hidden"
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>
      {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-canvas-deep">
      <Container size="wide" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="text-[15px] font-semibold text-ink">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
              Plataforma educativa para aprender trading desde cero. Lecciones, gráficos
              explicativos, diccionario y simulador con datos ficticios.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted">{DISCLAIMER_SHORT}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {site.footer.map((column) => (
              <div key={column.title}>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  {column.title}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="inline-flex items-center gap-1 text-sm text-ink-2 transition-colors hover:text-brand"
                      >
                        {link.label}
                        <ArrowRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Proyecto educativo sin ánimo de lucro.
          </p>
          <p>No somos broker. No operamos por ti. No damos señales.</p>
        </div>
      </Container>
    </footer>
  );
}

export function RootLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-brand-ink"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="contenido" className="flex-1">
        {children}
      </main>

      <Container size="wide" className="mb-10">
        <AdSlot placement="in-article" />
      </Container>

      <SiteFooter />
    </div>
  );
}
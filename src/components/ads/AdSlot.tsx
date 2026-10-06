import { cn } from "~/utils/cn";
import { site } from "~/data/site";
import { Reveal } from "~/components/layout/Reveal";

export type AdPlacement = keyof typeof site.ads.labels;

const heights: Record<AdPlacement, string> = {
  top: "h-[90px] sm:h-[100px]",
  sidebar: "h-[600px]",
  "in-article": "h-[120px] sm:h-[140px]",
  "blog-inline": "h-[120px] sm:h-[140px]",
  newsletter: "h-[140px]",
};

/**
 * Marcador de posición publicitario. Con `ads.enabled = false` no renderiza
 * nada, así que la experiencia educativa queda limpia por defecto.
 */
export function AdSlot({
  placement,
  className,
}: {
  placement: AdPlacement;
  className?: string;
}) {
  if (!site.ads.enabled) return null;

  return (
    <Reveal>
      <aside
        aria-label={site.ads.labels[placement]}
        className={cn(
          "grid w-full place-items-center rounded-[14px] border border-dashed border-line-strong bg-surface-2/50",
          heights[placement],
          className,
        )}
      >
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
            {site.ads.labels[placement]}
          </p>
          <p className="mt-1 text-[11px] text-muted/70">Espacio reservado, sin seguimiento</p>
        </div>
      </aside>
    </Reveal>
  );
}

export function AffiliateDisclosure({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-[12px] leading-relaxed text-muted",
        className,
      )}
    >
      <strong className="font-semibold text-ink-2">Transparencia:</strong> {children}
    </aside>
  );
}
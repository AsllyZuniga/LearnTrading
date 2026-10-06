import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "~/utils/cn";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
}) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-[92rem]",
  };
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
  tone = "default",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "default" | "alt" | "deep";
}) {
  const tones = {
    default: "",
    alt: "bg-canvas-deep/60",
    deep: "bg-canvas-deep",
  };
  return (
    <section id={id} className={cn("py-14 sm:py-20", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        action && "sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-3", align === "center" && "items-center")}>
        {eyebrow ? (
          <span className="text-[11px] font-semibold tracking-[0.18em] text-brand uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="max-w-2xl text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function Prose({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "text-[15px] leading-[1.75] text-ink-2 [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Accordion({
  items,
  className,
  defaultOpenId,
}: {
  items: { id: string; title: ReactNode; content: ReactNode }[];
  className?: string;
  defaultOpenId?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpenId ?? null);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  return (
    <div className={cn("divide-y divide-line overflow-hidden rounded-[14px] border border-line bg-surface", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const regionId = `accordion-region-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                ref={(el) => {
                  refs.current[item.id] = el;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={regionId}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-[15px] font-medium text-ink transition-colors hover:bg-surface-2 sm:px-5"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={regionId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-5 text-sm leading-relaxed text-ink-2 sm:px-5"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ScrollToTopOnChange({ pathname }: { pathname: string }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
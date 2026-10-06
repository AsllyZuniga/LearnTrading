import type { ReactNode } from "react";
import { cn } from "~/utils/cn";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "bull"
  | "bear"
  | "warn"
  | "accent"
  | "outline";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-surface-2 text-muted border-line",
  brand: "bg-brand/10 text-brand border-brand/25",
  bull: "bg-bull/10 text-bull border-bull/25",
  bear: "bg-bear/10 text-bear border-bear/25",
  warn: "bg-warn/10 text-warn border-warn/25",
  accent: "bg-accent/10 text-accent border-accent/25",
  outline: "bg-transparent text-muted border-line-strong",
};

export function Badge({
  tone = "neutral",
  size = "md",
  className,
  children,
  icon,
}: {
  tone?: BadgeTone;
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        tones[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function LevelPill({
  level,
  className,
}: {
  level: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-grid size-6 shrink-0 place-items-center rounded-lg bg-brand/12 text-[11px] font-bold text-brand",
        className,
      )}
    >
      {level}
    </span>
  );
}
import type { ReactNode } from "react";
import { Info, ShieldAlert, CheckCircle2 } from "lucide-react";
import { cn } from "~/utils/cn";

export function Alert({
  tone = "info",
  title,
  children,
  className,
  icon,
}: {
  tone?: "info" | "risk" | "success";
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  const tones = {
    info: {
      wrap: "border-brand/25 bg-brand/6",
      text: "text-brand",
      icon: <Info className="size-4" aria-hidden="true" />,
    },
    risk: {
      wrap: "border-warn/30 bg-warn/8",
      text: "text-warn",
      icon: <ShieldAlert className="size-4" aria-hidden="true" />,
    },
    success: {
      wrap: "border-bull/25 bg-bull/6",
      text: "text-bull",
      icon: <CheckCircle2 className="size-4" aria-hidden="true" />,
    },
  }[tone];

  return (
    <div className={cn("rounded-[14px] border p-4 sm:p-5", tones.wrap, className)}>
      <div className="flex gap-3">
        <span className={cn("mt-0.5 shrink-0", tones.text)}>{icon ?? tones.icon}</span>
        <div className="min-w-0 text-sm leading-relaxed text-ink-2">
          {title ? (
            <p className={cn("mb-1 font-semibold", tones.text)}>{title}</p>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  );
}

export function EducationalBadge({
  label = "Ejemplo educativo",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-warn/30 bg-warn/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-warn uppercase",
        className,
      )}
    >
      <ShieldAlert className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-[14px] border border-dashed border-line-strong bg-surface/40 px-6 py-14 text-center",
        className,
      )}
    >
      {icon ? <div className="text-muted">{icon}</div> : null}
      <p className="text-[15px] font-semibold text-ink">{title}</p>
      {description ? (
        <p className="max-w-md text-sm text-muted">{description}</p>
      ) : null}
      {action}
    </div>
  );
}
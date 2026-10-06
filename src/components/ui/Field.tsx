import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useId } from "react";
import { cn } from "~/utils/cn";

const controlBase =
  "w-full rounded-xl border border-line bg-surface-2 px-3.5 text-sm text-ink transition-colors placeholder:text-muted/70 hover:border-line-strong focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 disabled:opacity-50";

export function Field({
  label,
  hint,
  error,
  children,
  htmlFor,
  className,
  suffix,
}: {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  htmlFor?: string;
  className?: string;
  suffix?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[12px] font-medium tracking-wide text-muted uppercase"
      >
        {label}
      </label>
      <div className="relative">
        {children}
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted">
            {suffix}
          </span>
        ) : null}
      </div>
      {error ? (
        <p className="text-xs text-bear">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export function Input({
  className,
  ...rest
}: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(controlBase, "h-11", className)} {...rest} />;
}

export function NumberInput({
  className,
  ...rest
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type="number"
      inputMode="decimal"
      className={cn(controlBase, "h-11 tabular-nums", className)}
      {...rest}
    />
  );
}

export function Select({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(controlBase, "h-11 cursor-pointer appearance-none pr-9", className)}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Textarea({
  className,
  ...rest
}: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(controlBase, "py-2.5 leading-relaxed", className)} {...rest} />;
}

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
  className,
  ticks,
}: {
  label: ReactNode;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (value: number) => string;
  className?: string;
  ticks?: { value: number; label: string }[];
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[12px] font-medium tracking-wide text-muted uppercase">
          {label}
        </label>
        <span className="text-sm font-semibold text-ink tabular-nums">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-3 accent-brand"
        style={{
          background: `linear-gradient(to right, var(--color-brand) ${pct}%, var(--color-surface-3) ${pct}%)`,
        }}
      />
      {ticks?.length ? (
        <div className="flex justify-between text-[11px] text-muted">
          {ticks.map((t) => (
            <span key={t.value}>{t.label}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SegmentedControl<T extends string | number>({
  value,
  onChange,
  options,
  className,
  ariaLabel,
}: {
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: ReactNode; title?: string }[];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-xl border border-line bg-surface-2 p-1",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={String(opt.value)}
          type="button"
          title={opt.title}
          onClick={() => onChange(opt.value)}
          aria-pressed={opt.value === value}
          className={cn(
            "rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
            opt.value === value
              ? "bg-brand text-brand-ink shadow-soft"
              : "text-muted hover:text-ink",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "~/utils/cn";

type CardOwnProps = {
  className?: string;
  interactive?: boolean;
  children: ReactNode;
};

/**
 * `as` permite convertir la Card en otro elemento (por ejemplo un `Link`) y
 * hereda sus props reales, en lugar de ampliar solo las de un `div`.
 */
export function Card<T extends ElementType = "div">({
  className,
  as,
  interactive = false,
  ...rest
}: { as?: T } & CardOwnProps & Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps | "as">) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      className={cn(
        "rounded-[14px] border border-line bg-surface shadow-soft",
        interactive &&
          "transition-all duration-200 hover:border-line-strong hover:shadow-lift hover:-translate-y-0.5",
        className,
      )}
      {...rest}
    >
      {rest.children}
    </Tag>
  );
}

export function CardHeader({
  title,
  description,
  icon,
  className,
  action,
}: {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4", className)}>
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
            {icon}
          </span>
        ) : null}
        <div>
          <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
          {description ? (
            <p className="mt-0.5 text-sm text-muted">{description}</p>
          ) : null}
        </div>
      </div>
      {action}
    </div>
  );
}

export function CardBody({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mt-4 text-sm leading-relaxed text-ink-2", className)}>{children}</div>;
}

export function CardFooter({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mt-5 flex items-center gap-3 border-t border-line pt-4", className)}>
      {children}
    </div>
  );
}
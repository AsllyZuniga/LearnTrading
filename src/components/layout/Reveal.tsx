import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "~/utils/cn";

/**
 * Animación de entrada discreta, sin librerías externas. Respeta
 * prefers-reduced-motion mediante la utilidad `animate-fade-up` que ya
 * desactiva animaciones en esa preferencia.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Sin IntersectionObserver no hay nada que esperar: se muestra desde el inicio.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(visible ? "animate-fade-up" : "opacity-0", className)}
    >
      {children}
    </Tag>
  );
}
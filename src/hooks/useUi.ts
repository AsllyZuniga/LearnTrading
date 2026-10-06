import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useDebounced<T>(value: T, delay = 200): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);
  return matches;
}

export function useElementWidth<T extends HTMLElement>(fallback = 880) {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth || fallback);
    update();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [fallback]);

  return { ref, width };
}

export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);
  return { isOpen, toggle, open, close, setIsOpen };
}

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }, []);
  return { copied, copy };
}

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked || typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

export function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;
    function onDown(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler();
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [ref, handler, enabled]);
}

export function useStreak() {
  // El día de hoy se cuenta en el estado inicial: registrarlo es solo una
  // escritura en localStorage, no un cambio de estado de React.
  const [days] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = readStudyDays();
    const today = new Date().toISOString().slice(0, 10);
    if (stored.includes(today)) return stored;
    const next = [...stored, today].sort().slice(-400);
    try {
      window.localStorage.setItem("ta:study-days", JSON.stringify(next));
    } catch {
      /* almacenamiento no disponible */
    }
    return next;
  });

  return useMemo(() => countStreak(days), [days]);
}

function readStudyDays(): string[] {
  try {
    const raw = window.localStorage.getItem("ta:study-days");
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function countStreak(days: string[]): number {
  if (days.length === 0) return 0;
  const sorted = [...new Set(days)].sort();
  const today = new Date();
  const cursor = new Date(today);
  if (!sorted.includes(today.toISOString().slice(0, 10))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let count = 0;
  for (;;) {
    const key = cursor.toISOString().slice(0, 10);
    if (!sorted.includes(key)) break;
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}
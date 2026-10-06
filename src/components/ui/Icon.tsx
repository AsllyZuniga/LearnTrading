import {
  Brain,
  CandlestickChart,
  Compass,
  LifeBuoy,
  Layers,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Brain,
  CandlestickChart,
  Compass,
  LifeBuoy,
  Layers,
  LineChart,
  ShieldCheck,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name] ?? Compass;
  return <Cmp className={className} aria-hidden="true" />;
}

export function hasIcon(name: string): boolean {
  return name in registry;
}
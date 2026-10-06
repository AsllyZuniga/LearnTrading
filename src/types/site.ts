export type Theme = "dark" | "light";

export interface NavItem {
  label: string;
  to: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  language: string;
  themeColor: { dark: string; light: string };
  ogImage: string;
  social: { label: string; href: string }[];
  nav: NavItem[];
  footer: { title: string; links: { label: string; to: string }[] }[];
  ads: { enabled: boolean; labels: Record<string, string> };
  newsletter: { enabled: boolean; cta: string; success: string; legal: string };
  premium: { enabled: boolean };
}
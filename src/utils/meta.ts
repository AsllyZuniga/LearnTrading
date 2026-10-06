import type { MetaArgs, MetaDescriptor } from "react-router";

import { site } from "~/data/site";

type PageMetaInput = {
  title: string;
  description?: string;
  /** `article` en lecciones, artículos y términos; `website` en el resto. */
  type?: "website" | "article";
};

function absoluteUrl(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return `${site.url}${clean}`;
}

/**
 * React Router sustituye la meta de cada ruta en lugar de fusionarla, así que
 * cada ruta debe declarar su propio title y description. Este helper evita
 * tener que repetir a mano las etiquetas de Open Graph, Twitter y canonical en
 * los quince módulos de la aplicación.
 */
export function pageMeta(
  { title, description, type = "website" }: PageMetaInput,
  args?: Pick<MetaArgs, "location">,
): MetaDescriptor[] {
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;
  const summary = description ?? site.description;
  const url = absoluteUrl(args?.location?.pathname ?? "/");

  return [
    { title: fullTitle },
    { name: "description", content: summary },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: summary },
    { property: "og:url", content: url },
    { property: "og:image", content: `${site.url}${site.ogImage}` },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: summary },
    { tagName: "link", rel: "canonical", href: url },
  ];
}
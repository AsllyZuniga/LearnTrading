import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { allPosts } from "~/data/blog";
import { allTerms } from "~/data/dictionary";
import { allLessons } from "~/data/lessons";
import { levels, site } from "~/data/site";

const baseUrl = site.url.replace(/\/$/, "");
const publicDir = resolve(process.cwd(), "public");

function write(relativePath: string, content: string) {
  const target = resolve(publicDir, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content, "utf8");
  return target;
}

function sitemapUrl(path: string, lastmod: string, priority: string, changefreq: string): string {
  return [
    "  <url>",
    `    <loc>${baseUrl}${path}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const newestLesson = allLessons.reduce(
  (acc, lesson) => (lesson.updatedAt > acc ? lesson.updatedAt : acc),
  "2026-01-01",
);
const newestPost = allPosts.reduce(
  (acc, post) => (post.updatedAt > acc ? post.updatedAt : acc),
  newestLesson,
);

const entries: string[] = [
  sitemapUrl("/", newestPost, "1.0", "weekly"),
  sitemapUrl("/ruta", newestLesson, "0.9", "weekly"),
  sitemapUrl("/diccionario", newestLesson, "0.8", "monthly"),
  sitemapUrl("/blog", newestPost, "0.8", "weekly"),
  sitemapUrl("/simulador", "2026-01-16", "0.7", "monthly"),
  sitemapUrl("/graficos", "2026-01-16", "0.7", "monthly"),
  sitemapUrl("/recursos", "2026-01-16", "0.6", "monthly"),
  sitemapUrl("/dashboard", newestLesson, "0.4", "monthly"),
  sitemapUrl("/aviso-legal", "2026-01-14", "0.3", "yearly"),
  sitemapUrl("/privacidad", "2026-01-14", "0.3", "yearly"),
  ...levels.map((level) =>
    sitemapUrl(`/ruta/${level.slug}`, newestLesson, "0.8", "weekly"),
  ),
  ...allLessons.map((lesson) => {
    const level = levels.find((entry) => entry.id === lesson.levelId);
    return sitemapUrl(
      `/ruta/${level?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`,
      lesson.updatedAt,
      "0.7",
      "monthly",
    );
  }),
  ...allTerms.map((term) => sitemapUrl(`/diccionario/${term.slug}`, newestLesson, "0.6", "monthly")),
  ...allPosts.map((post) => sitemapUrl(`/blog/${post.slug}`, post.updatedAt, "0.7", "monthly")),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

const robots = `# ${site.name}
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

const manifest = JSON.stringify(
  {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    lang: site.language,
    start_url: "/",
    display: "standalone",
    background_color: site.themeColor.dark,
    theme_color: site.themeColor.dark,
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  },
  null,
  2,
);

const written = [
  write("sitemap.xml", sitemap),
  write("robots.txt", robots),
  write("site.webmanifest", manifest),
];

console.log(
  `SEO generado: ${entries.length} URLs en sitemap.xml, robots.txt y site.webmanifest.`,
);
written.forEach((path) => console.log(`  · ${path}`));
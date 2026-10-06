import { allLessons, levelLessonCount } from "./lessons";
import { levels } from "./site";
import { allTerms } from "./dictionary";
import { allPosts } from "./blog";

/**
 * Rutas fijas que se prerenderizan siempre.
 */
const STATIC_ROUTES = [
  "/",
  "/dashboard",
  "/ruta",
  "/diccionario",
  "/blog",
  "/simulador",
  "/graficos",
  "/recursos",
  "/aviso-legal",
  "/privacidad",
] as const;

/**
 * Rutas estáticas derivadas del contenido. Al añadir una lección, un término o
 * un artículo, la ruta queda incluida automáticamente sin tocar la config.
 */
const LEVEL_ROUTES = levels.map((level) => `/ruta/${level.slug}`);

const LESSON_ROUTES = allLessons.map((lesson) => {
  const level = levels.find((entry) => entry.id === lesson.levelId);
  return `/ruta/${level?.slug ?? `nivel-${lesson.levelId}`}/${lesson.slug}`;
});

const TERM_ROUTES = allTerms.map((term) => `/diccionario/${term.slug}`);

const POST_ROUTES = allPosts.map((post) => `/blog/${post.slug}`);

export const STATIC_PATHS: string[] = [
  ...STATIC_ROUTES,
  ...LEVEL_ROUTES,
  ...LESSON_ROUTES,
  ...TERM_ROUTES,
  ...POST_ROUTES,
];

/** Resumen útil para la home y para verificar que la app tiene contenido real. */
export const contentStats = {
  levels: levels.length,
  lessons: allLessons.length,
  terms: allTerms.length,
  posts: allPosts.length,
  lessonsByLevel: Object.fromEntries(levelLessonCount),
};
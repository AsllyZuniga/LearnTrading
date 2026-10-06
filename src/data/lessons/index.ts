import type { Lesson } from "~/types";
import { levels } from "../site";
import { level1Lessons } from "./nivel-1";
import { level2Lessons } from "./nivel-2";
import { level3Lessons } from "./nivel-3";
import { level4Lessons } from "./nivel-4";
import { level5Lessons } from "./nivel-5";
import { level6Lessons } from "./nivel-6";
import { level7Lessons } from "./nivel-7";

/**
 * Registro central de lecciones. Cada nivel se incorpora en un archivo propio
 * para mantener archivos manejables; este módulo es la única fuente de verdad
 * que consumen las rutas, el dashboard y la generación de rutas estáticas.
 */
export const allLessons: Lesson[] = [
  ...level1Lessons,
  ...level2Lessons,
  ...level3Lessons,
  ...level4Lessons,
  ...level5Lessons,
  ...level6Lessons,
  ...level7Lessons,
];

export const lessonMap = new Map(allLessons.map((lesson) => [lesson.slug, lesson]));

export const lessonsByLevel = levels.map((level) => ({
  level,
  lessons: allLessons
    .filter((lesson) => lesson.levelId === level.id)
    .sort((a, b) => a.order - b.order),
}));

export const levelLessonCount = new Map(
  lessonsByLevel.map(({ level, lessons }) => [level.id, lessons.length]),
);

export function getLesson(slug: string | undefined): Lesson | undefined {
  return slug ? lessonMap.get(slug) : undefined;
}

export function getLessonsForLevel(levelId: number): Lesson[] {
  return allLessons
    .filter((lesson) => lesson.levelId === levelId)
    .sort((a, b) => a.order - b.order);
}

export function getTotalLessons(): number {
  return allLessons.length;
}

export function getLevelLessonTotal(): number {
  return lessonsByLevel.reduce((acc, entry) => acc + entry.lessons.length, 0);
}

export function getLessonNeighbors(slug: string): { prev?: Lesson; next?: Lesson } {
  const index = allLessons.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? allLessons[index - 1] : undefined,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : undefined,
  };
}

export { level1Lessons };
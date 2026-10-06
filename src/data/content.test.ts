import { describe, expect, it } from "vitest";
import { allLessons, getLesson, getLessonNeighbors } from "~/data/lessons";
import { levels } from "~/data/site";
import { allTerms, getTerm, searchTerms } from "~/data/dictionary";
import { allPosts, getPost } from "~/data/blog";
import { STATIC_PATHS, contentStats } from "~/data/routes";

describe("lecciones", () => {
  it("no tiene slugs duplicados", () => {
    const slugs = allLessons.map((lesson) => lesson.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("cada lección apunta a un nivel existente", () => {
    for (const lesson of allLessons) {
      expect(levels.some((level) => level.id === lesson.levelId)).toBe(true);
    }
  });

  it("cada glosario y cada quiz referencian términos reales", () => {
    for (const lesson of allLessons) {
      for (const slug of lesson.glossary) {
        expect(getTerm(slug), `${lesson.slug} -> ${slug}`).toBeDefined();
      }
      expect(lesson.quiz.length).toBeGreaterThan(0);
      for (const question of lesson.quiz) {
        expect(question.correct).toBeLessThan(question.options.length);
        expect(question.correct).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it("devuelve vecinos reales y encadenados", () => {
    for (const [index, lesson] of allLessons.entries()) {
      const { prev, next } = getLessonNeighbors(lesson.slug);
      expect(prev?.slug).toBe(index > 0 ? allLessons[index - 1].slug : undefined);
      expect(next?.slug).toBe(
        index < allLessons.length - 1 ? allLessons[index + 1].slug : undefined,
      );
    }
  });
});

describe("diccionario", () => {
  it("no tiene slugs duplicados", () => {
    const slugs = allTerms.map((term) => term.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("cada entrada tiene definición y categoría", () => {
    for (const term of allTerms) {
      expect(term.definition.length).toBeGreaterThan(20);
      expect(term.short.length).toBeGreaterThan(10);
      expect(term.category).toBeTruthy();
    }
  });

  it("los términos relacionados existen", () => {
    for (const term of allTerms) {
      for (const slug of term.seeAlso) {
        expect(getTerm(slug), `${term.slug} -> ${slug}`).toBeDefined();
      }
    }
  });

  it("la búsqueda encuentra por término y por sinónimos", () => {
    expect(searchTerms("pip").length).toBeGreaterThan(0);
    expect(searchTerms("zzzz-no-existe")).toHaveLength(0);
  });
});

describe("blog", () => {
  it("no tiene slugs duplicados", () => {
    const slugs = allPosts.map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("las referencias cruzadas existen", () => {
    for (const post of allPosts) {
      for (const slug of post.relatedTerms) {
        expect(getTerm(slug), `${post.slug} -> ${slug}`).toBeDefined();
      }
      for (const slug of post.relatedLessons) {
        expect(getLesson(slug), `${post.slug} -> ${slug}`).toBeDefined();
      }
    }
  });

  it("cada artículo tiene contenido y fecha válida", () => {
    for (const post of allPosts) {
      expect(post.sections.length).toBeGreaterThan(2);
      expect(Number.isNaN(Date.parse(post.updatedAt))).toBe(false);
    }
  });
});

describe("rutas estáticas", () => {
  it("no repite rutas y cubre todo el contenido", () => {
    expect(new Set(STATIC_PATHS).size).toBe(STATIC_PATHS.length);
    expect(STATIC_PATHS).toContain("/");
    expect(contentStats.lessons).toBe(allLessons.length);
    expect(contentStats.terms).toBe(allTerms.length);
    expect(contentStats.posts).toBe(allPosts.length);
  });

  it("construye la ruta de cada lección con el slug de su nivel", () => {
    for (const lesson of allLessons) {
      const level = levels.find((entry) => entry.id === lesson.levelId);
      expect(STATIC_PATHS).toContain(`/ruta/${level?.slug}/${lesson.slug}`);
    }
  });

  it("incluye la ruta de cada término y cada artículo", () => {
    for (const term of allTerms) expect(STATIC_PATHS).toContain(`/diccionario/${term.slug}`);
    for (const post of allPosts) expect(STATIC_PATHS).toContain(`/blog/${post.slug}`);
  });

  it("getPost y getTerm resuelven los primeros elementos", () => {
    expect(getPost(allPosts[0].slug)?.slug).toBe(allPosts[0].slug);
    expect(getTerm(allTerms[0].slug)?.slug).toBe(allTerms[0].slug);
  });
});
import { PROGRESS_STORAGE_KEY, EMPTY_PROGRESS, type ProgressState } from "~/types/progress";
import { readStoredTheme } from "./useTheme";

type Listener = () => void;

function readState(): ProgressState {
  if (typeof window === "undefined") return EMPTY_PROGRESS;
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return EMPTY_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { ...EMPTY_PROGRESS, ...parsed, theme: readStoredTheme() };
  } catch {
    return EMPTY_PROGRESS;
  }
}

let state: ProgressState = EMPTY_PROGRESS;
let hydrated = false;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): ProgressState {
  return state;
}

function getServerSnapshot(): ProgressState {
  return EMPTY_PROGRESS;
}

export function initProgress() {
  if (hydrated || typeof window === "undefined") return;
  state = readState();
  hydrated = true;
  emit();
}

function persist(next: ProgressState) {
  state = next;
  if (typeof window !== "undefined") {
    try {
      const { theme: _ignored, ...rest } = next;
      void _ignored;
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(rest));
    } catch {
      void 0;
    }
  }
  emit();
}

export const progressStore = {
  subscribe,
  getSnapshot,
  getServerSnapshot,
  init: initProgress,
  update(mutate: (current: ProgressState) => ProgressState) {
    persist(mutate(getSnapshot()));
  },
  reset() {
    persist({ ...EMPTY_PROGRESS, theme: readStoredTheme() });
  },
};

export function toggleLessonComplete(slug: string) {
  progressStore.update((current) => {
    const completed = current.completedLessons.includes(slug)
      ? current.completedLessons.filter((s) => s !== slug)
      : [...current.completedLessons, slug];
    return { ...current, completedLessons: completed };
  });
}

export function toggleLessonSaved(slug: string) {
  progressStore.update((current) => {
    const saved = current.savedLessons.includes(slug)
      ? current.savedLessons.filter((s) => s !== slug)
      : [...current.savedLessons, slug];
    return { ...current, savedLessons: saved };
  });
}

export function saveQuizResult(slug: string, answers: number[], correct: number[]) {
  const score = answers.reduce(
    (acc, answer, i) => acc + (answer === correct[i] ? 1 : 0),
    0,
  );
  progressStore.update((current) => ({
    ...current,
    quiz: {
      ...current.quiz,
      [slug]: {
        answers,
        score,
        total: correct.length,
        completedAt: new Date().toISOString(),
      },
    },
  }));
  return score;
}

export function markVisited(pathname: string) {
  progressStore.update((current) => ({
    ...current,
    lastVisited: pathname,
    studyLog: {
      ...current.studyLog,
      [new Date().toISOString().slice(0, 10)]: (current.studyLog[new Date().toISOString().slice(0, 10)] ?? 0) + 1,
    },
  }));
}
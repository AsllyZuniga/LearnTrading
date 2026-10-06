import { useSyncExternalStore } from "react";
import type { ProgressState } from "~/types/progress";
import {
  progressStore,
  markVisited,
  saveQuizResult,
  toggleLessonComplete,
  toggleLessonSaved,
} from "./useProgress";
import { useTheme } from "./useTheme";

export { progressStore, toggleLessonComplete, toggleLessonSaved, saveQuizResult };

export function useProgress(): ProgressState {
  return useSyncExternalStore(
    progressStore.subscribe,
    progressStore.getSnapshot,
    progressStore.getServerSnapshot,
  );
}

export function useLessonState(slug: string) {
  const progress = useProgress();
  return {
    isCompleted: progress.completedLessons.includes(slug),
    isSaved: progress.savedLessons.includes(slug),
    quiz: progress.quiz[slug] ?? null,
  };
}

export function useAppTheme() {
  return useTheme();
}

export { markVisited };
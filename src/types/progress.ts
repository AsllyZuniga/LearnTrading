export interface QuizResult {
  answers: number[];
  score: number;
  total: number;
  completedAt: string;
}

export interface ProgressState {
  completedLessons: string[];
  savedLessons: string[];
  quiz: Record<string, QuizResult>;
  theme: "dark" | "light";
  lastVisited: string | null;
  studyLog: Record<string, number>;
}

export const PROGRESS_STORAGE_KEY = "ta:progress:v1";

export const EMPTY_PROGRESS: ProgressState = {
  completedLessons: [],
  savedLessons: [],
  quiz: {},
  theme: "dark",
  lastVisited: null,
  studyLog: {},
};
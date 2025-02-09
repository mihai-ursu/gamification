import { type QuestionType } from "@/data/math-course-questions";
import { create } from "zustand";

interface QuestionProgress {
  currentQuestion: number;
  currentQuestionId: number | null;
  selectedAnswer: string | null;
  questionLocked: boolean;
  correctAnswers: number;
  isCorrect: boolean | null;
}

interface QuestionState {
  regularQuestionsDone: boolean;
  wrongQuestions: QuestionType[];
}

interface CourseState {
  progress: QuestionProgress;
  state: QuestionState;
  isQuizComplete: () => boolean;
  hasWrongQuestions: () => boolean;
  isLastQuestion: (totalQuestions: number) => boolean;
  updateProgress: (updates: Partial<QuestionProgress>) => void;
  incrementCorrectAnswers: () => void;
  incrementCurrentQuestion: () => void;
  resetProgress: () => void;
  setRegularQuestionsDone: (done: boolean) => void;
  addWrongQuestion: (question: QuestionType) => void;
  removeWrongQuestion: (questionId: number) => void;
  resetQuestionState: () => void;
}

const initialProgress: QuestionProgress = {
  currentQuestion: 0,
  currentQuestionId: null,
  selectedAnswer: null,
  questionLocked: false,
  correctAnswers: 0,
  isCorrect: null,
};

const initialState: QuestionState = {
  regularQuestionsDone: false,
  wrongQuestions: [],
};

const useQuestionsStore = create<CourseState>()((set, get) => ({
  progress: initialProgress,
  state: initialState,
  isQuizComplete: () =>
    get().state.regularQuestionsDone && get().state.wrongQuestions.length === 0,
  hasWrongQuestions: () => get().state.wrongQuestions.length > 0,
  isLastQuestion: (totalQuestions: number) =>
    get().progress.currentQuestion === totalQuestions - 1,
  updateProgress: (updates) =>
    set((state) => ({
      progress: { ...state.progress, ...updates },
    })),
  incrementCorrectAnswers: () =>
    set((state) => ({
      progress: {
        ...state.progress,
        correctAnswers: state.progress.correctAnswers + 1,
      },
    })),
  incrementCurrentQuestion: () =>
    set((state) => ({
      progress: {
        ...state.progress,
        currentQuestion: state.progress.currentQuestion + 1,
      },
    })),
  resetProgress: () =>
    set(() => ({
      progress: initialProgress,
    })),
  setRegularQuestionsDone: (done) =>
    set((state) => ({
      state: { ...state.state, regularQuestionsDone: done },
    })),
  addWrongQuestion: (question) =>
    set((state) => ({
      state: {
        ...state.state,
        wrongQuestions: [...state.state.wrongQuestions, question],
      },
    })),
  removeWrongQuestion: (questionId) =>
    set((state) => ({
      state: {
        ...state.state,
        wrongQuestions: state.state.wrongQuestions.filter(
          (q) => q.id !== questionId,
        ),
      },
    })),
  resetQuestionState: () =>
    set(() => ({
      state: initialState,
    })),
}));

export default useQuestionsStore;

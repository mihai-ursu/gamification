import { create } from "zustand";

interface CourseState {
  currentQuestion: number;
  selectedAnswer: string | null;
  currentQuestionId: number | null;
  questionLocked: boolean;
  currentQuestionCorrect: boolean | null;
  correctAnswers: number;
  incrementCorrectAnswers: () => void;
  setCurrentQuestionCorrect: (correct: boolean | null) => void;
  setQuestionLocked: (locked: boolean) => void;
  setCurrentQuestionId: (id: number) => void;
  setSelectedAnswer: (answer: string | null) => void;
  incrementCurrentQuestion: () => void;
}

const useQuestionsStore = create<CourseState>()((set) => ({
  currentQuestion: 0,
  currentQuestionId: null,
  questionLocked: false,
  selectedAnswer: null,
  currentQuestionCorrect: null,
  correctAnswers: 0,
  setCurrentQuestionCorrect: (correct) =>
    set({ currentQuestionCorrect: correct }),
  setQuestionLocked: (locked) => set({ questionLocked: locked }),
  setCurrentQuestionId: (id: number) => set({ currentQuestionId: id }),
  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  incrementCorrectAnswers: () =>
    set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
  incrementCurrentQuestion: () =>
    set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
}));

export default useQuestionsStore;

import { create } from "zustand";

interface CourseState {
  correctQuestions: number;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string | null) => void;
  increment: () => void;
  decrement: () => void;
}

const useQuestionsStore = create<CourseState>()((set) => ({
  correctQuestions: 0,
  selectedAnswer: null,
  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  increment: () =>
    set((state) => ({ correctQuestions: state.correctQuestions + 1 })),
  decrement: () =>
    set((state) =>
      state.correctQuestions > 0
        ? { correctQuestions: state.correctQuestions - 1 }
        : { correctQuestions: 0 },
    ),
}));

export default useQuestionsStore;

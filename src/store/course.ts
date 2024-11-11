import { create } from "zustand";

interface CourseState {
  correctQuestions: number;
  increment: () => void;
  decrement: () => void;
}

const useQuestionsStore = create<CourseState>()((set) => ({
  correctQuestions: 0,
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

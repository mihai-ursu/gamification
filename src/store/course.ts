import { type QuestionType } from "@/data/math-course-questions";
import { create } from "zustand";

interface CourseState {
  regularQuestionsDone: boolean;
  wrongQuestions: QuestionType[];
  currentQuestion: number;
  selectedAnswer: string | null;
  currentQuestionId: number | null;
  questionLocked: boolean;
  currentQuestionCorrect: boolean | null;
  correctAnswers: number;
  setRegularQuestionsDone: (done: boolean) => void;
  setWrongQuestions: (questions: QuestionType[]) => void;
  incrementCorrectAnswers: () => void;
  setCurrentQuestionCorrect: (correct: boolean | null) => void;
  setQuestionLocked: (locked: boolean) => void;
  setCurrentQuestionId: (id: number) => void;
  setSelectedAnswer: (answer: string | null) => void;
  incrementCurrentQuestion: () => void;
  setCurrentQuestion: (question: number) => void;
}

const useQuestionsStore = create<CourseState>()((set) => ({
  regularQuestionsDone: false,
  wrongQuestions: [],
  currentQuestion: 0,
  currentQuestionId: null,
  questionLocked: false,
  selectedAnswer: null,
  currentQuestionCorrect: null,
  correctAnswers: 0,

  setRegularQuestionsDone: (done) => set({ regularQuestionsDone: done }),
  setWrongQuestions: (wrongQuestions) => set({ wrongQuestions }),
  setCurrentQuestionCorrect: (correct) =>
    set({ currentQuestionCorrect: correct }),
  setQuestionLocked: (locked) => set({ questionLocked: locked }),
  setCurrentQuestionId: (id: number) => set({ currentQuestionId: id }),
  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  incrementCorrectAnswers: () =>
    set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
  incrementCurrentQuestion: () =>
    set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
}));

export default useQuestionsStore;

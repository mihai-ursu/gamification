const questions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answers: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    question: "What is 2 * 8?",
    answers: ["16", "20", "12", "4"],
  },
  {
    id: 3,
    question: "What is 2 - 2?",
    answers: ["1", "2", "0", "4"],
  },
  {
    id: 4,
    question: "What is 6 / 2?",
    answers: ["1", "2", "3", "4"],
  },
  {
    id: 5,
    question: "What is 33 - 11?",
    answers: ["99", "21", "31", "22"],
  },
];

export const answers = [
  {
    questionId: 1,
    answer: "4",
  },
  {
    questionId: 2,
    answer: "16",
  },
  {
    questionId: 3,
    answer: "0",
  },
  {
    questionId: 4,
    answer: "3",
  },
  {
    questionId: 5,
    answer: "22",
  },
];

export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
};

export default questions;

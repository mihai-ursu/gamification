const questions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answers: ["1", "2", "3", "4"],
    correct: "4",
  },
  {
    id: 2,
    question: "What is 2 * 8?",
    answers: ["16", "20", "12", "4"],
    correct: "4",
  },
  {
    id: 3,
    question: "What is 2 - 2?",
    answers: ["1", "2", "0", "4"],
    correct: "0",
  },
  {
    id: 4,
    question: "What is 6 / 2?",
    answers: ["1", "2", "3", "4"],
    correct: "3",
  },
  {
    id: 5,
    question: "What is 33 - 11?",
    answers: ["99", "21", "31", "22"],
    correct: "22",
  },
];

export type QuestionType = {
  id: number;
  question: string;
  answers: string[];
  correct: string;
};

export default questions;

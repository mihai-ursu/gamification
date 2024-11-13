"use server";

import { answers } from "@/data/math-course-questions";

export const checkAnswer = (
  questionId: number,
  answer: string,
): Promise<boolean> => {
  const dataAnswer = answers.find((q) => q.questionId === questionId);

  if (!dataAnswer) {
    throw new Error("Question not found");
  }

  return Promise.resolve(dataAnswer.answer === answer);
};

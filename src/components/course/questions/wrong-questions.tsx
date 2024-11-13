"use client";

import useQuestionsStore from "@/store/course";
import Question from "./question";

const WrongQuestions = () => {
  const { wrongQuestions, regularQuestionsDone } = useQuestionsStore();

  if (wrongQuestions.length === 0 || !regularQuestionsDone) return null;

  return wrongQuestions.map((question, index) => (
    <Question key={question.id} question={question} currentIndex={index} />
  ));
};

export default WrongQuestions;

"use client";

import type { QuestionType } from "@/data/math-course-questions";
import Question from "./question";
import useQuestionsStore from "@/store/course";

type Props = {
  questions: QuestionType[];
};
const RegularQuestions = (props: Props) => {
  const { questions } = props;

  const { regularQuestionsDone } = useQuestionsStore();

  if (regularQuestionsDone) return null;

  return questions.map((question, index) => (
    <Question key={question.id} question={question} currentIndex={index} />
  ));
};

export default RegularQuestions;

"use client";

import type { QuestionType } from "@/data/math-course-questions";
import useQuestionsStore from "@/store/course";
import { Button } from "./answer-button";

type Props = {
  question: QuestionType;
  currentIndex: number;
};

const Question = (props: Props) => {
  const { question, currentIndex } = props;
  const { correctQuestions, increment } = useQuestionsStore();

  if (currentIndex !== correctQuestions) return null;

  return (
    <>
      <h1 className="text-center text-xl">{question.question}</h1>

      <div className="grid w-1/2 grid-cols-2 gap-6">
        {question.answers.map((answer, index) => (
          <Button onClick={() => increment()} key={index}>
            {answer}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Question;

"use client";

import type { QuestionType } from "@/data/math-course-questions";
import useQuestionsStore from "@/store/course";
import { Button } from "./answer-button";
import { useState } from "react";

type Props = {
  question: QuestionType;
  currentIndex: number;
};

const Question = (props: Props) => {
  const { question, currentIndex } = props;
  const { correctQuestions, selectedAnswer, setSelectedAnswer } =
    useQuestionsStore();

  if (currentIndex !== correctQuestions) return null;

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      <h1 className="text-center text-xl">{question.question}</h1>

      <div className="grid w-full grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2">
        {question.answers.map((answer, index) => (
          <Button
            onClick={() => handleAnswerClick(answer)}
            isActive={answer === selectedAnswer}
            key={index}
          >
            {answer}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Question;

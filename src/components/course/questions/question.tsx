"use client";

import type { QuestionType } from "@/data/math-course-questions";
import useQuestionsStore from "@/store/course";
import { Button } from "./answer-button";
import { useEffect } from "react";

type Props = {
  question: QuestionType;
  currentIndex: number;
};

const Question = (props: Props) => {
  const { question, currentIndex } = props;
  const {
    currentQuestion,
    selectedAnswer,
    questionLocked,
    setSelectedAnswer,
    setCurrentQuestionId,
  } = useQuestionsStore();

  useEffect(() => {
    if (currentIndex === currentQuestion) setCurrentQuestionId(question.id);
  }, [currentQuestion, currentIndex, question.id, setCurrentQuestionId]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  if (currentIndex !== currentQuestion) return null;

  return (
    <>
      <h1 className="text-center text-xl">{question.question}</h1>

      <div className="grid w-full grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2">
        {question.answers.map((answer, index) => {
          const buttonDisabled =
            selectedAnswer !== null &&
            selectedAnswer !== answer &&
            questionLocked;
          return (
            <Button
              onClick={() => handleAnswerClick(answer)}
              isActive={answer === selectedAnswer}
              disabled={buttonDisabled}
              key={index}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Question;

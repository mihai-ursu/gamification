"use client";

import { Button } from "./ui/answer-button";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";

const AnswerSection = () => {
  const { 
    currentQuestion,
    selectedAnswer,
    isLocked,
    handleAnswerSelect
  } = useQuestionFlow();

  if (!currentQuestion) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2">
      {currentQuestion.answers.map((answer, index) => {
        const buttonDisabled =
          selectedAnswer !== null &&
          selectedAnswer !== answer &&
          isLocked;

        return (
          <Button
            key={index}
            onClick={() => handleAnswerSelect(answer)}
            isActive={answer === selectedAnswer}
            disabled={buttonDisabled}
          >
            {answer}
          </Button>
        );
      })}
    </div>
  );
};

export default AnswerSection;
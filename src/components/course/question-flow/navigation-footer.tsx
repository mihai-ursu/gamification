"use client";

import { Button } from "./ui/answer-button";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import { cn } from "@/lib/utils";

const NavigationFooter = () => {
  const {
    canCheck,
    canContinue,
    isCorrect,
    handleCheckAnswer,
    handleNextQuestion,
  } = useQuestionFlow();

  return (
    <div
      className={cn(
        "w-full bg-slate-100 px-8 py-14",
        canContinue && isCorrect && "bg-green-100",
        canContinue && !isCorrect && "bg-red-100",
      )}
    >
      <div className="ml-auto mr-auto flex max-w-[1460px] flex-col items-center gap-3 md:flex-row md:justify-between">
        <div>
          {canContinue && isCorrect ? (
            <p className="text-2xl font-bold text-green-500">Correct!</p>
          ) : canContinue ? (
            <p className="text-2xl font-bold text-red-500">Incorrect!</p>
          ) : null}
        </div>
        {!canContinue ? (
          <Button
            variant="blue"
            onClick={handleCheckAnswer}
            disabled={!canCheck}
          >
            Check Answer
          </Button>
        ) : null}

        {canContinue ? (
          <Button
            onClick={handleNextQuestion}
            variant={isCorrect ? "green" : "red"}
          >
            Continue
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationFooter;

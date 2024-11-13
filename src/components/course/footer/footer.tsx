"use client";

import useQuestionsStore from "@/store/course";
import { Button } from "../questions/answer-button";
import { checkAnswer } from "@/actions/actions";
import { cn } from "@/utils/cn";

const QuestionsFooter = () => {
  const {
    selectedAnswer,
    currentQuestionId,
    questionLocked,
    currentQuestionCorrect,
    setQuestionLocked,
    setCurrentQuestionCorrect,
    incrementCorrectAnswers,
    incrementCurrentQuestion,
    setSelectedAnswer,
  } = useQuestionsStore();

  const handleCheckAnswer = async () => {
    console.log(selectedAnswer, currentQuestionId);
    if (!selectedAnswer || !currentQuestionId) return;
    console.log("TEST");
    await checkAnswer(currentQuestionId, selectedAnswer).then((res) => {
      setQuestionLocked(true);
      setCurrentQuestionCorrect(res);
      if (res) incrementCorrectAnswers();
      return res;
    });
  };

  const handleContinue = () => {
    setQuestionLocked(false);
    setSelectedAnswer(null);
    setCurrentQuestionCorrect(null);
    incrementCurrentQuestion();
  };

  return (
    <footer
      className={cn(
        "bg-slate-100 px-8 py-14",
        questionLocked && currentQuestionCorrect && "bg-green-100",
        questionLocked && !currentQuestionCorrect && "bg-red-100",
      )}
    >
      <div className="ml-auto mr-auto flex max-w-[1460px] items-center justify-between">
        <div>
          {questionLocked && currentQuestionCorrect ? (
            <p className="text-2xl font-bold text-green-500">
              Correct! The answer is: {selectedAnswer}
            </p>
          ) : questionLocked ? (
            <p className="text-2xl font-bold text-red-500">Incorrect!</p>
          ) : null}
        </div>
        {!questionLocked ? (
          <Button
            variant="blue"
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
          >
            Check Answer
          </Button>
        ) : (
          <Button
            onClick={handleContinue}
            variant={currentQuestionCorrect ? "green" : "red"}
          >
            Continue
          </Button>
        )}
      </div>
    </footer>
  );
};

export default QuestionsFooter;

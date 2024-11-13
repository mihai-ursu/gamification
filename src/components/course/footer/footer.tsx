"use client";

import useQuestionsStore from "@/store/course";
import { Button } from "../questions/answer-button";
import { checkAnswer } from "@/actions/actions";
import { cn } from "@/utils/cn";
import questions from "@/data/math-course-questions";
import { useRouter } from "next/navigation";

const QuestionsFooter = () => {
  const {
    selectedAnswer,
    currentQuestionId,
    questionLocked,
    currentQuestionCorrect,
    wrongQuestions,
    regularQuestionsDone,
    setQuestionLocked,
    setCurrentQuestionCorrect,
    incrementCorrectAnswers,
    incrementCurrentQuestion,
    setSelectedAnswer,
    setRegularQuestionsDone,
    setWrongQuestions,
    setCurrentQuestion,
  } = useQuestionsStore();

  const router = useRouter();

  const handleCheckAnswer = async () => {
    if (!selectedAnswer || !currentQuestionId) return;
    await checkAnswer(currentQuestionId, selectedAnswer).then((res) => {
      setQuestionLocked(true);
      setCurrentQuestionCorrect(res);

      if (res) {
        if (wrongQuestions.find((q) => q.id === currentQuestionId)) {
          setWrongQuestions(
            wrongQuestions.filter((q) => q.id !== currentQuestionId),
          );
        }
        incrementCorrectAnswers();
      }

      if (!res) {
        if (wrongQuestions.find((q) => q.id === currentQuestionId)) {
          return;
        }

        setWrongQuestions([
          ...wrongQuestions,
          questions.find((q) => q.id === currentQuestionId)!,
        ]);
      }
    });
  };

  const handleContinue = () => {
    setQuestionLocked(false);
    setSelectedAnswer(null);
    setCurrentQuestionCorrect(null);
    incrementCurrentQuestion();

    if (wrongQuestions.length === 0 && regularQuestionsDone)
      router.push("/course/success");

    //if regular questions are not done and this is the last question then set done and reset
    if (
      !regularQuestionsDone &&
      currentQuestionId === questions[questions.length - 1]!.id
    ) {
      setRegularQuestionsDone(true);
      setCurrentQuestion(0);
    }

    if (
      regularQuestionsDone &&
      wrongQuestions.length > 0 &&
      currentQuestionId === wrongQuestions[wrongQuestions.length - 1]!.id
    ) {
      setCurrentQuestion(0);
    }
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

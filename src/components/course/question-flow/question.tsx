import { cn } from "@/utils/cn";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";

const Question = () => {
  const { currentQuestion, isLocked, isCorrect } = useQuestionFlow();

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-2xl p-6">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
        {currentQuestion.question}
      </h2>
      {isLocked && (
        <div
          className={cn(
            "mt-4 rounded-md p-4",
            isCorrect
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800",
          )}
        >
          {isCorrect ? "Correct!" : "Incorrect. Try again later!"}
        </div>
      )}
    </div>
  );
};

export default Question;

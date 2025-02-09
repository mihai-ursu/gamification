import { useQuestionFlow } from "@/hooks/useQuestionFlow";

const Question = () => {
  const { currentQuestion } = useQuestionFlow();

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-2xl p-6">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
        {currentQuestion.question}
      </h2>
    </div>
  );
};

export default Question;

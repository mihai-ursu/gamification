import questions from "@/data/math-course-questions";
import Question from "./question";
const Questions = () => {
  return (
    <div className="flex h-full w-full flex-grow flex-col items-center justify-center gap-8">
      {questions.map((question, index) => (
        <Question key={question.id} question={question} currentIndex={index} />
      ))}
    </div>
  );
};

export default Questions;

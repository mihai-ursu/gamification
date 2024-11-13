import questions from "@/data/math-course-questions";
import WrongQuestions from "./wrong-questions";
import RegularQuestions from "./regular-questions";
const Questions = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <RegularQuestions questions={questions} />
      <WrongQuestions />
    </div>
  );
};

export default Questions;

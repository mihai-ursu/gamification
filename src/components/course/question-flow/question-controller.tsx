"use client";

import Question from "./question";
import AnswerSection from "./answer-section";
import NavigationFooter from "./navigation-footer";

const QuestionController = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Question />
      <AnswerSection />
      <NavigationFooter />
    </div>
  );
};

export default QuestionController;

"use client";

import Question from "./question";
import AnswerSection from "./answer-section";
import NavigationFooter from "./navigation-footer";

const QuestionController = () => {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-between gap-8">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8 p-8 pt-16">
        <Question />
        <AnswerSection />
      </div>
      <NavigationFooter />
    </div>
  );
};

export default QuestionController;

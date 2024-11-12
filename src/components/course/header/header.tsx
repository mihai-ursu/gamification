import React from "react";
import ProgressBar from "../progress-bar/progress-bar";
import questions from "@/data/math-course-questions";

export default function Header() {
  return (
    <header className="p-8">
      <div className="ml-auto mr-auto max-w-[1460px]">
        <ProgressBar noOfQuestions={questions.length} />
      </div>
    </header>
  );
}

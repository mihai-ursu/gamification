import Counter from "@/components/course/counter/counter";
import ProgressBar from "@/components/course/progress-bar/progress-bar";
import React from "react";
import questions from "@/data/math-course-questions";

function MathCourseAfterPage() {
  return (
    <main className="ml-auto mr-auto flex h-full min-h-screen w-full max-w-[1460px] flex-col p-8 pt-16">
      <ProgressBar noOfQuestions={questions.length} />
      <Counter />
    </main>
  );
}

export default MathCourseAfterPage;

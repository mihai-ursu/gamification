import ProgressBar from "@/components/course/progress-bar/progress-bar";
import React from "react";
import questions from "@/data/math-course-questions";
import Questions from "@/components/course/questions/questions";

function MathCourseAfterPage() {
  return (
    <main className="ml-auto mr-auto flex h-full min-h-screen w-full max-w-[1460px] flex-col gap-4 p-8 pt-16">
      <ProgressBar noOfQuestions={questions.length} />
      <Questions />
      {/* <Counter /> */}
    </main>
  );
}

export default MathCourseAfterPage;

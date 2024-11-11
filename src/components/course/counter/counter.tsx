"use client";
import questions from "@/data/math-course-questions";
import useQuestionsStore from "@/store/course";
const Counter = () => {
  const { correctQuestions, increment, decrement } = useQuestionsStore();

  return (
    <div>
      {correctQuestions}

      <div className="flex gap-4">
        <button
          className="cursor-pointer select-none rounded-lg border-b-[1px] border-blue-400 bg-blue-500 px-8 py-3 text-white transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
          onClick={() => decrement()}
        >
          -
        </button>
        <button
          className="cursor-pointer select-none rounded-lg border-b-[1px] border-blue-400 bg-blue-500 px-8 py-3 text-white transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
          onClick={() => {
            if (correctQuestions < questions.length) increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

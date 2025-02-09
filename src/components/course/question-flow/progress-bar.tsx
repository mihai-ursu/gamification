"use client";

import useQuestionsStore from "@/store/course";
import { cn } from "@/utils/cn";

const ProgressBar = ({ noOfQuestions }: { noOfQuestions: number }) => {
  const { correctAnswers } = useQuestionsStore().progress;
  const percentage = Math.round((correctAnswers / noOfQuestions) * 100);

  return (
    <div className="relative h-5 w-full overflow-hidden rounded-full bg-slate-200">
      <div
        style={{ width: `${percentage}%` }}
        className={cn(
          "absolute left-0 top-0 h-full rounded-full bg-green-500 transition-all duration-300",
          correctAnswers === 0 ? "opacity-0" : "opacity-100",
        )}
      >
        <div className="absolute left-1/2 top-[25%] z-10 h-[0.2rem] w-[calc(100%-0.8rem)] translate-x-[-50%] rounded-full bg-white opacity-20"></div>
      </div>
    </div>
  );
};

export default ProgressBar;

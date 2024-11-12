"use client";

import useQuestionsStore from "@/store/course";
import { Button } from "../questions/answer-button";

const QuestionsFooter = () => {
  const { correctQuestions, selectedAnswer, setSelectedAnswer } =
    useQuestionsStore();

  return (
    <footer className="bg-slate-100 px-8 py-14">
      <div className="ml-auto mr-auto flex max-w-[1460px] justify-end">
        <Button variant="green" disabled={!selectedAnswer}>
          Check Answer
        </Button>
      </div>
    </footer>
  );
};

export default QuestionsFooter;

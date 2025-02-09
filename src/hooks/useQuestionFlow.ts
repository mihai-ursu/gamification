import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useQuestionsStore from "@/store/course";
import { checkAnswer } from "@/actions/actions";
import questions from "@/data/math-course-questions";

export const useQuestionFlow = () => {
  const router = useRouter();

  const {
    progress,
    state,
    isQuizComplete,
    isLastQuestion,
    hasWrongQuestions,
    updateProgress,
    incrementCorrectAnswers,
    incrementCurrentQuestion,
    addWrongQuestion,
    removeWrongQuestion,
    setRegularQuestionsDone,
    resetProgress,
    resetQuestionState,
  } = useQuestionsStore();

  const currentQuestion = state.regularQuestionsDone
    ? state.wrongQuestions[progress.currentQuestion]
    : questions[progress.currentQuestion];

  // Set currentQuestionId when question changes
  useEffect(() => {
    if (currentQuestion) {
      updateProgress({
        currentQuestionId: currentQuestion.id,
      });
    }
  }, [currentQuestion, updateProgress]);

  const handleAnswerSelect = (answer: string) => {
    updateProgress({
      selectedAnswer: answer,
    });
  };

  const handleCheckAnswer = async () => {
    if (!progress.selectedAnswer || !progress.currentQuestionId) return;

    const isCorrect = await checkAnswer(
      progress.currentQuestionId,
      progress.selectedAnswer,
    );

    updateProgress({
      questionLocked: true,
      isCorrect,
    });

    if (isCorrect) {
      incrementCorrectAnswers();
      if (
        state.wrongQuestions.find((q) => q.id === progress.currentQuestionId)
      ) {
        removeWrongQuestion(progress.currentQuestionId);
      }
    } else if (
      !state.wrongQuestions.find((q) => q.id === progress.currentQuestionId)
    ) {
      addWrongQuestion(currentQuestion!);
    }
  };

  const handleNextQuestion = () => {
    // Handle completion of regular questions
    if (!state.regularQuestionsDone && isLastQuestion(questions.length)) {
      setRegularQuestionsDone(true);
      updateProgress({
        questionLocked: false,
        selectedAnswer: null,
        isCorrect: null,
        currentQuestion: 0,
      });

      if (!hasWrongQuestions()) {
        handleQuizComplete();
        return;
      }
      return;
    }

    // Handle completion of wrong questions review
    if (
      state.regularQuestionsDone &&
      hasWrongQuestions() &&
      isLastQuestion(state.wrongQuestions.length)
    ) {
      // Reset to the first wrong question
      updateProgress({
        questionLocked: false,
        selectedAnswer: null,
        isCorrect: null,
        currentQuestion: 0,
      });
      return;
    }

    // Handle quiz completion
    if (state.regularQuestionsDone && !hasWrongQuestions()) {
      handleQuizComplete();
      return;
    }

    // Normal question progression
    updateProgress({
      questionLocked: false,
      selectedAnswer: null,
      currentQuestionId: null,
      isCorrect: null,
    });
    incrementCurrentQuestion();
  };

  const handleQuizComplete = () => {
    resetProgress();
    resetQuestionState();
    router.push("/course/success");
  };

  return {
    currentQuestion,
    selectedAnswer: progress.selectedAnswer,
    isLocked: progress.questionLocked,
    isCorrect: progress.isCorrect,
    canCheck: !!progress.selectedAnswer && !progress.questionLocked,
    canContinue: progress.questionLocked,
    handleAnswerSelect,
    handleCheckAnswer,
    handleNextQuestion,
  };
};

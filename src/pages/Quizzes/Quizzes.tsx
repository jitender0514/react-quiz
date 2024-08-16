import React from "react";
import ThemeOption from "../../components/ThemeOption/ThemeOption";
import { quizzes } from "../../data/python/quizzes";
import QuizStart from "../../components/QuizStart/QuizStart";
import { AskedQuizProvider } from "../../context/AskedQuizzed";

const Quizzes: React.FC = () => {
  return (
    <>
    <AskedQuizProvider>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="mt-10 mb-10 sm:mx-auto sm:w-full">
          
          <QuizStart AllQuestions={quizzes} />
        </div>
        <ThemeOption />
      </div>
    </AskedQuizProvider>
    </>
  );
};

export default Quizzes;

import React, { useContext, useEffect, useState } from "react";
import { AskedQuiz, Quiz } from "../../types/types";
import QuestionComponent from "../Question/Question";
import { AskedQuizContext } from "../../context/AskedQuizzed";
import Result from "../Result/Result";

type Props = {
  AllQuestions: Quiz[];
};

const QuizStart: React.FC<Props> = ({ AllQuestions }: Props) => {
  // const [askedQuizzes, setAskedQuizzes] = useState<AskedQuiz[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Quiz | null>(null);

  const { allAskedQuizzes, totalQuizzes, setTotalQuizzes, addAskedQuiz } =
    useContext(AskedQuizContext);

  const randomQuiz = () => {
    if (allAskedQuizzes.length >= totalQuizzes) {
      return;
    }
    const askedQuestions = allAskedQuizzes.map((q) => q.uuid);
    const remainingQuestions = AllQuestions.filter(
      (q) => !askedQuestions.includes(q.uuid)
    );
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    setCurrentQuestion(remainingQuestions[randomIndex]);
  };

  const submitAnswer = (selectedOpt: number) => {
    const correctAnswer = currentQuestion?.Answer;
    const isCorrect = selectedOpt === correctAnswer;
    if (currentQuestion) {
      const newAskedQuiz: AskedQuiz = {
        ...currentQuestion,
        selected: selectedOpt,
        score: isCorrect ? 1 : 0,
        isCorrect: isCorrect,
      };
      addAskedQuiz(newAskedQuiz);
      randomQuiz();
    }
  };

  useEffect(() => {
    if (totalQuizzes == 0) {
      setTotalQuizzes(AllQuestions.length);
    }
  }, [AllQuestions]);

  useEffect(() => {
    if (totalQuizzes > 0) {
      randomQuiz();
    }
  }, [totalQuizzes]);

  console.log("Total Quizzes", allAskedQuizzes.length, totalQuizzes );

  if (!currentQuestion) return null;
  return (
    <>
      {allAskedQuizzes.length >= totalQuizzes ? (
        allAskedQuizzes &&
        allAskedQuizzes.length > 0 && <Result allAskedQuiz={allAskedQuizzes} />
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="pt-10 pb-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Quiz
            </h2>
          </div>
          <QuestionComponent
            quiz={currentQuestion}
            submitAnswer={submitAnswer}
          />
        </>
      )}
    </>
  );
};

export default QuizStart;

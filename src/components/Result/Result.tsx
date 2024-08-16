import React, { useContext, useState } from "react";
import { AskedQuiz } from "../../types/types";
import { motion } from "framer-motion";
import { AskedQuizContext } from "../../context/AskedQuizzed";

type Props = {
  allAskedQuiz: AskedQuiz[];
};

type QuizProps = {
  quiz: AskedQuiz;
  index: number;
};

const Question: React.FC<QuizProps> = ({ quiz, index }: QuizProps) => {
  return (
    <>
      <div className="">
        <div className="">
          <h2 className="font-bold">
            Q{index + 1}: {quiz.Question}
          </h2>
          {quiz.Options.map((option, index) => (
            <div
              className="form-control pt-1 pb-1"
              key={`${quiz.uuid}-${index}`}
            >
              <label className="flex space-x-4 cursor-pointer">
                <input
                  type="radio"
                  name={quiz.uuid}
                  className={`radio checkbox-primary ${
                    quiz.isCorrect ? "radio-success" : "radio-error"
                  }`}
                  defaultChecked={quiz.selected === index}
                  disabled={true}
                />
                <span className="label-text">
                  {option} {quiz.selected === index ? "YES" : "NO"}
                </span>
              </label>
            </div>
          ))}
          {quiz.isCorrect ? (
            <div className="badge badge-success text-white">Correct</div>
          ) : (
            <div className="badge badge-error text-white">Wrong</div>
          )}

          <details className="collapse bg-base-300 collapse-arrow border mt-2 mb-2">
            <summary className="collapse-title font-bold">
              Click here to explain
            </summary>
            <div className="collapse-content">
              <p>
                <span className="font-bold">Correct Answer:</span>{" "}
                {quiz.Options[quiz.Answer]}
              </p>
              <p>{quiz.Explanation}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

const Result = ({ allAskedQuiz }: Props) => {
  const [displayReport, setDisplayReport] = useState(false);
  const {removeAllAskedQuiz} = useContext(AskedQuizContext);

  const percentage =
    (allAskedQuiz.filter((quiz) => quiz.isCorrect).length /
      allAskedQuiz.length) *
    100;

  return (
    <>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="text-center">
          <h2 className="font-bold text-center text-2xl leading-9 tracking-tight">
            Quiz Results
          </h2>
          {percentage > 50 ? (
            <p className="text-center text-success text-xl">
              Your score is above 50%! Well done!
            </p>
          ) : (
            <p className="text-center text-error text-xl">
              Your score is below 50%! Better luck next time!
            </p>
          )}

          <p className="text-center">Total Questions: {allAskedQuiz.length}</p>
          <p className="text-center">
            Correct Answers:{" "}
            {allAskedQuiz.filter((quiz) => quiz.isCorrect).length}
          </p>
          <p className="text-center">
            Incorrect Answers:{" "}
            {allAskedQuiz.length -
              allAskedQuiz.filter((quiz) => quiz.isCorrect).length}
          </p>
          <p className="text-center">
            Percentage of Correct Answers:{" "}
            <span
              className={
                percentage > 50
                  ? "text-success font-bold text-xl"
                  : "text-error font-bold text-xl"
              }
            >
              {percentage}%
            </span>
          </p>
        </div>
        <div className="flex justify-center gap-4 ">
          <button
            className="btn btn-primary"
            onClick={() => setDisplayReport(true)}
          >
            View Report
          </button>
          <button
            className="btn btn-primary"
            onClick={() => removeAllAskedQuiz()}
          >
            Restart Quiz
          </button>
        </div>
        {displayReport && (
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="border-2 mt-10 p-10">
              {allAskedQuiz.map((quiz, index) => (
                <Question key={quiz.uuid} quiz={quiz} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Result;

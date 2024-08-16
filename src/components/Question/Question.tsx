import React, { useState, useEffect } from "react";
import { Quiz } from "../../types/types";
import OptionComponent from "../Option/OptionComponent";
import { motion } from "framer-motion";

type QuizProps = {
    quiz: Quiz,
    submitAnswer: (selectedOpt: number) => void,
}

const QuestionComponent: React.FC<QuizProps> = ({quiz, submitAnswer}: QuizProps) => {

  const [selectOpt, setSelectOpt] = useState<null|number>(null);
  const [error, setError] = useState<boolean>(false);

  const validate = () => {
    const result = ( selectOpt !== null);
    setError(!result);
    return result
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (validate()) {
      if (selectOpt !== null) {
        submitAnswer(selectOpt);
      }
    }
    // console.log("Submit", form);
  };

  useEffect(() => {
    setError(false);
    setSelectOpt(null);
    return () => {
      setError(false);
      setSelectOpt(null);
    };
  },[quiz])

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
    <div className="card shadow shadow-primary border-primary border-2">
      <div className="card-body">
          <h2 className="card-title">{quiz.Question}</h2>

            {quiz.Options.map((option, index) => (
              <OptionComponent quizUUID={quiz.uuid} selectOpt={selectOpt} index={index} setSelectOpt={setSelectOpt} key={index} option={option} />
            ))}

            {error && <p className="text-error">Please select your answer.</p>}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
      </div>
    </div>
    </motion.div>
  );
};

export default QuestionComponent;

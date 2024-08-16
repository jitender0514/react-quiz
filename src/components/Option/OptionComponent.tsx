import React from "react";

type OptionProps = {
  option: string;
  index: number;
  quizUUID: string;
  selectOpt: number | null;
  setSelectOpt: (index: number) => void;
};

const OptionComponent: React.FC<OptionProps> = ({selectOpt, quizUUID, option, index, setSelectOpt }: OptionProps) => {
  return (
    <div className="form-control">
        <label className="flex space-x-4 cursor-pointer">
          <input
            type="radio"
            name={quizUUID}
            className="radio checkbox-primary"
            onChange={() => setSelectOpt(index)}
            checked={selectOpt===index}
          />
          <span className="label-text">{option} --{(selectOpt==index).toString()}</span>
        </label>
    </div>
  );
};

export default OptionComponent;

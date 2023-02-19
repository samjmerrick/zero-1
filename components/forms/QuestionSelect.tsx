import Description from "components/forms/Description";
import Question from "components/forms/Question";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function QuestionSelect(props: {
  q: MultiFormQuestionSelect;
  saveAnswer: (question: string, answer: string) => void;
}) {
  const [selected, setSelected] = useState("");

  const handleClick = (option: string) => {
    setSelected(option);
    props.saveAnswer(props.q.question, option);
  };

  return (
    <>
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
      <div className="flex w-full flex-col justify-center space-y-2 py-5 md:items-center">
        {props.q.options.map((option) => (
          <button
            key={option}
            className={twMerge(
              "rounded-md border border-neutral-500 bg-neutral-100 px-2.5 py-2 text-left  text-neutral-500 transition-colors hover:bg-neutral-200  md:w-60",
              selected == option &&
                "border-2 bg-neutral-500 text-neutral-100 hover:bg-neutral-600"
            )}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default QuestionSelect;

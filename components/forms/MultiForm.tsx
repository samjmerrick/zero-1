import Button from "components/Button";
import QuestionEmail from "components/forms/QuestionEmail";
import QuestionSelect from "components/forms/QuestionSelect";
import QuestionStatement from "components/forms/QuestionStatement";
import Steps from "components/forms/Steps";
import OutlineButton from "components/OutlineButton";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function MultiForm(props: { questions: MultiFormQ[] }) {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState<
    { question: string; answer: string }[]
  >([]);

  const steps = props.questions;

  const isFirst = step == 0;
  const isLast = step == steps.length - 1;

  const nextStep = () => {
    if (isLast) {
      //submitForm();
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (!isFirst) {
      setStep(step - 1);
    }
  };

  const submitAnswer = (answer: string) => {
    const question = s.question;
    if (!answers.find((a) => a.question == question)) {
      setAnswers([...answers, { question, answer }]);
    } else {
      setAnswers(
        answers.map((item) =>
          item.question === question ? { question, answer } : item
        )
      );
    }
    nextStep();
  };

  const s = steps[step];
  let body = <></>;

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  switch (s.type) {
    case "Email": {
      body = <QuestionEmail q={s} next={submitAnswer} />;
      break;
    }
    case "Select": {
      body = <QuestionSelect q={s} next={submitAnswer} />;
      break;
    }
    case "Statement": {
      body = <QuestionStatement q={s} />;
    }
  }

  return (
    <>
      <OutlineButton
        className={twMerge(
          "border-none bg-neutral-100  ",
          isFirst && "opacity-0"
        )}
        onClick={prevStep}
      >
        ← Back
      </OutlineButton>
      <div className="flex flex-col">
        <div className="flex flex-grow flex-col items-center pb-10">
          {body}
          <div className="pt-5">
            <Button onClick={() => nextStep()}>{s.actionText ?? "Next"}</Button>
          </div>
        </div>

        <Steps steps={steps.length} currentStep={step} />
      </div>
    </>
  );
}

export default MultiForm;

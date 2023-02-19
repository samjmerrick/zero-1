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

  const saveAnswer = (question: string, answer: string) => {
    const questionExists = answers.find((a) => a.question === question);

    if (!questionExists) {
      setAnswers([...answers, { question, answer }]);
    } else {
      const updatedAnswers = answers.map((a) =>
        a.question === question ? { question, answer } : a
      );
      setAnswers(updatedAnswers);
    }

    nextStep();
  };

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const body = () => {
    const q = steps[step];
    switch (q.type) {
      case "Statement": {
        return <QuestionStatement q={q} nextStep={nextStep} />;
      }
      case "Select": {
        return <QuestionSelect q={q} saveAnswer={saveAnswer} />;
      }
      case "Email": {
        return <QuestionEmail q={q} saveAnswer={saveAnswer} />;
      }
    }
  };

  return (
    <>
      <OutlineButton
        className={twMerge("border-none  ", isFirst && "opacity-0")}
        onClick={prevStep}
      >
        ← Back
      </OutlineButton>
      <div>
        {body()} <Steps steps={steps.length} currentStep={step} />
      </div>
    </>
  );
}

export default MultiForm;

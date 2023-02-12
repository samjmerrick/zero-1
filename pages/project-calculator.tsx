import Button from "components/Button";
import Container from "components/layout/Container";
import { Page } from "components/layout/Page";
import Steps from "components/forms/Steps";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Input from "components/forms/Input";
import Options from "components/forms/Options";
import OutlineButton from "components/OutlineButton";

function ProjectCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<
    { question: string; answer: string }[]
  >([]);
  const [email, setEmail] = useState("");

  const submitAnswer = (question: string, answer: string) => {
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

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const steps = [
    <>
      <Question>Project Calculator</Question>
      <Description>
        Estimate the cost of your project with our free quote calculator.
      </Description>
      <div className="pt-5">
        <Button onClick={() => setStep(1)}>Let's Go!</Button>
      </div>
    </>,
    <>
      <Question>What are you building?</Question>
      <Options
        options={["Mobile App", "Website", "Web App"]}
        onClick={(ans) => submitAnswer("Type", ans)}
      />
    </>,
    <>
      <Question>How many screens will it need?</Question>
      <Options
        options={["1", "2 - 3", "3 - 5", "5 - 10", "10+"]}
        onClick={(ans) => submitAnswer("Screens", ans)}
      />
    </>,
    <>
      <Question>How many users are you expecting?</Question>
      <Options
        options={[
          "Not sure",
          "< 100",
          "100 - 1000",
          "1000 - 10,000",
          "10,000+",
        ]}
        onClick={(ans) => submitAnswer("Users", ans)}
      />
    </>,
    <>
      <Question>Where should we send your quote?</Question>
      <form onSubmit={submitForm} className="flex flex-col items-center">
        <div className="py-10">
          <Input
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            className="text-md w-72 py-3"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button>Get my quote</Button>
      </form>
    </>,
  ];

  const isFirst = step == 0;
  const isLast = step == steps.length - 1;

  const nextStep = () => {
    if (!isLast) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (!isFirst) {
      setStep(step - 1);
    }
  };

  return (
    <Page meta={{ title: "Project Calculator" }}>
      <Container>
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
            {steps[step]}
          </div>
          <Steps steps={steps.length} currentStep={step} />
        </div>
      </Container>
    </Page>
  );
}

const Question = (props) => {
  return (
    <h1 className="pb-4 text-center text-3xl font-bold">{props.children}</h1>
  );
};

const Description = (props) => {
  return <p className="pb-2 text-center text-neutral-600">{props.children}</p>;
};

export default ProjectCalculator;

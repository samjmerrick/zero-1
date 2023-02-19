import Button from "components/Button";
import Description from "components/forms/Description";
import Input from "components/forms/Input";
import Question from "components/forms/Question";
import { useState } from "react";

function QuestionEmail(props: {
  q: MultiFormQuestion;
  saveAnswer: (question: string, answer: string) => void;
}) {
  const [email, setEmail] = useState("");

  function submit(e: React.SyntheticEvent) {
    e.preventDefault();
    props.saveAnswer(props.q.question, email);
  }

  return (
    <form onSubmit={submit} className="flex flex-col items-center">
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
      <Input
        name={props.q.question}
        type="email"
        placeholder="name@example.com"
        autoComplete="email"
        className="text-md w-72 py-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button className="mt-5">{props.q.actionText ?? "Next"}</Button>
    </form>
  );
}

export default QuestionEmail;

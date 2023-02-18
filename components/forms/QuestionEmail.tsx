import Description from "components/forms/Description";
import Input from "components/forms/Input";
import Question from "components/forms/Question";
import { useState } from "react";

function QuestionEmail(props: {
  q: MultiFormQuestion;
  next: (answer: string) => void;
}) {
  const [email, setEmail] = useState("");
  return (
    <>
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
      <Input
        type="email"
        placeholder="name@example.com"
        autoComplete="email"
        className="text-md w-72 py-3"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}

export default QuestionEmail;

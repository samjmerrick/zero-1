import Description from "components/forms/Description";
import Options from "components/forms/Options";
import Question from "components/forms/Question";

function QuestionSelect(props: {
  q: MultiFormQuestionSelect;
  next: (answer: string) => void;
}) {
  return (
    <>
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
      <Options options={props.q.options} onClick={props.next} />
    </>
  );
}

export default QuestionSelect;

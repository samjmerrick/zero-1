import Description from "components/forms/Description";
import Question from "components/forms/Question";

function QuestionStatement(props: { q: MultiFormQuestion }) {
  return (
    <>
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
    </>
  );
}

export default QuestionStatement;

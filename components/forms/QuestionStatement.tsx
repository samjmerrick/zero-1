import Button from "components/Button";
import Description from "components/forms/Description";
import Question from "components/forms/Question";

function QuestionStatement(props: {
  q: MultiFormQuestion;
  nextStep: () => void;
}) {
  return (
    <div className="my-10 flex flex-col items-center">
      <Question>{props.q.question}</Question>
      <Description>{props.q.description}</Description>
      <Button className="mt-5" onClick={props.nextStep}>
        {props.q.actionText ?? "Next"}
      </Button>
    </div>
  );
}

export default QuestionStatement;

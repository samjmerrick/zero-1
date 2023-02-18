type MultiFormQ = MultiFormQuestion | MultiFormQuestionSelect;

interface MultiFormQuestion {
  type: "Statement" | "Email";
  question: string;
  description?: string;
  answer?: string;
  actionText?: string;
}

interface MultiFormQuestionSelect extends MultiFormQuestion {
  type: "Select";
  options: string[];
}

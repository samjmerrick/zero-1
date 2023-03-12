import MultiForm from "components/forms/MultiForm";
import Container from "components/layout/Container";
import Metatitle from "utils/metadata";
import Head from "next/head";

function ProjectCalculator() {
  return (
    <>
      <Head>
        <title>{Metatitle("Project Calculator")}</title>
      </Head>

      <Container>
        <MultiForm
          questions={[
            {
              type: "Statement",
              question: "Project Calculator",
              description:
                "Estimate the cost of your project with our free quote calculator.",
              actionText: "Let's go!",
            },
            {
              type: "Select",
              question: "What are you building?",
              options: ["Mobile App", "Website", "Web App"],
            },
            {
              type: "Select",
              question: "How many screens will it need?",
              options: ["1", "2 - 3", "3 - 5", "5 - 10", "10+"],
            },
            {
              type: "Select",
              question: "How many users are you expecting?",
              options: [
                "Not sure",
                "< 100",
                "100 - 1000",
                "1000 - 10,000",
                "10,000+",
              ],
            },
            {
              type: "Email",
              question: "Where should we send your quote?",
              actionText: "Get my quote",
            },
          ]}
        />
      </Container>
    </>
  );
}

export default ProjectCalculator;

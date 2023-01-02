import { mdiRocketLaunch, mdiHumanGreeting, mdiFinance } from "@mdi/js";
import IconCard from "components/IconCard";
import ColumnLayout from "components/ColumnLayout";
import Section from "components/Section";

function About() {
  return (
    <Section id="About">
      <h2 className="py-4 text-4xl font-bold">Why choose us?</h2>
      <ColumnLayout>
        <IconCard
          icon={mdiRocketLaunch}
          title="Zero to One"
          description="We focus on early stage products, giving us a deep understanding of the risks and challenges in the space."
        />
        <IconCard
          icon={mdiHumanGreeting}
          title="User Centric"
          description="We keep users at the heart of our processes, testing rapidly and frequently with real people."
        />
        <IconCard
          icon={mdiFinance}
          title="Outcome Oriented"
          description="We don't only build products, we partner with you to identify and deliver commercial results."
        />
      </ColumnLayout>
    </Section>
  );
}

export default About;

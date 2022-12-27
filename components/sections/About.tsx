import { mdiRocketLaunch, mdiHumanGreeting, mdiFinance } from "@mdi/js";
import IconCard from "../IconCard";
import ColumnLayout from "../ColumnLayout";
import Section from "../Section";

function About() {
  return (
    <Section id="About">
      <h2>Why choose us?</h2>
      <ColumnLayout>
        <IconCard
          icon={mdiRocketLaunch}
          title="Startup Focused"
          description="Our focus on startups gives us deep experience on how best to solve their problems."
        />
        <IconCard
          icon={mdiHumanGreeting}
          title="User Centered"
          description="We keep users at the heart of our products, testing rapidly and frequently with real people."
        />
        <IconCard
          icon={mdiFinance}
          title="Outcome Oriented"
          description="We deliver more than just a product. We collaborate, define and deliver commercial results."
        />
      </ColumnLayout>
    </Section>
  );
}

export default About;

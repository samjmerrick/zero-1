import { mdiRocketLaunch, mdiHumanGreeting, mdiFinance } from "@mdi/js";
import IconCard from "../components/IconCard";
import ColumnLayout from "../components/ColumnLayout";
import Section from "../components/Section";

function About() {
  return (
    <Section id="About">
      <h2 className="py-4 text-4xl font-bold">Why choose us?</h2>
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

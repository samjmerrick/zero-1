import { getSortedProjectsData } from "../api/getSortedProjectsData";

import Container from "../components/Container";
import { Page } from "../components/Page";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

const meta = {
  title: "Digital design and development agency",
};

export default function Home({ allProjectsData }) {
  return (
    <Page meta={meta}>
      <Container>
        <Hero />
        <About />
        <Projects allProjectsData={allProjectsData} />
        <Contact />
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

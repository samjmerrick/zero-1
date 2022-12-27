import { getSortedProjectsData } from "../api/getSortedProjectsData";

import Container from "../components/Container";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import { Page } from "../components/page";

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

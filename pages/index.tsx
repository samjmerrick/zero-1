import { getSortedProjectsData } from "../api/getSortedProjectsData";
import { getSortedBlogData } from "../api/getSortedBlogData";

import Container from "../components/Container";
import { Page } from "../components/Page";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";

const meta = {
  title: "Digital design and development agency",
};

export default function Home({ allProjectsData, allBlogData }) {
  return (
    <Page meta={meta}>
      <Hero />
      <Container>
        <About />
        <Projects allProjectsData={allProjectsData} />

        <Contact />
        <Blog allBlogData={allBlogData} />
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const allBlogData = getSortedBlogData();
  return {
    props: {
      allProjectsData,
      allBlogData,
    },
  };
}

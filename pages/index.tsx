import Container from "components/Container";
import { Page } from "components/Page";
import { getAllFilesFrontMatter } from "lib/mdx";
import About from "sections/About";
import Contact from "sections/Contact";
import Hero from "sections/Hero";
import Projects from "sections/Projects";

const meta = {
  title: "Digital design and development agency",
};

export default function Home({ projects }) {
  return (
    <Page meta={meta}>
      <Hero />
      <Container>
        <About />
        <Projects projects={projects} />
        <Contact />
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter("projects");
  return {
    props: {
      projects,
    },
  };
}

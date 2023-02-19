import Container from "components/layout/Container";
import { Page } from "components/layout/Page";
import { getAllFilesFrontMatter } from "lib/mdx";
import Hero from "components/home/Hero";
import Projects from "components/home/Projects";

const meta = {
  title: "Digital design and development agency",
};

export default function Home({ projects }) {
  return (
    <Page meta={meta}>
      <Hero />
      <Container>
        <Projects projects={projects} />
      </Container>
    </Page>
  );
}

export async function getStaticProps() {
  const projects = (await getAllFilesFrontMatter(
    "projects"
  )) as ProjectFrontMatter[];
  return {
    props: {
      projects,
    },
  };
}

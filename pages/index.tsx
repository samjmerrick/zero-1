import Container from "components/layout/Container";
import { getAllFilesFrontMatter } from "lib/mdx";
import Hero from "components/home/Hero";
import Projects from "components/home/Projects";
import Head from "next/head";
import Metatitle from "utils/metadata";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>{Metatitle("Digital design and development agency")}</title>
      </Head>
      <Hero />
      <Container>
        <Projects projects={projects} />
      </Container>
    </>
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

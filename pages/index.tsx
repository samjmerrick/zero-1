import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Tech from '../components/sections/tech';
import Projects from '../components/sections/projects';
import { Page } from '../components/page';
import Container from '../components/Container';

import { getSortedProjectsData } from "../api/getSortedProjectsData"

const meta = {
  title: 'Digital design and development agency'
}

export default function Home({ allProjectsData }) {
  return (
    <Page meta={meta}>
      <Container>
        <Hero />
        <About />
        <Projects allProjectsData={allProjectsData} />
        <Contact />
        <Tech />
      </Container>
    </Page>
  )
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
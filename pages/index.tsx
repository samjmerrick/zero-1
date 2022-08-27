import Hero from '../sections/hero';
import About from '../sections/about';
import Contact from '../sections/contact';
import Tech from '../sections/tech';
import Projects from '../sections/projects';

import { Page } from '../components/page';
import { getSortedProjectsData } from "../api/getSortedProjectsData"


const meta = {
  title: 'Digital design and development agency'
}

export default function Home({ allProjectsData }) {
  return (
    <Page meta={meta}>
      <Hero />
      <About />
      <Projects allProjectsData={allProjectsData} />
      <Contact />
      <Tech />
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
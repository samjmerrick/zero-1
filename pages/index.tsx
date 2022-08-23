import Hero from '../sections/hero';
import About from '../sections/about';
import Projects from '../sections/projects';
import Contact from '../sections/contact';
import Tech from '../sections/tech';

import { Page } from '../components/page';

const meta = {
  title: 'Digital design and development agency'
}

export default function Home() {
  return (
    <Page meta={meta}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Tech />
    </Page>
  )
}
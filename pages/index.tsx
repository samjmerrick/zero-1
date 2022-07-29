import Hero from './hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

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
    </Page>
  )
}
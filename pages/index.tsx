import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contact from './contact';

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
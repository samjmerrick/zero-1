import Hero from './hero';
import About from '../components/sections/about.mdx';
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
      <section id='about' className='text-center space-y-8'>
        <About />
      </section>

      <Projects />
      <Contact />
    </Page>
  )
}
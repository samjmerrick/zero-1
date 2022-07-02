

import { ParallaxProvider } from 'react-scroll-parallax'
import Nav from '../components/nav'
import { Page, Content } from '../components/page';
import About from './about';
import Hero from './hero';
import Projects from './projects';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Nav />
      <ParallaxProvider>
        <Hero />
        <About />
        <Projects />
        <Page id='contact'>
          <Content>
            <h1 >
              Contact
            </h1>
          </Content>
        </Page>

      </ParallaxProvider>
    </div>
  )
}
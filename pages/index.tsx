import Nav from '../components/nav'
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contact from './contact';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
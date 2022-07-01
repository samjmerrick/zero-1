

import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Nav from '../components/nav'
import Typewriter from 'typewriter-effect';



export default function Home() {
  return (
    <div className="bg-slate-900 text-white ">
      <Nav />
      <ParallaxProvider>
        <section id='home' className='h-screen flex items-center'>
          <div className='w-full h-1/2  absolute bottom-0'>
            <div className='bg-slate-800 skew-y-12 h-3/4' />
          </div>
          <div className='px-10'>
            <Parallax speed={10}>
              <h1 className=" grow">
                Digital products from Zero to One.
              </h1>
            </Parallax>
            <Parallax speed={0}>
              <div className='text-3xl flex flex-row'>
                We create&nbsp;

                <Typewriter
                  options={{
                    strings: ['mobile apps', 'responsive websites', 'shopify stores', 'personal portfolios'],
                    loop: true,
                    autoStart: true,
                    delay: 20,
                    deleteSpeed: 20,
                  }}
                />
              </div>
            </Parallax>
          </div>

          <div className='absolute right-0 bottom-0 p-10'>
            <a href='#about'>
              <p>
                ↓ Scroll to learn more
              </p>
            </a>
          </div>
        </section>

        <section id='about' className='h-screen flex items-center'>
          <h1 className="grow">
            About
          </h1>
        </section>

        <section id='projects' className='h-screen flex items-center'>
          <h1 className="grow">
            Projects
          </h1>
        </section>

        <section id='contact' className='h-screen flex items-center'>
          <h1 className="grow">
            Contact
          </h1>
        </section>
      </ParallaxProvider>
    </div>
  )
}
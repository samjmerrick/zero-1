

import Nav from '../components/nav'



export default function Home() {
  return (
    <div className="bg-slate-900 text-white ">
      <Nav />
      <section id='home' className='flex flex-col h-screen'>
        <div className=' flex flex-grow items-center'>
          <div className='px-10'>
            <h1 className=" grow">
              Digital products from Zero to One.
            </h1>
            <p>
              We create mobile apps and websites from scratch. With a range of product management, design and development expertise
            </p>


          </div>


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

    </div>
  )
}
import Icon from '@mdi/react'
import { mdiHeadDotsHorizontal, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'

function Service(
    props: {
        icon: string,
        title: string,
        description: string,
    }) {
    return (
        <div className='bg-slate-800 flex flex-col items-center rounded-lg p-10 lg:w-1/3'>
            <Icon
                path={props.icon}
                title={props.title}
                size={2.5}
            />
            <h2>{props.title}</h2>
            <p className='text-center'>{props.description}</p>
        </div>
    )
}


function About() {
    return (

        <section id='about' className='w-full'>
            <div className='relative py-5 px-5 md:px-10 mt-20 w-2/3 flex flex-col space-y-8 '>
                <div className="flex flex-col items-center justify-center space-y-10">

                    <p className="text-2xl ">We are a full stack digital design and development agency based in London</p>

                    <div className='flex flex-col space-y-5 md:space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-7xl '>
                        <Service
                            icon={mdiHeadDotsHorizontal}
                            title='Strategy'
                            description='Craft your vision, strategy and roadmap using leading product management practices'
                        />
                        <Service
                            icon={mdiPencilRuler}
                            title='UX Design'
                            description="Prototype ideas in hours and days, considering the entire end-to-end experience, not just pretty UI"
                        />
                        <Service
                            icon={mdiCodeBracesBox}
                            title='Development'
                            description='Deliver in rapid vertical slices using agile best practices, allowing for ample customer and client feedback'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
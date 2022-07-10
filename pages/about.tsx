import { Content, Page } from "../components/page"
import ScrollDown from "../components/scrolldown"

import Icon from '@mdi/react'
import { mdiHeadDotsHorizontal, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'

function Service(
    props: {
        icon: string,
        title: string,
        description: string,
    }) {
    return (
        <div className='bg-slate-800 lg:w-1/3 flex flex-col items-center rounded-lg p-10'>
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
        <Page id='about'>
            <Content>
                <div className="flex flex-col items-center justify-center space-y-10">

                    <p className="text-2xl ">We are a full stack digital design and development agency based in London</p>

                    <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-7xl '>
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
            </Content>
        </Page>
    )
}

export default About
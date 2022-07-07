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
                <div>
                    <h2>About</h2>
                    <p>We're a full stack product design and development agency based in London, UK</p>
                </div>

                <div>
                    <h2>Services</h2>

                </div>

                <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 '>
                    <Service
                        icon={mdiHeadDotsHorizontal}
                        title='Strategy'
                        description='We consult on Product Vision, Strategy and Roadmaps using leading Product Management methodologies.'
                    />
                    <Service
                        icon={mdiPencilRuler}
                        title='UX Design'
                        description="We prototype ideas in hours and days covering entire end-to-end experiences, not just pretty UI."
                    />
                    <Service
                        icon={mdiCodeBracesBox}
                        title='Development'
                        description='We develop in rapid increments by leveraging agile best practices, allowing for ample customer and client feedback.'
                    />
                </div>
            </Content>
        </Page>
    )
}

export default About
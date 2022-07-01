import { Content, Page } from "../components/page"
import ScrollDown from "../components/scrolldown"

import Icon from '@mdi/react'
import { mdiHeadDotsHorizontal, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'

function Card(
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
                    <p>We are a digital product design and development agency based in London, UK</p>
                </div>

                <div>
                    <h2>Process</h2>
                    <p>We believe in the power of agile methodologies and human-centered design; our process represents the best of both.</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:space-x-10 '>
                    <Card
                        icon={mdiHeadDotsHorizontal}
                        title='1. Strategy'
                        description='We start every project with deep customer and competitor research'
                    />
                    <Card
                        icon={mdiPencilRuler}
                        title='2. Prototype'
                        description='We prototype ideas in hours and days to test our assumptions'
                    />
                    <Card
                        icon={mdiCodeBracesBox}
                        title='3. Develop'
                        description='We develop in rapid increments to facilitate customer and client feedback'
                    />
                </div>
            </Content>
            <ScrollDown label='Projects' id='#projects' />
        </Page>
    )
}

export default About
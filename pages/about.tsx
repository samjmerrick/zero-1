import { Content, Page } from "../components/page"

function About() {
    return (
        <Page id='about'>
            <Content>
                <h1 >
                    About
                </h1>
                <div className='flex flex-row items-center space-x-4'>
                    <div className='w-1/3'>
                        <h2>Strategy</h2>
                    </div>

                    <h2>Prototyping</h2>
                    <h2>Development</h2>
                </div>
            </Content>
        </Page>
    )
}

export default About
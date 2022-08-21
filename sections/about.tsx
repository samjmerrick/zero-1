
import { mdiHeadDotsHorizontal, mdiRocketLaunch, mdiHumanGreeting, mdiFinance, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'
import IconCard from '../components/IconCard'
import ColumnLayout from '../components/ColumnLayout'
import Section from '../components/Section'
import Container from '../components/Container'

function About() {
    return (
        <Section id='About'>
            <Container>
                <h2>What makes us different?</h2>
                <ColumnLayout>
                    <IconCard
                        icon={mdiRocketLaunch}
                        title='Startup Focused'
                        description="We focus on early stage startups, so we know the challenges and how best to rise to them"
                    />
                    <IconCard
                        icon={mdiHumanGreeting}
                        title='User Centered'
                        description="We keep users at the heart of our products, testing rapidly and frequently with real people"

                    />
                    <IconCard
                        icon={mdiFinance}
                        title='Outcome Oriented'
                        description="We deliver more than services, we collaborate to define and deliver commercial results"
                    />
                </ColumnLayout>
            </Container>
        </Section>
    )
}

export default About

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
                        description="Our focus on startups gives us deep experience on how best to solve their problems."
                    />
                    <IconCard
                        icon={mdiHumanGreeting}
                        title='User Centered'
                        description="We keep users at the heart of our products, testing rapidly and frequently with real people."

                    />
                    <IconCard
                        icon={mdiFinance}
                        title='Outcome Oriented'
                        description="We deliver more than just a product. We collaborate, define and deliver commercial results."
                    />
                </ColumnLayout>
            </Container>
        </Section>
    )
}

export default About
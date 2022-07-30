
import { mdiHeadDotsHorizontal, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'
import IconCard from '../components/IconCard'
import ColumnLayout from '../components/ColumnLayout'
import Section from '../components/Section'
import Container from '../components/Container'

function About() {
    return (
        <Section id='About' title='Services'>
            <Container>
                <ColumnLayout>
                    <IconCard
                        icon={mdiHeadDotsHorizontal}
                        title='Product Management'
                        description='Craft your vision, strategy and roadmap using leading product management practices'
                    />
                    <IconCard
                        icon={mdiPencilRuler}
                        title='UX Design'
                        description="Prototype ideas in hours and days, considering the entire end-to-end experience, not just pretty UI"
                    />
                    <IconCard
                        icon={mdiCodeBracesBox}
                        title='Software Development'
                        description='Deliver in rapid vertical slices using agile best practices, allowing for ample customer and client feedback'
                    />
                </ColumnLayout>
            </Container>
        </Section>
    )
}

export default About
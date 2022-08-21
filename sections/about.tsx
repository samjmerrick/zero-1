
import { mdiHeadDotsHorizontal, mdiPencilRuler, mdiCodeBracesBox } from '@mdi/js'
import IconCard from '../components/IconCard'
import ColumnLayout from '../components/ColumnLayout'
import Section from '../components/Section'
import Container from '../components/Container'

function About() {
    return (
        <Section id='About'>
            <Container>
                <h2>Our Expertise</h2>
                <ColumnLayout>
                    <IconCard
                        icon={mdiHeadDotsHorizontal}
                        title='Product Management'
                        description='Vision, strategy and roadmaps centered on outcomes'
                        url='/services/product-management'
                    />
                    <IconCard
                        icon={mdiPencilRuler}
                        title='UX Design'
                        description="Prototype experiences in hours and days (not just pretty UI)"
                        url='/services/ux-design'
                    />
                    <IconCard
                        icon={mdiCodeBracesBox}
                        title='Software Development'
                        description='Develop in rapid vertical slices following agile methodologies'
                        url='/services/software-development'
                    />
                </ColumnLayout>
            </Container>
        </Section>
    )
}

export default About
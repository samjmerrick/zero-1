import ContactForm from '../components/ContactForm'
import Container from '../components/Container'
import Section from '../components/Section'

function Contact() {
    return (
        <Section id='Contact'>
            <Container>
                <div className='flex justify-center'>
                    <ContactForm />
                </div>
            </Container>
        </Section >
    )
}

export default Contact
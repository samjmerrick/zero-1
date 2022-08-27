import ContactForm from '../ContactForm'
import Section from '../Section'

function Contact() {
    return (
        <Section id='Contact'>
            <div className='flex justify-center'>
                <ContactForm />
            </div>
        </Section >
    )
}

export default Contact
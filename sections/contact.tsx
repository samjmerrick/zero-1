import ContactForm from '../components/ContactForm'
import Section from './Section'

function Contact() {
    return (
        <Section id='Contact' title='Contact'>
            <p className="text-center">Want to work with us on the next exciting product? Fill in the details or email at
                <a className='font-bold text-green-600 ' href='mailto:hello@zero-1.studio'> hello@zero-1.studio</a>
            </p>
            <ContactForm />
        </Section>
    )
}

export default Contact
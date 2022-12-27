import ContactForm from "../components/ContactForm";
import Section from "../components/Section";

function Contact() {
  return (
    <Section id="Contact">
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;

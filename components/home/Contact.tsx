import ContactButton from "components/ContactButton";
import Card from "components/layout/Card";

function Contact() {
  return (
    <Card className="w-full max-w-2xl px-6 py-14 ">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h2 className="text-3xl font-bold ">Your Project Here</h2>
        <div className="text-neutral-300">
          <p>Drop us a message! Let's bring your vision to life 🚀</p>
        </div>

        <ContactButton />
      </div>
    </Card>
  );
}

export default Contact;

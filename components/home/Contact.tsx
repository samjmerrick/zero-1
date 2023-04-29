import ContactButton from "components/ContactButton";

function Contact() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-center space-y-6 rounded-lg border border-neutral-600 bg-neutral-800 bg-opacity-60 py-14 px-6 text-center">
      <h2 className="text-3xl font-bold">Your Project Here</h2>
      <div className="text-neutral-300">
        <p>Drop us a message! Let's bring your vision to life 🚀</p>
      </div>

      <ContactButton />
    </div>
  );
}

export default Contact;

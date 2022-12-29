import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

function ContactForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { styles: { branding: { brandColor: "#1e293b" } } });
    })();
  }, []);

  return (
    <form
      action="https://script.google.com/macros/s/AKfycbzeqJfpQc3ckStHuiF2bOGZJxEj8QC0z_k56HmUn3RvxKxVNH0-ncpOFQPIMvrHIHYMYQ/exec"
      method="post"
      className="flex w-full flex-col space-y-4"
      id="contact-form"
    >
      <div className="text-center">
        <h2 className="py-4 text-4xl font-bold">
          Ready to create something{" "}
          <em className="font-extrabold not-italic text-blue-500">epic</em>?
        </h2>
        <p>
          We'd love to meet you and speak about your project. Book in an intro
          chat today!
        </p>
      </div>
      <Cal
        calLink="sam-zero-1/intro"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
    </form>
  );
}

export default ContactForm;

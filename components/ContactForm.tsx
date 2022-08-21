import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

function ContactForm() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#1e293b" } } });
        })();
    }, [])

    return (
        <form
            action="https://script.google.com/macros/s/AKfycbzeqJfpQc3ckStHuiF2bOGZJxEj8QC0z_k56HmUn3RvxKxVNH0-ncpOFQPIMvrHIHYMYQ/exec"
            method="post"
            className="flex flex-col w-full space-y-4"
            id="contact-form"
        >
            <div className="text-center">
                <h2>Book a free consultation</h2>
                <p>We love to talk about ideas, our first call is completely free!</p>
            </div>
            <Cal calLink="sam-merrick/30min" style={{ width: "100%", height: "100%", overflow: "hidden" }} />

        </form>

    )
}

export default ContactForm
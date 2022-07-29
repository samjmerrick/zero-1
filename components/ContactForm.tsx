
if (typeof window !== "undefined") {
    window.addEventListener("load", function () {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        const submit = document.getElementById('Submit') as HTMLButtonElement;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const data = new FormData(form);
            const target = e.target as HTMLFormElement;
            const action = target.action;

            submit.disabled = true;
            submit.innerText = 'Sending...';

            fetch(action, {
                method: 'POST',
                body: data,
                mode: 'no-cors'
            })
                .then(() => {
                    alert("Thanks, we'll get back to you soon!");
                    form.reset();
                    submit.disabled = false;
                    submit.innerText = 'Send';
                })
        });
    });
}

function ContactForm() {
    return (
        <form
            action="https://script.google.com/macros/s/AKfycbzeqJfpQc3ckStHuiF2bOGZJxEj8QC0z_k56HmUn3RvxKxVNH0-ncpOFQPIMvrHIHYMYQ/exec"
            method="post"
            className="flex flex-col w-full max-w-2xl"
            id="contact-form"
        >
            <label htmlFor="name">
                Your Name
            </label>
            <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Barry Allen"
                required
                className="p-3 mb-5 mt-1 bg-slate-800 rounded-lg"
            />
            <label htmlFor="email">
                Your email address
            </label>
            <input
                type="email"
                id="Email"
                name="Email"
                placeholder="name@example.com"
                required
                className="p-3 mb-5 mt-1 bg-slate-800 rounded-lg"
            />
            <label htmlFor="message">
                Your message
            </label>
            <textarea
                id="Message"
                name="Message"
                placeholder="My exciting product idea.."
                rows={4}
                required
                className="p-3 mb-5  mt-1 bg-slate-800 rounded-lg resize-none"
            />
            <button
                id="Submit"
                type="submit"
                className="p-3 bg-slate-700 w-full max-w-xs rounded-lg justify-center self-center"
            >
                Send
            </button>
        </form>

    )
}

export default ContactForm
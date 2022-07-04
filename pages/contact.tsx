import { Page, Content } from "../components/page"

function Contact() {
    return (
        <Page id='contact'>
            <Content>
                <h1 >
                    Contact
                </h1>
                <p>
                    Interested in working with us on the next big product? Fill out this form and we'll get back to you in 1-2 business days
                </p>
                <form
                    action="/api/form"
                    method="post"
                    className="flex flex-col max-w-xl"
                >
                    <label htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Barry Allen"
                        required
                        className="p-3 mb-5 mt-1 bg-slate-800 rounded-lg"
                    />
                    <label htmlFor="email">
                        Your email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                        className="p-3 mb-5 mt-1 bg-slate-800 rounded-lg"
                    />
                    <label htmlFor="message">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="My exciting product idea.."
                        rows={4}
                        required
                        className="p-3 mb-5  mt-1 bg-slate-800 rounded-lg resize-none"
                    />

                    <button
                        type="submit"
                        className="p-3 bg-slate-700 max-w-xs rounded-lg justify-center"
                    >
                        Send
                    </button>
                </form>
            </Content>
        </Page>
    )
}

export default Contact
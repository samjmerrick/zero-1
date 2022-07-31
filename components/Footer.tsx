import Container from "./Container";

function Footer() {
    return (
        <footer className="py-10 bg-slate-800 ">
            <Container>
                <div className="flex flex-row justify-between items-center">
                    <a className=' text-3xl text-green-500 ' href='mailto:hello@zero-1.studio'>
                        hello@zero-1.studio
                    </a>
                    <p className="text-white">
                        © Zero 1 Studio 2022
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
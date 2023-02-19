import Container from "./layout/Container";

function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-5 text-center md:flex-row md:space-y-0">
          <a
            href="mailto:hello@zero-1.studio"
            className="flex flex-row items-center space-x-3 text-sm text-neutral-600 hover:text-blue-600"
          >
            <p>✉ hello@zero-1.studio</p>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

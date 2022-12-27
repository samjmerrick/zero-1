import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import Container from "./Container";

function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col items-center justify-between space-y-5 text-center md:flex-row">
          <p className="flex flex-row items-center space-x-3">
            <Icon path={mdiEmailOutline} size={1.5} className="text-zinc-900" />

            <a href="mailto:hello@zero-1.studio">hello@zero-1.studio</a>
          </p>
          <div>
            <p>© Zero 1 Studio 2022</p>
            <a href="https://storyset.com/work">
              Work illustrations by Storyset
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

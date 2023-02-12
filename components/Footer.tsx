import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import Container from "./layout/Container";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date()
      .getFullYear()
      .toString();
  });

  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-col items-center justify-between space-y-5 text-center md:flex-row">
          <a
            href="mailto:hello@zero-1.studio"
            className="flex flex-row items-center space-x-3 hover:text-blue-700"
          >
            <Icon path={mdiEmailOutline} size={1} className="" />
            <p>hello@zero-1.studio</p>
          </a>
          <div>
            <p>
              © <span id="year"></span> Zero 1 Studio{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

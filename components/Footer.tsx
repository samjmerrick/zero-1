import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import Container from "./Container";
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
          <p className="flex flex-row items-center space-x-3">
            <Icon path={mdiEmailOutline} size={1} className="text-zinc-900" />

            <a href="mailto:hello@zero-1.studio">hello@zero-1.studio</a>
          </p>
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

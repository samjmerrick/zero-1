import React, { useEffect } from "react";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import Container from "./Container";

function Nav() {
  useEffect(() => {
    const mobilemenu = document.querySelector("#mobile-menu");
    const button = document.querySelector("#menu-button");

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: screen.width > 768 ? "center" : "start",
        });
      });
    });

    button.addEventListener("click", () => {
      mobilemenu.classList.toggle("hidden");
    });
  });

  return (
    <nav className="top-0 z-50 w-full bg-slate-200 py-5">
      <Container>
        <div className="flex items-center justify-between">
          <a className="w-40" href="/#home">
            <img src={"/logos/logo_inline.svg"} />
          </a>

          <button id="menu-button">
            <Icon path={mdiMenu} className="h-8 w-8 md:hidden" />
          </button>

          <div
            className="hidden flex-row space-x-4 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            <a href="#Projects" className="block text-center md:inline-block">
              Projects
            </a>
            <a href="#Contact" className="block text-center md:inline-block">
              Contact
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hidden rounded-md bg-zinc-200 text-lg md:hidden"
        >
          <div className="flex w-full flex-col space-y-4 py-5 text-center">
            <a href="/#Projects" className="block text-center md:inline-block">
              Projects
            </a>
            <a href="/#Contact" className="block text-center md:inline-block">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;

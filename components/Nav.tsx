import React from "react";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import Container from "./Container";

if (typeof window !== "undefined") {
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
}

function Nav() {
  return (
    <nav className="top-0 z-50 w-full py-5 ">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/#home">
            <a className="w-72">
              <img src={"/logos/logo_inline.svg"} />
            </a>
          </Link>

          <button id="menu-button">
            <Icon path={mdiMenu} className="h-8 w-8 md:hidden" />
          </button>

          <div
            className="hidden flex-row space-x-4 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            <Link
              href="/#Projects"
              className="block text-center md:inline-block"
            >
              Projects
            </Link>
            <Link
              href="/#Contact"
              className="block text-center md:inline-block"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hidden rounded-md bg-zinc-200 text-lg md:hidden"
        >
          <div className="flex w-full flex-col space-y-4 py-5 text-center">
            <Link
              href="/#Projects"
              className="block text-center md:inline-block"
            >
              Projects
            </Link>
            <Link
              href="/#Contact"
              className="block text-center md:inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;

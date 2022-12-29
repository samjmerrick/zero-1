import React, { useEffect } from "react";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import Container from "./Container";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav() {
  useEffect(() => {
    const mobilemenu = document.querySelector("#mobile-menu");
    const button = document.querySelector("#menu-button");

    button.addEventListener("click", () => {
      mobilemenu.classList.toggle("hidden");
    });
  });

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const router = useRouter();
  const isHome = router.pathname == "/";

  return (
    <nav
      className={`
        ${isHome ? "bg-slate-200" : "bg-transparent"} top-0 z-50 w-full py-5`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/#home">
            <img src={"/logos/logo_inline.svg"} className="w-40" />
          </Link>

          <button id="menu-button">
            <Icon path={mdiMenu} className="h-8 w-8 md:hidden" />
          </button>

          <div
            className="hidden flex-row space-x-4 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                className="block text-center md:inline-block"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hidden rounded-md bg-zinc-200 text-lg md:hidden"
        >
          <div className="flex w-full flex-col space-y-4 py-5 text-center">
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                className="block text-center md:inline-block"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;

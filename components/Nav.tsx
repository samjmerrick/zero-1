import React, { useState } from "react";
import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import Link from "next/link";

import Container from "components/Container";
import Logo from "components/Logo";

function Nav() {
  const navigation = [{ name: "Blog", href: "/blog" }];

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const isHome = router.pathname == "/";

  return (
    <nav
      className={`
        ${isHome ? "bg-neutral-900" : "bg-transparent"} top-0 z-10 w-full py-5`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo
              className={isHome ? "text-neutral-200" : "text-neutral-900"}
            />
          </Link>

          <button id="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              path={!menuOpen ? mdiMenu : mdiClose}
              className={`h-8 w-8 md:hidden ${isHome && "text-neutral-300"}`}
            />
          </button>

          <div
            className="hidden flex-row items-center space-x-10 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                className={`block text-center text-neutral-400 transition-colors hover:text-neutral-300 md:inline-block ${
                  router.pathname == nav.href && "text-white"
                } `}
              >
                {nav.name}
              </Link>
            ))}
            <a
              className="cursor-pointer rounded-lg bg-neutral-800 py-2 px-5 text-lg font-bold text-white transition-colors hover:bg-neutral-700"
              href="mailto:hello@zero-1.studio"
            >
              Contact
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${
            !menuOpen ? "hidden" : null
          } absolute left-2 right-2 z-20  rounded-md bg-zinc-50 text-lg shadow-sm md:hidden`}
        >
          <div className="flex  flex-col space-y-4 py-5 text-center">
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                onClick={() => setMenuOpen(false)}
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

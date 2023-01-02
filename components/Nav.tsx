import React, { useState } from "react";
import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Container from "./Container";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const isHome = router.pathname == "/";

  return (
    <nav
      className={`
        ${isHome ? "bg-slate-200" : "bg-transparent"} top-0 z-10 w-full py-5`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src={"/logos/logo_inline.svg"} className="w-40" />
          </Link>

          <button id="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              path={!menuOpen ? mdiMenu : mdiClose}
              className="h-8 w-8 md:hidden"
            />
          </button>

          <div
            className="hidden flex-row space-x-4 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                className={`${
                  router.pathname == nav.href
                    ? "underline underline-offset-2"
                    : null
                } block text-center md:inline-block`}
              >
                {nav.name}
              </Link>
            ))}
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

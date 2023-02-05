import React, { useState } from "react";
import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Container from "components/Container";
import Logo from "components/Logo";

function Nav() {
  const navigation = [{ name: "Blog", href: "/blog" }];

  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const isHome = router.pathname == "/";

  return (
    <nav
      className={twMerge("top-0 z-10 w-full py-5", isHome && "bg-neutral-900")}
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
              className={twMerge(
                "h-8 w-8 md:hidden",
                isHome && "text-neutral-300"
              )}
            />
          </button>

          <div
            className="hidden flex-row items-center space-x-10 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            {navigation.map((nav) => (
              <Link
                href={nav.href}
                className={twMerge(
                  "block text-center transition-colors hover:text-neutral-300 md:inline-block",
                  isHome
                    ? "text-neutral-200 hover:text-neutral-300"
                    : "text-neutral-900 hover:text-neutral-800"
                )}
              >
                {nav.name}
              </Link>
            ))}
            <a
              className={twMerge(
                "cursor-pointer rounded-lg  py-2 px-5 text-lg font-semibold transition-colors ",
                isHome
                  ? "bg-neutral-800 text-white hover:bg-neutral-700"
                  : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              )}
              href="mailto:hello@zero-1.studio"
            >
              Contact
            </a>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={twMerge(
            "absolute left-2 right-2 z-20 rounded-md bg-zinc-50 text-lg shadow-sm md:hidden",
            !menuOpen && "hidden"
          )}
        >
          <div className="flex flex-col space-y-4 py-5 text-center">
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

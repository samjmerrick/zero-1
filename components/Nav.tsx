import React, { useState } from "react";
import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Container from "components/layout/Container";
import Logo from "components/Logo";
import { motion } from "framer-motion";

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
          <Link href="/" className="z-20">
            <Logo
              className={twMerge(
                " max-w-[75px]",
                isHome ? "text-neutral-200" : "text-neutral-900"
              )}
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-20 md:hidden"
          >
            <Icon
              path={!menuOpen ? mdiMenu : mdiClose}
              className={twMerge("h-8 w-8", isHome && "text-neutral-300")}
            />
          </button>

          <div
            className="hidden flex-row items-center space-x-12 pt-6 pr-2 text-lg md:flex md:pt-0"
            id="menu"
          >
            {navigation.map((nav) => (
              <Link
                key={nav.name}
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
                  ? "bg-neutral-200 text-neutral-800 hover:bg-neutral-400"
                  : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
              )}
              href="mailto:hello@zero-1.studio"
            >
              Contact
            </a>
          </div>
        </div>

        <motion.div
          className={twMerge(
            "absolute top-0 left-0 right-0 bottom-0 z-10 touch-none rounded-t-md  md:hidden",
            isHome ? "bg-neutral-900" : "bg-neutral-100"
          )}
          variants={{
            open: {
              scale: 1,
              opacity: 1,
              translateY: 0,
            },
            closed: {
              scale: 0,
              opacity: 0,
              translateY: "-30%",
              transition: {
                type: "tween",
                duration: 0.3,
              },
            },
          }}
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
        >
          <div className="flex h-full flex-col justify-center space-y-20">
            {navigation.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                onClick={() => setMenuOpen(false)}
                className={twMerge(
                  "block text-center text-3xl font-semibold ",
                  isHome ? "text-neutral-100" : "text-neutral-800"
                )}
              >
                {nav.name}
              </Link>
            ))}
            <a
              className={twMerge(
                "mx-4 block rounded-md  py-6 text-center text-3xl font-semibold ",
                isHome
                  ? "bg-neutral-100 text-neutral-800"
                  : "bg-neutral-800 text-neutral-200"
              )}
              href="mailto:hello@zero-1.studio"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </Container>
    </nav>
  );
}

export default Nav;

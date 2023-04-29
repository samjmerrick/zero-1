import React, { useEffect, useState } from "react";
import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

import Container from "components/layout/Container";
import Logo from "components/Logo";
import { motion, useScroll } from "framer-motion";
import { twMerge } from "tailwind-merge";

function Nav() {
  const navigation = [{ name: "Blog", href: "/blog" }];

  const [menuOpen, setMenuOpen] = useState(false);

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <nav
        className={twMerge(
          "fixed z-50 w-full border-b border-transparent bg-opacity-20 py-5 backdrop-blur-lg transition-colors ",
          !top && "border-neutral-700"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/" className="z-20">
              <Logo className=" max-w-[75px] text-neutral-200" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="z-20 md:hidden"
            >
              <Icon
                path={!menuOpen ? mdiMenu : mdiClose}
                className="h-8 w-8 text-neutral-300"
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
                  className="block text-center text-neutral-200 transition-colors hover:text-neutral-300 md:inline-block "
                >
                  {nav.name}
                </Link>
              ))}
              <a
                className="cursor-pointer rounded-lg  bg-neutral-200 py-2 px-5 text-lg font-semibold text-neutral-800 transition-colors hover:bg-neutral-400"
                href="mailto:hello@zero-1.studio"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        className="fixed z-40 h-screen  w-screen touch-none rounded-t-md  bg-neutral-900 md:hidden"
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
              className="block text-center text-3xl font-semibold text-neutral-100 "
            >
              {nav.name}
            </Link>
          ))}
          <a
            className="mx-4 block rounded-md  bg-neutral-100 py-6 text-center text-3xl font-semibold text-neutral-800"
            href="mailto:hello@zero-1.studio"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default Nav;

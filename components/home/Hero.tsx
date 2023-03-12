import React from "react";
import Container from "components/layout/Container";

import AnimatedTitle from "components/AnimatedTitle";
import { motion, Variants } from "framer-motion";
import ContactButton from "components/ContactButton";

function Hero() {
  function easeIn(delay: number) {
    return {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 2,
          ease: [0.2, 0.65, 0.3, 0.9],
          delay: delay,
        },
      },
    } as Variants;
  }

  const gradient: Variants = {
    start: {
      backgroundPosition: "0%",
    },
    end: {
      backgroundPosition: "100%",

      transition: {
        duration: 3,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  function scrollTo(to: string) {
    document.getElementById(to).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-neutral-900 py-20 sm:py-32 md:py-40">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col space-y-10 text-left sm:text-center">
          <AnimatedTitle>
            <motion.span
              className="bg-gradient-to-r from-teal-400 via-violet-400 to-orange-400 bg-[size:400%] bg-clip-text text-transparent"
              variants={gradient}
              initial="start"
              animate="end"
            >
              Digital experiences
            </motion.span>
            , <br />
            from Zero to One.
          </AnimatedTitle>

          <motion.p
            className=" text-xl text-gray-400"
            variants={easeIn(1.5)}
            initial="hidden"
            animate="visible"
          >
            We work with startups, scale-ups and enterprises to build innovative
            mobile apps and web experiences.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col justify-center space-y-4 pt-10 md:flex-row md:space-y-0 md:space-x-4"
          variants={easeIn(2)}
          initial="hidden"
          animate="visible"
        >
          <a
            className="cursor-pointer rounded-lg  border-2 py-2 px-5 text-center text-lg font-semibold text-neutral-200 transition-colors hover:bg-neutral-700 "
            onClick={() => scrollTo("Projects")}
          >
            See our work
          </a>
          <ContactButton color="Light" />
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;

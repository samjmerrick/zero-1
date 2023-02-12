import React from "react";
import Container from "components/layout/Container";

import AnimatedTitle from "components/AnimatedTitle";
import { motion, Variants } from "framer-motion";

function Hero() {
  const subtitle: Variants = {
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
        delay: 2,
      },
    },
  };

  return (
    <div className="bg-neutral-900 py-20 sm:py-40 md:py-60">
      <Container>
        <div className="flex flex-col space-y-10 ">
          <AnimatedTitle>
            <span className="bg-gradient-to-r from-sky-400 to-purple-600 bg-clip-text text-transparent">
              Digital experiences
            </span>
            , <br />
            from Zero to One.
          </AnimatedTitle>

          <motion.p
            className="text-xl text-gray-400"
            variants={subtitle}
            initial="hidden"
            animate="visible"
          >
            We work with startups, scale-ups and enterprises to build, ideate
            and scale world class digital products
          </motion.p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

import { motion, Variants } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function AnimatedTitle(
  props: React.HTMLAttributes<HTMLHeadingElement>
) {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: i * 0 },
    }),
  };

  const wordAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.h2
      className={twMerge(
        "text-6xl font-bold text-gray-100 md:text-7xl",
        props.className
      )}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {React.Children.map(props.children, (child, index) => {
        if (typeof child == "string") {
          return child.split(" ").map((word, wordIndex) => (
            <>
              <motion.span
                key={wordIndex}
                variants={wordAnimation}
                className="whitespace-preline"
              >
                {`${word} `}
              </motion.span>
            </>
          ));
        }
        return (
          <motion.span key={index} variants={wordAnimation}>
            {child}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}

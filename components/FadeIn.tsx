import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function FadeIn(props: {
  children: React.ReactNode;
  delay?: number;
  autoReset?: boolean;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  const boxVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: props.delay },
    },
    hidden: { opacity: 0, y: 10 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else if (props.autoReset) {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeIn;

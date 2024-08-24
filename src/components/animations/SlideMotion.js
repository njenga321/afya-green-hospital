import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SlideMotion({ children, delay = 0, className = "", direction = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      translateX: direction === "left" ? -90 : direction === "right" ? 90 : 0,
      translateY: direction === "top" ? -90 : direction === "bottom" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={{
        type: "spring",
        duration: 0.5,
        damping: 8,
        delay: delay,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const words = [
  "production",
  "deployment",
  "real users",
  "release",
];

export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2400);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1"
      >
        deployment.
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -18,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
className="rotating-word-gradient col-start-1 row-start-1"        >
          {words[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
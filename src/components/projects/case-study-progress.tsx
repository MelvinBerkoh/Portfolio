"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

export function CaseStudyProgress() {
  const { scrollYProgress } =
    useScroll();

  const progress = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 24,
      mass: 0.3,
    },
  );

  const dotTop = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-10 right-6 top-24 z-40 hidden w-px bg-border/70 xl:block"
    >
      <motion.div
        style={{
          scaleY: progress,
        }}
        className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-brand via-brand to-brand/20 shadow-[0_0_10px_var(--cursor-glow)]"
      />

      <motion.div
        style={{
          top: dotTop,
        }}
        className="absolute -left-[3px] h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-brand shadow-[0_0_12px_var(--cursor-glow)]"
      />
    </div>
  );
}
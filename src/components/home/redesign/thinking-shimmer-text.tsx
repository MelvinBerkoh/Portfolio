"use client";

import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  type CSSProperties,
  useRef,
} from "react";

type ThinkingShimmerTextProps = {
  children: string;
  className?: string;
  delay?: number;
  repeatDelay?: number;
  duration?: number;
};

const baseTextStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(100deg, var(--foreground) 15%, var(--brand) 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const shimmerStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(108deg, transparent 0%, transparent 34%, rgba(203, 213, 225, 0.08) 39%, rgba(226, 232, 240, 0.34) 44%, rgba(248, 250, 252, 0.82) 49%, rgba(255, 255, 255, 1) 50%, rgba(248, 250, 252, 0.82) 51%, rgba(226, 232, 240, 0.34) 56%, rgba(203, 213, 225, 0.08) 61%, transparent 66%, transparent 100%)",
  backgroundSize: "240% 100%",
  backgroundRepeat: "no-repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

export function ThinkingShimmerText({
  children,
  className = "",
  delay = 0.5,
  repeatDelay = 4.5,
  duration = 5.6,
}: ThinkingShimmerTextProps) {
  const textRef =
    useRef<HTMLSpanElement>(null);

  const isInView = useInView(textRef, {
    amount: 0.4,
  });

  const shouldReduceMotion =
    useReducedMotion();

  return (
    <span
      ref={textRef}
      className={`relative inline-block ${className}`}
    >
      <span
        className="relative z-10"
        style={baseTextStyle}
      >
        {children}
      </span>

      {!shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 hidden sm:block"
          style={shimmerStyle}
          initial={false}
          animate={
            isInView
              ? {
                  backgroundPosition: [
                    "160% 0%",
                    "160% 0%",
                    "-60% 0%",
                    "-60% 0%",
                  ],
                  opacity: [
                    0,
                    1,
                    1,
                    0,
                  ],
                }
              : {
                  backgroundPosition:
                    "160% 0%",
                  opacity: 0,
                }
          }
          transition={
            isInView
              ? {
                  duration,
                  delay,
                  repeat: Infinity,
                  repeatDelay,
                  times: [
                    0,
                    0.08,
                    0.92,
                    1,
                  ],
                  ease: "linear",
                }
              : {
                  duration: 0.1,
                }
          }
        >
          {children}
        </motion.span>
      )}
    </span>
  );
}
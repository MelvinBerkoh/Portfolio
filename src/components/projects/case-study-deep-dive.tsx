"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  AlertTriangle,
  ChevronDown,
  Code2,
  Rocket,
  Wrench,
} from "lucide-react";
import { useState } from "react";

import type { Project } from "@/data/projects";

type CaseStudyDeepDiveProps = {
  project: Project;
  sectionNumber: string;
};

type DeepDiveKey =
  | "stack"
  | "tools"
  | "challenges"
  | "future";

const deepDiveItems: {
  key: DeepDiveKey;
  title: string;
  description: string;
  icon: typeof Code2;
}[] = [
  {
    key: "stack",
    title: "Tech stack",
    description: "The technologies behind the build.",
    icon: Code2,
  },
  {
    key: "tools",
    title: "Libraries + tools",
    description: "How the important pieces were used.",
    icon: Wrench,
  },
  {
    key: "challenges",
    title: "Hard parts",
    description: "The problems that needed the most thought.",
    icon: AlertTriangle,
  },
  {
    key: "future",
    title: "Limits + next",
    description: "What is not finished and where I would take it.",
    icon: Rocket,
  },
];

export function CaseStudyDeepDive({
  project,
  sectionNumber,
}: CaseStudyDeepDiveProps) {
  const shouldReduceMotion = useReducedMotion();

  const [openDive, setOpenDive] =
    useState<DeepDiveKey | null>(null);

  return (
    <section
      id="deep-dive"
      className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24"
    >
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                x: -18,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="lg:sticky lg:top-28 lg:self-start"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-brand">
            {sectionNumber}
          </span>

          <motion.span
            initial={
              shouldReduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: 0.1,
            }}
            className="h-px w-10 origin-left bg-brand/50"
          />
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Deep dive
        </h2>

        <p className="mt-3 max-w-[225px] text-sm leading-6 text-muted-foreground">
          Extra technical detail for anyone who wants to keep digging.
        </p>

        <div className="mt-6 hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground lg:flex">
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.25, 1, 0.25],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-brand"
          />

          Optional reading
        </div>
      </motion.div>

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.55,
        }}
      >
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
            Technical appendix
          </p>

          <p className="mt-3 text-lg font-medium leading-8 tracking-[-0.02em]">
            The main story is above. This section keeps the deeper engineering
            details available without making every visitor read through them.
          </p>
        </div>

        <div className="border-t">
          {deepDiveItems.map((item, index) => {
            const isOpen =
              openDive === item.key;

            const Icon = item.icon;

            return (
              <motion.div
                key={item.key}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.05,
                }}
                className="border-b"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenDive(
                      isOpen
                        ? null
                        : item.key,
                    )
                  }
                  className="group flex w-full items-center gap-5 py-6 text-left sm:py-7"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: -6,
                            scale: 1.06,
                          }
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-card text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold transition-colors group-hover:text-brand sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen
                        ? 180
                        : 0,
                      scale: isOpen
                        ? 1.06
                        : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.38,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{
                          y: -8,
                        }}
                        animate={{
                          y: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="pb-8 pl-0 sm:pl-[60px]"
                      >
                        {item.key ===
                          "stack" && (
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map(
                              (
                                technology,
                                technologyIndex,
                              ) => (
                                <motion.span
                                  key={
                                    technology
                                  }
                                  initial={
                                    shouldReduceMotion
                                      ? false
                                      : {
                                          opacity: 0,
                                          y: 7,
                                        }
                                  }
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  transition={{
                                    delay:
                                      technologyIndex *
                                      0.035,
                                  }}
                                  whileHover={
                                    shouldReduceMotion
                                      ? undefined
                                      : {
                                          y: -2,
                                        }
                                  }
                                  className="rounded-full border bg-card/60 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-brand/35 hover:text-foreground"
                                >
                                  {technology}
                                </motion.span>
                              ),
                            )}
                          </div>
                        )}

                        {item.key ===
                          "tools" && (
                          <div className="space-y-6">
                            {project.libraries.map(
                              (
                                library,
                                libraryIndex,
                              ) => (
                                <motion.div
                                  key={
                                    library.name
                                  }
                                  initial={
                                    shouldReduceMotion
                                      ? false
                                      : {
                                          opacity: 0,
                                          x: -10,
                                        }
                                  }
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      libraryIndex *
                                      0.05,
                                  }}
                                  className="grid gap-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
                                >
                                  <p className="font-semibold">
                                    {
                                      library.name
                                    }
                                  </p>

                                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                                    {
                                      library.description
                                    }
                                  </p>
                                </motion.div>
                              ),
                            )}
                          </div>
                        )}

                        {item.key ===
                          "challenges" && (
                          <div className="space-y-1">
                            {project.challenges.map(
                              (
                                challenge,
                                challengeIndex,
                              ) => (
                                <motion.div
                                  key={
                                    challenge
                                  }
                                  initial={
                                    shouldReduceMotion
                                      ? false
                                      : {
                                          opacity: 0,
                                          x: -10,
                                        }
                                  }
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay:
                                      challengeIndex *
                                      0.045,
                                  }}
                                  className="grid gap-3 border-b py-4 last:border-b-0 sm:grid-cols-[44px_minmax(0,1fr)]"
                                >
                                  <span className="font-mono text-[9px] text-brand">
                                    {String(
                                      challengeIndex +
                                        1,
                                    ).padStart(
                                      2,
                                      "0",
                                    )}
                                  </span>

                                  <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                                    {
                                      challenge
                                    }
                                  </p>
                                </motion.div>
                              ),
                            )}
                          </div>
                        )}

                        {item.key ===
                          "future" && (
                          <div className="grid gap-12 lg:grid-cols-2">
                            <div>
                              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                                Current limits
                              </p>

                              <div className="space-y-5">
                                {project.limitations.map(
                                  (
                                    limitation,
                                  ) => (
                                    <p
                                      key={
                                        limitation
                                      }
                                      className="text-sm leading-7 text-muted-foreground"
                                    >
                                      {
                                        limitation
                                      }
                                    </p>
                                  ),
                                )}
                              </div>
                            </div>

                            <div>
                              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                                Next iteration
                              </p>

                              <div className="space-y-5">
                                {project.nextSteps.map(
                                  (
                                    step,
                                    stepIndex,
                                  ) => (
                                    <motion.div
                                      key={
                                        step
                                      }
                                      initial={
                                        shouldReduceMotion
                                          ? false
                                          : {
                                              opacity: 0,
                                              x: 8,
                                            }
                                      }
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        delay:
                                          stepIndex *
                                          0.04,
                                      }}
                                      className="flex gap-3"
                                    >
                                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />

                                      <p className="text-sm leading-7">
                                        {step}
                                      </p>
                                    </motion.div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
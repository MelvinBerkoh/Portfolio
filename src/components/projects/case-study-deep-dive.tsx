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
    description:
      "The technologies behind the build.",
    icon: Code2,
  },
  {
    key: "tools",
    title: "Libraries + tools",
    description:
      "How the important pieces were used.",
    icon: Wrench,
  },
  {
    key: "challenges",
    title: "Hard parts",
    description:
      "The problems that needed the most thought.",
    icon: AlertTriangle,
  },
  {
    key: "future",
    title: "Limits + next",
    description:
      "What is not finished and where I would take it.",
    icon: Rocket,
  },
];

export function CaseStudyDeepDive({
  project,
  sectionNumber,
}: CaseStudyDeepDiveProps) {
  const shouldReduceMotion =
    useReducedMotion();

  const [
    openDive,
    setOpenDive,
  ] =
    useState<DeepDiveKey | null>(
      null,
    );

  return (
    <section
      id="deep-dive"
      className="grid gap-9 border-b py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24"
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
          duration:
            shouldReduceMotion
              ? 0
              : 0.5,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
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
              duration:
                shouldReduceMotion
                  ? 0
                  : 0.7,
            }}
            className="h-px w-10 origin-left bg-brand/50"
          />
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Deep dive
        </h2>

        <p className="mt-3 max-w-[300px] text-sm leading-6 text-muted-foreground lg:max-w-[225px]">
          Optional technical detail if you want to go deeper.
        </p>

        <div className="mt-6 hidden items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground lg:flex">
          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [
                      0.25,
                      1,
                      0.25,
                    ],
                  }
            }
            transition={{
              duration: 2,
              repeat:
                Infinity,
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
          duration:
            shouldReduceMotion
              ? 0
              : 0.55,
        }}
      >
        <div className="mb-6 hidden max-w-2xl sm:block">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
            Technical appendix
          </p>

          <p className="mt-3 text-lg font-medium leading-8 tracking-[-0.02em]">
            The main story is above. Open only the technical details you want to
            inspect.
          </p>
        </div>

        <div className="border-t">
          {deepDiveItems.map(
            (
              item,
              index,
            ) => {
              const isOpen =
                openDive ===
                item.key;

              const Icon =
                item.icon;

              return (
                <motion.div
                  key={
                    item.key
                  }
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
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
                    duration:
                      shouldReduceMotion
                        ? 0
                        : 0.35,
                    delay:
                      shouldReduceMotion
                        ? 0
                        : index *
                          0.04,
                  }}
                  className="border-b"
                >
                  <button
                    type="button"
                    aria-expanded={
                      isOpen
                    }
                    onClick={() =>
                      setOpenDive(
                        isOpen
                          ? null
                          : item.key,
                      )
                    }
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5 sm:py-7"
                  >
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate:
                                -6,
                              scale:
                                1.06,
                            }
                      }
                      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-card text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand sm:flex"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold transition-colors group-hover:text-brand sm:text-lg">
                        {
                          item.title
                        }
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                        {
                          item.description
                        }
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        rotate:
                          isOpen
                            ? 180
                            : 0,
                      }}
                      transition={{
                        type:
                          "spring",
                        stiffness:
                          260,
                        damping: 20,
                      }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-muted-foreground sm:h-9 sm:w-9"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence
                    initial={false}
                  >
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height:
                            "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration:
                            0.35,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 sm:pl-[60px] sm:pb-8">
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
                                            y: 6,
                                          }
                                    }
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                    }}
                                    transition={{
                                      delay:
                                        technologyIndex *
                                        0.03,
                                    }}
                                    className="rounded-full border bg-card/60 px-3 py-2 text-xs text-muted-foreground"
                                  >
                                    {
                                      technology
                                    }
                                  </motion.span>
                                ),
                              )}
                            </div>
                          )}

                          {item.key ===
                            "tools" && (
                            <div className="space-y-5">
                              {project.libraries.map(
                                (
                                  library,
                                ) => (
                                  <div
                                    key={
                                      library.name
                                    }
                                    className="grid gap-1.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8"
                                  >
                                    <p className="text-sm font-semibold">
                                      {
                                        library.name
                                      }
                                    </p>

                                    <p className="text-sm leading-6 text-muted-foreground sm:leading-7">
                                      {
                                        library.description
                                      }
                                    </p>
                                  </div>
                                ),
                              )}
                            </div>
                          )}

                          {item.key ===
                            "challenges" && (
                            <div>
                              {project.challenges.map(
                                (
                                  challenge,
                                  challengeIndex,
                                ) => (
                                  <div
                                    key={
                                      challenge
                                    }
                                    className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 border-b py-4 last:border-b-0 sm:grid-cols-[44px_minmax(0,1fr)]"
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

                                    <p className="text-sm leading-6 text-muted-foreground sm:leading-7">
                                      {
                                        challenge
                                      }
                                    </p>
                                  </div>
                                ),
                              )}
                            </div>
                          )}

                          {item.key ===
                            "future" && (
                            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                              <div>
                                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                                  Current
                                  limits
                                </p>

                                <div className="space-y-4">
                                  {project.limitations.map(
                                    (
                                      limitation,
                                    ) => (
                                      <p
                                        key={
                                          limitation
                                        }
                                        className="text-sm leading-6 text-muted-foreground sm:leading-7"
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
                                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                                  Next
                                  iteration
                                </p>

                                <div className="space-y-4">
                                  {project.nextSteps.map(
                                    (
                                      step,
                                    ) => (
                                      <div
                                        key={
                                          step
                                        }
                                        className="flex gap-3"
                                      >
                                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />

                                        <p className="text-sm leading-6 sm:leading-7">
                                          {
                                            step
                                          }
                                        </p>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            },
          )}
        </div>
      </motion.div>
    </section>
  );
}
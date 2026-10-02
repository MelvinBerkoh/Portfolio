"use client";

import {
  AlertTriangle,
  ArrowDownRight,
  Check,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyChallengesResultsProps = {
  project: Project;
};

export function CaseStudyChallengesResults({
  project,
}: CaseStudyChallengesResultsProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <>
      {/* Hard Parts */}
      <section
        id="hard-parts"
        className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-28"
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -16,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.5,
          }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
              04
            </span>

            <span className="h-px w-10 bg-brand/50" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Hard parts
          </h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
            The parts that needed the most thought, debugging, and tradeoffs.
          </p>
        </motion.div>

        <div className="min-w-0">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
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
              duration: shouldReduceMotion
                ? 0
                : 0.5,
            }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <AlertTriangle className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Problem solving
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Where the project stopped being straightforward.
              </p>
            </div>
          </motion.div>

          <div className="border-t">
            {project.challenges.map(
              (challenge, index) => (
                <motion.article
                  key={challenge}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.45,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(
                          index * 0.05,
                          0.22,
                        ),
                  }}
                  className="group relative overflow-hidden border-b"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-brand"
                  />

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            x: 6,
                          }
                    }
                    transition={{
                      duration: 0.22,
                    }}
                    className="grid gap-5 py-7 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-start sm:py-8"
                  >
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-brand">
                        ISSUE
                      </span>

                      <p className="mt-1 font-mono text-[9px] text-muted-foreground">
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </p>
                    </div>

                    <p className="max-w-3xl text-base font-medium leading-7 sm:text-lg sm:leading-8">
                      {challenge}
                    </p>

                    <ArrowDownRight className="hidden h-4 w-4 text-muted-foreground transition duration-300 group-hover:text-brand sm:block" />
                  </motion.div>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        id="results"
        className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-28"
      >
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -16,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.5,
          }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
              05
            </span>

            <span className="h-px w-10 bg-brand/50" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Results
          </h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
            What made it through the build and became part of the finished project.
          </p>
        </motion.div>

        <div className="min-w-0">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
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
              duration: shouldReduceMotion
                ? 0
                : 0.5,
            }}
            className="mb-9 max-w-3xl"
          >
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
              What shipped
            </p>

            <p className="mt-3 text-xl font-medium leading-8 tracking-[-0.02em] sm:text-2xl sm:leading-9">
              The finished project is the proof. These are the pieces that
              actually made it into the working build.
            </p>
          </motion.div>

          <div className="grid border-l border-t sm:grid-cols-2">
            {project.results.map(
              (result, index) => (
                <motion.div
                  key={result}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.45,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(
                          index * 0.055,
                          0.25,
                        ),
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  className="group relative min-h-[190px] border-b border-r p-6 sm:p-7"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-brand"
                  />

                  <div className="flex items-start justify-between gap-5">
                    <span className="text-4xl font-semibold tracking-[-0.06em] text-muted-foreground/25 transition-colors duration-300 group-hover:text-brand/30 sm:text-5xl">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground transition duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <p className="mt-8 max-w-md text-sm font-medium leading-7 sm:text-base">
                    {result}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
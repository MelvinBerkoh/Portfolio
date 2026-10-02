"use client";

import {
  ArrowRight,
  CircleDot,
  Flag,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyFutureProps = {
  project: Project;
};

export function CaseStudyFuture({
  project,
}: CaseStudyFutureProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <section
      id="next"
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
            07
          </span>

          <span className="h-px w-10 bg-brand/50" />
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Limits + next
        </h2>

        <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
          What the current version does not solve yet and where I would take it
          next.
        </p>
      </motion.div>

      <div className="grid min-w-0 gap-16 xl:grid-cols-2 xl:gap-14">
        {/* Limitations */}
        <div>
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-70px",
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.5,
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground">
              <Flag className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Current boundaries
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Things I would not pretend are finished.
              </p>
            </div>
          </motion.div>

          <div className="mt-8 border-t">
            {project.limitations.map(
              (limitation, index) => (
                <motion.div
                  key={limitation}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -12,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.4,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(
                          index * 0.05,
                          0.2,
                        ),
                  }}
                  className="grid gap-4 border-b py-6 sm:grid-cols-[48px_minmax(0,1fr)]"
                >
                  <span className="font-mono text-[9px] font-semibold text-muted-foreground">
                    L
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {limitation}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Next iteration */}
        <div>
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-70px",
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.5,
              delay: shouldReduceMotion
                ? 0
                : 0.08,
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <ArrowRight className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Next iteration
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Where I would continue the project.
              </p>
            </div>
          </motion.div>

          <div className="relative mt-8">
            <motion.div
              aria-hidden="true"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scaleY: 0,
                    }
              }
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : 1,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-gradient-to-b from-brand via-brand/45 to-transparent"
            />

            <div className="space-y-2">
              {project.nextSteps.map(
                (step, index) => (
                  <motion.div
                    key={step}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 14,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: shouldReduceMotion
                        ? 0
                        : 0.42,
                      delay: shouldReduceMotion
                        ? 0
                        : Math.min(
                            index * 0.06,
                            0.24,
                          ),
                    }}
                    className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-5 py-4"
                  >
                    <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-brand/35 bg-background">
                      <CircleDot className="h-3 w-3 text-brand" />
                    </div>

                    <div className="pb-2">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-brand">
                        Next{" "}
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </p>

                      <p className="mt-2 text-sm font-medium leading-7 sm:text-base">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
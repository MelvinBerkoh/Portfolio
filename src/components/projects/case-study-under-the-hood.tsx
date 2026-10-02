"use client";

import {
  Braces,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyUnderTheHoodProps = {
  project: Project;
};

export function CaseStudyUnderTheHood({
  project,
}: CaseStudyUnderTheHoodProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <section
      id="under-the-hood"
      className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-28"
    >
      {/* Sticky section label */}
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
            03
          </span>

          <span className="h-px w-10 bg-brand/50" />
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Under the hood
        </h2>

        <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
          The tools, technical choices, and decisions behind the build.
        </p>
      </motion.div>

      <div className="min-w-0">
        {/* Stack */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-90px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.55,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Braces className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Build stack
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                The main technologies used across the project.
              </p>
            </div>
          </div>

          <div className="relative mt-8">
            <motion.div
              aria-hidden="true"
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
              className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-gradient-to-r from-brand via-brand/40 to-transparent sm:block"
            />

            <div className="relative grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {project.techStack.map(
                (item, index) => (
                  <motion.div
                    key={item}
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
                      duration: shouldReduceMotion
                        ? 0
                        : 0.35,
                      delay: shouldReduceMotion
                        ? 0
                        : Math.min(
                            index * 0.045,
                            0.32,
                          ),
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    className="group relative flex min-h-[74px] items-center gap-4 rounded-2xl border bg-card/55 px-4 py-3 backdrop-blur transition-colors duration-300 hover:border-brand/35 hover:bg-card"
                  >
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background font-mono text-[9px] font-semibold text-muted-foreground transition group-hover:border-brand/40 group-hover:text-brand">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </div>

                    <p className="text-sm font-semibold">
                      {item}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Tools in practice */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-90px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.55,
          }}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Wrench className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Tools in practice
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Where the important libraries fit into the system.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t">
            {project.libraries.map(
              (library, index) => (
                <motion.div
                  key={library.name}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 14,
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
                      : 0.4,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(
                          index * 0.05,
                          0.2,
                        ),
                  }}
                  className="group grid gap-4 border-b py-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10 sm:py-7"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 font-mono text-[9px] font-semibold text-muted-foreground">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <h3 className="font-semibold transition-colors group-hover:text-brand">
                      {
                        library.name
                      }
                    </h3>
                  </div>

                  <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {
                      library.description
                    }
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Engineering decisions */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-90px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.55,
          }}
          className="mt-20"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                Engineering decisions
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Choices that shaped how the project works.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {project.engineeringDecisions.map(
              (decision, index) => (
                <motion.div
                  key={decision}
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
                      : 0.42,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(
                          index * 0.05,
                          0.22,
                        ),
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: 5,
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl border bg-card/40 p-5 backdrop-blur transition-colors duration-300 hover:border-brand/30 hover:bg-card/65 sm:p-6"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      scaleY: 0,
                    }}
                    whileHover={{
                      scaleY: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="absolute bottom-0 left-0 top-0 w-px origin-bottom bg-brand"
                  />

                  <div className="grid gap-3 sm:grid-cols-[50px_minmax(0,1fr)] sm:items-start">
                    <span className="font-mono text-[10px] font-semibold text-brand">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <p className="max-w-3xl text-sm font-medium leading-7 sm:text-base">
                      {decision}
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
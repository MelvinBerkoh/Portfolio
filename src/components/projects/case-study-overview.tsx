"use client";

import {
  ArrowDownRight,
  Check,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyOverviewProps = {
  project: Project;
};

export function CaseStudyOverview({
  project,
}: CaseStudyOverviewProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <div className="relative">
      {/* Context */}
      <section
        id="context"
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
              01
            </span>

            <span className="h-px w-10 bg-brand/50" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Context
          </h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
            What the project is and why I built it.
          </p>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.6,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="max-w-[950px]"
        >
          <p className="text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-foreground sm:text-3xl sm:leading-[1.4] lg:text-[2.15rem]">
            {project.overview}
          </p>

          <motion.div
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
                : 0.9,
              delay: 0.15,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="mt-10 h-px origin-left bg-gradient-to-r from-brand/60 via-border to-transparent"
          />

          <div className="mt-8 flex items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-muted-foreground">
            <ArrowDownRight className="h-3.5 w-3.5 text-brand" />
            From problem to implementation
          </div>
        </motion.div>
      </section>

      {/* What I built */}
      <section
        id="built"
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
              02
            </span>

            <span className="h-px w-10 bg-brand/50" />
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            What I built
          </h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
            The main systems and workflows I implemented.
          </p>
        </motion.div>

        <div className="border-t">
          {project.whatIBuilt.map(
            (item, index) => (
              <motion.div
                key={item}
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
                        index * 0.045,
                        0.22,
                      ),
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 6,
                      }
                }
                className="group relative border-b py-6 sm:py-7"
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

                <div className="grid gap-4 sm:grid-cols-[52px_minmax(0,1fr)_32px] sm:items-start">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-muted-foreground">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="max-w-3xl text-base font-medium leading-7 sm:text-lg sm:leading-8">
                    {item}
                  </p>

                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border bg-card text-muted-foreground transition duration-300 group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand sm:flex">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
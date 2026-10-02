"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyNextProjectProps = {
  currentProject: Project;
  nextProject: Project;
  nextProjectNumber: string;
};

export function CaseStudyNextProject({
  currentProject,
  nextProject,
  nextProjectNumber,
}: CaseStudyNextProjectProps) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
    <section className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.045] blur-[130px]"
      />

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
        className="relative"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            End of case study
          </span>

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
                : 0.8,
            }}
            className="h-px flex-1 origin-left bg-border"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm text-muted-foreground">
              You just finished
            </p>

            <p className="mt-2 text-xl font-semibold tracking-[-0.025em]">
              {currentProject.title}
            </p>

            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

              Back to portfolio
            </Link>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group relative overflow-hidden border-y py-8 sm:py-10"
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
                duration: 0.45,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-brand"
            />

            <div className="flex items-start justify-between gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
                    Next project
                  </span>

                  <span className="h-1 w-1 rounded-full bg-border" />

                  <span className="font-mono text-[9px] text-muted-foreground">
                    {nextProjectNumber}
                  </span>
                </div>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                  {nextProject.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {nextProject.category}
                </p>
              </div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 5,
                        y: -5,
                      }
                }
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-card text-muted-foreground transition group-hover:border-brand/40 group-hover:text-brand sm:h-14 sm:w-14"
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </div>
          </Link>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">
              Melvin Berkoh
            </p>

            <p className="mt-1">
              Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em]">
            <span>
              Case study
            </span>

            <ArrowRight className="h-3 w-3 text-brand" />

            <span>
              {nextProject.title}
            </span>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}
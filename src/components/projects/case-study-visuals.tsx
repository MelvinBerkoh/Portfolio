"use client";

import Image from "next/image";
import {
  Eye,
  ScanLine,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { Project } from "@/data/projects";

type CaseStudyVisualsProps = {
  project: Project;
};

export function CaseStudyVisuals({
  project,
}: CaseStudyVisualsProps) {
  const shouldReduceMotion =
    useReducedMotion();

  if (
    project.slug ===
    "eligido-landing-page"
  ) {
    return null;
  }

  const visuals =
    project.screenshots &&
    project.screenshots.length > 0
      ? project.screenshots
      : project.thumbnail
        ? [
            {
              src: project.thumbnail,
              alt: `${project.title} preview`,
              caption:
                "Project preview.",
            },
          ]
        : [];

  if (visuals.length === 0) {
    return null;
  }

  return (
    <section className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
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
        }}
        className="lg:sticky lg:top-28 lg:self-start"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-brand">
            06
          </span>

          <span className="h-px w-10 bg-brand/50" />
        </div>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Product
        </h2>

        <p className="mt-3 max-w-[220px] text-sm leading-6 text-muted-foreground">
          See the work instead of only reading about it.
        </p>
      </motion.div>

      <div>
        {project.categoryHighlights &&
          project.categoryHighlights
            .length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mb-14"
            >
              <div className="mb-6 flex items-center gap-3">
                <ScanLine className="h-4 w-4 text-brand" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
                  Detection categories
                </span>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[22px] border bg-border sm:grid-cols-2 xl:grid-cols-4">
                {project.categoryHighlights.map(
                  (
                    category,
                    index,
                  ) => (
                    <motion.div
                      key={
                        category.name
                      }
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index *
                          0.045,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="relative bg-card p-5"
                    >
                      <span
                        className="absolute left-0 top-0 h-[2px] w-full"
                        style={{
                          backgroundColor:
                            category.color,
                        }}
                      />

                      <p className="font-semibold">
                        {
                          category.name
                        }
                      </p>

                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {
                          category.description
                        }
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          )}

        <motion.div
          initial={{
            opacity: 0,
            x: -12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-7 flex items-center gap-3"
        >
          <Eye className="h-4 w-4 text-brand" />

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
            Project views
          </span>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {visuals.map(
            (
              visual,
              index,
            ) => (
              <motion.figure
                key={
                  visual.src
                }
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 34,
                        scale:
                          0.975,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                  delay:
                    index *
                    0.07,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                className={`group overflow-hidden rounded-[24px] border bg-card/70 shadow-sm backdrop-blur ${
                  index === 0 &&
                  visuals.length >=
                    3
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-muted ${
                    index === 0 &&
                    visuals.length >=
                      3
                      ? "aspect-[16/8]"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={
                      visual.src
                    }
                    alt={
                      visual.alt
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 1100px"
                    className="object-contain p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  />

                  {!shouldReduceMotion && (
                    <>
                      <motion.div
                        aria-hidden="true"
                        initial={{
                          x: "-140%",
                        }}
                        whileHover={{
                          x: "140%",
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="absolute inset-y-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                      />

                      <motion.div
                        aria-hidden="true"
                        animate={{
                          opacity: [
                            0,
                            0.35,
                            0,
                          ],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay:
                            index *
                            0.4,
                        }}
                        className="absolute inset-0 bg-brand/[0.035]"
                      />
                    </>
                  )}
                </div>

                <figcaption className="border-t px-5 py-4">
                  <div className="flex gap-4">
                    <span className="font-mono text-[9px] text-brand">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {
                        visual.caption
                      }
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
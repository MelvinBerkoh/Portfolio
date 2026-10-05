"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Check,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

import { getCaseStudyPresentation } from "@/data/case-study-presentation";
import type { Project } from "@/data/projects";

type CaseStudyStoryProps = {
  project: Project;
};

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

function handleGlowMove(
  event: ReactPointerEvent<HTMLDivElement>,
) {
  if (event.pointerType !== "mouse") {
    return;
  }

  const rect =
    event.currentTarget.getBoundingClientRect();

  const x =
    event.clientX - rect.left;

  const y =
    event.clientY - rect.top;

  event.currentTarget.style.setProperty(
    "--glow-x",
    `${x}px`,
  );

  event.currentTarget.style.setProperty(
    "--glow-y",
    `${y}px`,
  );
}

function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      onPointerMove={handleGlowMove}
      className={`group relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--glow-x, 50%) var(--glow-y, 50%), color-mix(in srgb, var(--brand) 14%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  const shouldReduceMotion =
    useReducedMotion();

  return (
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
        duration: shouldReduceMotion
          ? 0
          : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="lg:sticky lg:top-28 lg:self-start"
    >
      <div className="flex items-center gap-3">
        <motion.span
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
            delay: 0.08,
            duration: 0.4,
          }}
          className="font-mono text-[10px] font-semibold tracking-[0.2em] text-brand"
        >
          {number}
        </motion.span>

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
            duration: shouldReduceMotion
              ? 0
              : 0.7,
            delay: 0.1,
          }}
          className="h-px w-10 origin-left bg-brand/50"
        />
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-[225px] text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}

export function CaseStudyStory({
  project,
}: CaseStudyStoryProps) {
  const shouldReduceMotion =
    useReducedMotion();

  const presentation =
    getCaseStudyPresentation(
      project.slug,
    );

  return (
    <>
      {/* 01 — Quick Read */}
      <section className="grid gap-10 border-y py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <SectionLabel
          number="01"
          title="Quick read"
          description="The project in a few seconds."
        />

        <div className="grid gap-px overflow-hidden rounded-[24px] border bg-border sm:grid-cols-2">
          {presentation.quickRead.map(
            (item, index) => (
              <motion.div
                key={item.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                        scale: 0.985,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.5,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
              >
                <GlowCard className="min-h-[175px] bg-card/80 p-6 backdrop-blur sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </span>

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
                              scale: [
                                0.8,
                                1,
                                0.8,
                              ],
                            }
                      }
                      transition={{
                        duration:
                          2.4 +
                          index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--cursor-glow)]"
                    />
                  </div>

                  <p className="mt-6 text-2xl font-semibold tracking-[-0.04em] transition-colors duration-300 group-hover:text-brand sm:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.detail}
                  </p>

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
                    }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
                  />
                </GlowCard>
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* 02 — How It Works */}
      <section className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <SectionLabel
          number="02"
          title="How it works"
          description="The project from input to outcome."
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
            margin: "-80px",
          }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.6,
          }}
          className="relative"
        >
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
              margin: "-100px",
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-7 right-7 top-7 hidden h-px origin-left bg-gradient-to-r from-brand via-brand/50 to-border md:block"
          />

          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              animate={{
                left: ["2%", "98%"],
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
                times: [
                  0,
                  0.1,
                  0.9,
                  1,
                ],
              }}
              className="absolute top-[24px] z-20 hidden h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brand shadow-[0_0_12px_var(--cursor-glow)] md:block"
            />
          )}

          <div className="grid gap-6 md:grid-cols-5 md:gap-3">
            {presentation.flow.map(
              (step, index) => (
                <motion.div
                  key={step.title}
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
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.5,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.1,
                  }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                          }
                    }
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 0 0 rgba(0,0,0,0)",
                              "0 0 18px var(--cursor-glow)",
                              "0 0 0 rgba(0,0,0,0)",
                            ],
                          }
                    }
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 280,
                        damping: 20,
                      },
                      boxShadow: {
                        duration: 3.2,
                        delay:
                          index * 0.45,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                      },
                    }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-background font-mono text-[10px] font-semibold text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand/10"
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}

                    {!shouldReduceMotion && (
                      <motion.span
                        animate={{
                          opacity: [
                            0,
                            1,
                            0,
                          ],
                          scale: [
                            0.6,
                            1.4,
                            0.6,
                          ],
                        }}
                        transition={{
                          duration: 2.8,
                          delay:
                            index * 0.45,
                          repeat: Infinity,
                          repeatDelay: 2.2,
                        }}
                        className="absolute inset-[-5px] rounded-full border border-brand/30"
                      />
                    )}
                  </motion.div>

                  <div className="mt-5">
                    <p className="font-semibold transition-colors duration-300 group-hover:text-brand">
                      {step.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>

                  {index <
                    presentation.flow.length -
                      1 && (
                    <ArrowRight className="absolute right-[-8px] top-5 hidden h-4 w-4 text-brand/50 md:block" />
                  )}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </section>

      {/* 03 — My Contribution */}
      <section className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <SectionLabel
          number="03"
          title="My contribution"
          description="The pieces I directly worked on."
        />

        <div className="border-t">
          {project.highlights
            .slice(0, 6)
            .map(
              (
                item,
                index,
              ) => (
                <motion.div
                  key={item}
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
                    margin: "-50px",
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.45,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.045,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: 6,
                        }
                  }
                  className="group relative grid gap-4 overflow-hidden border-b py-6 sm:grid-cols-[52px_minmax(0,1fr)_32px] sm:items-start"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-brand"
                  />

                  <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-brand">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="max-w-3xl text-base font-medium leading-7 sm:text-lg">
                    {item}
                  </p>

                  <div className="hidden h-8 w-8 items-center justify-center rounded-full border text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:bg-brand/10 group-hover:text-brand sm:flex">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ),
            )}
        </div>
      </section>

      {/* 04 — Engineering Proof */}
      <section className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <SectionLabel
          number="04"
          title="Engineering proof"
          description="A few decisions that show what was happening under the surface."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {project.engineeringDecisions
            .slice(0, 3)
            .map(
              (
                decision,
                index,
              ) => {
                const icons = [
                  ShieldCheck,
                  Database,
                  Layers3,
                ];

                const Icon =
                  icons[
                    index %
                      icons.length
                  ];

                return (
                  <motion.div
                    key={decision}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 28,
                            rotateX: 5,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.1,
                      duration: shouldReduceMotion
                        ? 0
                        : 0.55,
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
                            y: -7,
                            scale: 1.015,
                          }
                    }
                  >
                    <GlowCard className="h-full rounded-[22px] border bg-card/60 p-6 backdrop-blur transition-colors duration-300 hover:border-brand/35">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: -8,
                                scale: 1.08,
                              }
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand"
                      >
                        <Icon className="h-4 w-4" />
                      </motion.div>

                      <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.17em] text-muted-foreground">
                        Decision{" "}
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </p>

                      <p className="mt-3 text-sm font-medium leading-7">
                        {decision}
                      </p>

                      <motion.div
                        aria-hidden="true"
                        initial={{
                          scaleX: 0,
                        }}
                        whileHover={{
                          scaleX: 1,
                        }}
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
                      />
                    </GlowCard>
                  </motion.div>
                );
              },
            )}
        </div>
      </section>

      {/* 05 — Results */}
      <section className="grid gap-10 border-b py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:py-24">
        <SectionLabel
          number="05"
          title="Results"
          description="The proof that the build came together."
        />

        <div>
          <div className="mb-10 flex items-center gap-3">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [
                        0,
                        12,
                        -8,
                        0,
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Sparkles className="h-4 w-4 text-brand" />
            </motion.div>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
              What shipped
            </span>
          </div>

          <div className="grid border-l border-t sm:grid-cols-2">
            {project.results
              .slice(0, 4)
              .map(
                (
                  result,
                  index,
                ) => (
                  <motion.div
                    key={result}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.97,
                            y: 14,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: shouldReduceMotion
                        ? 0
                        : 0.5,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.06,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    className="group relative min-h-[190px] overflow-hidden border-b border-r p-6 sm:p-7"
                  >
                    <motion.div
                      aria-hidden="true"
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
                    />

                    <span className="text-4xl font-semibold tracking-[-0.06em] text-muted-foreground/20 transition-colors duration-300 group-hover:text-brand/30">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

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
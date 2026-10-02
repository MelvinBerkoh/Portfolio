"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

const pipelineStages = [
  {
    name: "CSV",
    detail: "Raw Olist data",
  },
  {
    name: "Python",
    detail: "Profile + ingest",
  },
  {
    name: "PostgreSQL",
    detail: "Warehouse",
  },
  {
    name: "dbt",
    detail: "Transform + test",
  },
  {
    name: "SQL",
    detail: "Business analysis",
  },
  {
    name: "Tableau",
    detail: "Dashboards",
  },
];

const metrics = [
  {
    label: "Product revenue",
    value: "$13.22M",
  },
  {
    label: "Delivered orders",
    value: "96,478",
  },
  {
    label: "Avg. review score",
    value: "4.16",
  },
  {
    label: "Late delivery rate",
    value: "8.11%",
  },
];

const proofPoints = [
  {
    icon: Database,
    title: "Layered warehouse",
    description:
      "Raw data moves through staging, intermediate models and reporting marts.",
  },
  {
    icon: Code2,
    title: "Data quality",
    description:
      "Payments, reviews and geolocation data are cleaned before reporting.",
  },
  {
    icon: BarChart3,
    title: "Business reporting",
    description:
      "Final models support revenue, delivery, customer and seller analysis.",
  },
];

export function CommercePulseShowcase() {
  const pipelineRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const isInView = useInView(pipelineRef, {
    once: true,
    margin: "-120px",
  });

  const shouldReduceMotion = useReducedMotion();

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (
      !isInView ||
      shouldReduceMotion ||
      startedRef.current
    ) {
      return;
    }

    startedRef.current = true;

    const timers = pipelineStages.map((_, index) =>
      window.setTimeout(() => {
        setPhase(index + 1);
      }, 450 + index * 480),
    );

    timers.push(
      window.setTimeout(() => {
        setPhase(pipelineStages.length + 1);
      }, 450 + pipelineStages.length * 480),
    );

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, [isInView, shouldReduceMotion]);

  const visiblePhase = shouldReduceMotion
    ? pipelineStages.length + 1
    : phase;

  const pipelineComplete =
    visiblePhase > pipelineStages.length;

  return (
    <section className="relative pb-24 pt-8 lg:pb-32 lg:pt-16">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] xl:gap-16">
          <motion.div
            ref={pipelineRef}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.975,
                    x: -24,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl border bg-card/90 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/30"
          >
            <div className="flex items-center justify-between gap-4 border-b bg-background/70 px-5 py-4">
              <div>
                <p className="font-mono text-xs font-medium">
                  commerce-pulse.pipeline
                </p>

                <p className="mt-1 text-[11px] text-muted-foreground">
                  Olist analytics workflow
                </p>
              </div>

              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-500 ${
                  pipelineComplete
                    ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-brand/25 bg-brand/10 text-brand"
                }`}
              >
                <span className="relative flex h-2 w-2 items-center justify-center">
                  {!pipelineComplete && (
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-2 w-2 rounded-full bg-brand"
                    />
                  )}

                  <span
                    className={`relative h-1.5 w-1.5 rounded-full ${
                      pipelineComplete
                        ? "bg-emerald-500"
                        : "bg-brand"
                    }`}
                  />
                </span>

                {pipelineComplete
                  ? "Pipeline complete"
                  : "Pipeline running"}
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Data flow
              </p>

              <div className="mt-6 hidden items-stretch lg:flex">
                {pipelineStages.map((stage, index) => {
                  const stageNumber = index + 1;

                  const isComplete =
                    visiblePhase >= stageNumber;

                  const isCurrent =
                    visiblePhase === stageNumber;

                  return (
                    <div
                      key={stage.name}
                      className="flex min-w-0 flex-1 items-center"
                    >
                      <motion.div
                        animate={{
                          opacity: isComplete ? 1 : 0.42,
                          scale: isCurrent
                            ? 1.035
                            : 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`relative min-h-[142px] min-w-0 flex-1 overflow-hidden rounded-2xl border p-4 transition-colors duration-500 ${
                          isComplete
                            ? "border-brand/30 bg-brand/5"
                            : "bg-background/55"
                        }`}
                      >
                        {isCurrent && (
                          <motion.div
                            initial={{
                              x: "-120%",
                            }}
                            animate={{
                              x: "220%",
                            }}
                            transition={{
                              duration: 0.9,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-brand/10 to-transparent blur-sm"
                          />
                        )}

                        <div className="relative z-10">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] text-muted-foreground">
                              0{stageNumber}
                            </span>

                            <motion.span
                              animate={{
                                scale: isCurrent
                                  ? [1, 1.35, 1]
                                  : 1,
                              }}
                              transition={{
                                duration: 1.1,
                                repeat: isCurrent
                                  ? Infinity
                                  : 0,
                              }}
                              className={`h-2 w-2 rounded-full ${
                                isComplete
                                  ? "bg-brand"
                                  : "bg-muted-foreground/30"
                              }`}
                            />
                          </div>

                          <p
                            className={`mt-5 text-sm font-semibold transition-colors ${
                              isComplete
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {stage.name}
                          </p>

                          <p className="mt-2 text-xs leading-5 text-muted-foreground">
                            {stage.detail}
                          </p>

                          <p
                            className={`mt-4 font-mono text-[10px] uppercase tracking-[0.12em] ${
                              isComplete
                                ? "text-brand"
                                : "text-muted-foreground/60"
                            }`}
                          >
                            {isCurrent
                              ? "running"
                              : isComplete
                                ? "complete"
                                : "queued"}
                          </p>
                        </div>
                      </motion.div>

                      {index <
                        pipelineStages.length - 1 && (
                        <div className="flex w-7 shrink-0 items-center justify-center">
                          <div className="relative h-px w-5 overflow-hidden bg-border">
                            <motion.div
                              initial={{
                                scaleX: 0,
                              }}
                              animate={{
                                scaleX:
                                  visiblePhase >
                                  stageNumber
                                    ? 1
                                    : 0,
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
                              className="absolute inset-0 origin-left bg-brand"
                            />
                          </div>

                          <motion.span
                            animate={{
                              color:
                                visiblePhase >
                                stageNumber
                                  ? "var(--brand)"
                                  : "var(--muted-foreground)",
                            }}
                            className="-ml-1 text-xs"
                          >
                            →
                          </motion.span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-3 lg:hidden">
                {pipelineStages.map((stage, index) => {
                  const stageNumber = index + 1;

                  const isComplete =
                    visiblePhase >= stageNumber;

                  return (
                    <motion.div
                      key={stage.name}
                      animate={{
                        opacity: isComplete ? 1 : 0.45,
                      }}
                      className={`rounded-2xl border p-4 transition-colors duration-500 ${
                        isComplete
                          ? "border-brand/30 bg-brand/5"
                          : "bg-background/55"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="font-mono text-[10px] text-muted-foreground">
                            0{stageNumber}
                          </span>

                          <p className="mt-1 font-semibold">
                            {stage.name}
                          </p>

                          <p className="mt-1 text-xs text-muted-foreground">
                            {stage.detail}
                          </p>
                        </div>

                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isComplete
                              ? "bg-brand"
                              : "bg-muted-foreground/30"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                animate={
                  pipelineComplete
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Reporting layer
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Historical Olist dataset
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Models ready
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 12,
                              scale: 0.97,
                            }
                      }
                      animate={
                        pipelineComplete
                          ? {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }
                          : {
                              opacity: 0,
                              y: 12,
                              scale: 0.97,
                            }
                      }
                      transition={{
                        duration: 0.35,
                        delay: shouldReduceMotion
                          ? 0
                          : index * 0.08,
                      }}
                      className="rounded-2xl border bg-background/60 p-4"
                    >
                      <p className="text-xl font-semibold tracking-[-0.025em]">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl border bg-background/60 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">
                          Delivery vs. review score
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          One finding from the reporting model
                        </p>
                      </div>

                      <BarChart3 className="h-4 w-4 text-brand" />
                    </div>

                    <div className="mt-6 space-y-5">
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            On time / early
                          </span>

                          <span className="font-medium">
                            4.29
                          </span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{
                              scaleX: 0,
                            }}
                            animate={{
                              scaleX: pipelineComplete
                                ? 0.858
                                : 0,
                            }}
                            transition={{
                              duration: 0.7,
                              delay: 0.25,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="h-full origin-left rounded-full bg-brand"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            Late delivery
                          </span>

                          <span className="font-medium">
                            2.57
                          </span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{
                              scaleX: 0,
                            }}
                            animate={{
                              scaleX: pipelineComplete
                                ? 0.514
                                : 0,
                            }}
                            transition={{
                              duration: 0.7,
                              delay: 0.4,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            }}
                            className="h-full origin-left rounded-full bg-brand/60"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-background/60 p-5">
                    <p className="text-sm font-semibold">
                      Warehouse layers
                    </p>

                    <div className="mt-5 space-y-3">
                      {[
                        "raw",
                        "staging",
                        "intermediate",
                        "marts",
                      ].map((layer, index) => (
                        <motion.div
                          key={layer}
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  x: 10,
                                }
                          }
                          animate={
                            pipelineComplete
                              ? {
                                  opacity: 1,
                                  x: 0,
                                }
                              : {
                                  opacity: 0,
                                  x: 10,
                                }
                          }
                          transition={{
                            delay:
                              shouldReduceMotion
                                ? 0
                                : 0.2 +
                                  index * 0.08,
                          }}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand/10 font-mono text-[10px] font-semibold text-brand">
                            {index + 1}
                          </span>

                          <span className="font-mono text-xs text-muted-foreground">
                            {layer}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 28,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              04 / Data Engineering + Analytics
            </span>

            <h3 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
              CommercePulse
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Raw e-commerce data turned into a reporting
              warehouse and business dashboards.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              CommercePulse starts with raw Olist CSV files.
              Python profiles the data before it moves into
              PostgreSQL. dbt handles transformations and tests.
              SQL and Tableau sit on top of the final reporting
              models.
            </p>

            <div className="mt-9 space-y-5">
              {proofPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {item.title}
                      </p>

                      <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects/commerce-pulse"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5"
              >
                Case study

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/MelvinBerkoh/commerce-pulse"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <Code2 className="h-4 w-4 transition-transform group-hover:-rotate-6 group-hover:scale-110" />

                GitHub
              </Link>
            </div>

            <p className="mt-6 max-w-lg text-xs leading-5 text-muted-foreground">
              Dashboard metrics shown here come from the historical
              Olist dataset used in the project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
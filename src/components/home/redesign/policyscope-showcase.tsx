"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Code2,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
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

const categories = [
  {
    name: "Data Collection",
    count: 3,
    color: "#7ccf9b",
  },
  {
    name: "Data Sharing",
    count: 2,
    color: "#7fc4b7",
  },
  {
    name: "Billing",
    count: 1,
    color: "#d8b45a",
  },
  {
    name: "Legal",
    count: 2,
    color: "#df7575",
  },
];

export function PolicyScopeShowcase() {
  const demoRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const isInView = useInView(demoRef, {
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

    const timers = [
      window.setTimeout(() => setPhase(1), 450),
      window.setTimeout(() => setPhase(2), 1600),
      window.setTimeout(() => setPhase(3), 2450),
      window.setTimeout(() => setPhase(4), 3300),
    ];

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, [isInView, shouldReduceMotion]);

  const visiblePhase = shouldReduceMotion ? 4 : phase;

  const detectionCount =
    visiblePhase < 2
      ? 0
      : visiblePhase === 2
        ? 4
        : 8;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.45,
          }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Technical work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Different problems need different tools.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            These projects pushed me outside a normal full-stack app.
            PolicyScope started inside the browser.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] xl:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -28,
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
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                03 / Browser + AI
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                <Award className="h-3.5 w-3.5" />
                3rd Overall · NJIT Capstone
              </span>
            </div>

            <h3 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
              PolicyScope
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              A Chrome extension that finds important policy clauses
              before you agree to them.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              PolicyScope scans Terms of Service and Privacy Policy
              pages. It groups detected clauses by category and
              highlights them on the page. Users can also request a
              plain-English explanation.
            </p>

            <div className="mt-9 space-y-5">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Search className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-semibold">
                    Clause detection
                  </p>

                  <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                    Rule-based detection keeps the main scan fast and
                    predictable.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08,
                }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-semibold">
                    Secure AI flow
                  </p>

                  <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                    AI requests go through a Node and Express backend.
                    The API key stays out of the extension.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.16,
                }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div>
                  <p className="font-semibold">
                    Plain-English explanations
                  </p>

                  <p className="mt-1 max-w-md text-sm leading-6 text-muted-foreground">
                    AI is used on demand. It is not required for the
                    main detection pipeline.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects/policyscope"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5"
              >
                Case study

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/MelvinBerkoh/Policy-Scope"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <Code2 className="h-4 w-4 transition-transform group-hover:-rotate-6 group-hover:scale-110" />

                GitHub
              </Link>

              <Link
                href="/projects/policyscope/policyscope-final-presentation.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <FileText className="h-4 w-4" />
                Presentation
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={demoRef}
            initial={{
              opacity: 0,
              scale: 0.975,
              x: 24,
            }}
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl border bg-card/90 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/30"
          >
            <div className="flex items-center gap-3 border-b bg-background/75 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <div className="mx-auto flex min-w-0 max-w-xl flex-1 items-center gap-2 rounded-xl border bg-background/70 px-3 py-2">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />

                <span className="truncate font-mono text-[11px] text-muted-foreground">
                  example.com/privacy-policy
                </span>
              </div>

              <span className="w-12" />
            </div>

            <div className="grid min-h-[600px] lg:grid-cols-[1fr_300px]">
              <div className="relative overflow-hidden bg-background/60 p-6 sm:p-8">
                {visiblePhase >= 1 && visiblePhase < 3 && (
                  <motion.div
                    initial={{
                      top: "10%",
                      opacity: 0,
                    }}
                    animate={{
                      top: "82%",
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute left-0 right-0 z-20 h-px bg-brand shadow-[0_0_14px_var(--cursor-glow)]"
                  />
                )}

                <div className="mx-auto max-w-2xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        Privacy Policy
                      </p>

                      <h4 className="mt-2 text-2xl font-semibold">
                        Example Service
                      </h4>
                    </div>

                    <motion.div
                      animate={
                        visiblePhase === 1
                          ? {
                              scale: [1, 0.96, 1],
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.35,
                      }}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium ${
                        visiblePhase >= 3
                          ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : visiblePhase >= 1
                            ? "border-brand/30 bg-brand/10 text-brand"
                            : "bg-background text-muted-foreground"
                      }`}
                    >
                      {visiblePhase >= 3
                        ? "Scan complete"
                        : visiblePhase >= 1
                          ? "Scanning..."
                          : "Scan page"}
                    </motion.div>
                  </div>

                  <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
                    <p>
                      We collect information that you provide when
                      creating an account and using the service.
                    </p>

                    <p>
                      We may{" "}
                      <span
                        className={`rounded px-1 py-0.5 transition-colors duration-500 ${
                          visiblePhase >= 2
                            ? "bg-[#7fc4b7]/25 text-foreground"
                            : ""
                        }`}
                      >
                        share personal information with service
                        providers and affiliated partners
                      </span>{" "}
                      when needed to operate the platform.
                    </p>

                    <p>
                      Your subscription{" "}
                      <span
                        className={`rounded px-1 py-0.5 transition-colors duration-500 ${
                          visiblePhase >= 2
                            ? "bg-[#d8b45a]/25 text-foreground"
                            : ""
                        }`}
                      >
                        renews automatically unless cancelled before
                        the next billing date
                      </span>
                      .
                    </p>

                    <p>
                      Any legal dispute will be handled through{" "}
                      <span
                        className={`rounded px-1 py-0.5 transition-colors duration-500 ${
                          visiblePhase >= 2
                            ? "bg-[#df7575]/25 text-foreground"
                            : ""
                        }`}
                      >
                        binding arbitration and limits on class
                        actions
                      </span>
                      .
                    </p>

                    <p>
                      We may update these terms from time to time.
                      Continued use of the service means you accept
                      the updated policy.
                    </p>
                  </div>

                  {visiblePhase >= 4 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 14,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-4"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-brand" />

                        <p className="text-sm font-semibold">
                          Plain-English explanation
                        </p>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        You may have to resolve a dispute through
                        arbitration instead of joining a class-action
                        lawsuit.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              <motion.aside
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 30,
                      }
                }
                animate={
                  visiblePhase >= 3
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {
                        opacity: 0,
                        x: 30,
                      }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t bg-card/80 p-5 lg:border-l lg:border-t-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">
                      PolicyScope
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Scan results
                    </p>
                  </div>

                  <motion.div
                    key={detectionCount}
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand"
                  >
                    {detectionCount}
                  </motion.div>
                </div>

                <div className="mt-6 space-y-3">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 12,
                            }
                      }
                      animate={
                        visiblePhase >= 3
                          ? {
                              opacity: 1,
                              x: 0,
                            }
                          : {
                              opacity: 0,
                              x: 12,
                            }
                      }
                      transition={{
                        duration: 0.3,
                        delay: shouldReduceMotion
                          ? 0
                          : index * 0.07,
                      }}
                      className="rounded-xl border bg-background/60 p-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor: category.color,
                            }}
                          />

                          <span className="text-xs font-medium">
                            {category.name}
                          </span>
                        </div>

                        <span className="text-xs text-muted-foreground">
                          {category.count}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border bg-background/60 p-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Scan status
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    {visiblePhase >= 3
                      ? "8 clauses detected"
                      : "Waiting for results"}
                  </p>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
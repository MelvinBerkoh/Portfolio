"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Monitor,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  type ComponentType,
  type PointerEvent,
  type SVGProps,
  useState,
} from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  flow: string[];
  note: string;
  href?: string;
  external?: boolean;
  icon: ComponentType<
    SVGProps<SVGSVGElement>
  >;
};

const projects: Project[] = [
  {
    number: "05",
    title: "Eligido",
    category: "Frontend / Startup",
    summary:
      "Turned a complex startup concept into a responsive public-facing React experience.",
    tech: [
      "React",
      "JavaScript",
      "Responsive UI",
      "Product Messaging",
    ],
    flow: [
      "Startup brief",
      "Product story",
      "Frontend",
      "Public site",
    ],
    note:
      "The internship later led to a paid return engagement with the same company.",
    href: "/projects/eligido-landing-page",
    icon: Monitor,
  },
  {
    number: "06",
    title: "Covey.Town Escape Room",
    category:
      "Multiplayer / Game Feature",
    summary:
      "A cooperative escape room built inside an existing multiplayer TypeScript codebase.",
    tech: [
      "React",
      "TypeScript",
      "Phaser",
      "Chakra UI",
    ],
    flow: [
      "Lobby",
      "Puzzles",
      "Shared state",
      "Timer + score",
    ],
    note:
      "Built with a team inside the existing Covey.Town architecture instead of as a standalone app.",
    href: "/projects/coveytown-escape-room",
    icon: Code2,
  },
  {
    number: "07",
    title: "NYC Aquatics",
    category:
      "Data Science / Regression",
    summary:
      "Used NYC Open Data to predict aquatics program enrollment from location and class data.",
    tech: [
      "Python",
      "pandas",
      "scikit-learn",
      "matplotlib",
    ],
    flow: [
      "Open data",
      "Clean",
      "Encode",
      "Regression",
      "Evaluate",
    ],
    note:
      "The final regression model reached an R² of 0.5967 with an average error of about six registrations.",
    href: "/projects/nyc-aquatics-enrollment-prediction",
    icon: BarChart3,
  },
  {
    number: "08",
    title: "Cherries On Top",
    category: "Client Web Project",
    summary:
      "Built a web presence and lightweight data workflow for a mobile catering business.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
    ],
    flow: [
      "Client need",
      "Website",
      "Survey data",
      "JSON",
      "Excel",
    ],
    note:
      "The project connected the public website with survey handling, analytics, and an export workflow for the business.",
    icon: BriefcaseBusiness,
  },
];

type ProjectRowProps = {
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onToggle: () => void;
};

function ProjectRow({
  project,
  index,
  isActive,
  onActivate,
  onDeactivate,
  onToggle,
}: ProjectRowProps) {
  const shouldReduceMotion =
    useReducedMotion();

  const Icon = project.icon;

  const handlePointerEnter = (
    event: PointerEvent<HTMLElement>,
  ) => {
    if (
      event.pointerType === "mouse"
    ) {
      onActivate();
    }
  };

  const handlePointerLeave = (
    event: PointerEvent<HTMLElement>,
  ) => {
    if (
      event.pointerType === "mouse"
    ) {
      onDeactivate();
    }
  };

  return (
    <motion.article
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
        margin: "-60px",
      }}
      transition={{
        duration: shouldReduceMotion
          ? 0
          : 0.45,
        delay: shouldReduceMotion
          ? 0
          : index * 0.05,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      onPointerEnter={
        handlePointerEnter
      }
      onPointerLeave={
        handlePointerLeave
      }
      className={`group relative overflow-hidden border-b transition-colors duration-300 ${
        isActive
          ? "border-brand/35"
          : "border-border"
      }`}
    >
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-brand/[0.07] via-brand/[0.025] to-transparent md:block"
      />

      <AnimatePresence>
        {isActive &&
          !shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{
                x: "-120%",
                opacity: 0,
              }}
              animate={{
                x: "220%",
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.05,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 z-0 hidden w-32 bg-gradient-to-r from-transparent via-brand/[0.08] to-transparent md:block"
            />
          )}
      </AnimatePresence>

      {/* Mobile row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isActive}
        className="relative z-10 grid w-full grid-cols-[38px_minmax(0,1fr)_36px] gap-3 py-6 text-left md:hidden"
      >
        <span
          className={`pt-1 font-mono text-[11px] font-semibold transition-colors ${
            isActive
              ? "text-brand"
              : "text-muted-foreground"
          }`}
        >
          {project.number}
        </span>

        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </p>

          <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.025em]">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {project.summary}
          </p>
        </div>

        <motion.span
          animate={{
            rotate: isActive
              ? 180
              : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
          }}
          className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border text-muted-foreground"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      {/* Desktop row */}
      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 hidden w-full gap-5 py-7 text-left md:grid md:grid-cols-[70px_minmax(220px,0.9fr)_minmax(0,1.1fr)_auto] md:items-center lg:py-8"
      >
        <motion.div
          animate={{
            color: isActive
              ? "var(--brand)"
              : "var(--muted-foreground)",
            x: isActive ? 4 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="font-mono text-xs font-semibold"
        >
          {project.number}
        </motion.div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-muted-foreground">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
            {project.title}
          </h3>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          {project.summary}
        </p>

        <motion.div
          animate={{
            x: isActive ? 5 : 0,
            color: isActive
              ? "var(--brand)"
              : "var(--muted-foreground)",
          }}
          transition={{
            duration: 0.25,
          }}
          className="hidden h-10 w-10 items-center justify-center rounded-full border md:flex"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence
        initial={false}
      >
        {isActive && (
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration:
                shouldReduceMotion
                  ? 0
                  : 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="relative z-10 overflow-hidden"
          >
            {/* Mobile expanded content */}
            <div className="pb-7 pl-[38px] md:hidden">
              <div className="border-l border-brand/25 pl-4">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Build path
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.flow.map(
                    (
                      step,
                      stepIndex,
                    ) => (
                      <motion.span
                        key={step}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 5,
                              }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            stepIndex *
                            0.04,
                        }}
                        className="rounded-lg border bg-card/65 px-2.5 py-1.5 font-mono text-[10px]"
                      >
                        {step}
                      </motion.span>
                    ),
                  )}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech
                    .slice(0, 4)
                    .map(
                      (
                        technology,
                      ) => (
                        <span
                          key={
                            technology
                          }
                          className="text-xs text-muted-foreground"
                        >
                          {
                            technology
                          }
                        </span>
                      ),
                    )}
                </div>

                {project.href ? (
                  <Link
                    href={
                      project.href
                    }
                    target={
                      project.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      project.external
                        ? "noreferrer"
                        : undefined
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                  >
                    View project

                    {project.external ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </Link>
                ) : (
                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="h-4 w-4 text-brand" />
                    Client project
                  </div>
                )}
              </div>
            </div>

            {/* Desktop expanded content */}
            <div className="hidden gap-7 pb-8 pl-0 md:grid md:grid-cols-[70px_1fr]">
              <div />

              <div className="grid gap-8 rounded-3xl border border-brand/15 bg-background/45 p-5 backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Build path
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {project.flow.map(
                      (
                        step,
                        stepIndex,
                      ) => (
                        <div
                          key={step}
                          className="flex items-center gap-2"
                        >
                          <motion.span
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
                                shouldReduceMotion
                                  ? 0
                                  : stepIndex *
                                    0.06,
                            }}
                            className="rounded-xl border bg-card/70 px-3 py-2 font-mono text-xs"
                          >
                            {step}
                          </motion.span>

                          {stepIndex <
                            project.flow
                              .length -
                              1 && (
                            <motion.span
                              initial={
                                shouldReduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      scaleX: 0,
                                    }
                              }
                              animate={{
                                opacity: 1,
                                scaleX: 1,
                              }}
                              transition={{
                                delay:
                                  shouldReduceMotion
                                    ? 0
                                    : 0.08 +
                                      stepIndex *
                                        0.06,
                              }}
                              className="origin-left text-xs text-brand"
                            >
                              →
                            </motion.span>
                          )}
                        </div>
                      ),
                    )}
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {project.note}
                  </p>
                </div>

                <div className="flex flex-col justify-between gap-6 lg:border-l lg:pl-7">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Stack
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map(
                        (
                          technology,
                        ) => (
                          <span
                            key={
                              technology
                            }
                            className="rounded-lg border bg-card/70 px-3 py-2 font-mono text-xs text-muted-foreground"
                          >
                            {
                              technology
                            }
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex">
                    {project.href ? (
                      <Link
                        href={
                          project.href
                        }
                        target={
                          project.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          project.external
                            ? "noreferrer"
                            : undefined
                        }
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand"
                      >
                        View project

                        {project.external ? (
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        ) : (
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        )}
                      </Link>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="h-4 w-4 text-brand" />
                        Client project
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function AdditionalWorkSection() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState<number | null>(
    null,
  );

  return (
    <section
      id="more-work"
      className="relative scroll-mt-28 py-20 lg:py-32"
    >
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
          className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              More work
            </p>

            <h2 className="mt-4 text-[clamp(2.7rem,12vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Different problems.
              <br />
              Different builds.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Other projects that pushed me into client work, multiplayer systems,
            and data science.
          </p>
        </motion.div>

        <div className="border-t">
          {projects.map(
            (
              project,
              index,
            ) => (
              <ProjectRow
                key={
                  project.title
                }
                project={
                  project
                }
                index={index}
                isActive={
                  activeIndex ===
                  index
                }
                onActivate={() =>
                  setActiveIndex(
                    index,
                  )
                }
                onDeactivate={() => {
                  if (
                    activeIndex ===
                    index
                  ) {
                    setActiveIndex(
                      null,
                    );
                  }
                }}
                onToggle={() =>
                  setActiveIndex(
                    (
                      current,
                    ) =>
                      current ===
                      index
                        ? null
                        : index,
                  )
                }
              />
            ),
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
        >
          <span className="h-px flex-1 bg-border" />

          <span className="md:hidden">
            tap to explore
          </span>

          <span className="hidden md:inline">
            hover a project to open the archive
          </span>

          <span className="h-px flex-1 bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
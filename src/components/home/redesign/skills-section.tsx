"use client";

import {
  Code2,
  Database,
  Monitor,
  Wrench,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  type ComponentType,
  type PointerEvent as ReactPointerEvent,
  type SVGProps,
  useState,
} from "react";

type Skill = {
  name: string;
  projects: string[];
};

type SkillModule = {
  number: string;
  label: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  skills: Skill[];
};

const skillModules: SkillModule[] = [
  {
    number: "01",
    label: "Interface",
    title: "Frontend",
    description:
      "Interfaces that stay clear, responsive and usable as the product grows.",
    icon: Monitor,
    skills: [
      {
        name: "React",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Eligido",
          "Covey.Town",
        ],
      },
      {
        name: "Next.js",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Portfolio",
        ],
      },
      {
        name: "TypeScript",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Covey.Town",
        ],
      },
      {
        name: "JavaScript",
        projects: [
          "PolicyScope",
          "Eligido",
          "Cherries On Top",
        ],
      },
      {
        name: "Tailwind CSS",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Eligido",
        ],
      },
      {
        name: "Responsive UI",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Eligido",
        ],
      },
      {
        name: "Accessibility",
        projects: [
          "Eligido contract",
          "Portfolio",
        ],
      },
      {
        name: "Motion",
        projects: [
          "Portfolio",
          "Application Tracker",
        ],
      },
    ],
  },
  {
    number: "02",
    label: "Application logic",
    title: "Backend",
    description:
      "Server-side rules, permissions and APIs that keep product behavior predictable.",
    icon: Code2,
    skills: [
      {
        name: "Node.js",
        projects: [
          "PolicyScope",
          "Cherries On Top",
        ],
      },
      {
        name: "Express",
        projects: [
          "PolicyScope",
          "Cherries On Top",
        ],
      },
      {
        name: "REST APIs",
        projects: [
          "PolicyScope",
          "Covey.Town",
        ],
      },
      {
        name: "Server Actions",
        projects: [
          "Application Tracker",
          "OpsDesk",
        ],
      },
      {
        name: "Authentication",
        projects: [
          "OpsDesk",
          "Application Tracker",
        ],
      },
      {
        name: "Authorization",
        projects: [
          "OpsDesk",
          "Application Tracker",
        ],
      },
      {
        name: "Zod",
        projects: [
          "OpsDesk",
          "Application Tracker",
        ],
      },
      {
        name: "API Integration",
        projects: [
          "PolicyScope",
          "Application Tracker",
        ],
      },
    ],
  },
  {
    number: "03",
    label: "Storage + analytics",
    title: "Data",
    description:
      "Relational product data, analytics models and reporting pipelines.",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "CommercePulse",
        ],
      },
      {
        name: "Prisma",
        projects: [
          "OpsDesk",
          "Application Tracker",
        ],
      },
      {
        name: "SQL",
        projects: [
          "CommercePulse",
          "Application Tracker",
          "OpsDesk",
        ],
      },
      {
        name: "Python",
        projects: [
          "CommercePulse",
          "NYC Aquatics",
        ],
      },
      {
        name: "Pandas",
        projects: [
          "CommercePulse",
          "NYC Aquatics",
        ],
      },
      {
        name: "dbt",
        projects: [
          "CommercePulse",
        ],
      },
      {
        name: "Tableau",
        projects: [
          "CommercePulse",
        ],
      },
      {
        name: "Data Modeling",
        projects: [
          "CommercePulse",
          "OpsDesk",
          "Application Tracker",
        ],
      },
    ],
  },
  {
    number: "04",
    label: "Shipping",
    title: "Engineering",
    description:
      "The work around the feature: testing, debugging, validation and deployment.",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "CommercePulse",
        ],
      },
      {
        name: "GitHub",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "PolicyScope",
        ],
      },
      {
        name: "Vitest",
        projects: [
          "OpsDesk",
          "Application Tracker",
        ],
      },
      {
        name: "Jest",
        projects: [
          "Covey.Town",
        ],
      },
      {
        name: "ESLint",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Portfolio",
        ],
      },
      {
        name: "Debugging",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Covey.Town",
        ],
      },
      {
        name: "Vercel",
        projects: [
          "OpsDesk",
          "Application Tracker",
          "Portfolio",
        ],
      },
      {
        name: "AWS",
        projects: [
          "Covey.Town",
        ],
      },
    ],
  },
];

type SkillCardProps = {
  module: SkillModule;
  index: number;
};

function SkillCard({
  module,
  index,
}: SkillCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const [activeSkillIndex, setActiveSkillIndex] =
    useState(0);

  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] =
    useState(false);

  const Icon = module.icon;

  const activeSkill =
    module.skills[activeSkillIndex];

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const normalizedX =
      x / rect.width - 0.5;

    const normalizedY =
      y / rect.height - 0.5;

    setPointer({
      x,
      y,
    });

    setTilt({
      x: normalizedY * -3,
      y: normalizedX * 3,
    });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);

    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 28,
          scale: 0.98,
        }}
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
          duration: shouldReduceMotion
            ? 0
            : 0.55,
          delay: shouldReduceMotion
            ? 0
            : index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          onPointerEnter={() =>
            setIsHovered(true)
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerLeave={
            handlePointerLeave
          }
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 24,
            mass: 0.4,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative overflow-hidden rounded-[25px] p-px"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[25px]"
            style={{
              backgroundColor:
                "var(--border)",
              backgroundImage:
                isHovered
                  ? `radial-gradient(
                      230px circle at ${pointer.x}px ${pointer.y}px,
                      var(--brand) 0%,
                      transparent 72%
                    )`
                  : "none",
            }}
          />

          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{
                left: "-30%",
                opacity: 0,
              }}
              whileInView={{
                left: "115%",
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.15,
                delay:
                  0.2 + index * 0.12,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="pointer-events-none absolute top-0 z-20 h-px w-36 bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_14px_var(--cursor-glow)]"
            />
          )}

          <div className="relative min-h-[560px] overflow-hidden rounded-[24px] bg-card p-6 sm:p-8">
            <motion.div
              aria-hidden="true"
              animate={{
                opacity:
                  isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(
                  430px circle at ${pointer.x}px ${pointer.y}px,
                  var(--brand-glow) 0%,
                  transparent 60%
                )`,
              }}
            />

            <div
              aria-hidden="true"
              className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.16]"
            />

            <div
              className="relative z-10"
              style={{
                transform:
                  "translateZ(18px)",
              }}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {module.number} /{" "}
                    {module.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    {module.title}
                  </h3>
                </div>

                <motion.div
                  animate={{
                    scale:
                      isHovered
                        ? 1.08
                        : 1,
                    rotate:
                      isHovered
                        ? -4
                        : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                {module.description}
              </p>

              <div className="mt-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Explore the stack
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {module.skills.map(
                    (skill, skillIndex) => {
                      const isActive =
                        skillIndex ===
                        activeSkillIndex;

                      return (
                        <button
                          key={
                            skill.name
                          }
                          type="button"
                          aria-pressed={
                            isActive
                          }
                          onMouseEnter={() =>
                            setActiveSkillIndex(
                              skillIndex,
                            )
                          }
                          onFocus={() =>
                            setActiveSkillIndex(
                              skillIndex,
                            )
                          }
                          onClick={() =>
                            setActiveSkillIndex(
                              skillIndex,
                            )
                          }
                          className={`group/skill relative overflow-hidden rounded-xl border px-3 py-3 text-left font-mono text-xs transition duration-200 ${
                            isActive
                              ? "border-brand/40 bg-brand/10 text-foreground"
                              : "bg-background/45 text-muted-foreground hover:border-brand/25 hover:text-foreground"
                          }`}
                        >
                          <motion.span
                            animate={{
                              opacity:
                                isActive
                                  ? 1
                                  : 0,
                            }}
                            className="absolute left-0 top-0 h-full w-px bg-brand"
                          />

                          <span className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition ${
                                isActive
                                  ? "bg-brand shadow-[0_0_8px_var(--cursor-glow)]"
                                  : "bg-muted-foreground/35"
                              }`}
                            />

                            {skill.name}
                          </span>
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Proven in
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {activeSkill.name}
                    </p>
                  </div>

                  <motion.div
                    key={
                      activeSkill.name
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand/25 bg-brand/10"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_var(--cursor-glow)]" />
                  </motion.div>
                </div>

                <AnimatePresence
                  mode="wait"
                >
                  <motion.div
                    key={
                      activeSkill.name
                    }
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 8,
                            filter:
                              "blur(3px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter:
                        "blur(0px)",
                    }}
                    exit={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -6,
                            filter:
                              "blur(3px)",
                          }
                    }
                    transition={{
                      duration:
                        shouldReduceMotion
                          ? 0
                          : 0.22,
                    }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {activeSkill.projects.map(
                      (
                        project,
                        projectIndex,
                      ) => (
                        <motion.span
                          key={project}
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                  x: -6,
                                }
                          }
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              shouldReduceMotion
                                ? 0
                                : projectIndex *
                                  0.045,
                          }}
                          className="rounded-full border bg-background/55 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {project}
                        </motion.span>
                      ),
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                animate={{
                  opacity:
                    isHovered
                      ? 1
                      : 0.45,
                }}
                className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
              >
                <span className="h-px flex-1 bg-border" />

                move cursor to inspect

                <span className="h-px flex-1 bg-border" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 py-24 lg:py-32"
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
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Technical stack
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Built with tools I actually use.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Hover through the stack to see
            where each skill shows up in
            real work.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {skillModules.map(
            (module, index) => (
              <SkillCard
                key={module.title}
                module={module}
                index={index}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
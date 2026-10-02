"use client";

import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import {
  type ComponentType,
  type SVGProps,
  useRef,
} from "react";

import { ThinkingShimmerText } from "@/components/home/redesign/thinking-shimmer-text";

type JourneyMilestone = {
  period: string;
  eyebrow: string;
  title: string;
  description: string;
  skills: string[];
  icon: ComponentType<
    SVGProps<SVGSVGElement>
  >;
  returnEngagement?: boolean;
};

const milestones: JourneyMilestone[] = [
  {
    period: "Summer 2023",
    eyebrow:
      "First industry experience",
    title: "Mendham Township",
    description:
      "Worked as a Website & Forms Intern on real municipal systems. I redesigned CivicPlus pages, built forms, worked with analytics and documented workflows for staff.",
    skills: [
      "CivicPlus",
      "Forms",
      "Analytics",
    ],
    icon: BriefcaseBusiness,
  },
  {
    period: "Summer 2025",
    eyebrow: "Frontend internship",
    title: "Eligido",
    description:
      "Joined Eligido as a frontend intern and built its public-facing React landing page. I turned complex startup material into a responsive site that was easier for users and stakeholders to understand.",
    skills: [
      "React",
      "Responsive UI",
      "Product Messaging",
    ],
    icon: Code2,
  },
  {
    period: "May 2026",
    eyebrow: "Education + capstone",
    title: "Graduated from NJIT",
    description:
      "Finished my B.S. in Computer Science. PolicyScope placed 3rd overall in the senior capstone showcase, where I focused on clause detection and backend functionality.",
    skills: [
      "Computer Science",
      "PolicyScope",
      "3rd Overall",
    ],
    icon: GraduationCap,
  },
  {
    period: "August 2026",
    eyebrow: "Returned as a contractor",
    title: "Back at Eligido",
    description:
      "After my internship, Eligido brought me back as a paid Frontend & Trust Layer Engineer. My work expanded into frontend architecture, interaction flows, accessibility and the Stage 1 product experience.",
    skills: [
      "Frontend Architecture",
      "Trust Layer",
      "Accessibility",
    ],
    icon: RefreshCw,
    returnEngagement: true,
  },
  {
    period: "August 2026",
    eyebrow:
      "Independent product build",
    title: "Application Tracker",
    description:
      "Built a multi-user job search app with authentication, relational data, interviews, follow-ups and job-post imports. It became a product I could use during my own job search.",
    skills: [
      "Next.js",
      "PostgreSQL",
      "Clerk",
    ],
    icon: Database,
  },
  {
    period: "Aug – Sep 2026",
    eyebrow: "Systems",
    title: "OpsDesk",
    description:
      "Pushed deeper into backend architecture with multi-tenant workspaces, server-side RBAC, incident escalation and SLA logic. System boundaries became a bigger part of how I designed software.",
    skills: [
      "Multi-tenant",
      "RBAC",
      "SLA Logic",
    ],
    icon: ShieldCheck,
  },
  {
    period: "September 2026",
    eyebrow: "Data",
    title: "CommercePulse",
    description:
      "Built an analytics pipeline from raw CSV files to PostgreSQL, dbt models, SQL analysis and Tableau dashboards. It brought the same end-to-end mindset into data engineering.",
    skills: [
      "Python",
      "dbt",
      "Tableau",
    ],
    icon: BarChart3,
  },
];

type MilestoneProps = {
  milestone: JourneyMilestone;
  index: number;
};

function Milestone({
  milestone,
  index,
}: MilestoneProps) {
  const itemRef =
    useRef<HTMLDivElement>(null);

  const isActive = useInView(itemRef, {
    margin: "-38% 0px -38% 0px",
  });

  const shouldReduceMotion =
    useReducedMotion();

  const isLeft = index % 2 === 0;

  const Icon = milestone.icon;

  return (
    <div
      ref={itemRef}
      className="relative grid grid-cols-[42px_minmax(0,1fr)] items-center py-7 lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] lg:py-10"
    >
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                x: isLeft
                  ? -32
                  : 32,
                y: 12,
              }
        }
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration:
            shouldReduceMotion
              ? 0
              : 0.5,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className={`col-start-2 row-start-1 ${
          isLeft
            ? "lg:col-start-1"
            : "lg:col-start-3"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-3xl border bg-card/75 p-6 backdrop-blur-xl transition duration-500 sm:p-7 ${
            isActive
              ? "border-brand/30 shadow-xl shadow-brand/5"
              : "shadow-lg shadow-black/[0.03] dark:shadow-black/10"
          }`}
        >
          <motion.div
            animate={{
              opacity:
                isActive ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/10 blur-3xl"
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs font-semibold text-brand">
                    {milestone.period}
                  </p>

                  {milestone.returnEngagement && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: 0.2,
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Return engagement
                    </motion.span>
                  )}
                </div>

                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {
                    milestone.eyebrow
                  }
                </p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition duration-500 ${
                  isActive
                    ? "bg-brand text-brand-foreground"
                    : "bg-brand/10 text-brand"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
              {milestone.title}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {
                milestone.description
              }
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
              {milestone.skills.map(
                (
                  skill,
                  skillIndex,
                ) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <span>
                      {skill}
                    </span>

                    {skillIndex <
                      milestone.skills
                        .length -
                        1 && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-brand/50"
                      />
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-20 col-start-1 row-start-1 flex h-full items-center justify-center lg:col-start-2">
        <motion.div
          animate={{
            scale:
              isActive ? 1.14 : 1,
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
          className="relative flex h-8 w-8 items-center justify-center"
        >
          {isActive &&
            !shouldReduceMotion && (
              <motion.span
                initial={{
                  opacity: 0.4,
                  scale: 1,
                }}
                animate={{
                  opacity: [
                    0.4,
                    0,
                    0.4,
                  ],
                  scale: [
                    1,
                    1.8,
                    1,
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-5 w-5 rounded-full bg-brand/30"
              />
            )}

          <motion.span
            animate={{
              backgroundColor:
                isActive
                  ? "var(--brand)"
                  : "var(--background)",
              borderColor:
                isActive
                  ? "var(--brand)"
                  : "var(--border)",
              boxShadow:
                isActive
                  ? "0 0 0 5px var(--brand-glow)"
                  : "0 0 0 0 transparent",
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative h-4 w-4 rounded-full border-2"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function JourneySection() {
  const timelineRef =
    useRef<HTMLDivElement>(null);

  const shouldReduceMotion =
    useReducedMotion();

  const { scrollYProgress } =
    useScroll({
      target: timelineRef,
      offset: [
        "start 68%",
        "end 62%",
      ],
    });

  const progress = useSpring(
    scrollYProgress,
    {
      stiffness: 90,
      damping: 24,
      mass: 0.35,
    },
  );

  return (
    <section
      id="journey"
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
            Journey
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            From first opportunity to trusted ownership.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Each step gave me more
            responsibility. I went from
            building pages to owning
            product flows, system logic
            and data.
          </p>
        </motion.div>

        <div
          ref={timelineRef}
          className="relative mx-auto max-w-[1250px]"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-[20px] top-7 w-px -translate-x-1/2 bg-border lg:left-1/2"
          />

          <motion.div
            aria-hidden="true"
            style={{
              scaleY:
                shouldReduceMotion
                  ? 1
                  : progress,
            }}
            className="absolute bottom-7 left-[20px] top-7 w-px origin-top -translate-x-1/2 bg-brand shadow-[0_0_14px_var(--brand-glow)] lg:left-1/2"
          />

          {milestones.map(
            (
              milestone,
              index,
            ) => (
              <Milestone
                key={`${milestone.period}-${milestone.title}`}
                milestone={
                  milestone
                }
                index={index}
              />
            ),
          )}

          <div className="relative grid grid-cols-[42px_minmax(0,1fr)] pt-4 lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]">
            <div className="relative z-20 col-start-1 flex justify-center lg:col-start-2">
              <div className="relative flex h-8 w-8 items-center justify-center">
                {!shouldReduceMotion && (
                  <motion.span
                    animate={{
                      opacity: [
                        0.4,
                        0,
                        0.4,
                      ],
                      scale: [
                        1,
                        1.9,
                        1,
                      ],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat:
                        Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-5 w-5 rounded-full bg-brand/30"
                  />
                )}

                <span className="relative h-4 w-4 rounded-full border-2 border-brand bg-brand shadow-[0_0_0_5px_var(--brand-glow)]" />
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="col-start-2 row-start-1 self-center lg:col-start-3"
            >
              <p className="font-mono text-xs font-semibold text-brand">
                <ThinkingShimmerText
                  delay={0.6}
                  repeatDelay={5.8}
                >
                  NOW
                </ThinkingShimmerText>
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Still building.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
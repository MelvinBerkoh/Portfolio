"use client";

import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

const principles = [
  {
    number: "01",
    title: "Ownership",
    description:
      "I like understanding the feature end to end. That means knowing what the UI does, what happens on the server, and what data changes underneath it.",
    signal: "end → end",
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "I would rather build something another engineer can understand than make a simple problem look complicated.",
    signal: "simple > clever",
  },
  {
    number: "03",
    title: "Real use",
    description:
      "The projects I enjoy most solve an actual problem. Real workflows, real constraints, and a reason for the software to exist.",
    signal: "build → ship",
  },
];

const outsideProjects = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.S. Computer Science",
    detail: "New Jersey Institute of Technology",
  },
  {
    icon: Code2,
    label: "Campus",
    value: "NJIT Men’s Lacrosse",
    detail: "Worked around a team environment while in school",
  },
  {
    icon: BriefcaseBusiness,
    label: "Professional",
    value: "Client + startup work",
    detail: "Freelance projects and work with Eligido",
  },
];

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-28 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
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
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              About
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              I like understanding how the whole thing works.
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                I started with websites. Over time I became more
                interested in everything happening behind them.
              </p>

              <p>
                Now I like working across the interface, server,
                database, testing, and deployment. I do not need to
                own every layer on every project, but I want to
                understand how they connect.
              </p>

              <p>
                That mindset is what pushed me from frontend work
                into full-stack products, backend systems, and data.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-px w-8 bg-brand" />

              New Jersey · Software Engineer
            </div>
          </motion.div>

          <div>
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
                margin: "-80px",
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
              }}
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                How I work
              </p>

              <div className="mt-5">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.number}
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
                      margin: "-80px",
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            x: 6,
                          }
                    }
                    className="group relative overflow-hidden border-t py-8 last:border-b sm:py-10"
                  >
                    <motion.div
                      aria-hidden="true"
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                        delay: shouldReduceMotion
                          ? 0
                          : 0.1 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-0 h-px w-20 origin-left bg-brand"
                    />

                    <div className="grid gap-5 sm:grid-cols-[70px_1fr_auto] sm:items-start">
                      <div className="font-mono text-xs font-semibold text-brand">
                        {principle.number}
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                          {principle.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {principle.description}
                        </p>
                      </div>

                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: [0.45, 1, 0.45],
                              }
                        }
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.35,
                          ease: "easeInOut",
                        }}
                        className="hidden rounded-full border bg-background/60 px-3 py-1.5 font-mono text-[10px] text-muted-foreground sm:block"
                      >
                        {principle.signal}
                      </motion.div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-brand/[0.04] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                margin: "-80px",
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
              }}
              className="mt-14"
            >
              <div className="flex items-center gap-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Outside the projects
                </p>

                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {outsideProjects.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 14,
                              scale: 0.98,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: shouldReduceMotion
                          ? 0
                          : index * 0.08,
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -4,
                            }
                      }
                      className="group rounded-2xl border bg-card/60 p-5 backdrop-blur-sm transition hover:border-brand/25"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                        <Icon className="h-4 w-4" />
                      </div>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

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
                duration: 0.5,
                delay: 0.15,
              }}
              className="mt-12 rounded-3xl border border-brand/15 bg-brand/[0.045] p-6 sm:p-7"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                The goal
              </p>

              <p className="mt-4 max-w-2xl text-lg font-medium leading-8 tracking-[-0.015em]">
                Keep getting better at taking a problem, understanding
                the system around it, and shipping something useful.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
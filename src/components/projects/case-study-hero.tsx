"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  type PointerEvent as ReactPointerEvent,
  useState,
} from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { getCaseStudyPresentation } from "@/data/case-study-presentation";
import type { Project } from "@/data/projects";

type CaseStudyHeroProps = {
  project: Project;
  projectNumber: string;
  status: string;
};

function AnimatedEngineeringVisual() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-background">
      <div className="portfolio-grid absolute inset-0 opacity-40" />

      <motion.div
        animate={{
          scale: [
            1,
            1.08,
            1,
          ],
          opacity: [
            0.35,
            0.7,
            0.35,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[230px] w-[280px]">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-brand/20"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-10 right-10 top-10 bottom-10 rounded-full border border-brand/20"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                y: [
                  0,
                  -5,
                  0,
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-2xl border bg-card/90 px-6 py-5 text-center shadow-xl backdrop-blur"
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand">
                Frontend System
              </p>

              <p className="mt-2 text-lg font-semibold">
                Product → Interface
              </p>

              <p className="mt-2 text-xs text-muted-foreground">
                React · Responsive UI
              </p>
            </motion.div>
          </div>

          {[
            {
              label: "Content",
              top: "8%",
              left: "2%",
            },
            {
              label: "React",
              top: "16%",
              right: "0%",
            },
            {
              label: "UX",
              bottom: "12%",
              left: "5%",
            },
            {
              label: "Responsive",
              bottom: "4%",
              right: "2%",
            },
          ].map((node, index) => (
            <motion.div
              key={node.label}
              animate={{
                y: [
                  0,
                  index % 2 === 0
                    ? -5
                    : 5,
                  0,
                ],
              }}
              transition={{
                duration:
                  2.6 +
                  index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-full border bg-background/90 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground shadow-sm backdrop-blur"
              style={node}
            >
              {node.label}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          y: [
            "-10%",
            "110%",
          ],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-60"
      />
    </div>
  );
}

export function CaseStudyHero({
  project,
  projectNumber,
  status,
}: CaseStudyHeroProps) {
  const shouldReduceMotion =
    useReducedMotion();

  const presentation =
    getCaseStudyPresentation(
      project.slug,
    );

  const isEligido =
    project.slug ===
    "eligido-landing-page";

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] =
    useState(false);

  const previewImage =
    isEligido
      ? undefined
      : project.thumbnail ??
        project.screenshots?.[0]?.src;

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    if (
      shouldReduceMotion ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    setTilt({
      x:
        (y / rect.height - 0.5) *
        -3,
      y:
        (x / rect.width - 0.5) *
        3,
    });
  };

  const resetPreview = () => {
    setIsHovered(false);

    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <>
      <motion.header
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: -12,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 md:px-10 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Portfolio
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
              Case Study
            </span>

            <span className="h-1 w-1 rounded-full bg-border" />

            <span className="text-xs text-muted-foreground">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden rounded-full border bg-card px-4 py-2 text-xs font-medium transition hover:border-brand/40 sm:inline-flex"
            >
              Contact
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </motion.header>

      <section className="relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={{
            x: [
              -30,
              30,
              -30,
            ],
            y: [
              0,
              20,
              0,
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-brand/[0.08] blur-[120px]"
        />

        <motion.div
          aria-hidden="true"
          animate={{
            x: [
              20,
              -20,
              20,
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-12rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-brand/[0.045] blur-[120px]"
        />

        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-16 md:px-10 md:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
              {projectNumber} / Case Study
            </span>

            <motion.span
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-px w-10 origin-left bg-brand/50"
            />

            <span className="text-xs text-muted-foreground">
              {project.category}
            </span>
          </motion.div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.55fr] lg:items-end lg:gap-20">
            <div>
              <motion.h1
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 16,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.12,
                  duration: 0.5,
                }}
                className="mt-8 max-w-[720px] text-lg leading-8 text-muted-foreground sm:text-xl lg:text-2xl lg:leading-9"
              >
                {presentation.heroLine}
              </motion.p>

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {project.links.map(
                  (link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                        link.type ===
                        "demo"
                          ? "sword-shine bg-brand text-brand-foreground shadow-lg shadow-brand/15"
                          : "border bg-card/70 hover:border-brand/40"
                      }`}
                    >
                      {link.label}

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  ),
                )}
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.6,
                }}
                className="mt-12 flex items-center gap-3 text-xs text-muted-foreground"
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [
                            0,
                            5,
                            0,
                          ],
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown className="h-4 w-4 text-brand" />
                </motion.div>

                Scroll through the build
              </motion.div>
            </div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 30,
                      scale: 0.97,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.18,
                duration: 0.65,
              }}
              style={{
                perspective:
                  "1200px",
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
                  resetPreview
                }
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  y:
                    isHovered &&
                    !shouldReduceMotion
                      ? -5
                      : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 25,
                }}
                className="overflow-hidden rounded-[22px] border bg-card/70 shadow-xl backdrop-blur"
              >
                <div className="flex items-center justify-between border-b px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                    {isEligido
                      ? "system"
                      : "preview"}
                  </span>
                </div>

                {isEligido ? (
                  <AnimatedEngineeringVisual />
                ) : previewImage ? (
                  <div className="relative aspect-[16/10] bg-muted">
                    <Image
                      src={previewImage}
                      alt={`${project.title} preview`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-top"
                    />

                    {!shouldReduceMotion && (
                      <motion.div
                        aria-hidden="true"
                        animate={{
                          y: [
                            "-10%",
                            "110%",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-60"
                      />
                    )}
                  </div>
                ) : (
                  <AnimatedEngineeringVisual />
                )}

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs font-medium">
                    {status}
                  </span>

                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: [
                              0.3,
                              1,
                              0.3,
                            ],
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_var(--cursor-glow)]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  type PointerEvent as ReactPointerEvent,
  useState,
} from "react";

import { ThinkingShimmerText } from "@/components/home/redesign/thinking-shimmer-text";
import { siteConfig } from "@/data/site";

const contactLinks = [
  {
    label: "GitHub",
    detail: "See the code",
    href: siteConfig.github,
    icon: Code2,
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: siteConfig.linkedin,
    icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: "Resume",
    detail: "Software Engineer · PDF",
    href: siteConfig.resume,
    icon: FileText,
    external: true,
  },
];

const clamp = (
  value: number,
  minimum: number,
  maximum: number,
) =>
  Math.min(
    Math.max(value, minimum),
    maximum,
  );

export function ContactSection() {
  const shouldReduceMotion =
    useReducedMotion();

  const [magnet, setMagnet] =
    useState({
      x: 0,
      y: 0,
    });

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLAnchorElement>,
  ) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    setMagnet({
      x: clamp(
        (event.clientX -
          centerX) *
          0.12,
        -12,
        12,
      ),
      y: clamp(
        (event.clientY -
          centerY) *
          0.12,
        -8,
        8,
      ),
    });
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="portfolio-grid absolute inset-0 opacity-[0.22]" />

        <div className="absolute left-1/2 top-[45%] h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.055] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1250px]">
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
              duration:
                shouldReduceMotion
                  ? 0
                  : 0.5,
            }}
          >
            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Contact
              </p>

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
                  duration:
                    shouldReduceMotion
                      ? 0
                      : 0.8,
                  delay: 0.12,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="h-px flex-1 origin-left bg-border"
              />
            </div>
          </motion.div>

          <div className="relative mt-12 overflow-visible pb-4">
            <motion.h2
              initial={{
                opacity: 0,
                y: 32,
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
                duration:
                  shouldReduceMotion
                    ? 0
                    : 0.65,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="max-w-[1150px] text-[clamp(3.8rem,9vw,9rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
            >
              Got something
              <br />
              worth{" "}
              <ThinkingShimmerText
                className="text-gradient -mb-[0.06em] -mr-[0.08em] pb-[0.06em] pr-[0.08em]"
                delay={0.7}
                repeatDelay={3.3}
              >
                building?
              </ThinkingShimmerText>
            </motion.h2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.p
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
                duration:
                  shouldReduceMotion
                    ? 0
                    : 0.45,
                delay: 0.15,
              }}
              className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              I&apos;m interested in
              software work where I can
              solve real problems, own
              meaningful parts of the
              product, and keep growing
              as an engineer.
            </motion.p>

            <motion.a
              href={`mailto:${siteConfig.email}`}
              onPointerMove={
                handlePointerMove
              }
              onPointerLeave={() => {
                setMagnet({
                  x: 0,
                  y: 0,
                });
              }}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              animate={{
                x: magnet.x,
                y: magnet.y,
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                },
                scale: {
                  duration: 0.4,
                },
                x: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
                y: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              className="sword-shine group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground shadow-xl shadow-brand/15"
            >
              Email me

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <motion.a
            href={`mailto:${siteConfig.email}`}
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
              duration:
                shouldReduceMotion
                  ? 0
                  : 0.5,
              delay: 0.22,
            }}
            className="group relative mt-16 block overflow-hidden border-y py-8 sm:py-10"
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
                duration:
                  shouldReduceMotion
                    ? 0
                    : 1,
                delay: 0.3,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
            />

            {!shouldReduceMotion && (
              <motion.div
                aria-hidden="true"
                animate={{
                  x: [
                    "-10%",
                    "105%",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="absolute bottom-0 left-0 h-px w-28 bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_12px_var(--cursor-glow)]"
              />
            )}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-muted-foreground">
                  Direct line
                </p>

                <p className="mt-3 break-all text-xl font-semibold tracking-[-0.02em] sm:text-2xl lg:text-3xl">
                  {siteConfig.email}
                </p>
              </div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: 6,
                      }
                }
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-card text-brand transition group-hover:border-brand/40"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.a>

          <div className="mt-12 grid border-y sm:grid-cols-3">
            {contactLinks.map(
              (item, index) => {
                const Icon =
                  item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration:
                        shouldReduceMotion
                          ? 0
                          : 0.4,
                      delay:
                        shouldReduceMotion
                          ? 0
                          : index *
                            0.07,
                    }}
                    className="border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <Link
                      href={
                        item.href
                      }
                      target={
                        item.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.external
                          ? "noreferrer"
                          : undefined
                      }
                      className="group relative flex min-h-[150px] items-center justify-between overflow-hidden px-5 py-7 sm:px-7"
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
                          duration: 0.3,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="absolute bottom-0 left-0 h-px w-full origin-left bg-brand"
                      />

                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                            <Icon className="h-4 w-4" />
                          </div>

                          <p className="font-semibold">
                            {
                              item.label
                            }
                          </p>
                        </div>

                        <p className="mt-4 text-xs text-muted-foreground">
                          {
                            item.detail
                          }
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
                    </Link>
                  </motion.div>
                );
              },
            )}
          </div>

          <motion.footer
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
              duration: 0.45,
            }}
            className="mt-20 flex flex-col gap-5 border-t pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-semibold text-foreground">
                Melvin Berkoh
              </p>

              <p className="mt-1">
                Software Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.13em]">
              <span>
                New Jersey
              </span>

              <span className="h-1 w-1 rounded-full bg-brand" />

              <span>
                Built with Next.js
              </span>
            </div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { motion } from "motion/react";

import { ProjectConsole } from "@/components/home/redesign/project-console";
import { ThinkingShimmerText } from "@/components/home/redesign/thinking-shimmer-text";

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "Tenant boundaries",
    description:
      "Workspace-owned data is scoped on the server.",
  },
  {
    icon: Code2,
    title: "Authorization",
    description:
      "Authentication identifies the user. OpsDesk decides what they can do.",
  },
  {
    icon: Timer,
    title: "Workflow logic",
    description:
      "Tickets can become incidents with stored SLA deadlines.",
  },
];

const consoleLines = [
  {
    command: "project",
    output: "OpsDesk",
  },
  {
    command: "purpose",
    output:
      "Support and incident management for engineering teams.",
  },
  {
    command: "architecture",
    output:
      "workspace → RBAC → services → tickets → incidents → SLA",
  },
  {
    command: "stack",
    output:
      "Next.js / TypeScript / Prisma / PostgreSQL / Clerk",
  },
  {
    command: "status",
    output: "live in production",
  },
];

const systemSteps = [
  {
    label: "Auth",
    detail:
      "Clerk identifies the signed-in user.",
  },
  {
    label: "Access",
    detail:
      "Server-side RBAC checks workspace permissions.",
  },
  {
    label: "Data",
    detail:
      "Prisma queries stay scoped to the workspace.",
  },
  {
    label: "Workflow",
    detail:
      "Tickets move into incidents and SLA tracking.",
  },
];

export function OpsDeskShowcase() {
  return (
    <section
      id="projects"
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
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Selected builds
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Products I took past the idea stage.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            These projects go past the UI. I worked on the
            backend, database and deployment too.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] xl:gap-16">
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
                01 / Flagship build
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [
                        0.35,
                        0,
                        0.35,
                      ],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-2 w-2 rounded-full bg-emerald-500"
                  />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>

                Live
              </span>
            </div>

            <h3 className="mt-6 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
              <ThinkingShimmerText
                delay={0.4}
                repeatDelay={5}
              >
                OpsDesk
              </ThinkingShimmerText>
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Support and incident management built around real
              multi-user workflows.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              OpsDesk handles services, tickets and incidents
              inside multi-tenant workspaces. Permissions are
              enforced on the server. SLA deadlines are stored
              with the work they belong to.
            </p>

            <div className="mt-9 space-y-5">
              {proofPoints.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                      transition={{
                        duration: 0.35,
                        delay:
                          index * 0.08,
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
                          {
                            item.description
                          }
                        </p>
                      </div>
                    </motion.div>
                  );
                },
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://opsdesk-three.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5"
              >
                Live app

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/projects/opsdesk"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Case study

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/MelvinBerkoh/opsdesk"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <Code2 className="h-4 w-4 transition-transform group-hover:-rotate-6 group-hover:scale-110" />

                GitHub
              </Link>
            </div>
          </motion.div>

          <ProjectConsole
            terminalPath="opsdesk"
            liveUrl="https://opsdesk-three.vercel.app/"
            lines={consoleLines}
            systemSteps={systemSteps}
          />
        </div>
      </div>
    </section>
  );
}
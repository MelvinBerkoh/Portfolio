"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Code2,
  FileSearch,
  History,
} from "lucide-react";
import { motion } from "motion/react";

import { ProjectConsole } from "@/components/home/redesign/project-console";

const proofPoints = [
  {
    icon: History,
    title: "User-owned records",
    description:
      "Application data stays scoped to the signed-in user.",
  },
  {
    icon: CalendarDays,
    title: "Hiring workflow",
    description:
      "Applications connect to interviews and follow-ups.",
  },
  {
    icon: FileSearch,
    title: "Job post import",
    description:
      "URLs are checked before remote content is fetched and parsed.",
  },
];

const consoleLines = [
  {
    command: "project",
    output: "Application Tracker",
  },
  {
    command: "purpose",
    output: "Keep a job search in one system.",
  },
  {
    command: "workflow",
    output:
      "application → interview → follow-up → activity history",
  },
  {
    command: "import",
    output:
      "URL → validate → fetch → parse → review",
  },
  {
    command: "status",
    output: "live in production",
  },
];

const systemSteps = [
  {
    label: "Auth",
    detail: "Clerk identifies the signed-in user.",
  },
  {
    label: "Ownership",
    detail:
      "Server logic scopes records to that user.",
  },
  {
    label: "Data",
    detail:
      "Prisma stores applications and history.",
  },
  {
    label: "Import",
    detail:
      "Remote job posts are checked before parsing.",
  },
];

export function ApplicationTrackerShowcase() {
  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.22fr_0.78fr] xl:gap-16">
          <div className="order-2 lg:order-1">
            <ProjectConsole
              terminalPath="application-tracker"
              liveUrl="https://application-tracker-teal-pi.vercel.app/"
              lines={consoleLines}
              systemSteps={systemSteps}
            />
          </div>

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
            className="order-1 lg:order-2"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                02 / Flagship build
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.35, 0, 0.35],
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
              Application Tracker
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              A full-stack app for keeping a job search in one
              place.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Applications connect to interviews and follow-ups.
              Activity history keeps track of what changed. Job
              post URLs can also be imported before an
              application is saved.
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
                href="https://application-tracker-teal-pi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5"
              >
                Live app

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/projects/application-tracker"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Case study

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://github.com/MelvinBerkoh/application-tracker"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
              >
                <Code2 className="h-4 w-4 transition-transform group-hover:-rotate-6 group-hover:scale-110" />

                GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
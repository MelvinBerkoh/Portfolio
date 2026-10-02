"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  Monitor,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

import { RotatingWord } from "@/components/home/redesign/rotating-word";
import { siteConfig } from "@/data/site";

const heroItems = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const focusItems = [
  {
    icon: Code2,
    title: "Full-stack products",
    description: "Frontend, APIs, auth, and application logic.",
  },
  {
    icon: Monitor,
    title: "Frontend systems",
    description: "React, TypeScript, responsive UI, and accessibility.",
  },
  {
    icon: Database,
    title: "Backend & data",
    description: "Node.js, PostgreSQL, Prisma, Python, and SQL.",
  },
  {
    icon: Wrench,
    title: "Product ownership",
    description: "Build, debug, test, document, and ship.",
  },
];

export function HeroSection() {
  return (
    <section id="top" className="relative scroll-mt-28">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-[1500px] items-center gap-16 px-6 py-16 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(430px,0.85fr)] lg:px-12 lg:py-20 xl:gap-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.09 }}
          className="max-w-[780px]"
        >
          <motion.div
            variants={heroItems}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <span className="inline-flex rounded-full border bg-background/70 px-3 py-1.5 text-xs font-medium backdrop-blur">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={heroItems}
            transition={{ duration: 0.5 }}
            className="max-w-5xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[0.98]"
          >
            I build software from idea to{" "}
            <RotatingWord />
          </motion.h1>

          <motion.p
            variants={heroItems}
            transition={{ duration: 0.5 }}
            className="mt-8 max-w-[680px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            I&apos;m Melvin Berkoh, a software engineer focused on full-stack
            products and frontend systems. I also work across backend logic,
            databases, testing, and deployment.
          </motion.p>

          <motion.div
            variants={heroItems}
            transition={{ duration: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5"
            >
              See what I built
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>

            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border bg-background/70 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-secondary"
            >
              Resume
            </Link>
          </motion.div>

          <motion.div
            variants={heroItems}
            transition={{ duration: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground"
          >
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </Link>

            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </Link>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="relative w-full"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl" />

          <div className="rounded-3xl border bg-card/75 p-6 shadow-2xl shadow-black/5 backdrop-blur-xl dark:shadow-black/20 lg:p-7">
            <div>
              <p className="text-base font-semibold">Engineering focus</p>

              <p className="mt-1 text-sm text-muted-foreground">
                The areas I spend most of my time working in.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {focusItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.42 + index * 0.08,
                    }}
                    className="group min-h-[160px] rounded-2xl border bg-background/55 p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:bg-background/80"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-4 w-4" />
                    </div>

                    <p className="mt-6 font-semibold">{item.title}</p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border bg-secondary/50 p-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                How I work
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6">
                I like owning features end to end. I want to understand what is
                happening across the UI, backend, database, and deployment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
}
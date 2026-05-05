"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";

import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Python",
  "SQL",
  "Chrome Extensions",
  "REST APIs",
  "GitHub",
];

const workHabits = [
  {
    title: "Team Collaboration",
    description:
      "Worked on team projects where features had to fit into shared codebases, existing architecture, and group deadlines.",
  },
  {
    title: "Clear Communication",
    description:
      "Presented technical work through demos, case studies, documentation, and project walkthroughs.",
  },
  {
    title: "Debugging Mindset",
    description:
      "Comfortable tracing issues across UI state, API calls, browser behavior, local setup, and project configuration.",
  },
  {
    title: "Ownership",
    description:
      "I care about taking a feature from rough idea to working implementation, then improving the details through testing and feedback.",
  },
];

const stats = [
  {
    value: "3rd",
    label: "Place Capstone Project",
  },
  {
    value: "3",
    label: "Featured Case Studies",
  },
  {
    value: "NJIT",
    label: "Computer Science",
  },
];

export function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-120px] top-48 h-[360px] w-[360px] rounded-full bg-muted-foreground/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-120px] h-[360px] w-[360px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            Melvin Berkoh
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="#projects"
              className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
            >
              Skills
            </Link>
            <Link
              href="#work"
              className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
            >
              How I Work
            </Link>
            <Link
              href="#contact"
              className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.25fr_0.75fr] md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-7"
        >
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="w-fit">
              Software Engineer • NJIT Computer Science
            </Badge>
            <Badge variant="outline" className="w-fit">
              Open to Frontend / Full-Stack Roles
            </Badge>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              I build practical software that{" "}
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                solves real problems.
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              I&apos;m Melvin Berkoh, a Computer Science student at NJIT focused
              on frontend, full-stack, and web development. My work includes AI
              tools, Chrome extensions, multiplayer game features, and
              data-driven applications.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.resume} target="_blank">
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link
              href={siteConfig.github}
              target="_blank"
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </Link>

            <Link
              href={siteConfig.linkedin}
              target="_blank"
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
              {siteConfig.email}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="space-y-5"
        >
          <Card className="border-border/70 bg-card/80 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle>Current Focus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 text-foreground" />
                <div>
                  <p className="font-medium text-foreground">
                    B.S. Computer Science
                  </p>
                  <p>New Jersey Institute of Technology</p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-foreground" />
                <div>
                  <p className="font-medium text-foreground">
                    Based in New Jersey
                  </p>
                  <p>Open to software engineering and web development roles.</p>
                </div>
              </div>

              <div className="rounded-xl border bg-muted/60 p-4">
                <p className="font-medium text-foreground">
                  Strongest project:
                </p>
                <p>
                  PolicyScope, an AI-assisted Chrome extension that placed 3rd
                  overall in a capstone showcase.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-card/80 backdrop-blur">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-16 select-none"
      >
        <div className="mb-8 max-w-2xl space-y-3">
          <Badge variant="outline">Featured Work</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            These projects show practical software engineering experience across
            frontend development, full-stack integration, browser extensions, AI
            tooling, multiplayer systems, and machine learning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => {
            const previewImage = project.screenshots?.[0]?.src;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden border-b bg-muted">
                    {previewImage ? (
                      <Image
                        src={previewImage}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-muted to-background" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </div>

                  <CardHeader className="space-y-3">
                    <Badge variant="secondary" className="w-fit">
                      {project.category}
                    </Badge>

                    <CardTitle className="leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col gap-5">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {project.summary}
                    </p>

                    <p className="text-sm font-medium">{project.impact}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-auto group/button"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Case Study
                        <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <Badge variant="outline">Technical Skills</Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Tools I build with
          </h2>
          <p className="text-muted-foreground">
            My strongest experience is in modern web development, practical
            frontend systems, browser tooling, and full-stack project work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.025 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 max-w-3xl space-y-3">
          <Badge variant="outline">How I Work</Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            I focus on building clearly, communicating well, and improving
            through feedback.
          </h2>
          <p className="text-muted-foreground">
            My strongest projects involved working in teams, debugging real
            integration issues, and explaining technical decisions clearly enough
            for both developers and non-technical audiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {workHabits.map((habit, index) => (
            <motion.div
              key={habit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="space-y-3 p-6">
                  <h3 className="font-semibold">{habit.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {habit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
            <div className="space-y-3">
              <Badge variant="outline">About</Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                I like building things that people can actually use.
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a Computer Science student at NJIT with experience
                building websites, Chrome extensions, AI-assisted tools,
                full-stack applications, and data analysis projects.
              </p>
              <p>
                My background includes freelance web development, township web
                and forms work, and team-based software projects where I worked
                across UI, logic, debugging, documentation, and deployment.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border bg-muted/40 p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            I&apos;m currently looking for software engineering, frontend,
            full-stack, and web development opportunities.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`mailto:${siteConfig.email}`}>Email Me</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={siteConfig.linkedin} target="_blank">
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
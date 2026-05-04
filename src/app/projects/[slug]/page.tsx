import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {children}
      </CardContent>
    </Card>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="leading-7">
          <span className="mr-2 text-foreground">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          ← Back Home
        </Link>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline">
            <Link href="/#contact">Contact</Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-12 max-w-4xl space-y-5">
          <Badge variant="secondary">{project.category}</Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>

          <p className="text-base font-medium">{project.impact}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionCard title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Project Highlights">
            <BulletList items={project.highlights} />
          </SectionCard>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <SectionCard title="Problem">
            <p className="leading-7 text-muted-foreground">{project.problem}</p>
          </SectionCard>

          <SectionCard title="Solution">
            <p className="leading-7 text-muted-foreground">{project.solution}</p>
          </SectionCard>
        </section>

        <section className="mt-8">
          <SectionCard title="My Role">
            <p className="leading-7 text-muted-foreground">{project.role}</p>
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <SectionCard title="Technical Architecture">
            <BulletList items={project.architecture} />
          </SectionCard>

          <SectionCard title="Challenges">
            <BulletList items={project.challenges} />
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <SectionCard title="Results">
            <BulletList items={project.results} />
          </SectionCard>

          <SectionCard title="Next Improvements">
            <BulletList items={project.nextSteps} />
          </SectionCard>
        </section>
        {project.screenshots && project.screenshots.length > 0 && (
  <section className="mt-10">
    <div className="mb-5 space-y-2">
      <h2 className="text-2xl font-bold tracking-tight">Screenshots</h2>
      <p className="text-muted-foreground">
        A closer look at the interface and functionality behind this project.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {project.screenshots.map((screenshot) => (
        <Card key={screenshot.src} className="overflow-hidden">
          <div className="relative aspect-video bg-muted">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
            />
          </div>

          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              {screenshot.caption}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)}

{project.links && project.links.length > 0 && (
  <section className="mt-8 flex flex-wrap gap-3">
    {project.links.map((link) => (
      <Button key={link.href} asChild variant="outline">
        <Link href={link.href} target="_blank">
          {link.label}
        </Link>
      </Button>
    ))}
  </section>
)}

        <section className="mt-10 rounded-2xl border bg-muted/40 p-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Why this project matters
            </h2>
            <p className="leading-7 text-muted-foreground">
              This project shows more than just coding syntax. It shows problem
              solving, architecture decisions, debugging, user experience
              thinking, and the ability to connect multiple parts of a software
              system into something usable.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
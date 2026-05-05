import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";

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
    <Card className="h-full">
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

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link) => (
              <Button key={link.href} asChild variant="outline">
                <Link href={link.href} target="_blank">
                  {link.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionCard title="Overview">
            <p className="leading-7 text-muted-foreground">
              {project.overview}
            </p>
          </SectionCard>

          <SectionCard title="What I Built">
            <BulletList items={project.whatIBuilt} />
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionCard title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Libraries / Tools">
            <div className="space-y-4">
              {project.libraries.map((library) => (
                <div key={library.name}>
                  <h3 className="font-medium">{library.name}</h3>
                  <p className="mt-1 leading-7 text-muted-foreground">
                    {library.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {project.slug === "policyscope" &&
          project.categoryHighlights &&
          project.categoryHighlights.length > 0 && (
            <section className="mt-8">
              <div className="mb-5 space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Detected Clause Areas
                </h2>
                <p className="text-muted-foreground">
                  PolicyScope organizes detected clauses into color-coded
                  categories so users can scan risk areas quickly without
                  reading the full policy.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {project.categoryHighlights.map((category) => (
                  <Card
                    key={category.name}
                    className="h-full border-l-4"
                    style={{ borderLeftColor: category.color }}
                  >
                    <CardContent className="space-y-2 p-5">
                      <div
                        className="h-2 w-16 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />

                      <h3 className="font-semibold">{category.name}</h3>

                      <p className="text-sm leading-6 text-muted-foreground">
                        <span
                          className="box-decoration-clone rounded-sm px-1 py-0.5 dark:hidden"
                          style={{ backgroundColor: `${category.color}26` }}
                        >
                          {category.description}
                        </span>

                        <span
                          className="hidden decoration-[3px] underline underline-offset-4 dark:inline"
                          style={{ textDecorationColor: category.color }}
                        >
                          {category.description}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <SectionCard title="Engineering Decisions">
            <BulletList items={project.engineeringDecisions} />
          </SectionCard>

          <SectionCard title="Challenges">
            <BulletList items={project.challenges} />
          </SectionCard>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <SectionCard title="Results">
            <BulletList items={project.results} />
          </SectionCard>

          <SectionCard title="Limitations / Context">
            <BulletList items={project.limitations} />
          </SectionCard>
        </section>

        <section className="mt-8">
          <SectionCard title="Next Improvements">
            <BulletList items={project.nextSteps} />
          </SectionCard>
        </section>

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="mt-10">
            <div className="mb-5 space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                Project Visuals
              </h2>
              <p className="text-muted-foreground">
                Screenshots from the project presentation and analysis workflow.
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
                    <p className="text-sm leading-6 text-muted-foreground">
                      {screenshot.caption}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 rounded-2xl border bg-muted/40 p-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-bold tracking-tight">
              Why this project matters
            </h2>
            <p className="leading-7 text-muted-foreground">
              This project shows practical software engineering beyond writing
              isolated code. It reflects planning, debugging, technical
              decision-making, user experience thinking, and the ability to
              connect multiple parts of a system into something that can be
              demonstrated and explained.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
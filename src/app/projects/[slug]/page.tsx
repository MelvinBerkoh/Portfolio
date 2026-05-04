import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          ← Back Home
        </Link>

        <Button asChild variant="outline">
          <Link href="/#contact">Contact</Link>
        </Button>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 space-y-5">
          <Badge variant="secondary">{project.category}</Badge>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>

          <p className="font-medium">{project.impact}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
          <Card>
            <CardContent className="space-y-5 p-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Project Highlights</h2>
                <ul className="space-y-3 text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="leading-7">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-3 p-6">
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="leading-7 text-muted-foreground">
                This project was built to solve a practical software problem, not just to demonstrate syntax.
                The goal was to create something usable, structured, and clear enough for real users or team members.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3 p-6">
              <h2 className="text-xl font-semibold">What I Learned</h2>
              <p className="leading-7 text-muted-foreground">
                I strengthened my ability to work across frontend logic, project architecture, debugging,
                user experience decisions, and technical communication.
              </p>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
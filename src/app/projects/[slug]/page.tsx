import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CustomCursor } from "@/components/home/redesign/custom-cursor";
import { InteractiveBackground } from "@/components/home/redesign/interactive-background";
import { CaseStudyDeepDive } from "@/components/projects/case-study-deep-dive";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { CaseStudyNextProject } from "@/components/projects/case-study-next-project";
import { CaseStudyProgress } from "@/components/projects/case-study-progress";
import { CaseStudyStory } from "@/components/projects/case-study-story";
import { CaseStudyVisuals } from "@/components/projects/case-study-visuals";
import { portfolioProjects } from "@/data/portfolio-projects";
import { siteConfig } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map(
    (project) => ({
      slug: project.slug,
    }),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project =
    portfolioProjects.find(
      (item) =>
        item.slug === slug,
    );

  if (!project) {
    return {};
  }

  const canonicalPath =
    `/projects/${project.slug}`;

  const title =
    `${project.title} Case Study`;

  return {
    title,

    description:
      project.summary,

    alternates: {
      canonical:
        canonicalPath,
    },

    openGraph: {
      title: `${title} | Melvin Berkoh`,
      description:
        project.summary,
      url: `${siteConfig.url}${canonicalPath}`,
      type: "article",
      siteName:
        "Melvin Berkoh Portfolio",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Melvin Berkoh`,
      description:
        project.summary,
    },
  };
}

function getProjectStatus(
  slug: string,
) {
  if (slug === "opsdesk") {
    return "Full-Stack SaaS Project";
  }

  if (
    slug ===
    "application-tracker"
  ) {
    return "Deployed Full-Stack Application";
  }

  if (
    slug ===
    "commerce-pulse"
  ) {
    return "End-to-End Analytics Project";
  }

  if (slug === "policyscope") {
    return "Chrome Extension Prototype";
  }

  if (
    slug ===
    "coveytown-escape-room"
  ) {
    return "Multiplayer Course Project";
  }

  if (
    slug ===
    "nyc-aquatics-enrollment-prediction"
  ) {
    return "Data Science Project";
  }

  if (
    slug ===
    "eligido-landing-page"
  ) {
    return "Startup Frontend";
  }

  return "Project Case Study";
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex =
    portfolioProjects.findIndex(
      (item) =>
        item.slug === slug,
    );

  const project =
    portfolioProjects[
      projectIndex
    ];

  if (!project) {
    notFound();
  }

  const nextProjectIndex =
    (projectIndex + 1) %
    portfolioProjects.length;

  const nextProject =
    portfolioProjects[
      nextProjectIndex
    ];

  const projectNumber =
    String(
      projectIndex + 1,
    ).padStart(2, "0");

  const nextProjectNumber =
    String(
      nextProjectIndex + 1,
    ).padStart(2, "0");

  const hasProductSection =
    project.slug !==
      "eligido-landing-page" &&
    Boolean(
      project.thumbnail ||
        project.screenshots
          ?.length ||
        project
          .categoryHighlights
          ?.length,
    );

  const deepDiveNumber =
    hasProductSection
      ? "07"
      : "06";

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
      <InteractiveBackground />
      <CustomCursor />
      <CaseStudyProgress />

      <div className="relative z-10">
        <CaseStudyHero
          project={project}
          projectNumber={
            projectNumber
          }
          status={getProjectStatus(
            project.slug,
          )}
        />

        <div className="mx-auto max-w-[1350px] px-6 md:px-10 lg:px-12">
          <CaseStudyStory
            project={project}
          />

          <CaseStudyVisuals
            project={project}
          />

          <CaseStudyDeepDive
            project={project}
            sectionNumber={
              deepDiveNumber
            }
          />

          <CaseStudyNextProject
            currentProject={
              project
            }
            nextProject={
              nextProject
            }
            nextProjectNumber={
              nextProjectNumber
            }
          />
        </div>
      </div>
    </main>
  );
}
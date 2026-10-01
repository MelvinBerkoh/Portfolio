import { applicationTrackerProject } from "@/data/application-tracker-project";
import { commercePulseProject } from "@/data/commerce-pulse-project";
import { opsDeskProject } from "@/data/opsdesk-project";
import { projects as existingProjects } from "@/data/projects";

const policyScopeProject = existingProjects.find(
  (project) => project.slug === "policyscope",
);

if (!policyScopeProject) {
  throw new Error("PolicyScope project data is missing.");
}

const olderProjects = existingProjects
  .filter((project) => project.slug !== "policyscope")
  .map((project) => ({
    ...project,
    featured: false,
  }));

export const portfolioProjects = [
  opsDeskProject,
  applicationTrackerProject,
  {
    ...policyScopeProject,
    featured: true,
  },
  commercePulseProject,
  ...olderProjects,
];
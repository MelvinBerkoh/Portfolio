import type { MetadataRoute } from "next";

import { portfolioProjects } from "@/data/portfolio-projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  };

  const projectPages: MetadataRoute.Sitemap =
    portfolioProjects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured
        ? 0.9
        : 0.8,
    }));

  return [
    homepage,
    ...projectPages,
  ];
}
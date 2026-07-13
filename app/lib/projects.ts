export type { ProjectCaseStudy, ScreenshotSlot, DnsConfigEntry, EmailAlias } from "../content/projects";
export { projects } from "../content/projects";

import { projects } from "../content/projects";
import type { ProjectCaseStudy } from "../content/projects";

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return projects
    .filter((p): p is ProjectCaseStudy & { featuredRank: number } => p.featuredRank != null)
    .sort((a, b) => a.featuredRank - b.featuredRank);
}

export function getNonFeaturedProjects(): ProjectCaseStudy[] {
  return projects.filter((p) => p.featuredRank == null);
}

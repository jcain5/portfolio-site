import type { MetadataRoute } from "next";
import { getAllProjects } from "./lib/projects";
import { getDocumentationEntries } from "./lib/documentation";

const SITE_URL = "https://jeremymcain.com";

const staticRoutes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/skills",
  "/documentation",
  "/certifications",
  "/contact",
  "/resume",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, documentationEntries] = await Promise.all([getAllProjects(), getDocumentationEntries()]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.completionDate ?? project.startDate ?? new Date(),
  }));

  const documentationEntriesSitemap: MetadataRoute.Sitemap = documentationEntries.map((entry) => ({
    url: `${SITE_URL}/documentation/${entry.slug}`,
    lastModified: entry.lastUpdated ?? new Date(),
  }));

  return [...staticEntries, ...projectEntries, ...documentationEntriesSitemap];
}

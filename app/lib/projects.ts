import { cache } from "react";
import type { ColorKey } from "./colors";
import type { EvidenceSource, EvidenceStatus } from "./evidence";
import { reader } from "./keystatic-reader";
import { getDocumentationEntries } from "./documentation";

export interface ScreenshotSlot {
  src?: string;
  caption: string;
  alt: string;
}

export interface DnsConfigEntry {
  label: string;
  description: string;
  record?: string;
}

export interface EmailAlias {
  alias: string;
  purpose: string;
}

export interface TechnologyCategory {
  category: string;
  items: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  status?: string;
  color: ColorKey;
  evidenceSource: EvidenceSource;
  evidenceStatus: EvidenceStatus;
  competencySlugs: string[];
  summary: string;
  cardSummary?: string;
  featured: boolean;
  featuredRank?: number;
  featuredVariant?: "primary" | "secondary";
  displayOrder: number;
  startDate?: string;
  completionDate?: string;

  overview?: string;
  problem?: string;
  environment?: string;
  ownership?: string;
  architecture?: string;
  architectureDiagram?: string;
  solution?: string[];
  implementation?: string[];
  features?: string[];
  infrastructureOperations?: string[];
  validation?: string;
  troubleshootingHighlights?: string[];
  skillsDemonstrated?: string[];
  currentLimitations?: string[];
  documentation?: string;
  roadmap?: string[];
  transparencyNote?: string;
  privacy?: string;
  securityNote?: string;
  lessonsLearned?: string;

  technologyCategories?: TechnologyCategory[];
  dnsConfiguration?: DnsConfigEntry[];
  emailAliases?: EmailAlias[];
  verification?: { summary: string; items: string[] };
  outcome?: string[];

  heroImage?: string;
  screenshots?: ScreenshotSlot[];
  featuredChips?: string[];

  relatedDocumentation: { slug: string; title: string }[];

  technologies: string[];
  bullets: string[];
  github?: string;
  liveUrl?: string;

  metaTitle?: string;
  metaDescription?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Keystatic's inferred collection entry type is not worth re-deriving here.
function normalizeProject(slug: string, entry: any, docTitleBySlug: Map<string, string>): ProjectCaseStudy | null {
  try {
    return {
      slug,
      title: entry.title,
      subtitle: entry.subtitle || undefined,
      category: entry.category || "",
      status: entry.status || undefined,
      color: (entry.color ?? "slate") as ColorKey,
      evidenceSource: (entry.evidenceSource ?? "portfolio-project") as EvidenceSource,
      evidenceStatus: (entry.evidenceStatus ?? "demonstrated") as EvidenceStatus,
      competencySlugs: [...(entry.competencies ?? [])],
      summary: entry.summary || "",
      cardSummary: entry.cardSummary || undefined,
      featured: !!entry.featured,
      featuredRank: entry.featuredRank ?? undefined,
      featuredVariant: entry.featuredVariant ?? undefined,
      displayOrder: entry.displayOrder ?? 0,
      startDate: entry.startDate || undefined,
      completionDate: entry.completionDate || undefined,

      overview: entry.overview || undefined,
      problem: entry.problem || undefined,
      environment: entry.environment || undefined,
      ownership: entry.ownership || undefined,
      architecture: entry.architecture || undefined,
      architectureDiagram: entry.architectureDiagram || undefined,
      solution: entry.solution?.length ? [...entry.solution] : undefined,
      implementation: entry.implementation?.length ? [...entry.implementation] : undefined,
      features: entry.features?.length ? [...entry.features] : undefined,
      infrastructureOperations: entry.infrastructureOperations?.length
        ? [...entry.infrastructureOperations]
        : undefined,
      validation: entry.validation || undefined,
      troubleshootingHighlights: entry.troubleshootingHighlights?.length
        ? [...entry.troubleshootingHighlights]
        : undefined,
      skillsDemonstrated: entry.skillsDemonstrated?.length ? [...entry.skillsDemonstrated] : undefined,
      currentLimitations: entry.currentLimitations?.length ? [...entry.currentLimitations] : undefined,
      documentation: entry.documentation || undefined,
      roadmap: entry.roadmap?.length ? [...entry.roadmap] : undefined,
      transparencyNote: entry.transparencyNote || undefined,
      privacy: entry.privacy || undefined,
      securityNote: entry.securityNote || undefined,
      lessonsLearned: entry.lessonsLearned || undefined,

      technologyCategories: entry.technologyCategories?.length
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entry.technologyCategories.map((c: any) => ({ category: c.category, items: [...(c.items ?? [])] }))
        : undefined,
      dnsConfiguration: entry.dnsConfiguration?.length
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entry.dnsConfiguration.map((d: any) => ({
            label: d.label,
            description: d.description,
            record: d.record || undefined,
          }))
        : undefined,
      emailAliases: entry.emailAliases?.length
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entry.emailAliases.map((e: any) => ({ alias: e.alias, purpose: e.purpose }))
        : undefined,
      verification:
        entry.verificationSummary || entry.verificationItems?.length
          ? { summary: entry.verificationSummary || "", items: [...(entry.verificationItems ?? [])] }
          : undefined,
      outcome: entry.outcome?.length ? [...entry.outcome] : undefined,

      heroImage: entry.heroImage || undefined,
      screenshots: entry.screenshots?.length
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entry.screenshots.map((s: any) => ({ src: s.image || undefined, alt: s.alt, caption: s.caption || "" }))
        : undefined,
      featuredChips: entry.featuredChips?.length ? [...entry.featuredChips] : undefined,

      relatedDocumentation: [...(entry.relatedDocumentation ?? [])].map((docSlug: string) => ({
        slug: docSlug,
        title: docTitleBySlug.get(docSlug) ?? docSlug,
      })),

      technologies: [...(entry.technologies ?? [])],
      bullets: [...(entry.bullets ?? [])],
      github: entry.github || undefined,
      liveUrl: entry.liveUrl || undefined,

      metaTitle: entry.metaTitle || undefined,
      metaDescription: entry.metaDescription || undefined,
    };
  } catch (err) {
    console.error(`Failed to normalize project "${slug}":`, err);
    return null;
  }
}

async function getDocTitleMap(): Promise<Map<string, string>> {
  const docs = await getDocumentationEntries();
  return new Map(docs.map((d) => [d.slug, d.title]));
}

// Memoized per-request — getFeaturedProjects() and getNonFeaturedProjects()
// both call this independently, so without caching, a page that renders both
// (home, /projects) would read every project from disk twice.
export const getAllProjects = cache(async (): Promise<ProjectCaseStudy[]> => {
  try {
    const [entries, docTitleBySlug] = await Promise.all([reader.collections.projects.all(), getDocTitleMap()]);
    return entries
      .filter(({ entry }) => entry.published !== false)
      .map(({ slug, entry }) => normalizeProject(slug, entry, docTitleBySlug))
      .filter((p): p is ProjectCaseStudy => p !== null);
  } catch (err) {
    console.error("Failed to read projects from Keystatic:", err);
    return [];
  }
});

export async function getProjectBySlug(slug: string): Promise<ProjectCaseStudy | undefined> {
  try {
    const [entry, docTitleBySlug] = await Promise.all([reader.collections.projects.read(slug), getDocTitleMap()]);
    if (!entry || entry.published === false) return undefined;
    return normalizeProject(slug, entry, docTitleBySlug) ?? undefined;
  } catch (err) {
    console.error(`Failed to read project "${slug}":`, err);
    return undefined;
  }
}

export async function getFeaturedProjects(): Promise<ProjectCaseStudy[]> {
  const all = await getAllProjects();
  return all
    .filter((p) => p.featured && p.featuredRank != null)
    .sort((a, b) => (a.featuredRank ?? 0) - (b.featuredRank ?? 0));
}

export async function getNonFeaturedProjects(): Promise<ProjectCaseStudy[]> {
  const all = await getAllProjects();
  return all.filter((p) => !p.featured || p.featuredRank == null).sort((a, b) => a.displayOrder - b.displayOrder);
}

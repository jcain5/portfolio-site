import { cache } from "react";
import type { ColorKey } from "./colors";
import type { EvidenceSource, EvidenceStatus } from "./evidence";
import { reader } from "./keystatic-reader";
import { getDocumentationEntries } from "./documentation";

export interface ScreenshotSlot {
  src?: string;
  caption: string;
  alt: string;
  evidenceType?: string;
}

export interface CustomSection {
  title: string;
  body: string;
  code?: string;
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

export type StrategicPriority = "flagship" | "supporting" | "archive";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  categories: string[];
  status?: string;
  strategicPriority: StrategicPriority;
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
  relatedProjects: { slug: string; title: string }[];
  customSections?: CustomSection[];

  technologies: string[];
  bullets: string[];
  github?: string;
  liveUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  externalReference?: { label: string; url: string };

  metaTitle?: string;
  metaDescription?: string;
}

// Keystatic's inferred collection entry type is not worth re-deriving here.
function normalizeProject(
  slug: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entry: any,
  docTitleBySlug: Map<string, string>,
  projectTitleBySlug: Map<string, string>
): ProjectCaseStudy | null {
  try {
    return {
      slug,
      title: entry.title,
      subtitle: entry.subtitle || undefined,
      category: entry.category || "",
      categories: [...(entry.categories ?? [])],
      status: entry.status || undefined,
      strategicPriority: (entry.strategicPriority ?? "supporting") as StrategicPriority,
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
          entry.screenshots.map((s: any) => ({
            src: s.image || undefined,
            alt: s.alt,
            caption: s.caption || "",
            evidenceType: s.evidenceType || undefined,
          }))
        : undefined,
      featuredChips: entry.featuredChips?.length ? [...entry.featuredChips] : undefined,

      relatedDocumentation: [...(entry.relatedDocumentation ?? [])].map((docSlug: string) => ({
        slug: docSlug,
        title: docTitleBySlug.get(docSlug) ?? docSlug,
      })),
      relatedProjects: [...(entry.relatedProjects ?? [])].map((projectSlug: string) => ({
        slug: projectSlug,
        title: projectTitleBySlug.get(projectSlug) ?? projectSlug,
      })),
      customSections: entry.customSections?.length
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          entry.customSections.map((s: any) => ({
            title: s.title || "",
            body: s.body || "",
            code: s.code || undefined,
          }))
        : undefined,

      technologies: [...(entry.technologies ?? [])],
      bullets: [...(entry.bullets ?? [])],
      github: entry.github || undefined,
      liveUrl: entry.liveUrl || undefined,
      demoUrl: entry.demoUrl || undefined,
      documentationUrl: entry.documentationUrl || undefined,
      externalReference: entry.externalReference?.url
        ? { label: entry.externalReference.label || "Reference", url: entry.externalReference.url }
        : undefined,

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

// Reads raw entries directly (not getAllProjects()) so relatedProjects title
// resolution can't recurse into itself. Only published projects are included
// so a related-project link never points at a slug the public route 404s on.
async function getProjectTitleMap(): Promise<Map<string, string>> {
  try {
    const entries = await reader.collections.projects.all();
    return new Map(
      entries.filter(({ entry }) => entry.published !== false).map(({ slug, entry }) => [slug, entry.title])
    );
  } catch (err) {
    console.error("Failed to read project titles from Keystatic:", err);
    return new Map();
  }
}

// Memoized per-request — getFeaturedProjects() and getNonFeaturedProjects()
// both call this independently, so without caching, a page that renders both
// (home, /projects) would read every project from disk twice.
export const getAllProjects = cache(async (): Promise<ProjectCaseStudy[]> => {
  try {
    const [entries, docTitleBySlug, projectTitleBySlug] = await Promise.all([
      reader.collections.projects.all(),
      getDocTitleMap(),
      getProjectTitleMap(),
    ]);
    return entries
      .filter(({ entry }) => entry.published !== false)
      .map(({ slug, entry }) => normalizeProject(slug, entry, docTitleBySlug, projectTitleBySlug))
      .filter((p): p is ProjectCaseStudy => p !== null);
  } catch (err) {
    console.error("Failed to read projects from Keystatic:", err);
    return [];
  }
});

export async function getProjectBySlug(slug: string): Promise<ProjectCaseStudy | undefined> {
  try {
    const [entry, docTitleBySlug, projectTitleBySlug] = await Promise.all([
      reader.collections.projects.read(slug),
      getDocTitleMap(),
      getProjectTitleMap(),
    ]);
    if (!entry || entry.published === false) return undefined;
    return normalizeProject(slug, entry, docTitleBySlug, projectTitleBySlug) ?? undefined;
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

// Career-trajectory categories that count as hands-on administration/automation
// work when a project isn't flagship-tier — used to route it into the
// "Administration & Automation" listing group instead of "Supporting Technical Work".
const administrationAutomationCategories = new Set([
  "automation",
  "systems-administration",
  "linux",
  "networking",
  "identity",
  "cloud",
]);

export interface ProjectListingTiers {
  infrastructureOwnership: ProjectCaseStudy[];
  administrationAutomation: ProjectCaseStudy[];
  supportingTechnicalWork: ProjectCaseStudy[];
  archive: ProjectCaseStudy[];
}

// Groups all published projects into the public listing hierarchy, derived
// entirely from CMS fields (strategicPriority + categories) — no hard-coded
// project names. Sorted by displayOrder within each tier. `published` is the
// sole visibility control (already applied upstream by getAllProjects());
// strategicPriority only controls *where* a published project is presented —
// "archive" renders in its own lower-priority Archive group, it does not hide
// the project.
export async function getProjectsByTier(): Promise<ProjectListingTiers> {
  const all = (await getAllProjects()).slice().sort((a, b) => a.displayOrder - b.displayOrder);

  const infrastructureOwnership = all.filter((p) => p.strategicPriority === "flagship");
  const archive = all.filter((p) => p.strategicPriority === "archive");
  const supporting = all.filter((p) => p.strategicPriority === "supporting");
  const administrationAutomation = supporting.filter((p) =>
    p.categories.some((c) => administrationAutomationCategories.has(c))
  );
  const supportingTechnicalWork = supporting.filter(
    (p) => !p.categories.some((c) => administrationAutomationCategories.has(c))
  );

  return { infrastructureOwnership, administrationAutomation, supportingTechnicalWork, archive };
}

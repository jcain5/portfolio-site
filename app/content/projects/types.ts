import type { ColorKey } from "../../lib/colors";
import type { FocusId } from "../../context/CareerFocusContext";

export interface ScreenshotSlot {
  src: string | null;
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
  focusTracks: NonNullable<FocusId>[];
  summary: string;

  // Set to surface this project in the Featured sections on the homepage
  // and /projects, ordered ascending. featuredVariant controls visual weight.
  featuredRank?: number;
  featuredVariant?: "primary" | "secondary";

  // Case-study structure: problem, environment, ownership, architecture,
  // implementation, validation, documentation, outcome.
  problem?: string;
  environment?: string;
  ownership?: string;
  architecture?: string;
  // Literal ASCII architecture diagram, rendered verbatim in a monospace panel.
  architectureDiagram?: string;
  implementation?: string[];
  validation?: string;
  documentation?: string;
  outcome?: string;

  dnsConfiguration?: DnsConfigEntry[];
  emailAliases?: EmailAlias[];
  // Grouped breakdown (e.g. Microsoft / Networking / Security) shown alongside
  // the flat `technologies` chip list, which stays ungrouped for card previews.
  technologyCategories?: TechnologyCategory[];
  skillsDemonstrated?: string[];
  troubleshootingHighlights?: string[];
  // Planned/in-progress work — rendered clearly labeled so it's never
  // confused with completed work in `implementation`.
  roadmap?: string[];
  // Short callout disclosing scope/status (e.g. independent lab vs. paid work).
  transparencyNote?: string;
  lessonsLearned?: string;
  // Forward cross-link to a /documentation/[slug] article.
  knowledgeBase?: { slug: string; title: string };

  screenshots?: ScreenshotSlot[];
  technologies: string[];
  github?: string;
  liveUrl?: string;
  bullets: string[];

  // Per-project SEO overrides; falls back to `${title} | Jeremy M. Cain` / summary.
  metaTitle?: string;
  metaDescription?: string;
}

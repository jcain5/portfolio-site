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
  // Short one-line blurb for project grid/index cards, distinct from
  // `summary` (shown as the Executive Summary on the project detail page).
  cardSummary?: string;

  // Set to surface this project in the Featured sections on the homepage
  // and /projects, ordered ascending. featuredVariant controls visual weight.
  featuredRank?: number;
  featuredVariant?: "primary" | "secondary";

  // Case-study structure: problem, environment, ownership, architecture,
  // implementation, validation, documentation, outcome.
  // Short framing paragraph shown before the Business Problem section.
  overview?: string;
  problem?: string;
  environment?: string;
  ownership?: string;
  architecture?: string;
  // Literal ASCII architecture diagram, rendered verbatim in a monospace panel.
  architectureDiagram?: string;
  implementation?: string[];
  // Ordered flow of how the built solution actually works, distinct from
  // `implementation` (which covers what/how it was built).
  solution?: string[];
  // Explicit, honest scope boundaries of the current version.
  currentLimitations?: string[];
  // Concrete, user-facing capabilities of the finished product.
  features?: string[];
  // Ongoing operational practices (deployment, service management, monitoring,
  // backup/recovery) — distinct from `implementation`, which covers what was built.
  infrastructureOperations?: string[];
  validation?: string;
  documentation?: string;
  outcome?: string | string[];
  // Compact test/verification summary (e.g. automated test coverage areas),
  // rendered as a callout near the screenshot gallery.
  verification?: { summary: string; items: string[] };

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
  // Callout disclosing data-handling/privacy posture (e.g. fictional sample data).
  privacy?: string;
  // Callout disclosing authorized-use scope (e.g. lab-only, no exploitation).
  securityNote?: string;
  lessonsLearned?: string;
  // Forward cross-link to a /documentation/[slug] article.
  knowledgeBase?: { slug: string; title: string };

  screenshots?: ScreenshotSlot[];
  // Compact chip set shown on the homepage featured-project card; falls back
  // to the first few `technologies` entries when omitted.
  featuredChips?: string[];
  technologies: string[];
  github?: string;
  liveUrl?: string;
  bullets: string[];

  // Per-project SEO overrides; falls back to `${title} | Jeremy M. Cain` / summary.
  metaTitle?: string;
  metaDescription?: string;
}

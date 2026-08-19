import type { ColorKey } from "./colors";

// Mirrors the evidenceSourceOptions / evidenceStatusOptions value sets in
// keystatic.config.ts. Two independent axes: `source` says *where* a
// competency/project was actually demonstrated, `status` says *how mature*
// it is. Never conflate them.
export type EvidenceSource =
  | "professional"
  | "volunteer"
  | "independent-lab"
  | "portfolio-project"
  | "education";

export type EvidenceStatus = "demonstrated" | "developing" | "planned";

interface EvidenceSourceMeta {
  label: string;
  color: ColorKey;
}

export const evidenceSourceMeta: Record<EvidenceSource, EvidenceSourceMeta> = {
  professional: { label: "Professional", color: "blue" },
  volunteer: { label: "Volunteer", color: "emerald" },
  "independent-lab": { label: "Independent Lab", color: "cyan" },
  "portfolio-project": { label: "Portfolio Project", color: "indigo" },
  education: { label: "Education", color: "amber" },
};

interface EvidenceStatusMeta {
  label: string;
}

export const evidenceStatusMeta: Record<EvidenceStatus, EvidenceStatusMeta> = {
  demonstrated: { label: "Demonstrated" },
  developing: { label: "Developing" },
  planned: { label: "Planned" },
};

/** Keystatic's optional per-skill status field stores "" for "not deliberately
 * set" — this normalizes that sentinel to undefined for consumers. */
export function normalizeSkillStatus(value: string | null | undefined): EvidenceStatus | undefined {
  return value === "demonstrated" || value === "developing" || value === "planned" ? value : undefined;
}

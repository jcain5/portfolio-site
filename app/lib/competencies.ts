import type { ColorKey } from "./colors";
import type { FocusId } from "../context/CareerFocusContext";
import type { EvidenceSource, EvidenceStatus } from "./evidence";
import { normalizeSkillStatus } from "./evidence";
import { reader } from "./keystatic-reader";

export interface CompetencySkill {
  label: string;
  /** Only set when a specific skill's maturity differs from the rest of its
   * competency group (e.g. Group Policy still developing while the rest of
   * Systems Administration is demonstrated). Absent for the common case. */
  status?: EvidenceStatus;
}

export interface Competency {
  slug: string;
  label: string;
  description?: string;
  color: ColorKey;
  icon?: string;
  focusTracks: NonNullable<FocusId>[];
  /** Every place this competency has actually been demonstrated — a group may
   * legitimately span multiple sources (e.g. Networking: professional +
   * volunteer + independent-lab). Rendered once per group, not per skill. */
  sources: EvidenceSource[];
  skills: CompetencySkill[];
  displayOrder: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Keystatic's inferred collection entry type is not worth re-deriving here.
function normalizeSkill(skill: any): CompetencySkill {
  return {
    label: skill.label,
    status: normalizeSkillStatus(skill.status),
  };
}

export async function getCompetencies(): Promise<Competency[]> {
  try {
    const entries = await reader.collections.competencies.all();
    return entries
      .map(({ slug, entry }) => ({
        slug,
        label: entry.label,
        description: entry.description || undefined,
        color: (entry.color ?? "slate") as ColorKey,
        icon: entry.icon || undefined,
        focusTracks: (entry.focusTracks ?? []) as NonNullable<FocusId>[],
        sources: (entry.sources ?? []) as EvidenceSource[],
        skills: (entry.skills ?? []).map(normalizeSkill),
        displayOrder: entry.displayOrder ?? 0,
      }))
      .sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (err) {
    console.error("Failed to read competencies from Keystatic:", err);
    return [];
  }
}

export async function getCompetencyBySlug(slug: string): Promise<Competency | undefined> {
  const all = await getCompetencies();
  return all.find((c) => c.slug === slug);
}

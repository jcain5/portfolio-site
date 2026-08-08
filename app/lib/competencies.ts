import type { ColorKey } from "./colors";
import type { FocusId } from "../context/CareerFocusContext";
import { reader } from "./keystatic-reader";

export interface Competency {
  slug: string;
  label: string;
  description?: string;
  color: ColorKey;
  icon?: string;
  focusTracks: NonNullable<FocusId>[];
  skills: string[];
  displayOrder: number;
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
        skills: [...(entry.skills ?? [])],
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

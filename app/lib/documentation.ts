import { cache } from "react";
import type { DocumentRendererProps } from "@keystatic/core/renderer";
import { reader } from "./keystatic-reader";

export interface DocumentationEntry {
  slug: string;
  title: string;
  category: string;
  classification?: string;
  goal: string;
  steps: string[];
  validationChecklist: string[];
  references: string[];
  body: DocumentRendererProps["document"] | null;
  relatedProjectSlugs: string[];
  lastUpdated?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Keystatic's inferred collection entry type is not worth re-deriving here.
async function normalizeEntry(slug: string, entry: any): Promise<DocumentationEntry> {
  const body = await entry.body();
  return {
    slug,
    title: entry.title,
    category: entry.category || "",
    classification: entry.classification || undefined,
    goal: entry.goal || "",
    steps: [...(entry.steps ?? [])],
    validationChecklist: [...(entry.validationChecklist ?? [])],
    references: [...(entry.references ?? [])],
    body: body.length > 0 ? body : null,
    relatedProjectSlugs: [...(entry.relatedProjects ?? [])],
    lastUpdated: entry.lastUpdated || undefined,
  };
}

// Memoized per-request — getAllProjects() also reads documentation entries
// (for related-doc titles), so without this, a single page render that calls
// both would read every documentation entry from disk twice.
export const getDocumentationEntries = cache(async (): Promise<DocumentationEntry[]> => {
  try {
    const entries = await reader.collections.documentation.all();
    return await Promise.all(entries.map(({ slug, entry }) => normalizeEntry(slug, entry)));
  } catch (err) {
    console.error("Failed to read documentation from Keystatic:", err);
    return [];
  }
});

export async function getDocumentationBySlug(slug: string): Promise<DocumentationEntry | undefined> {
  try {
    const entry = await reader.collections.documentation.read(slug);
    if (!entry) return undefined;
    return await normalizeEntry(slug, entry);
  } catch (err) {
    console.error(`Failed to read documentation entry "${slug}":`, err);
    return undefined;
  }
}

export type { KnowledgeArticle } from "../content/knowledge";
export { knowledgeArticles } from "../content/knowledge";

import { knowledgeArticles } from "../content/knowledge";
import type { KnowledgeArticle } from "../content/knowledge";

export function getKnowledgeArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.slug === slug);
}

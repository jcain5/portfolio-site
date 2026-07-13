export interface KnowledgeArticle {
  slug: string;
  title: string;
  category: string;
  goal: string;
  steps: string[];
  validationChecklist: string[];
  references: string[];
  relatedProjectSlug?: string;
}

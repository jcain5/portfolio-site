import Link from "next/link";
import { notFound } from "next/navigation";
import { knowledgeArticles, getKnowledgeArticleBySlug } from "../../lib/knowledge";
import { getProjectBySlug } from "../../lib/projects";

export function generateStaticParams() {
  return knowledgeArticles.map((a) => ({ slug: a.slug }));
}

const SPF_RECORD_PATTERN = /v=spf1[^)]*/;

export default async function DocumentationArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getKnowledgeArticleBySlug(slug);
  if (!article) notFound();

  const relatedProject = article.relatedProjectSlug ? getProjectBySlug(article.relatedProjectSlug) : undefined;

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/documentation" className="text-sm font-mono text-muted hover:text-[#2F75C8] transition-colors">
          ← Documentation
        </Link>

        <div className="mt-6 mb-4">
          <span className="text-xs font-mono text-[#2F75C8]">{article.category}</span>
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight mt-2">{article.title}</h1>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Goal</h2>
            <p className="text-body leading-relaxed">{article.goal}</p>
          </div>

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Steps</h2>
            <ol className="space-y-3">
              {article.steps.map((step, i) => {
                const recordMatch = step.match(SPF_RECORD_PATTERN);
                return (
                  <li key={i} className="flex gap-3 text-sm text-body leading-relaxed">
                    <span className="font-mono text-muted shrink-0">{i + 1}.</span>
                    <div>
                      <p>{recordMatch ? step.slice(0, recordMatch.index).trim() : step}</p>
                      {recordMatch && (
                        <code className="mt-1 inline-block text-xs font-mono px-2 py-1 rounded-md bg-canvas border border-border text-body">
                          {recordMatch[0]}
                        </code>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Validation Checklist</h2>
            <ul className="space-y-2">
              {article.validationChecklist.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">References</h2>
            <p className="text-body leading-relaxed">{article.references.join(" · ")}</p>
          </div>

          {relatedProject && (
            <div className="p-5 rounded-lg bg-canvas border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Related Project</h2>
              <Link href={`/projects/${relatedProject.slug}`} className="text-sm font-mono text-[#2F75C8] hover:underline">
                {relatedProject.title} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Section from "../components/ui/Section";
import { knowledgeArticles } from "../lib/knowledge";

export const metadata = {
  title: "Documentation | Jeremy Cain",
};

export default function DocumentationPage() {
  return (
    <Section
      id="documentation"
      eyebrow="KNOWLEDGE BASE"
      title="Documentation"
      intro="Step-by-step reference notes from real infrastructure work — written for repeatability and handoff."
      headingLevel="h1"
      firstOnPage
      threshold={0.05}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/documentation/${article.slug}`}
            className="relative flex flex-col p-6 rounded-lg bg-white border border-border hover:border-[#2F75C8]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)]"
          >
            <div className="h-1 w-10 rounded-full mb-5 bg-[#2F75C8]" />
            <span className="text-xs font-mono text-[#2F75C8] mb-1">{article.category}</span>
            <h3 className="text-ink font-heading font-semibold text-lg leading-snug mb-3">{article.title}</h3>
            <p className="text-sm text-body leading-relaxed">{article.goal}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

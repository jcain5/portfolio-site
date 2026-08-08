import Link from "next/link";
import Section from "../components/ui/Section";
import { getDocumentationEntries } from "../lib/documentation";

export const metadata = {
  title: "Documentation | Jeremy Cain",
};

export default async function DocumentationPage() {
  const entries = await getDocumentationEntries();

  return (
    <Section
      id="documentation"
      eyebrow="KNOWLEDGE BASE"
      title="Documentation"
      intro="Step-by-step reference notes and architecture write-ups from real infrastructure work — written for repeatability and handoff."
      headingLevel="h1"
      firstOnPage
      threshold={0.05}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/documentation/${entry.slug}`}
            className="relative flex flex-col p-6 rounded-lg bg-white border border-border hover:border-[#2F75C8]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)]"
          >
            <div className="h-1 w-10 rounded-full mb-5 bg-[#2F75C8]" />
            <span className="text-xs font-mono text-[#2F75C8] mb-1">{entry.category}</span>
            <h3 className="text-ink font-heading font-semibold text-lg leading-snug mb-3">{entry.title}</h3>
            <p className="text-sm text-body leading-relaxed">{entry.goal}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

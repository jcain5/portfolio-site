import Link from "next/link";
import Section from "./ui/Section";
import type { DocumentationEntry } from "../lib/documentation";

export default function TechDocsTeaser({ entries }: { entries: DocumentationEntry[] }) {
  const featured = entries.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <Section
      id="technical-documentation"
      eyebrow="TECHNICAL DOCUMENTATION"
      title="Runbooks & Architecture Notes"
      intro="Operational documentation written for repeatability and handoff — not just the build, but how to run and recover it."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((entry) => (
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
      <div className="text-center mt-8">
        <Link
          href="/documentation"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong text-body rounded-lg hover:border-[#2F75C8] hover:text-[#2F75C8] transition-colors text-sm font-medium"
        >
          View All Documentation →
        </Link>
      </div>
    </Section>
  );
}

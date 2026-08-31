import Link from "next/link";

interface RelatedDocumentationListProps {
  docs: { slug: string; title: string }[];
  labelClass: string;
}

// Extracted so the project detail page can render this block in either of
// two positions: its default fixed slot, or inline directly beneath a
// "Documentation" custom section when a project has one (see the
// documentation-anchored / evidence-anchored placement logic in
// app/projects/[slug]/page.tsx).
export default function RelatedDocumentationList({ docs, labelClass }: RelatedDocumentationListProps) {
  return (
    <div className="p-5 rounded-lg border border-border">
      <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Related Documentation</h2>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link href={`/documentation/${doc.slug}`} className={`text-sm font-mono ${labelClass} hover:underline`}>
              {doc.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

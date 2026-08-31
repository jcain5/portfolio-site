interface ProjectSectionProps {
  title: string;
  body: string;
  code?: string;
}

// Shared renderer for CMS-authored project sections that don't have a
// dedicated named field (Keystatic `customSections` array on a project).
// Matches the visual treatment of the fixed narrative blocks on the project
// detail page so new section types don't need any React/TypeScript changes.
export default function ProjectSection({ title, body, code }: ProjectSectionProps) {
  return (
    <div>
      <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">{title}</h2>
      <p className="text-body leading-relaxed whitespace-pre-line">{body}</p>
      {code && (
        <pre className="mt-3 bg-canvas border border-border rounded-lg p-5 text-xs font-mono text-body overflow-x-auto">
          {code}
        </pre>
      )}
    </div>
  );
}

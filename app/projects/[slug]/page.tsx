import Link from "next/link";
import { notFound } from "next/navigation";
import { colors } from "../../lib/colors";
import { projects, getProjectBySlug } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const c = colors[project.color];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="text-sm font-mono text-muted hover:text-[#2F75C8] transition-colors">
          ← All Projects
        </Link>

        <div className="mt-6 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
            {project.status && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
                {project.status}
              </span>
            )}
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight mt-2">{project.title}</h1>
        </div>

        <p className="text-body leading-relaxed mb-10">{project.summary}</p>

        <div className="space-y-8">
          {project.problem && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Problem</h2>
              <p className="text-body leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.environment && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Environment</h2>
              <p className="text-body leading-relaxed">{project.environment}</p>
            </div>
          )}
          {project.ownership && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Ownership</h2>
              <p className="text-body leading-relaxed">{project.ownership}</p>
            </div>
          )}
          {project.architecture && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Architecture</h2>
              <p className="text-body leading-relaxed">{project.architecture}</p>
            </div>
          )}
          {project.implementation && project.implementation.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Implementation</h2>
              <ul className="space-y-2">
                {project.implementation.map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.validation && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Validation</h2>
              <p className="text-body leading-relaxed">{project.validation}</p>
            </div>
          )}
          {project.documentation && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Documentation</h2>
              <p className="text-body leading-relaxed">{project.documentation}</p>
            </div>
          )}
          {project.outcome && (
            <div className="p-5 rounded-lg bg-canvas border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Outcome</h2>
              <p className="text-body leading-relaxed">{project.outcome}</p>
            </div>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                {tag}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

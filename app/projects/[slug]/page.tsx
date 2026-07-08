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
        <Link href="/projects" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">
          ← All Projects
        </Link>

        <div className="flex items-center gap-4 mt-6 mb-4">
          <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center text-2xl`}>
            {project.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
              {project.status && (
                <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-500/40 text-amber-400 bg-amber-500/10">
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{project.title}</h1>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed mb-8">{project.summary}</p>

        {project.problem && (
          <div className="mb-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-2">PROBLEM</h2>
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
        )}
        {project.solution && (
          <div className="mb-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-2">SOLUTION</h2>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        )}
        {project.architecture && (
          <div className="mb-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-2">ARCHITECTURE</h2>
            <p className="text-slate-400 leading-relaxed">{project.architecture}</p>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-3">DETAILS</h2>
          <ul className="space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-3">LESSONS LEARNED</h2>
            <ul className="space-y-2">
              {project.lessonsLearned.map((l, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                  <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.businessImpact && (
          <div className="mb-8 p-5 rounded-xl border border-dashed border-slate-700">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-2">BUSINESS IMPACT</h2>
            <p className="text-slate-400 leading-relaxed">{project.businessImpact}</p>
          </div>
        )}

        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.label} ${c.bg}`}>
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

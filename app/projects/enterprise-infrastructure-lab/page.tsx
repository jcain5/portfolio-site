import Link from "next/link";
import { colors } from "../../lib/colors";
import { featuredProject } from "../../lib/projects";

export const metadata = {
  title: "Enterprise Infrastructure Lab | Jeremy Cain",
};

export default function EnterpriseInfrastructureLabPage() {
  const c = colors[featuredProject.color];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="text-sm font-mono text-muted hover:text-[#2F75C8] transition-colors">
          ← All Projects
        </Link>

        <div className="mt-6 mb-4">
          <span className={`text-xs font-mono ${c.label}`}>{featuredProject.category}</span>
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight mt-2">{featuredProject.title}</h1>
        </div>

        <p className="text-body leading-relaxed mb-10">{featuredProject.summary}</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Problem</h2>
            <p className="text-body leading-relaxed">{featuredProject.problem}</p>
          </div>
          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Environment</h2>
            <p className="text-body leading-relaxed">{featuredProject.environment}</p>
          </div>
          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Ownership</h2>
            <p className="text-body leading-relaxed">{featuredProject.ownership}</p>
          </div>
          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Architecture</h2>
            <p className="text-body leading-relaxed">{featuredProject.architecture}</p>
          </div>

          {featuredProject.screenshots && featuredProject.screenshots.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredProject.screenshots.map((shot, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-lg border border-dashed border-border-strong bg-canvas flex items-center justify-center p-4 text-center"
                >
                  <p className="text-xs font-mono text-muted">{shot.caption} — diagram pending</p>
                </div>
              ))}
            </div>
          )}

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Implementation</h2>
            <ul className="space-y-2">
              {featuredProject.implementation?.map((step, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                  <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Validation</h2>
            <p className="text-body leading-relaxed">{featuredProject.validation}</p>
          </div>

          <div>
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Documentation</h2>
            <p className="text-body leading-relaxed">{featuredProject.documentation}</p>
          </div>

          <div className="p-5 rounded-lg bg-canvas border border-border">
            <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Outcome</h2>
            <p className="text-body leading-relaxed">{featuredProject.outcome}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {featuredProject.technologies.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

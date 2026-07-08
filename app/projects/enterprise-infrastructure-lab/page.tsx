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
        <Link href="/projects" className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors">
          ← All Projects
        </Link>

        <div className="flex items-center gap-4 mt-6 mb-4">
          <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center text-2xl`}>
            {featuredProject.icon}
          </div>
          <div>
            <span className={`text-xs font-mono ${c.label}`}>{featuredProject.category}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{featuredProject.title}</h1>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed mb-8">{featuredProject.summary}</p>

        <div className="mb-8">
          <h2 className="text-sm font-mono text-cyan-400 tracking-widest mb-3">OVERVIEW</h2>
          <ul className="space-y-2">
            {featuredProject.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 p-5 rounded-xl border border-dashed border-slate-700 text-center">
          <p className="text-slate-500 text-sm">
            Full architecture diagram, network topology, rack photos, and lessons-learned writeup coming soon.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {featuredProject.technologies.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.label} ${c.bg}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

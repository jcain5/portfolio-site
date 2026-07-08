import Link from "next/link";
import Projects from "../components/Projects";
import { colors } from "../lib/colors";
import { featuredProject } from "../lib/projects";

export default function ProjectsPage() {
  const c = colors[featuredProject.color];

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`/projects/${featuredProject.slug}`}
            className={`relative flex flex-col sm:flex-row sm:items-center gap-6 p-8 rounded-2xl bg-gradient-to-br ${c.activeGlow} to-[#0a0f1e] border ${c.activeBorder} transition-all duration-300 hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 shrink-0 rounded-xl ${c.bg} flex items-center justify-center text-3xl`}>
              {featuredProject.icon}
            </div>
            <div className="flex-1">
              <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${c.border} ${c.label}`}>
                FEATURED PROJECT
              </span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-2">{featuredProject.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{featuredProject.summary}</p>
            </div>
            <span className={`text-sm font-mono ${c.label} shrink-0`}>View deep dive →</span>
          </Link>
        </div>
      </section>
      <Projects />
    </>
  );
}

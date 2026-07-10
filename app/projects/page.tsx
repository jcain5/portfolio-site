import Link from "next/link";
import Projects from "../components/Projects";
import { colors } from "../lib/colors";
import { featuredProject } from "../lib/projects";

export default function ProjectsPage() {
  const c = colors[featuredProject.color];

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="container-grid">
          <Link
            href={`/projects/${featuredProject.slug}`}
            className={`relative flex flex-col sm:flex-row sm:items-center gap-6 p-8 rounded-lg bg-white border ${c.activeBorder} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)]`}
          >
            <div className="flex-1">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                FEATURED PROJECT
              </span>
              <h2 className="font-heading text-2xl font-semibold text-ink mt-2 mb-2">{featuredProject.title}</h2>
              <p className="text-body text-sm leading-relaxed max-w-2xl">{featuredProject.summary}</p>
            </div>
            <span className={`text-sm font-mono ${c.label} shrink-0`}>View deep dive →</span>
          </Link>
        </div>
      </section>
      <Projects />
    </>
  );
}

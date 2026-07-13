import Link from "next/link";
import Projects from "../components/Projects";
import { colors } from "../lib/colors";
import { getFeaturedProjects } from "../lib/projects";

export default function ProjectsPage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="container-grid space-y-4">
          {featured.map((project) => {
            const c = colors[project.color];
            const isPrimary = project.featuredVariant === "primary";
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`relative flex flex-col sm:flex-row sm:items-center gap-6 rounded-lg bg-white border ${c.activeBorder} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] ${
                  isPrimary ? "p-8" : "p-6"
                }`}
              >
                <div className="flex-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                    FEATURED PROJECT
                  </span>
                  <h2
                    className={`font-heading font-semibold text-ink mt-2 mb-2 ${
                      isPrimary ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {project.title}
                  </h2>
                  <p className="text-body text-sm leading-relaxed max-w-2xl">{project.summary}</p>
                </div>
                <span className={`text-sm font-mono ${c.label} shrink-0`}>View deep dive →</span>
              </Link>
            );
          })}
        </div>
      </section>
      <Projects />
    </>
  );
}

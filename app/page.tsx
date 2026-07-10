import Link from "next/link";
import Hero from "./components/Hero";
import CareerFocus from "./components/CareerFocus";
import { colors } from "./lib/colors";
import { featuredProject, projects } from "./lib/projects";

export default function Home() {
  const c = colors[featuredProject.color];

  return (
    <>
      <Hero />
      <CareerFocus />

      <section className="py-20 px-6">
        <div className="container-grid">
          <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Featured Project</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-10 tracking-tight">
            Enterprise Infrastructure Lab
          </h2>

          <Link
            href={`/projects/${featuredProject.slug}`}
            className={`group block rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] overflow-hidden`}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8">
                <span className={`text-xs font-mono ${c.label}`}>{featuredProject.category}</span>
                <h3 className="font-heading text-2xl font-semibold text-ink mt-2 mb-3">{featuredProject.title}</h3>
                <p className="text-body leading-relaxed mb-6">{featuredProject.problem}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.slice(0, 6).map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-mono text-[#2F75C8] font-medium">
                  View full case study →
                </span>
              </div>
              <div className="md:col-span-2 bg-canvas border-t md:border-t-0 md:border-l border-border p-8 flex flex-col justify-center gap-4">
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wide mb-1">Environment</p>
                  <p className="text-sm text-body leading-relaxed">Proxmox VE, Windows Server 2022, pfSense</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wide mb-1">Ownership</p>
                  <p className="text-sm text-body leading-relaxed">Designed and administered independently, end-to-end</p>
                </div>
              </div>
            </div>
          </Link>

          {projects.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {projects.map((project) => {
                const pc = colors[project.color];
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`flex flex-col p-6 rounded-lg bg-white border ${pc.border} ${pc.borderHover} transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    <div className={`h-1 w-10 rounded-full mb-4 ${pc.accentBar}`} />
                    <span className={`text-xs font-mono ${pc.label} mb-1`}>{project.category}</span>
                    <h3 className="text-ink font-heading font-semibold leading-snug">{project.title}</h3>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong text-body rounded-lg hover:border-[#2F75C8] hover:text-[#2F75C8] transition-colors text-sm font-medium"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">
            Let&apos;s talk operations
          </h2>
          <p className="text-slate-300 mb-8">
            Open to Systems Administration, IT Operations, and Identity &amp; Access Management roles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

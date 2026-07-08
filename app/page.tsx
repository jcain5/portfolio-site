import Link from "next/link";
import Hero from "./components/Hero";
import CareerFocus from "./components/CareerFocus";
import { colors } from "./lib/colors";
import { featuredProject, projects } from "./lib/projects";

export default function Home() {
  const teaser = [featuredProject, ...projects.slice(0, 2)];

  return (
    <>
      <Hero />
      <CareerFocus />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">PROJECTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            Featured <span className="text-cyan-400">Work</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {teaser.map((project) => {
              const c = colors[project.color];
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`flex flex-col p-6 rounded-xl bg-gradient-to-b ${c.glow} to-[#0a0f1e] border ${c.border} ${c.borderHover} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-lg ${c.bg} flex items-center justify-center text-2xl mb-4`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-mono ${c.label} mb-1`}>{project.category}</span>
                  <h3 className="text-white font-semibold leading-snug">{project.title}</h3>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let&apos;s <span className="text-cyan-400">talk infrastructure</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Open to Systems Administration, IT Operations, and Infrastructure Engineering roles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

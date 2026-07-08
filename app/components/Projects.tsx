"use client";
import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { projects } from "../lib/projects";
import { useCareerFocus } from "../context/CareerFocusContext";

export default function Projects() {
  const { activeFocus } = useCareerFocus();

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title={
        <>
          Case <span className="text-cyan-400">Studies</span>
        </>
      }
      intro="Hands-on infrastructure, identity, and systems work — built in a self-managed lab and applied in real enterprise environments."
      headingLevel="h1"
      threshold={0.05}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const c = colors[project.color];
          const isHighlighted = !activeFocus || project.focusTracks.includes(activeFocus);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`relative flex flex-col p-6 rounded-xl bg-gradient-to-b ${c.glow} to-[#0a0f1e] border ${c.border} ${c.borderHover} transition-all duration-300 hover:-translate-y-1 ${
                activeFocus ? (isHighlighted ? "opacity-100" : "opacity-25") : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${c.bg} flex items-center justify-center text-2xl mb-5`}>
                {project.icon}
              </div>

              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
                {project.status && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-500/40 text-amber-400 bg-amber-500/10">
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg leading-snug mb-4">{project.title}</h3>

              <ul className="space-y-2 mb-6 flex-1">
                {project.bullets.slice(0, 4).map((b, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.label} ${c.bg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-8 p-5 rounded-xl border border-dashed border-slate-700 text-center">
        <p className="text-slate-500 text-sm">
          <span className="text-slate-400">More projects in progress — PowerShell automation scripts, Azure sandbox labs, and LetsDefend SOC Analyst path.</span>
        </p>
      </div>
    </Section>
  );
}

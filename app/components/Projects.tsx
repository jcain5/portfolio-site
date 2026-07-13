"use client";
import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { getNonFeaturedProjects } from "../lib/projects";
import { useCareerFocus } from "../context/CareerFocusContext";

export default function Projects() {
  const { activeFocus } = useCareerFocus();
  const projects = getNonFeaturedProjects();

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Case Studies"
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
              className={`relative flex flex-col p-6 rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] ${
                activeFocus ? (isHighlighted ? "opacity-100" : "opacity-40") : ""
              }`}
            >
              <div className={`h-1 w-10 rounded-full mb-5 ${c.accentBar}`} />

              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
                {project.status && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="text-ink font-heading font-semibold text-lg leading-snug mb-4">{project.title}</h3>

              <ul className="space-y-2 mb-6 flex-1">
                {project.bullets.slice(0, 4).map((b, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.label} ${c.chipBg} border-transparent`}
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
      <div className="mt-8 p-5 rounded-lg border border-dashed border-border-strong text-center">
        <p className="text-muted text-sm">
          More projects in progress — PowerShell automation scripts, Azure sandbox labs, and LetsDefend SOC Analyst path.
        </p>
      </div>
    </Section>
  );
}

"use client";
import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import type { ProjectCaseStudy } from "../lib/projects";
import { useCareerFocus } from "../context/CareerFocusContext";

export default function Projects({ projects }: { projects: ProjectCaseStudy[] }) {
  const { activeFocus } = useCareerFocus();

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
          const isHighlighted = !activeFocus || project.focusTracks.includes(activeFocus);
          return (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="grid"
              isDimmed={!!activeFocus && !isHighlighted}
            />
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

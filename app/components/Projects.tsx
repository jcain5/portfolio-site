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
      intro="Networking, automation, and software development evidence that supports the infrastructure and systems administration work above."
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
    </Section>
  );
}

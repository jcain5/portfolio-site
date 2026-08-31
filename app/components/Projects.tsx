import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import type { ProjectCaseStudy } from "../lib/projects";

interface ProjectsProps {
  projects: ProjectCaseStudy[];
  id?: string;
  heading?: string;
  intro?: string;
}

export default function Projects({
  projects,
  id = "projects",
  heading = "Case Studies",
  intro,
}: ProjectsProps) {
  return (
    <Section
      id={id}
      eyebrow="PROJECTS"
      title={heading}
      intro={intro}
      headingLevel="h2"
      threshold={0.05}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="grid" />
        ))}
      </div>
    </Section>
  );
}

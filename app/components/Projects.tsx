import Section from "./ui/Section";
import ProjectCard from "./ProjectCard";
import type { ProjectCaseStudy } from "../lib/projects";

export default function Projects({ projects }: { projects: ProjectCaseStudy[] }) {
  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Case Studies"
      intro="Networking, automation, and software development evidence that supports the infrastructure and systems administration work above."
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

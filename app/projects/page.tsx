import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects, getNonFeaturedProjects } from "../lib/projects";

export default async function ProjectsPage() {
  const [featured, nonFeatured] = await Promise.all([getFeaturedProjects(), getNonFeaturedProjects()]);

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="container-grid space-y-4">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="featured-secondary"
              showImage={false}
              ctaLabel="View deep dive →"
              size={project.featuredVariant === "primary" ? "large" : "default"}
            />
          ))}
        </div>
      </section>
      <Projects projects={nonFeatured} />
    </>
  );
}

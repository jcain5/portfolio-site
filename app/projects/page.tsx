import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects, getNonFeaturedProjects } from "../lib/projects";

const title = "Projects | Jeremy Cain";
const description =
  "Networking, automation, and software development evidence that supports the infrastructure and systems administration work above.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

export default async function ProjectsPage() {
  const [featured, nonFeatured] = await Promise.all([getFeaturedProjects(), getNonFeaturedProjects()]);

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="container-grid space-y-4">
          <div className="mb-2">
            <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Projects</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-2 tracking-tight">Projects</h1>
            <h2 className="font-heading text-lg font-semibold text-body">Featured Projects</h2>
          </div>
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

import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects, getProjectsByTier } from "../lib/projects";

const title = "Infrastructure | Jeremy Cain";
const description =
  "Networking, automation, and software development evidence that supports the infrastructure and systems administration work above.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
};

export default async function ProjectsPage() {
  const [featured, tiers] = await Promise.all([getFeaturedProjects(), getProjectsByTier()]);

  // Featured projects already render in their own tier (Infrastructure
  // Ownership), so the grid below excludes anything already shown above.
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const administrationAutomation = tiers.administrationAutomation.filter((p) => !featuredSlugs.has(p.slug));
  const supportingTechnicalWork = tiers.supportingTechnicalWork.filter((p) => !featuredSlugs.has(p.slug));
  const archive = tiers.archive.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <>
      <section className="pt-32 pb-4 px-6">
        <div className="container-grid space-y-4">
          <div className="mb-2">
            <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Infrastructure</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-2 tracking-tight">Infrastructure</h1>
            {featured.length > 0 && (
              <h2 className="font-heading text-lg font-semibold text-body">Infrastructure Ownership</h2>
            )}
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

      {administrationAutomation.length > 0 && (
        <Projects
          id="administration-automation"
          projects={administrationAutomation}
          heading="Administration & Automation"
          intro="PowerShell, Python, health tooling, and administration utilities."
        />
      )}
      {supportingTechnicalWork.length > 0 && (
        <Projects
          id="supporting-technical-work"
          projects={supportingTechnicalWork}
          heading="Supporting Technical Work"
          intro="Useful projects that reinforce the primary trajectory without standing as flagship infrastructure evidence."
        />
      )}
      {archive.length > 0 && (
        <Projects id="archive" projects={archive} heading="Archive" intro="Lower-priority projects, published for reference." />
      )}
    </>
  );
}

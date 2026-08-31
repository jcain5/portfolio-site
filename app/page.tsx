import Link from "next/link";
import Hero from "./components/Hero";
import EvidenceModel from "./components/EvidenceModel";
import CoreCompetencies from "./components/CoreCompetencies";
import TechDocsTeaser from "./components/TechDocsTeaser";
import ProjectCard from "./components/ProjectCard";
import { getHomepageFeaturedProjects } from "./lib/projects";
import { getDocumentationEntries } from "./lib/documentation";

export default async function Home() {
  const [{ flagship, supporting }, documentationEntries] = await Promise.all([
    getHomepageFeaturedProjects(),
    getDocumentationEntries(),
  ]);

  return (
    <>
      <Hero />
      <EvidenceModel />
      <CoreCompetencies />

      {flagship && (
        <section className="py-20 px-6">
          <div className="container-grid">
            <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Featured Infrastructure</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-10 tracking-tight">
              {flagship.title}
            </h2>

            <ProjectCard project={flagship} variant="primary" />

            {supporting.length > 0 && (
              <>
                <p className="font-mono text-muted text-xs tracking-[0.15em] font-medium mt-12 mb-4 uppercase">Supporting Work</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {supporting.map((project) => (
                    <ProjectCard key={project.slug} project={project} variant="grid" />
                  ))}
                </div>
              </>
            )}

            <div className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong text-body rounded-lg hover:border-[#2F75C8] hover:text-[#2F75C8] transition-colors text-sm font-medium"
              >
                View All Infrastructure →
              </Link>
            </div>
          </div>
        </section>
      )}

      <TechDocsTeaser entries={documentationEntries} />

      <section className="py-20 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">
            Let&apos;s talk operations
          </h2>
          <p className="text-slate-300 mb-8">
            Open to Systems Administration, Infrastructure Administration, and IT Operations roles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

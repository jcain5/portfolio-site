import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import CareerFocus from "./components/CareerFocus";
import { colors } from "./lib/colors";
import { getFeaturedProjects, getNonFeaturedProjects } from "./lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();
  const primary = featured.find((p) => p.featuredVariant === "primary") ?? featured[0];
  const secondaryProjects = featured.filter((p) => p !== primary);
  const otherProjects = getNonFeaturedProjects();
  const c = colors[primary.color];

  return (
    <>
      <Hero />
      <CareerFocus />

      <section className="py-20 px-6">
        <div className="container-grid">
          <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Featured Projects</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-10 tracking-tight">
            {primary.title}
          </h2>

          <Link
            href={`/projects/${primary.slug}`}
            className={`group block rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] overflow-hidden`}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8">
                <span className={`text-xs font-mono ${c.label}`}>{primary.category}</span>
                <h3 className="font-heading text-2xl font-semibold text-ink mt-2 mb-3">{primary.title}</h3>
                <p className="text-body leading-relaxed mb-6">{primary.problem ?? primary.summary}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(primary.featuredChips ?? primary.technologies.slice(0, 6)).map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-mono text-[#2F75C8] font-medium">
                  View Case Study →
                </span>
              </div>
              <div className="md:col-span-2 relative h-56 md:h-auto border-t md:border-t-0 md:border-l border-border">
                {primary.screenshots?.[0]?.src ? (
                  <Image
                    src={primary.screenshots[0].src}
                    alt={primary.screenshots[0].alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 text-center bg-canvas">
                    <p className="text-xs font-mono text-muted">Image pending</p>
                  </div>
                )}
              </div>
            </div>
          </Link>

          {secondaryProjects.length > 0 && (
            <div className="mt-6 space-y-4">
              {secondaryProjects.map((project) => {
                const sc = colors[project.color];
                const thumb = project.screenshots?.[0];
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`relative flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-lg bg-white border ${sc.border} ${sc.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)]`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${sc.badge}`}>
                          FEATURED PROJECT
                        </span>
                        {project.status && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-ink mt-2 mb-1">{project.title}</h3>
                      <p className="text-body text-sm leading-relaxed max-w-2xl mb-3">{project.summary}</p>
                      {project.featuredChips && (
                        <div className="flex flex-wrap gap-2">
                          {project.featuredChips.map((tag) => (
                            <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${sc.label} ${sc.chipBg}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="relative w-full sm:w-48 aspect-video shrink-0 rounded-md overflow-hidden border border-border">
                      {thumb?.src ? (
                        <Image
                          src={thumb.src}
                          alt={thumb.alt}
                          fill
                          sizes="192px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-canvas p-2 text-center">
                          <p className="text-[11px] font-mono text-muted">Image pending</p>
                        </div>
                      )}
                    </div>
                    <span className={`text-sm font-mono ${sc.label} shrink-0`}>View Case Study →</span>
                  </Link>
                );
              })}
            </div>
          )}

          {otherProjects.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-6 mt-6">
              {otherProjects.map((project) => {
                const pc = colors[project.color];
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`flex flex-col p-6 rounded-lg bg-white border ${pc.border} ${pc.borderHover} transition-all duration-200 hover:-translate-y-0.5`}
                  >
                    <div className={`h-1 w-10 rounded-full mb-4 ${pc.accentBar}`} />
                    <span className={`text-xs font-mono ${pc.label} mb-1`}>{project.category}</span>
                    <h3 className="text-ink font-heading font-semibold leading-snug">{project.title}</h3>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border-strong text-body rounded-lg hover:border-[#2F75C8] hover:text-[#2F75C8] transition-colors text-sm font-medium"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-4 tracking-tight">
            Let&apos;s talk operations
          </h2>
          <p className="text-slate-300 mb-8">
            Open to Systems Administration, IT Operations, and Identity &amp; Access Management roles.
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

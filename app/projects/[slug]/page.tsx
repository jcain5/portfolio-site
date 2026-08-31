import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { colors } from "../../lib/colors";
import { getAllProjects, getProjectBySlug } from "../../lib/projects";
import ScreenshotGallery from "../../components/ui/ScreenshotGallery";
import EvidenceBadge from "../../components/ui/EvidenceBadge";
import ProjectSection from "../../components/ProjectSection";
import RelatedDocumentationList from "../../components/RelatedDocumentationList";

// A custom section titled "Documentation" or "Evidence" (case/whitespace
// insensitive) is treated as introductory prose for the Related
// Documentation links / Screenshot Gallery respectively — when one exists,
// that block anchors directly beneath it instead of rendering in its
// default fixed slot higher up the page. This is title-keyed, not
// slug-keyed, so it applies to any CMS project entry that adopts the
// pattern, and falls back to the original fixed position when no matching
// custom section exists (unchanged behavior for every other project today).
function normalizedTitle(title: string) {
  return title.trim().toLowerCase();
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const title = project.metaTitle ?? `${project.title} | Jeremy M. Cain`;
  const description = project.metaDescription ?? project.summary;
  const url = `/projects/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const c = colors[project.color];

  const hasDocumentationSection = project.customSections?.some(
    (s) => normalizedTitle(s.title) === "documentation"
  ) ?? false;
  const hasEvidenceSection = project.customSections?.some(
    (s) => normalizedTitle(s.title) === "evidence"
  ) ?? false;
  const hasRelatedDocs = project.relatedDocumentation && project.relatedDocumentation.length > 0;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  // Anchor to the matching custom section only when both the section and the
  // content it introduces are actually present — otherwise fall back to the
  // default fixed position so nothing silently disappears.
  const anchorRelatedDocs = hasDocumentationSection && hasRelatedDocs;
  const anchorScreenshots = hasEvidenceSection && hasScreenshots;

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="text-sm font-mono text-muted hover:text-[#2F75C8] transition-colors">
          ← All Projects
        </Link>

        <div className="mt-6 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
            {project.status && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
                {project.status}
              </span>
            )}
            <EvidenceBadge
              source={project.evidenceSource}
              status={project.evidenceStatus === "demonstrated" ? undefined : project.evidenceStatus}
            />
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-ink leading-tight mt-2">{project.title}</h1>
          {project.subtitle && (
            <p className="text-sm text-muted mt-1">{project.subtitle}</p>
          )}
        </div>

        <div className="mb-10">
          <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Executive Summary</h2>
          <p className="text-body leading-relaxed">{project.summary}</p>
        </div>

        <div className="space-y-8">
          {project.overview && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Overview</h2>
              <p className="text-body leading-relaxed">{project.overview}</p>
            </div>
          )}
          {project.problem && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Business Problem</h2>
              <p className="text-body leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.solution && project.solution.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Solution</h2>
              <ul className="space-y-2">
                {project.solution.map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(project.architecture || project.architectureDiagram) && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Architecture</h2>
              {project.architecture && <p className="text-body leading-relaxed">{project.architecture}</p>}
              {project.architectureDiagram && (
                <pre className="mt-3 bg-canvas border border-border rounded-lg p-5 text-xs font-mono text-body overflow-x-auto">
                  {project.architectureDiagram}
                </pre>
              )}
            </div>
          )}
          {project.environment && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Environment</h2>
              <p className="text-body leading-relaxed">{project.environment}</p>
            </div>
          )}
          {project.ownership && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Ownership</h2>
              <p className="text-body leading-relaxed">{project.ownership}</p>
            </div>
          )}
          {project.technologyCategories && project.technologyCategories.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Technology Breakdown</h2>
              <div className="space-y-4">
                {project.technologyCategories.map((group) => (
                  <div key={group.category}>
                    <p className="text-sm font-mono text-ink font-medium mb-2">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.dnsConfiguration && project.dnsConfiguration.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">DNS Configuration</h2>
              <div className="space-y-4">
                {project.dnsConfiguration.map((entry) => (
                  <div key={entry.label}>
                    <p className="text-sm font-mono text-ink font-medium mb-1">{entry.label}</p>
                    <p className="text-sm text-body leading-relaxed">{entry.description}</p>
                    {entry.record && (
                      <code className="mt-1 inline-block text-xs font-mono px-2 py-1 rounded-md bg-canvas border border-border text-body">
                        {entry.record}
                      </code>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.emailAliases && project.emailAliases.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Email Alias Strategy</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="py-2 pr-4 font-mono text-xs uppercase tracking-wide text-muted">Alias</th>
                      <th scope="col" className="py-2 font-mono text-xs uppercase tracking-wide text-muted">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.emailAliases.map((row) => (
                      <tr key={row.alias} className="border-b border-border">
                        <td className="py-2 pr-4 font-mono text-body">{row.alias}</td>
                        <td className="py-2 text-body">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {project.implementation && project.implementation.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Implementation</h2>
              <ul className="space-y-2">
                {project.implementation.map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Features</h2>
              <ul className="space-y-2">
                {project.features.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.infrastructureOperations && project.infrastructureOperations.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Infrastructure &amp; Operations</h2>
              <ul className="space-y-2">
                {project.infrastructureOperations.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.validation && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Production Validation</h2>
              <p className="text-body leading-relaxed">{project.validation}</p>
            </div>
          )}
          {project.troubleshootingHighlights && project.troubleshootingHighlights.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Troubleshooting Highlights</h2>
              <ul className="space-y-2">
                {project.troubleshootingHighlights.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Skills Demonstrated</h2>
              <ul className="space-y-2">
                {project.skillsDemonstrated.map((skill, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.currentLimitations && project.currentLimitations.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Current Limitations</h2>
              <ul className="space-y-2">
                {project.currentLimitations.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.documentation && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Documentation</h2>
              <p className="text-body leading-relaxed">{project.documentation}</p>
            </div>
          )}
          {project.roadmap && project.roadmap.length > 0 && (
            <div>
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Current Roadmap (Planned)</h2>
              <ul className="space-y-2">
                {project.roadmap.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.transparencyNote && (
            <div className="p-5 rounded-lg bg-amber-50 border border-amber-200">
              <h2 className="text-xs font-mono text-amber-700 tracking-[0.15em] uppercase font-medium mb-2">Transparency Note</h2>
              <p className="text-body leading-relaxed">{project.transparencyNote}</p>
            </div>
          )}
          {project.privacy && (
            <div className="p-5 rounded-lg bg-amber-50 border border-amber-200">
              <h2 className="text-xs font-mono text-amber-700 tracking-[0.15em] uppercase font-medium mb-2">Privacy</h2>
              <p className="text-body leading-relaxed">{project.privacy}</p>
            </div>
          )}
          {project.securityNote && (
            <div className="p-5 rounded-lg bg-amber-50 border border-amber-200">
              <h2 className="text-xs font-mono text-amber-700 tracking-[0.15em] uppercase font-medium mb-2">Security Note</h2>
              <p className="text-body leading-relaxed">{project.securityNote}</p>
            </div>
          )}
          {project.lessonsLearned && (
            <div className="p-5 rounded-lg bg-canvas border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Lessons Learned</h2>
              <p className="text-body leading-relaxed">{project.lessonsLearned}</p>
            </div>
          )}
          {!anchorRelatedDocs && hasRelatedDocs && (
            <RelatedDocumentationList docs={project.relatedDocumentation} labelClass={c.label} />
          )}
          {project.outcome && project.outcome.length > 0 && (
            <div className="p-5 rounded-lg bg-canvas border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Outcome</h2>
              {project.outcome.length === 1 ? (
                <p className="text-body leading-relaxed">{project.outcome[0]}</p>
              ) : (
                <ul className="space-y-2">
                  {project.outcome.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                      <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {project.verification && (
            <div className="p-5 rounded-lg bg-canvas border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-2">Verification</h2>
              <p className="text-body leading-relaxed mb-3">{project.verification.summary}</p>
              <ul className="space-y-2">
                {project.verification.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!anchorScreenshots && hasScreenshots && (
            <ScreenshotGallery screenshots={project.screenshots!} />
          )}

          {/* CMS-authored sections that don't fit a named field above — rendered
              last, in the order the editor listed them in Keystatic. A section
              titled "Documentation" or "Evidence" pulls the Related
              Documentation links / Screenshot Gallery in directly beneath it
              (see anchorRelatedDocs / anchorScreenshots above). */}
          {project.customSections?.map((section, i) => {
            const key = normalizedTitle(section.title);
            return (
              <Fragment key={i}>
                <ProjectSection title={section.title} body={section.body} code={section.code} />
                {key === "documentation" && anchorRelatedDocs && (
                  <RelatedDocumentationList docs={project.relatedDocumentation} labelClass={c.label} />
                )}
                {key === "evidence" && anchorScreenshots && (
                  <ScreenshotGallery screenshots={project.screenshots!} />
                )}
              </Fragment>
            );
          })}

          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <div className="p-5 rounded-lg border border-border">
              <h2 className="text-xs font-mono text-[#2F75C8] tracking-[0.15em] uppercase font-medium mb-3">Related Projects</h2>
              <ul className="space-y-2">
                {project.relatedProjects.map((rel) => (
                  <li key={rel.slug}>
                    <Link href={`/projects/${rel.slug}`} className={`text-sm font-mono ${c.label} hover:underline`}>
                      {rel.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tag) => (
              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
              >
                View on GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
              >
                View Live ↗
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
              >
                View Demo ↗
              </a>
            )}
            {project.documentationUrl && (
              <a
                href={project.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
              >
                Documentation ↗
              </a>
            )}
            {project.externalReference && (
              <a
                href={project.externalReference.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-mono ${c.label} hover:underline`}
              >
                {project.externalReference.label} ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

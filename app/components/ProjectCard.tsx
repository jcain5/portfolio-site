import Image from "next/image";
import Link from "next/link";
import { colors } from "../lib/colors";
import EvidenceBadge from "./ui/EvidenceBadge";
import type { ProjectCaseStudy } from "../lib/projects";

// Only surfaces EvidenceStatus alongside the source badge when it adds real
// information — "demonstrated" is the implicit default and would just be
// clutter next to the lifecycle status pill.
function evidenceStatusIfNotable(project: ProjectCaseStudy) {
  return project.evidenceStatus === "demonstrated" ? undefined : project.evidenceStatus;
}

interface ProjectCardProps {
  project: ProjectCaseStudy;
  variant: "primary" | "featured-secondary" | "grid";
  ctaLabel?: string;
  showImage?: boolean;
  size?: "default" | "large";
}

export default function ProjectCard({
  project,
  variant,
  ctaLabel = "View Case Study →",
  showImage = true,
  size = "default",
}: ProjectCardProps) {
  const c = colors[project.color];
  const thumb = project.heroImage ?? project.screenshots?.[0]?.src;
  const thumbAlt = project.screenshots?.[0]?.alt ?? project.title;

  if (variant === "primary") {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={`group block rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] overflow-hidden`}
      >
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
              <EvidenceBadge source={project.evidenceSource} status={evidenceStatusIfNotable(project)} />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-ink mt-2 mb-3">{project.title}</h3>
            <p className="text-body leading-relaxed mb-6">{project.problem ?? project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {(project.featuredChips ?? project.technologies.slice(0, 6)).map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm font-mono text-[#2F75C8] font-medium">{ctaLabel}</span>
          </div>
          <div className="md:col-span-2 relative h-56 md:h-auto border-t md:border-t-0 md:border-l border-border">
            {thumb ? (
              <Image src={thumb} alt={thumbAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 text-center bg-canvas">
                <p className="text-xs font-mono text-muted">Image pending</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured-secondary") {
    const isLarge = size === "large";
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={`relative flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] ${
          isLarge ? "p-8" : "p-6"
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>FEATURED PROJECT</span>
            {project.status && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
                {project.status}
              </span>
            )}
            <EvidenceBadge source={project.evidenceSource} status={evidenceStatusIfNotable(project)} />
          </div>
          <h3 className={`font-heading font-semibold text-ink mt-2 mb-1 ${isLarge ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
          <p className="text-body text-sm leading-relaxed max-w-2xl mb-3">{project.summary}</p>
          {project.featuredChips && (
            <div className="flex flex-wrap gap-2">
              {project.featuredChips.map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-md font-mono ${c.label} ${c.chipBg}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {showImage && (
          <div className="relative w-full sm:w-48 aspect-video shrink-0 rounded-md overflow-hidden border border-border">
            {thumb ? (
              <Image src={thumb} alt={thumbAlt} fill sizes="192px" className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-canvas p-2 text-center">
                <p className="text-[11px] font-mono text-muted">Image pending</p>
              </div>
            )}
          </div>
        )}
        <span className={`text-sm font-mono ${c.label} shrink-0`}>{ctaLabel}</span>
      </Link>
    );
  }

  // variant === "grid"
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`relative flex flex-col p-6 rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)]`}
    >
      <div className={`h-1 w-10 rounded-full mb-5 ${c.accentBar}`} />

      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className={`text-xs font-mono ${c.label}`}>{project.category}</span>
        {project.status && (
          <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 bg-amber-50">
            {project.status}
          </span>
        )}
        <EvidenceBadge source={project.evidenceSource} status={evidenceStatusIfNotable(project)} />
      </div>
      <h3 className="text-ink font-heading font-semibold text-lg leading-snug mb-2">{project.title}</h3>
      {project.cardSummary && <p className="text-body text-sm leading-relaxed mb-4">{project.cardSummary}</p>}

      <ul className="space-y-2 mb-6 flex-1">
        {project.bullets.slice(0, 4).map((b, j) => (
          <li key={j} className="flex gap-2.5 text-sm text-body leading-relaxed">
            <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tag) => (
            <span key={tag} className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.label} ${c.chipBg} border-transparent`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

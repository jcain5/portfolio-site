import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { toolsAndPlatforms } from "../lib/skills";
import type { Competency } from "../lib/competencies";

export interface EvidenceProject {
  slug: string;
  title: string;
}

export default function Skills({
  competencies,
  evidenceByCompetency,
}: {
  competencies: Competency[];
  evidenceByCompetency: Record<string, EvidenceProject[]>;
}) {
  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title="Competencies & Evidence"
      tone="alt"
      headingLevel="h1"
      firstOnPage
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {competencies.map((competency) => {
          const c = colors[competency.color];
          const evidence = evidenceByCompetency[competency.slug] ?? [];
          return (
            <div
              key={competency.slug}
              className={`p-6 rounded-lg bg-canvas border ${c.border} ${c.borderHover} transition-all duration-200`}
            >
              <div className="flex items-center gap-2 mb-2">
                {competency.icon && <span aria-hidden="true">{competency.icon}</span>}
                <span className={`text-sm font-semibold ${c.label}`}>{competency.label}</span>
              </div>
              {competency.description && (
                <p className="text-xs text-muted leading-relaxed mb-4">{competency.description}</p>
              )}
              <ul className="space-y-2.5 mb-4">
                {competency.skills.map((skill) => (
                  <li key={skill.label} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    <span className="text-sm text-body">{skill.label}</span>
                  </li>
                ))}
              </ul>
              {evidence.length > 0 && (
                <div className="pt-3 border-t border-border">
                  <p className="text-[11px] font-mono text-muted uppercase tracking-wide mb-2">Evidence</p>
                  <ul className="space-y-1">
                    {evidence.map((project) => (
                      <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`} className={`text-xs font-mono ${c.label} hover:underline`}>
                          {project.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tools strip */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs font-mono text-muted tracking-widest mb-4 uppercase">Tools &amp; Platforms</p>
        <div className="flex flex-wrap gap-2">
          {toolsAndPlatforms.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-md bg-white text-body border border-border hover:border-border-strong transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

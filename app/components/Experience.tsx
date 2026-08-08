"use client";
import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { jobs } from "../lib/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title="Career Timeline"
      intro={
        <>
          Enterprise IT operations experience, reinforced by hands-on infrastructure engineering through my{" "}
          <Link href="/projects/enterprise-infrastructure-lab" className="text-[#2F75C8] hover:underline">
            Enterprise Infrastructure Lab
          </Link>
          , where I design, build, and administer the same Windows Server, identity, virtualization, and networking
          systems I operate professionally.
        </>
      }
      tone="alt"
      maxWidth="4xl"
      headingLevel="h1"
      threshold={0.05}
      firstOnPage
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {jobs.map((job, i) => {
            const a = colors[job.accent];
            return (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${a.dot} -translate-x-1/2 ring-4 ring-white`} />

                <div className="p-6 rounded-lg bg-white border border-border hover:border-border-strong transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-ink font-heading font-semibold text-lg leading-tight">{job.title}</h3>
                      <div className="text-body text-sm mt-0.5">
                        {job.company} <span className="text-muted">·</span> {job.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${a.badge}`}>
                        {job.type}
                      </span>
                      <span className="text-xs text-muted font-mono whitespace-nowrap">{job.period}</span>
                    </div>
                  </div>

                  {job.coreTechnologies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-mono text-muted uppercase tracking-wide mb-2">Core Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.coreTechnologies.map((tech) => (
                          <span key={tech} className={`text-xs px-2 py-0.5 rounded-md font-mono ${a.label} ${a.chipBg}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-body">
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${a.dot}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {job.relatedProjects && job.relatedProjects.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4">
                      {job.relatedProjects.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/projects/${rp.slug}`}
                          className={`text-xs font-mono ${a.label} hover:underline`}
                        >
                          {rp.title} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pl-12">
          <p className="text-xs font-mono text-muted uppercase tracking-wide mb-2">Related Personal Projects</p>
          <Link
            href="/projects/professional-email-infrastructure"
            className="text-sm font-mono text-[#2F75C8] hover:underline"
          >
            Professional Email Infrastructure →
          </Link>
        </div>
      </div>
    </Section>
  );
}

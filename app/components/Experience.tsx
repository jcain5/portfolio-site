"use client";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { jobs } from "../lib/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="EXPERIENCE"
      title={
        <>
          Career <span className="text-cyan-400">Timeline</span>
        </>
      }
      tone="alt"
      maxWidth="4xl"
      headingLevel="h1"
      threshold={0.05}
    >
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />

        <div className="space-y-10">
          {jobs.map((job, i) => {
            const a = colors[job.accent];
            return (
              <div key={i} className="relative pl-12">
                {/* Dot */}
                <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${a.dot} -translate-x-1/2 ring-2 ring-[#0f172a]`} />

                <div className="p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">{job.title}</h3>
                      <div className="text-slate-400 text-sm mt-0.5">
                        {job.company} <span className="text-slate-600">·</span> {job.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${a.badgeBg} ${a.label}`}>
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-400 font-mono whitespace-nowrap">{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400">
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${a.dot}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

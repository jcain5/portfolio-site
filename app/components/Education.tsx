"use client";
import { useEffect, useRef } from "react";

const degrees = [
  {
    degree: "M.S. Cybersecurity & Information Assurance",
    school: "Western Governors University",
    track: undefined,
    status: "In Progress",
    statusColor: "border-amber-500/30 text-amber-400",
    accent: "cyan",
    coursework: [
      "Security Foundations",
      "Security Operations",
      "Penetration Testing",
      "Cybersecurity Architecture and Engineering",
      "Cybersecurity Management",
      "Secure Network Design",
      "Cloud Security",
      "Governance, Risk, and Compliance",
      "Secure Software Design",
    ],
  },
  {
    degree: "B.S. Information Technology",
    school: "Western Governors University",
    track: "Network & Security Operations Track",
    status: "Completed",
    statusColor: "border-emerald-500/30 text-emerald-400",
    accent: "slate",
    coursework: [
      "Network & Security Foundations",
      "Network & Security Applications",
      "Networks",
      "Implementing & Administering Network Solutions",
      "Software Defined Networking",
      "Linux Foundations",
      "Python",
      "Cloud Foundations",
      "Managing Cloud Security",
      "Cryptography",
    ],
  },
];

const accentMap: Record<string, { dot: string }> = {
  cyan:  { dot: "bg-cyan-400" },
  slate: { dot: "bg-slate-500" },
};

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="section-fade py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">04. EDUCATION</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Academic <span className="text-cyan-400">Background</span>
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-8">
            {degrees.map((d, i) => {
              const a = accentMap[d.accent];
              return (
                <div key={i} className="relative pl-12">
                  <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${a.dot} -translate-x-1/2 ring-2 ring-[#0f172a]`} />

                  <div className="p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg leading-tight">{d.degree}</h3>
                        <div className="text-slate-400 text-sm mt-0.5">
                          {d.school}
                          {d.track && <> <span className="text-slate-600">·</span> {d.track}</>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${d.statusColor}`}>
                          {d.status}
                        </span>
                        <span className="text-xs font-mono px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400">
                          WGU
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-xs text-slate-500 font-mono mb-2">Coursework</div>
                      <div className="flex flex-wrap gap-1.5">
                        {d.coursework.map((c) => (
                          <span key={c} className="text-xs px-2 py-0.5 rounded-md border border-slate-700 text-slate-400 font-mono">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

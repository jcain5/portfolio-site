"use client";
import { useEffect, useRef } from "react";

const jobs = [
  {
    title: "Technology Operations Associate",
    company: "Wells Fargo",
    location: "Irving, TX",
    period: "Feb 2022 – Present",
    type: "Full-time",
    highlights: [
      "Provide technical support for 1,000+ internal employees supporting business-critical financial operations",
      "Troubleshoot Windows 10/11, Microsoft 365, VMware Horizon, Citrix Virtual Desktops, and Windows Cloud PCs",
      "Administer Microsoft Intune and BlackBerry UEM to support enterprise mobile devices",
      "Resolve hardware, software, authentication, and account issues via phone, remote support, and enterprise tools",
      "Consistently maintain a 100% ticket quality score while meeting service-level expectations",
      "Collaborate with multiple technology teams to resolve complex issues and improve service delivery",
    ],
    accent: "cyan",
  },
  {
    title: "End User Support Specialist",
    company: "Amentum",
    location: "Fort Worth, TX",
    period: "Oct 2020 – Jun 2021",
    type: "Full-time",
    highlights: [
      "Supported 1,000+ global employees across Windows workstations, Microsoft 365, and Azure Active Directory",
      "Provisioned Active Directory and Microsoft 365 accounts using PowerShell automation",
      "Managed mobile devices using VMware AirWatch and configured Cisco IP phones",
      "Installed software, resolved hardware failures, and supported multi-factor authentication",
    ],
    accent: "purple",
  },
  {
    title: "Technical Support III (Contractor)",
    company: "Bank of America",
    location: "Irving, TX",
    period: "Apr 2020 – Oct 2020",
    type: "Contract",
    highlights: [
      "Delivered advanced support for enterprise laptops, virtual machines, and Chromebooks",
      "Resolved Level II technical issues using BMC Remedy and remote support tools",
      "Assisted users with hardware, software, and business application issues",
    ],
    accent: "slate",
  },
  {
    title: "Service Desk Analyst I",
    company: "Amynta Group",
    location: "Bedford, TX",
    period: "Jul 2018 – Mar 2020",
    type: "Full-time",
    highlights: [
      "Provided technical support for Windows systems, Active Directory accounts, printers, and business applications",
      "Managed and routed ServiceNow incidents to appropriate support teams",
      "Assisted in the successful deployment of 600+ Windows 10 workstations",
      "Created documentation to improve knowledge sharing and issue resolution consistency",
    ],
    accent: "slate",
  },
  {
    title: "IT Support Specialist",
    company: "West Freeway Church of Christ",
    location: "Fort Worth, TX",
    period: "Sep 2017 – Present",
    type: "Volunteer",
    highlights: [
      "Manage IT infrastructure including desktops, livestream systems, and GoTo Connect PBX",
      "Provide remote and onsite support with emphasis on proactive issue resolution",
    ],
    accent: "emerald",
  },
];

const accentMap: Record<string, { dot: string; line: string; badge: string; badgeBg: string }> = {
  cyan:    { dot: "bg-cyan-400",    line: "bg-cyan-400/30",    badge: "text-cyan-400",    badgeBg: "bg-cyan-500/10 border-cyan-500/30" },
  purple:  { dot: "bg-purple-400",  line: "bg-purple-400/30",  badge: "text-purple-400",  badgeBg: "bg-purple-500/10 border-purple-500/30" },
  emerald: { dot: "bg-emerald-400", line: "bg-emerald-400/30", badge: "text-emerald-400", badgeBg: "bg-emerald-500/10 border-emerald-500/30" },
  slate:   { dot: "bg-slate-500",   line: "bg-slate-700",      badge: "text-slate-400",   badgeBg: "bg-slate-700/30 border-slate-700" },
};

export default function Experience() {
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
    <section id="experience" ref={ref} className="section-fade py-24 px-6 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">05. EXPERIENCE</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Career <span className="text-cyan-400">Timeline</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const a = accentMap[job.accent];
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
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${a.badgeBg} ${a.badge}`}>
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
      </div>
    </section>
  );
}

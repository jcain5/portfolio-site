"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label: "Cloud & Identity",
    color: "cyan",
    icon: "☁️",
    skills: ["Microsoft Entra ID (Azure AD)", "Microsoft 365 Admin", "AZ-900 Certified", "Microsoft Intune", "MFA / Conditional Access"],
  },
  {
    label: "Networking & Security",
    color: "purple",
    icon: "🔐",
    skills: ["CCNA Certified", "DNS / DHCP / TCP/IP", "pfSense Firewall", "CompTIA Security+", "Network Segmentation"],
  },
  {
    label: "Endpoint & MDM",
    color: "emerald",
    icon: "📱",
    skills: ["Microsoft Intune", "BlackBerry UEM", "VMware AirWatch", "SCCM Deployment", "Windows 10/11 / macOS / Linux"],
  },
  {
    label: "Systems & Infrastructure",
    color: "amber",
    icon: "🖥️",
    skills: ["Active Directory DS", "Windows Server", "VMware Horizon / Citrix", "Proxmox Virtualization", "PowerShell Automation", "ServiceNow / BMC Remedy"],
  },
];

const colorMap: Record<string, { border: string; dot: string; bg: string; label: string }> = {
  cyan:    { border: "border-cyan-500/30",    dot: "bg-cyan-400",    bg: "bg-cyan-500/10",    label: "text-cyan-400" },
  purple:  { border: "border-purple-500/30",  dot: "bg-purple-400",  bg: "bg-purple-500/10",  label: "text-purple-400" },
  emerald: { border: "border-emerald-500/30", dot: "bg-emerald-400", bg: "bg-emerald-500/10", label: "text-emerald-400" },
  amber:   { border: "border-amber-500/30",   dot: "bg-amber-400",   bg: "bg-amber-500/10",   label: "text-amber-400" },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section-fade py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">02. SKILLS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Technical <span className="text-cyan-400">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.label}
                className={`p-6 rounded-xl bg-[#0a0f1e] border ${c.border} hover:border-opacity-70 transition-all hover:-translate-y-1 duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{group.icon}</span>
                  <span className={`text-sm font-semibold ${c.label}`}>{group.label}</span>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      <span className="text-sm text-slate-400">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tools strip */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-xs font-mono text-slate-600 tracking-widest mb-4">TOOLS & PLATFORMS</p>
          <div className="flex flex-wrap gap-2">
            {[
              "ServiceNow", "BMC Remedy", "SCCM", "Microsoft Intune", "BlackBerry UEM",
              "VMware AirWatch", "VMware Horizon", "Citrix", "Proxmox",
              "pfSense", "Azure Portal", "Microsoft 365 Admin Center", "PowerShell",
            ].map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-slate-600 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

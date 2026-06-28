"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "West Freeway Church of Christ — Website Redesign",
    category: "Full-Stack Web Development",
    tags: [".NET 10", "ASP.NET Core", "Umbraco CMS", "C#", "Razor Pages", "Playwright"],
    color: "blue",
    icon: "🌐",
    github: "https://github.com/jcain5/wfcoc-redesign",
    bullets: [
      "Designed and built a full website redesign for a live organization using .NET 10 and ASP.NET Core Razor Pages",
      "Integrated Umbraco CMS for content management, enabling non-technical staff to update pages independently",
      "Implemented 9 core pages: Home, Plan Your Visit, Contact, Events, Sermons, Elders, Staff, History, and Give",
      "Built to WCAG 2.2 AA accessibility standards with mobile-first responsive design",
      "Wrote a Playwright browser test suite with axe accessibility checks for automated quality assurance",
      "Architected with clean separation of concerns: Pages, Services, ViewModels, and Data layers",
      "Leveraged Claude Code (agentic AI) throughout the build to accelerate iteration and maintain architectural consistency across the full stack",
    ],
  },
  {
    title: "Active Directory & Windows Server 2022 Lab",
    category: "Identity & Access Management",
    tags: ["AD DS", "Windows Server 2022", "GPO", "DNS", "DHCP"],
    color: "cyan",
    icon: "🗄️",
    github: undefined,
    bullets: [
      "Installed and configured Windows Server 2022 in a virtualized environment",
      "Deployed Active Directory Domain Services (AD DS) with DNS and DHCP",
      "Promoted server to Domain Controller and managed users, groups, and OUs",
      "Implemented Group Policy Objects (GPOs) to enforce security configurations — including preventing users from disabling Windows Defender Firewall",
      "Practiced identity and access management through policy enforcement and privilege tiering",
    ],
  },
  {
    title: "pfSense Firewall + VPN + Snort IDS",
    category: "Network Security",
    tags: ["pfSense", "Snort IDS", "VPN", "Firewall Rules", "IDS/IPS"],
    color: "purple",
    icon: "🔥",
    bullets: [
      "Deployed pfSense as a virtual firewall to segment and protect the home lab network",
      "Configured site-to-site and client VPN for secure remote access",
      "Integrated Snort as an Intrusion Detection System (IDS) to monitor and alert on suspicious traffic",
      "Created custom firewall rules and traffic policies to simulate enterprise perimeter security",
      "Configured VLANs to segment lab traffic into isolated network zones (trusted, IoT, DMZ)",
      "Implemented inter-VLAN routing with pfSense to control and permit traffic between segments via firewall rules",
    ],
  },
  {
    title: "jeremymcain.com — Personal Portfolio",
    category: "AI-Assisted Web Development",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel", "Claude Code"],
    color: "amber",
    icon: "⚡",
    github: "https://github.com/jcain5/portfolio-site",
    bullets: [
      "Designed and built this portfolio site from scratch using Next.js 16 and React 19 with TypeScript",
      "Developed with Claude Code (agentic AI) as the primary development tool across the full build cycle",
      "Deployed to Vercel with a custom domain and continuous deployment on every push to main",
      "Implemented scroll-triggered section animations, a typing role animation, and a responsive mobile-first layout",
      "Integrated Vercel Analytics for post-launch traffic monitoring",
    ],
  },
  {
    title: "Virtualization & Enterprise Lab",
    category: "Infrastructure",
    tags: ["Proxmox", "VMware", "VirtualBox", "Linux", "Windows"],
    color: "emerald",
    icon: "🖥️",
    bullets: [
      "Built a multi-hypervisor home lab using Proxmox, VMware Workstation, and VirtualBox",
      "Runs multiple simultaneous Linux (Ubuntu, Kali) and Windows VMs to simulate enterprise environments",
      "Used as a sandboxed environment for testing AD configurations, firewall rules, and security tooling",
      "Practices snapshot management, VM cloning, and network bridging/isolation",
    ],
  },
];

const colorMap: Record<string, { dot: string; badge: string; badgeBg: string; tag: string; tagBg: string }> = {
  blue:    { dot: "bg-blue-400",    badge: "text-blue-400",    badgeBg: "bg-blue-500/10 border-blue-500/30",    tag: "text-blue-400",    tagBg: "bg-blue-500/10 border-blue-500/20" },
  cyan:    { dot: "bg-cyan-400",    badge: "text-cyan-400",    badgeBg: "bg-cyan-500/10 border-cyan-500/30",    tag: "text-cyan-400",    tagBg: "bg-cyan-500/10 border-cyan-500/20" },
  purple:  { dot: "bg-purple-400",  badge: "text-purple-400",  badgeBg: "bg-purple-500/10 border-purple-500/30",  tag: "text-purple-400",  tagBg: "bg-purple-500/10 border-purple-500/20" },
  emerald: { dot: "bg-emerald-400", badge: "text-emerald-400", badgeBg: "bg-emerald-500/10 border-emerald-500/30", tag: "text-emerald-400", tagBg: "bg-emerald-500/10 border-emerald-500/20" },
  amber:   { dot: "bg-amber-400",   badge: "text-amber-400",   badgeBg: "bg-amber-500/10 border-amber-500/30",   tag: "text-amber-400",   tagBg: "bg-amber-500/10 border-amber-500/20" },
};

export default function Projects() {
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
    <section id="projects" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">05. PROJECTS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Home Lab <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Hands-on infrastructure and security work built in a self-managed lab environment — simulating real enterprise configurations.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />

          <div className="space-y-10">
            {projects.map((project, i) => {
              const c = colorMap[project.color];
              return (
                <div key={i} className="relative pl-12">
                  {/* Dot */}
                  <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${c.dot} -translate-x-1/2 ring-2 ring-[#0a0f1e]`} />

                  <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg">{project.icon}</span>
                          <h3 className="text-white font-semibold text-lg leading-tight">{project.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.badgeBg} ${c.badge}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {project.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-slate-400">
                          <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-mono ${c.badge} hover:underline mr-2`}
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-md border font-mono ${c.tag} ${c.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 p-5 rounded-xl border border-dashed border-slate-700 text-center">
          <p className="text-slate-500 text-sm">
            More projects in progress — PowerShell automation scripts, Azure sandbox labs, and security tooling.
          </p>
        </div>
      </div>
    </section>
  );
}

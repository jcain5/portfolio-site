"use client";
import Image from "next/image";
import Section from "../components/ui/Section";
import { colors } from "../lib/colors";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  { title: "Enterprise Application Analyst", icon: "📊", color: "cyan" as const },
  { title: "Systems Administrator", icon: "🖥️", color: "purple" as const },
  { title: "Infrastructure Support Engineer", icon: "🔧", color: "emerald" as const },
  { title: "Microsoft 365 Administrator", icon: "🪟", color: "blue" as const },
  { title: "Identity & Access Management Analyst", icon: "🔐", color: "amber" as const },
];

const degrees = [
  {
    degree: "M.S. Cybersecurity & Information Assurance",
    school: "Western Governors University",
    track: undefined as string | undefined,
    status: "In Progress",
    statusColor: "border-amber-500/30 text-amber-400",
    accent: "cyan" as const,
    competencies: ["Security Operations", "Network Security", "Cloud Security", "Governance, Risk & Compliance"],
  },
  {
    degree: "B.S. Information Technology",
    school: "Western Governors University",
    track: "Network & Security Operations Track",
    status: "Completed",
    statusColor: "border-emerald-500/30 text-emerald-400",
    accent: "slate" as const,
    competencies: ["Network Administration", "Linux Systems", "Cloud Foundations", "Cryptography"],
  },
];

function Bio() {
  const ref = useScrollReveal<HTMLElement>(0.2);
  return (
    <section id="about" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 flex justify-start">
              <div className="relative w-32 h-32 rounded-full ring-2 ring-cyan-500/40 ring-offset-4 ring-offset-[#0a0f1e] overflow-hidden">
                <Image src="/profile.jpg" alt="Jeremy Cain" fill className="object-cover" priority />
              </div>
            </div>
            <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">ABOUT</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building the future of <span className="text-cyan-400">secure infrastructure</span>
            </h1>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m an IT Systems professional with 7+ years of hands-on experience operating
                at enterprise scale — supporting Microsoft 365, Azure AD, Active Directory, VMware
                Horizon, Citrix, and mobile device management for organizations with thousands of users.
              </p>
              <p>
                Working alongside enterprise infrastructure has driven a deep curiosity for what runs
                underneath — the domain controllers, the firewall rules, the PowerShell automation
                that eliminates repetitive work, and the security policies that keep systems hardened.
                I&apos;ve been building and studying that layer on my own through home lab projects and
                formal education.
              </p>
              <p>
                I&apos;m actively building toward cloud infrastructure and security engineering
                roles — backed by a BS in Network Operations &amp; Security (WGU), a CCNA, CompTIA
                Security+, AZ-900, hands-on home lab work with AD DS, pfSense, Proxmox, and Linux,
                and an in-progress M.S. in Cybersecurity &amp; Information Assurance at WGU.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Fort Worth, TX", "Open to Remote", "Cloud & Security Focused"].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-slate-700 text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "☁️", title: "Cloud Infrastructure", desc: "Azure AD, M365 Admin, AZ-900 certified" },
              { icon: "🔒", title: "Security", desc: "Security+, CCNA, MFA enforcement, IDS/IPS" },
              { icon: "⚙️", title: "Automation", desc: "PowerShell scripting, SCCM deployment, GPOs" },
              { icon: "🖧", title: "Networking", desc: "DNS, DHCP, VPN, pfSense, SonicWall, Fortinet" },
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{card.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetRoles() {
  return (
    <Section
      id="target-roles"
      eyebrow="TARGET ROLES"
      title={
        <>
          Open To <span className="text-cyan-400">Opportunities</span>
        </>
      }
      intro="I'm currently seeking opportunities in enterprise IT — where my Microsoft infrastructure experience and production background directly apply."
      tone="alt"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {roles.map((role) => {
          const c = colors[role.color];
          return (
            <div
              key={role.title}
              className={`flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-b ${c.glow} to-[#0a0f1e] border ${c.border} ${c.borderHover} transition-all duration-300 hover:-translate-y-1`}
            >
              <span className={`text-3xl mb-3 ${c.label}`}>{role.icon}</span>
              <span className="text-sm font-semibold text-white leading-snug">{role.title}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section
      id="education"
      eyebrow="EDUCATION"
      title={
        <>
          Academic <span className="text-cyan-400">Background</span>
        </>
      }
      tone="alt"
      maxWidth="4xl"
      threshold={0.05}
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />
        <div className="space-y-8">
          {degrees.map((d, i) => {
            const a = colors[d.accent];
            return (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${a.dot} -translate-x-1/2 ring-2 ring-[#0f172a]`} />
                <div className="p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-tight">{d.degree}</h3>
                      <div className="text-slate-400 text-sm mt-0.5">
                        {d.school}
                        {d.track && <> <span className="text-slate-500">·</span> {d.track}</>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${d.statusColor}`}>{d.status}</span>
                      <span className="text-xs font-mono px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400">WGU</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs text-slate-400 font-mono mb-2">Key Competencies</div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.competencies.map((c) => (
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
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Bio />
      <TargetRoles />
      <Education />
    </>
  );
}

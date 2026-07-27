"use client";
import Image from "next/image";
import Section from "../components/ui/Section";
import { colors } from "../lib/colors";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  { title: "Systems Administrator", index: "01", color: "blue" as const },
  { title: "IT Operations Analyst", index: "02", color: "cyan" as const },
  { title: "Infrastructure Support Engineer", index: "03", color: "slate" as const },
  { title: "Microsoft 365 Administrator", index: "04", color: "indigo" as const },
  { title: "Identity & Access Management Analyst", index: "05", color: "amber" as const },
];

const degrees = [
  {
    degree: "M.S. Cybersecurity & Information Assurance",
    school: "Western Governors University",
    track: undefined as string | undefined,
    status: "In Progress",
    accent: "cyan" as const,
    competencies: ["Security Operations", "Network Security", "Cloud Security", "Governance, Risk & Compliance"],
  },
  {
    degree: "B.S. Information Technology",
    school: "Western Governors University",
    track: "Network & Security Operations Track",
    status: "Completed",
    accent: "slate" as const,
    competencies: ["Network Administration", "Linux Systems", "Cloud Foundations", "Cryptography"],
  },
];

function Bio() {
  const ref = useScrollReveal<HTMLElement>(0.2);
  return (
    <section id="about" ref={ref} className="section-fade pt-32 pb-20 px-6">
      <div className="container-grid">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 flex justify-start">
              <div className="relative w-28 h-28 rounded-full ring-2 ring-[#2F75C8]/30 ring-offset-4 ring-offset-canvas overflow-hidden">
                <Image src="/profile.jpg" alt="Jeremy Cain" fill className="object-cover" priority />
              </div>
            </div>
            <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">About</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6 tracking-tight">
              Building the future of secure infrastructure
            </h1>
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                I&apos;m an IT Systems professional with 8+ years of hands-on experience operating
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
                I&apos;m actively building toward infrastructure and identity-focused operations
                roles — backed by a BS in Network Operations &amp; Security (WGU), a CCNA, CompTIA
                Security+, AZ-900, hands-on home lab work with AD DS, pfSense, Proxmox, and Linux,
                and an in-progress M.S. in Cybersecurity &amp; Information Assurance at WGU.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Fort Worth, TX", "Open to Remote", "Ops & Identity Focused"].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border-strong text-body">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Identity & Access", desc: "Entra ID, MFA Troubleshooting, RBAC, Identity Lifecycle" },
              { title: "Security", desc: "Security+, CCNA, MFA Troubleshooting, IDS/IPS" },
              { title: "Automation", desc: "PowerShell scripting, SCCM deployment, GPOs" },
              { title: "Networking", desc: "DNS, DHCP, VPN, pfSense, SonicWall, Fortinet" },
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-lg bg-white border border-border hover:border-border-strong transition-colors">
                <div className="text-sm font-semibold text-ink mb-1">{card.title}</div>
                <div className="text-xs text-muted leading-relaxed">{card.desc}</div>
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
      title="Open To Opportunities"
      intro="I'm currently seeking opportunities in enterprise IT — where my Microsoft infrastructure experience and production background directly apply."
      tone="alt"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {roles.map((role) => {
          const c = colors[role.color];
          return (
            <div
              key={role.title}
              className={`flex flex-col items-center text-center p-5 rounded-lg bg-canvas border ${c.border} ${c.borderHover} transition-all duration-200`}
            >
              <span className={`font-mono text-xs font-semibold mb-3 ${c.label}`}>{role.index}</span>
              <span className="text-sm font-semibold text-ink leading-snug">{role.title}</span>
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
      title="Academic Background"
      tone="alt"
      maxWidth="4xl"
      threshold={0.05}
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
        <div className="space-y-8">
          {degrees.map((d, i) => {
            const a = colors[d.accent];
            return (
              <div key={i} className="relative pl-12">
                <div className={`absolute left-3 top-1.5 w-2.5 h-2.5 rounded-full ${a.dot} -translate-x-1/2 ring-4 ring-white`} />
                <div className="p-6 rounded-lg bg-white border border-border hover:border-border-strong transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-ink font-heading font-semibold text-lg leading-tight">{d.degree}</h3>
                      <div className="text-body text-sm mt-0.5">
                        {d.school}
                        {d.track && <> <span className="text-muted">·</span> {d.track}</>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${a.badge}`}>{d.status}</span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full border border-[#2F75C8]/30 text-[#2F75C8]">WGU</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs text-muted font-mono mb-2 uppercase tracking-wide">Key Competencies</div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.competencies.map((c) => (
                        <span key={c} className="text-xs px-2 py-0.5 rounded-md border border-border-strong text-body font-mono">
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

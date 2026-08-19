"use client";
import Image from "next/image";
import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  { title: "Systems Administrator", index: "01", color: "blue" as const },
  { title: "IT Operations Analyst", index: "02", color: "cyan" as const },
  { title: "Infrastructure Administrator", index: "03", color: "slate" as const },
  { title: "Microsoft 365 Administrator", index: "04", color: "indigo" as const },
  { title: "Identity & Access Management Analyst", index: "05", color: "amber" as const },
];

const degrees = [
  {
    degree: "M.S. Cybersecurity and Information Assurance",
    school: "Western Governors University",
    track: undefined as string | undefined,
    status: "In Progress",
    accent: "cyan" as const,
    competencies: ["Security Operations", "Network Security", "Cloud Security", "Governance, Risk & Compliance"],
  },
  {
    degree: "B.S. Network Operations and Security",
    school: "Western Governors University",
    track: undefined as string | undefined,
    status: "2024",
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
                I&apos;m an IT operations professional with technical support experience spanning
                roles since 2018, supporting and troubleshooting enterprise environments involving
                Active Directory, Microsoft 365, Entra ID, VMware Horizon, Citrix, and endpoint and
                mobile device management.
              </p>
              <p>
                That enterprise experience is reinforced by infrastructure I directly design and
                administer: a domain controller, firewall rules, PowerShell automation, network
                segmentation, and security monitoring in my Enterprise Infrastructure Lab, along with
                the Linux server, backups, deployment process, and incident response supporting a
                nonprofit web platform.
              </p>
              <p>
                I hold industry certifications spanning networking, security, cloud, and Linux
                fundamentals — see{" "}
                <Link href="/certifications" className="text-[#2F75C8] hover:underline">
                  Certifications
                </Link>{" "}
                for the complete list — along with a B.S. in Network Operations and Security from
                WGU. I&apos;m also completing an M.S. in Cybersecurity and Information Assurance,
                building credentials alongside practical systems administration, automation, and
                infrastructure work.
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
              { title: "Security", desc: "Security+, CCNA, Wazuh/Suricata Monitoring, IDS/IPS" },
              { title: "Automation", desc: "PowerShell scripting, SCCM (remote support & imaging)" },
              { title: "Networking", desc: "DNS, DHCP, pfSense" },
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
      intro="I'm currently seeking opportunities in enterprise IT — where my enterprise IT operations background and hands-on infrastructure experience directly apply."
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

export default function About() {
  return (
    <>
      <Bio />
      <TargetRoles />
      <Education />
    </>
  );
}

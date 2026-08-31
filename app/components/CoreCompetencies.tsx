import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import type { ColorKey } from "../lib/colors";

interface HomeCapability {
  title: string;
  description: string;
  color: ColorKey;
}

// Homepage-only summary — four administrator-oriented categories rather than
// the full competency breakdown. This is deliberately not CMS-driven: it
// doesn't map cleanly onto the Skills page's evidence-source-grouped
// competency list, so it stays a hand-authored summary here (same pattern as
// EvidenceModel) while the Skills page remains the full, CMS-driven detail.
const capabilities: HomeCapability[] = [
  {
    title: "Windows & Identity",
    description:
      "Windows Server, Active Directory, Group Policy, and DNS administration, including identity and access administration.",
    color: "blue",
  },
  {
    title: "Infrastructure & Networking",
    description:
      "Virtualization, Cisco switching and routing, VLAN segmentation, and pfSense firewall administration, with DNS/DHCP services.",
    color: "cyan",
  },
  {
    title: "Enterprise Operations",
    description:
      "Microsoft 365, Intune, Citrix, VMware Horizon, and Windows 365 support, plus incident and escalation handling.",
    color: "purple",
  },
  {
    title: "Automation & Reliability",
    description:
      "PowerShell and Python tooling for system health checks, DNS validation, log collection, troubleshooting, and documentation.",
    color: "emerald",
  },
];

export default function CoreCompetencies() {
  return (
    <Section
      id="competencies"
      eyebrow="CORE COMPETENCIES"
      title="What I Do"
      intro="Administrator-oriented capability areas — see the full skill breakdown and supporting evidence on the Skills page."
      tone="alt"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((capability) => {
          const c = colors[capability.color];
          return (
            <Link
              key={capability.title}
              href="/skills"
              className={`flex flex-col p-5 rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5`}
            >
              <h3 className={`text-sm font-semibold mb-2 ${c.label}`}>{capability.title}</h3>
              <p className="text-sm text-body leading-relaxed">{capability.description}</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

import EvidenceBadge from "./ui/EvidenceBadge";
import type { EvidenceSource, EvidenceStatus } from "../lib/evidence";

interface EvidenceCard {
  title: string;
  source: EvidenceSource;
  status?: EvidenceStatus;
  description: string;
}

const cards: EvidenceCard[] = [
  {
    title: "Enterprise Operations",
    source: "professional",
    description:
      "Enterprise support, endpoint operations, identity and access troubleshooting, incident handling, and enterprise tooling such as ServiceNow.",
  },
  {
    title: "Infrastructure Lab",
    source: "independent-lab",
    description:
      "Windows Server, Active Directory, virtualization, networking, DNS/DHCP, and segmentation — administered in my independent infrastructure lab.",
  },
  {
    title: "Azure Administration Lab",
    source: "independent-lab",
    status: "developing",
    description:
      "Azure administration work aligned to AZ-104 domains — RBAC, identity, networking, compute, storage, governance, and monitoring. Independent lab work, not professional production Azure administration.",
  },
  {
    title: "Automation",
    source: "portfolio-project",
    description:
      "PowerShell, Python, and JavaScript tooling used to reinforce systems administration and infrastructure workflows.",
  },
];

export default function EvidenceModel() {
  return (
    <section aria-labelledby="evidence-heading" className="py-20 px-6 bg-white border-y border-border">
      <div className="container-grid">
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">
          Evidence Model
        </p>
        <h2 id="evidence-heading" className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight">
          Where each area of work comes from
        </h2>
        <p className="text-body mb-10 max-w-xl leading-relaxed">
          Professional experience, independent lab work, volunteer ownership, and portfolio projects
          are kept distinct throughout this site rather than blended together.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="p-6 rounded-lg bg-canvas border border-border">
              <EvidenceBadge source={card.source} status={card.status} className="mb-4" />
              <h3 className="font-heading font-semibold text-ink mb-2">{card.title}</h3>
              <p className="text-sm text-body leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

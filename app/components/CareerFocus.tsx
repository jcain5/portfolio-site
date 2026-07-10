"use client";
import { colors } from "../lib/colors";
import { useCareerFocus, type FocusId } from "../context/CareerFocusContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tracks = [
  {
    id: "sysadmin" as FocusId,
    index: "01",
    title: "Systems Administration",
    color: "blue" as const,
    description:
      "Active Directory, Windows Server, Group Policy, identity lifecycle management, and enterprise desktop operations.",
    skills: ["Active Directory", "Windows Server", "GPO", "PowerShell", "Intune MDM"],
  },
  {
    id: "iam" as FocusId,
    index: "02",
    title: "Identity & Access Management",
    color: "cyan" as const,
    description:
      "Identity lifecycle management, conditional access, MFA enforcement, and role-based access control across enterprise directory services.",
    skills: ["Entra ID", "Conditional Access & MFA", "RBAC", "Identity Lifecycle", "Privilege Tiering"],
  },
  {
    id: "infrastructure" as FocusId,
    index: "03",
    title: "IT Operations & Infrastructure Support",
    color: "slate" as const,
    description:
      "Cloud architecture, network security, virtualization platforms, and enterprise infrastructure planning.",
    skills: ["VMware Horizon", "Proxmox VE", "pfSense", "VLANs", "AWS"],
  },
];

// All three tracks point at the single general resume for now — dedicated
// per-track resume files don't exist yet (was previously a live 404).
const RESUME_HREF = "/Jeremy_Cain_Resume.docx";

export default function CareerFocus() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const { activeFocus, setActiveFocus } = useCareerFocus();

  const handleSelect = (id: FocusId) => {
    setActiveFocus(activeFocus === id ? null : id);
  };

  return (
    <section id="career-focus" ref={ref} className="section-fade py-20 px-6 bg-white border-y border-border">
      <div className="container-grid">
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Focus Areas</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-3 tracking-tight">
          Target Tracks
        </h2>
        <p className="text-body mb-10 max-w-xl leading-relaxed">
          Select a focus area to highlight related projects and skills — and download a tailored resume for that track.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const c = colors[track.color];
            const isActive = activeFocus === track.id;
            return (
              <div
                key={track.id}
                onClick={() => handleSelect(track.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleSelect(track.id)}
                className={`relative flex flex-col text-left p-6 rounded-lg bg-canvas border transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? c.activeBorder : `${c.border} ${c.borderHover}`
                }`}
              >
                {isActive && (
                  <span className={`absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge}`}>
                    Active
                  </span>
                )}

                <span className={`font-mono text-xs font-semibold mb-4 ${c.label}`}>{track.index}</span>

                <h3 className="font-heading font-semibold text-lg mb-2 text-ink">
                  {track.title}
                </h3>

                <p className="text-sm text-body leading-relaxed mb-4 flex-1">
                  {track.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-md border border-border-strong text-muted font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {isActive && (
                  <a
                    href={RESUME_HREF}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg ${c.button} transition-colors`}
                  >
                    Download {track.title} Resume
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {activeFocus && (
          <p className="mt-6 text-xs font-mono text-muted text-center">
            Projects and skills below are filtered by this track — click the active card again to clear.
          </p>
        )}
      </div>
    </section>
  );
}

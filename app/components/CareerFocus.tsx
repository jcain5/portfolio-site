"use client";
import { colors } from "../lib/colors";
import { useCareerFocus, type FocusId } from "../context/CareerFocusContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tracks = [
  {
    id: "sysadmin" as FocusId,
    title: "Systems Administration",
    icon: "🖥️",
    color: "cyan" as const,
    description: "Active Directory, Windows Server, Group Policy, identity lifecycle management, and enterprise desktop operations.",
    skills: ["Active Directory", "Windows Server", "GPO", "PowerShell", "Intune MDM"],
  },
  {
    id: "enterprise-apps" as FocusId,
    title: "Enterprise Applications",
    icon: "📊",
    color: "purple" as const,
    description: "Business application support, Microsoft 365 administration, CMS deployment, and enterprise software management.",
    skills: ["Microsoft 365", "Exchange Online", "SharePoint", "ServiceNow", "Umbraco CMS"],
  },
  {
    id: "infrastructure" as FocusId,
    title: "Infrastructure Operations",
    icon: "🔧",
    color: "emerald" as const,
    description: "Cloud architecture, network security, virtualization platforms, and enterprise infrastructure planning.",
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
    <section id="career-focus" ref={ref} className="section-fade py-20 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">CAREER FOCUS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Target <span className="text-cyan-400">Tracks</span>
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl">
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
                className={`relative flex flex-col text-left p-6 rounded-xl bg-gradient-to-b ${isActive ? c.activeGlow : c.glowStrong} to-[#0a0f1e] border transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none ${
                  isActive ? `${c.activeBorder} shadow-lg` : c.border
                }`}
              >
                {isActive && (
                  <span className={`absolute top-3 right-3 text-xs font-mono px-2 py-0.5 rounded-full border ${c.activeBorder} ${c.label}`}>
                    Active ✓
                  </span>
                )}

                <span className="text-3xl mb-4">{track.icon}</span>

                <h3 className={`font-bold text-lg mb-2 transition-colors ${isActive ? c.label : "text-white"}`}>
                  {track.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {track.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-0.5 rounded-md border font-mono transition-colors ${
                        isActive ? `${c.border} ${c.label}` : "text-slate-500 border-slate-700"
                      }`}
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
                    className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full ${c.button} transition-all hover:scale-105 active:scale-95`}
                  >
                    <span>↓</span> Download {track.title} Resume
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {activeFocus && (
          <p className="mt-6 text-xs font-mono text-slate-500 text-center">
            Projects and skills below are filtered by this track — click the active card again to clear.
          </p>
        )}
      </div>
    </section>
  );
}

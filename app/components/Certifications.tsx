"use client";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { certs } from "../lib/certifications";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CERTIFICATIONS"
      title={
        <>
          Verified <span className="text-cyan-400">Credentials</span>
        </>
      }
      intro="Industry-recognized certifications spanning security, networking, cloud, and systems administration."
      headingLevel="h1"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((cert) => {
          const c = colors[cert.color];
          return (
            <a
              key={cert.name}
              href={cert.credly}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-5 rounded-xl bg-gradient-to-br ${c.cardGlow} border ${c.border} hover:-translate-y-1 transition-all duration-300 group block`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`font-mono font-bold text-xl ${c.label}`}>{cert.abbr}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${c.border} ${c.label} font-mono`}>
                  {cert.category}
                </span>
              </div>
              <div className="text-sm font-semibold text-white leading-snug mb-1">{cert.name}</div>
              <div className="text-xs text-slate-400 mb-3">{cert.issuer}</div>
              <div className={`text-xs font-mono ${c.label} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Verify on Credly ↗
              </div>
              <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </a>
          );
        })}
      </div>
    </Section>
  );
}

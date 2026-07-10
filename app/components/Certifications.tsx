"use client";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { certs } from "../lib/certifications";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="CERTIFICATIONS"
      title="Verified Credentials"
      intro="Industry-recognized certifications spanning security, networking, cloud, and systems administration."
      headingLevel="h1"
      firstOnPage
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
              className={`relative p-5 rounded-lg bg-white border ${c.border} hover:shadow-[0_4px_12px_rgba(11,23,42,0.06)] transition-shadow duration-200 group block`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`font-mono font-semibold text-xl ${c.label}`}>{cert.abbr}</div>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${c.badge}`}>
                  {cert.category}
                </span>
              </div>
              <div className="text-sm font-semibold text-ink leading-snug mb-1">{cert.name}</div>
              <div className="text-xs text-muted mb-3">{cert.issuer}</div>
              <div className={`text-xs font-mono ${c.label} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Verify on Credly ↗
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}

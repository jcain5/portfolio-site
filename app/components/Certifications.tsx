"use client";
import { useEffect, useRef } from "react";

const certs = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    abbr: "SEC+",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/30",
    text: "text-red-400",
    dot: "bg-red-400",
    category: "Security",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    abbr: "CCNA",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    text: "text-blue-400",
    dot: "bg-blue-400",
    category: "Networking",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    abbr: "AZ-900",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    category: "Cloud",
  },
  {
    name: "LPI Linux Essentials",
    issuer: "Linux Professional Institute",
    abbr: "LPI",
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/30",
    text: "text-yellow-400",
    dot: "bg-yellow-400",
    category: "Linux",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">03. CERTIFICATIONS</p>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Verified <span className="text-cyan-400">Credentials</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          Industry-recognized certifications spanning security, networking, cloud, and systems administration.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className={`relative p-5 rounded-xl bg-gradient-to-br ${cert.color} border ${cert.border} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`font-mono font-bold text-xl ${cert.text}`}
                >
                  {cert.abbr}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${cert.border} ${cert.text} font-mono`}>
                  {cert.category}
                </span>
              </div>
              <div className="text-sm font-semibold text-white leading-snug mb-1">{cert.name}</div>
              <div className="text-xs text-slate-400">{cert.issuer}</div>
              <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${cert.dot} opacity-60 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

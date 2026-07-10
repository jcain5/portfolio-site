"use client";
import Link from "next/link";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "1,000+", label: "Users Supported" },
  { value: "92%+", label: "Schedule Adherence" },
  { value: "100%", label: "QA Score" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-grid-technical" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/0 to-navy" />

      <div className="relative container-grid pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          <p className="font-mono text-[#38A6B8] text-xs sm:text-sm tracking-[0.2em] mb-6 uppercase">
            IT Operations · Systems Administration · Identity
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-white mb-3 tracking-tight">
            Jeremy Cain
          </h1>
          <p className="text-lg sm:text-xl text-[#8FB4DC] font-medium mb-6">
            IT Operations &amp; Systems Administration Professional
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            Enterprise support experience strengthened by hands-on identity, Windows Server,
            virtualization, networking, automation, and infrastructure deployment.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#2F75C8] text-white text-sm font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
            >
              View Projects
            </Link>
            <a
              href="/Jeremy_Cain_Resume.docx"
              download
              className="px-6 py-3 border border-slate-500 text-white text-sm font-semibold rounded-lg hover:border-slate-300 hover:bg-white/5 transition-colors"
            >
              Download Résumé
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-slate-700 text-slate-300 text-sm font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-white/10 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-semibold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 tracking-wide font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

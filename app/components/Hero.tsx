import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-grid-technical" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/0 to-navy" />

      <div className="relative container-grid pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-2xl">
          <Image src="/logo-mark-dark.png" alt="Jeremy Cain" width={32} height={40} className="h-10 w-auto mb-6" priority />
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-white mb-3 tracking-tight">
            Jeremy Cain
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#8FB4DC] mb-6 tracking-tight">
            Systems &amp; Infrastructure Administrator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Enterprise IT operations professional with hands-on systems and infrastructure
            administration experience — administering Windows Server and Active Directory,
            configuring networking and Linux infrastructure, and automating operational
            workflows. Ready for broader Systems Administrator and Infrastructure Administrator
            responsibility.
          </p>

          <p className="text-[#8FB4DC] text-sm font-mono mb-2">
            Windows Server · Active Directory · Networking · Linux · Automation
          </p>
          <p className="text-slate-400 text-sm font-mono mb-10">
            Fort Worth / DFW
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#2F75C8] text-white text-sm font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
            >
              View Infrastructure
            </Link>
            <Link
              href="/experience"
              className="px-6 py-3 border border-slate-500 text-white text-sm font-semibold rounded-lg hover:border-slate-300 hover:bg-white/5 transition-colors"
            >
              View Experience
            </Link>
            <a
              href="/Jeremy_Cain_Jr_System_Administrator.pdf"
              download
              className="px-6 py-3 border border-slate-700 text-slate-300 text-sm font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

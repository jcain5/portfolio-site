import Image from "next/image";
import Link from "next/link";
import OperationsDiagram from "./OperationsDiagram";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-grid-technical" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/0 to-navy" />

      <div className="relative container-grid pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <Image src="/logo-mark-dark.png" alt="Jeremy Cain" width={32} height={40} className="h-10 w-auto mb-6" priority />
            <h1 className="font-heading text-4xl sm:text-6xl font-semibold text-white mb-3 tracking-tight">
              Jeremy Cain
            </h1>
            <p className="text-lg sm:text-xl text-[#8FB4DC] font-medium mb-6">
              IT Operations | Systems Administration | Infrastructure | Identity
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-4">
              I have enterprise IT operations experience supporting endpoints, identity, and access
              for enterprise environments, and I&apos;m building deeper systems, infrastructure, and
              identity administration capability through hands-on independent lab and volunteer
              work — plus developing Azure administration skills through AZ-104-aligned lab projects.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-10">
              Target roles: Systems Administrator, Infrastructure Administrator, IT Operations
              Analyst, IAM Analyst.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="px-6 py-3 bg-[#2F75C8] text-white text-sm font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
              >
                View Infrastructure Projects
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

          <div className="hidden lg:block lg:col-span-5">
            <OperationsDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

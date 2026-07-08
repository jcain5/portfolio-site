"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e] bg-grid" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl glow-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl glow-orb-delayed" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-mono text-cyan-400 text-sm tracking-[0.3em] mb-6 uppercase">
          Hello, World — I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
          Jeremy Cain
        </h1>

        <div className="mb-6">
          <span className="text-xl sm:text-2xl text-cyan-400 font-semibold tracking-wide">
            Enterprise Infrastructure Professional
          </span>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Supporting Microsoft enterprise environments through infrastructure engineering,
          identity management, virtualization, and operational excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
          </Link>
          <a
            href="/Jeremy_Cain_Resume.docx"
            download
            className="px-8 py-3.5 border border-slate-600 text-slate-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105 active:scale-95"
          >
            Download Resume
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-slate-600 text-slate-300 rounded-full hover:border-purple-400 hover:text-purple-400 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-800 pt-10">
          {[
            { value: "8+", label: "Years Experience" },
            { value: "1,000+", label: "Users Supported" },
            { value: "4", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest font-mono">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

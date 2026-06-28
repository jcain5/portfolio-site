"use client";
import { useState, useEffect } from "react";

const roles = [
  "Cloud Infrastructure Engineer",
  "Security Operations Specialist",
  "IT Systems Professional",
  "Network & Security Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

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

        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl text-slate-300 font-light">
            {displayed}
            <span className="animate-blink text-cyan-400 font-thin">|</span>
          </span>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          4+ years engineering enterprise IT operations at scale — focused on cloud infrastructure,
          network security, and automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 border border-slate-600 text-slate-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-800 pt-10">
          {[
            { value: "5+", label: "Years Experience" },
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

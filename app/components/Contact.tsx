"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeremy.m.cain@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="section-fade py-24 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">06. CONTACT</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s <span className="text-cyan-400">Connect</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
          I&apos;m actively looking for cloud infrastructure and security engineering opportunities.
          Whether it&apos;s a role, a project, or just a conversation — reach out.
        </p>

        {/* Contact options */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <button
            onClick={copyEmail}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5 group"
          >
            <span className="text-2xl">✉️</span>
            <div>
              <div className="text-sm font-medium text-white">Email</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">
                {copied ? (
                  <span className="text-cyan-400">Copied!</span>
                ) : (
                  "jeremy.m.cain@hotmail.com"
                )}
              </div>
            </div>
          </button>

          <a
            href="https://www.linkedin.com/in/jeremycainb406585a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
          >
            <span className="text-2xl">💼</span>
            <div>
              <div className="text-sm font-medium text-white">LinkedIn</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">Jeremy Cain</div>
            </div>
          </a>

          <a
            href="tel:+18177163808"
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#0a0f1e] border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-0.5"
          >
            <span className="text-2xl">📞</span>
            <div>
              <div className="text-sm font-medium text-white">Phone</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">(817) 716-3808</div>
            </div>
          </a>
        </div>

        <a
          href="/Jeremy_Cain_Resume.docx"
          download
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
        >
          <span>Download Resume</span>
          <span>↓</span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-600 text-xs font-mono">
          Jeremy Cain · Fort Worth, TX · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}

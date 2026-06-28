"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-fade py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">01. ABOUT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Building the future of{" "}
              <span className="text-cyan-400">secure infrastructure</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m an IT Systems professional with 5+ years of hands-on experience operating
                at enterprise scale — supporting Microsoft 365, Azure AD, Active Directory, VMware
                Horizon, Citrix, and mobile device management for organizations with thousands of users.
              </p>
              <p>
                My background is in enterprise technical support, but my focus has always been on
                the infrastructure underneath: the domain controllers, the firewall rules, the
                PowerShell automation that eliminates repetitive work, and the security policies
                that keep systems hardened.
              </p>
              <p>
                I&apos;m actively building toward cloud infrastructure and security engineering
                roles — backed by a BS in Network Operations &amp; Security (WGU), a CCNA, CompTIA
                Security+, AZ-900, and hands-on home lab work with AD DS, pfSense, Proxmox, and Linux.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Fort Worth, TX", "Open to Remote", "Cloud & Security Focused"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border border-slate-700 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "☁️",
                title: "Cloud Infrastructure",
                desc: "Azure AD, M365 Admin, AZ-900 certified",
              },
              {
                icon: "🔒",
                title: "Security",
                desc: "Security+, CCNA, MFA enforcement, IDS/IPS",
              },
              {
                icon: "⚙️",
                title: "Automation",
                desc: "PowerShell scripting, SCCM deployment, GPOs",
              },
              {
                icon: "🖧",
                title: "Networking",
                desc: "DNS, DHCP, VPN, pfSense, SonicWall, Fortinet",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="text-sm font-semibold text-white mb-1">{card.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

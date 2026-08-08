"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ContactForm from "./ContactForm";

function MailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>(0.2);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jobs@jeremymcain.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="section-fade pt-32 pb-20 px-6 bg-white border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Contact</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight">
          Let&apos;s Connect
        </h1>
        <p className="text-body mb-12 max-w-lg mx-auto leading-relaxed">
          I&apos;m currently seeking roles in IT Operations, Systems Administration, Infrastructure Support,
          and Identity &amp; Access Management where I can apply enterprise support experience, infrastructure
          lab work, and hands-on systems administration projects.
        </p>

        {/* Contact options */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <button
            onClick={copyEmail}
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-canvas border border-border hover:border-[#2F75C8]/40 transition-colors"
          >
            <span className="text-navy"><MailIcon /></span>
            <div>
              <div className="text-sm font-medium text-ink">Email</div>
              <div className="text-xs text-muted mt-0.5 font-mono">
                {copied ? (
                  <span className="text-[#2F75C8]">Copied!</span>
                ) : (
                  "jobs@jeremymcain.com"
                )}
              </div>
            </div>
          </button>

          <a
            href="https://www.linkedin.com/in/jeremycainb406585a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-canvas border border-border hover:border-[#2F75C8]/40 transition-colors"
          >
            <span className="text-navy"><LinkedInIcon /></span>
            <div>
              <div className="text-sm font-medium text-ink">LinkedIn</div>
              <div className="text-xs text-muted mt-0.5 font-mono">Jeremy Cain</div>
            </div>
          </a>

          <a
            href="https://github.com/jcain5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-canvas border border-border hover:border-border-strong transition-colors"
          >
            <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-ink">GitHub</div>
              <div className="text-xs text-muted mt-0.5 font-mono">jcain5</div>
            </div>
          </a>
        </div>

        <a
          href="/Jeremy_Cain_Resume.docx"
          download
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
        >
          <span>Download Resume</span>
        </a>
      </div>

      <div className="max-w-3xl mx-auto mt-16 pt-16 border-t border-border">
        <h2 className="font-heading text-2xl font-semibold text-ink mb-2 text-center">Send a Message</h2>
        <p className="text-body mb-10 text-center">
          Prefer email? Reach me directly at{" "}
          <a href="mailto:jobs@jeremymcain.com" className="text-[#2F75C8] font-medium underline">
            jobs@jeremymcain.com
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

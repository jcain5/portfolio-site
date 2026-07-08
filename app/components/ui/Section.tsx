"use client";
import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "default" | "alt";
  maxWidth?: "4xl" | "6xl";
  headingLevel?: "h1" | "h2";
  threshold?: number;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "default",
  maxWidth = "6xl",
  headingLevel = "h2",
  threshold = 0.1,
  children,
}: SectionProps) {
  const ref = useScrollReveal<HTMLElement>(threshold);
  const Heading = headingLevel;

  return (
    <section
      id={id}
      ref={ref}
      className={`section-fade py-24 px-6 ${tone === "alt" ? "bg-[#0f172a]" : ""}`}
    >
      <div className={`${maxWidth === "4xl" ? "max-w-4xl" : "max-w-6xl"} mx-auto`}>
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">{eyebrow}</p>
        <Heading className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</Heading>
        {intro && <p className="text-slate-400 mb-12 max-w-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

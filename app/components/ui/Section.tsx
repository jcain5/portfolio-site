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
  /** True when this Section is the first element on its route — adds top padding to clear the fixed nav. */
  firstOnPage?: boolean;
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
  firstOnPage = false,
  children,
}: SectionProps) {
  const ref = useScrollReveal<HTMLElement>(threshold);
  const Heading = headingLevel;

  return (
    <section
      id={id}
      ref={ref}
      className={`section-fade ${firstOnPage ? "pt-32 pb-20" : "py-20"} px-6 ${tone === "alt" ? "bg-white border-y border-border" : ""}`}
    >
      <div className={`${maxWidth === "4xl" ? "max-w-4xl" : "container-grid"} mx-auto`}>
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">
          {eyebrow}
        </p>
        <Heading className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-4 tracking-tight">
          {title}
        </Heading>
        {intro && <p className="text-body mb-12 max-w-xl leading-relaxed">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

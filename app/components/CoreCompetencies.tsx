import Link from "next/link";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import type { Competency } from "../lib/competencies";

export default function CoreCompetencies({ competencies }: { competencies: Competency[] }) {
  if (competencies.length === 0) return null;

  return (
    <Section
      id="competencies"
      eyebrow="CORE COMPETENCIES"
      title="What I Do"
      intro="Evidence-backed competency areas — see the full skill breakdown and supporting projects on the Skills page."
      tone="alt"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {competencies.map((competency) => {
          const c = colors[competency.color];
          return (
            <Link
              key={competency.slug}
              href="/skills"
              className={`flex items-center gap-3 p-4 rounded-lg bg-white border ${c.border} ${c.borderHover} transition-all duration-200 hover:-translate-y-0.5`}
            >
              {competency.icon && <span className="text-xl shrink-0" aria-hidden="true">{competency.icon}</span>}
              <span className={`text-sm font-semibold ${c.label}`}>{competency.label}</span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

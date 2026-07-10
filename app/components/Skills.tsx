"use client";
import Section from "./ui/Section";
import { colors } from "../lib/colors";
import { skillGroups, toolsAndPlatforms } from "../lib/skills";
import { useCareerFocus } from "../context/CareerFocusContext";

export default function Skills() {
  const { activeFocus } = useCareerFocus();

  return (
    <Section
      id="skills"
      eyebrow="SKILLS"
      title="Technical Expertise"
      tone="alt"
      headingLevel="h1"
      firstOnPage
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group) => {
          const c = colors[group.color];
          const isHighlighted = !activeFocus || group.focusTracks.includes(activeFocus);
          return (
            <div
              key={group.label}
              className={`p-6 rounded-lg bg-canvas border ${c.border} ${c.borderHover} transition-all duration-200 ${
                activeFocus ? (isHighlighted ? "opacity-100" : "opacity-30") : ""
              }`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                <span className={`text-sm font-semibold ${c.label}`}>{group.label}</span>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    <span className="text-sm text-body">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Tools strip */}
      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-xs font-mono text-muted tracking-widest mb-4 uppercase">Tools &amp; Platforms</p>
        <div className="flex flex-wrap gap-2">
          {toolsAndPlatforms.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-md bg-white text-body border border-border hover:border-border-strong transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

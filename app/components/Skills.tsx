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
      title={
        <>
          Technical <span className="text-cyan-400">Expertise</span>
        </>
      }
      tone="alt"
      headingLevel="h1"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group) => {
          const c = colors[group.color];
          const isHighlighted = !activeFocus || group.focusTracks.includes(activeFocus);
          return (
            <div
              key={group.label}
              className={`p-6 rounded-xl bg-[#0a0f1e] border ${c.border} hover:border-opacity-70 transition-all hover:-translate-y-1 duration-300 ${
                activeFocus ? (isHighlighted ? "opacity-100" : "opacity-25") : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <span className={`text-sm font-semibold ${c.label}`}>{group.label}</span>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                    <span className="text-sm text-slate-400">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Tools strip */}
      <div className="mt-12 pt-8 border-t border-slate-800">
        <p className="text-xs font-mono text-slate-400 tracking-widest mb-4">TOOLS & PLATFORMS</p>
        <div className="flex flex-wrap gap-2">
          {toolsAndPlatforms.map((tool) => (
            <span
              key={tool}
              className="text-xs px-3 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-slate-600 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

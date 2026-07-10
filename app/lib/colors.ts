export type ColorKey =
  | "cyan"
  | "blue"
  | "indigo"
  | "amber"
  | "purple"
  | "emerald"
  | "slate"
  | "rose"
  | "red"
  | "yellow";

export interface ColorTokens {
  /** Small solid indicator dot (timeline markers, bullet points) */
  dot: string;
  /** Thin tinted card border */
  border: string;
  /** Hover state for card border */
  borderHover: string;
  /** Selected / active state border, solid brand-strength */
  activeBorder: string;
  /** Light tint background for icon chips */
  chipBg: string;
  /** Status pill: bg + border + text combined */
  badge: string;
  /** Accent text label */
  label: string;
  /** Solid accent bar / rule */
  accentBar: string;
  /** Solid button */
  button: string;
}

// Single canonical color-token map for the "Operational Clarity" system.
// cyan/blue carry the exact brand hex values; the remaining keys are muted,
// desaturated status/category accents (600-700 text, 50 tint, 200 border) used
// sparingly for certification/experience categorization — never neon, never
// gradient. Tailwind v4 statically scans source text for complete class-name
// literals, so every value below must stay a full literal string per color —
// do not refactor into template-literal interpolation.
export const colors: Record<ColorKey, ColorTokens> = {
  cyan: {
    dot: "bg-[#38A6B8]",
    border: "border-[#38A6B8]/25",
    borderHover: "hover:border-[#38A6B8]/50",
    activeBorder: "border-[#38A6B8]",
    chipBg: "bg-[#38A6B8]/10",
    badge: "bg-[#38A6B8]/10 border-[#38A6B8]/30 text-[#1F7A89]",
    label: "text-[#1F7A89]",
    accentBar: "bg-[#38A6B8]",
    button: "bg-[#38A6B8] hover:bg-[#2f8e9e] text-white",
  },
  blue: {
    dot: "bg-[#2F75C8]",
    border: "border-[#2F75C8]/25",
    borderHover: "hover:border-[#2F75C8]/50",
    activeBorder: "border-[#2F75C8]",
    chipBg: "bg-[#2F75C8]/10",
    badge: "bg-[#2F75C8]/10 border-[#2F75C8]/30 text-[#2F75C8]",
    label: "text-[#2F75C8]",
    accentBar: "bg-[#2F75C8]",
    button: "bg-[#2F75C8] hover:bg-[#265f9f] text-white",
  },
  indigo: {
    dot: "bg-slate-600",
    border: "border-slate-300",
    borderHover: "hover:border-slate-400",
    activeBorder: "border-slate-600",
    chipBg: "bg-slate-100",
    badge: "bg-slate-100 border-slate-300 text-slate-700",
    label: "text-slate-700",
    accentBar: "bg-slate-600",
    button: "bg-slate-700 hover:bg-slate-800 text-white",
  },
  amber: {
    dot: "bg-amber-600",
    border: "border-amber-200",
    borderHover: "hover:border-amber-300",
    activeBorder: "border-amber-600",
    chipBg: "bg-amber-50",
    badge: "bg-amber-50 border-amber-200 text-amber-700",
    label: "text-amber-700",
    accentBar: "bg-amber-600",
    button: "bg-amber-600 hover:bg-amber-700 text-white",
  },
  purple: {
    dot: "bg-indigo-600",
    border: "border-indigo-200",
    borderHover: "hover:border-indigo-300",
    activeBorder: "border-indigo-600",
    chipBg: "bg-indigo-50",
    badge: "bg-indigo-50 border-indigo-200 text-indigo-700",
    label: "text-indigo-700",
    accentBar: "bg-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  emerald: {
    dot: "bg-emerald-600",
    border: "border-emerald-200",
    borderHover: "hover:border-emerald-300",
    activeBorder: "border-emerald-600",
    chipBg: "bg-emerald-50",
    badge: "bg-emerald-50 border-emerald-200 text-emerald-700",
    label: "text-emerald-700",
    accentBar: "bg-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  slate: {
    dot: "bg-slate-500",
    border: "border-slate-200",
    borderHover: "hover:border-slate-300",
    activeBorder: "border-slate-500",
    chipBg: "bg-slate-100",
    badge: "bg-slate-100 border-slate-300 text-slate-600",
    label: "text-slate-600",
    accentBar: "bg-slate-500",
    button: "bg-slate-600 hover:bg-slate-700 text-white",
  },
  rose: {
    dot: "bg-rose-600",
    border: "border-rose-200",
    borderHover: "hover:border-rose-300",
    activeBorder: "border-rose-600",
    chipBg: "bg-rose-50",
    badge: "bg-rose-50 border-rose-200 text-rose-700",
    label: "text-rose-700",
    accentBar: "bg-rose-600",
    button: "bg-rose-600 hover:bg-rose-700 text-white",
  },
  red: {
    dot: "bg-red-700",
    border: "border-red-200",
    borderHover: "hover:border-red-300",
    activeBorder: "border-red-700",
    chipBg: "bg-red-50",
    badge: "bg-red-50 border-red-200 text-red-700",
    label: "text-red-700",
    accentBar: "bg-red-700",
    button: "bg-red-700 hover:bg-red-800 text-white",
  },
  yellow: {
    dot: "bg-yellow-700",
    border: "border-yellow-200",
    borderHover: "hover:border-yellow-300",
    activeBorder: "border-yellow-700",
    chipBg: "bg-yellow-50",
    badge: "bg-yellow-50 border-yellow-200 text-yellow-800",
    label: "text-yellow-800",
    accentBar: "bg-yellow-700",
    button: "bg-yellow-700 hover:bg-yellow-800 text-white",
  },
};

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
  dot: string;
  border: string;
  borderHover: string;
  activeBorder: string;
  bg: string;
  badgeBg: string;
  label: string;
  glow: string;
  glowStrong: string;
  activeGlow: string;
  cardGlow: string;
  button: string;
  line: string;
}

// Single canonical color-token map. Tailwind v4 statically scans source text for
// complete class-name literals, so every value below must stay a full literal
// string per color — do not refactor into template-literal interpolation
// (e.g. `border-${color}-500/30`), Tailwind won't detect the generated classes.
export const colors: Record<ColorKey, ColorTokens> = {
  cyan: {
    dot: "bg-cyan-400",
    border: "border-cyan-500/30",
    borderHover: "hover:border-cyan-500/60",
    activeBorder: "border-cyan-400",
    bg: "bg-cyan-500/10",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30",
    label: "text-cyan-400",
    glow: "from-cyan-500/5",
    glowStrong: "from-cyan-500/8",
    activeGlow: "from-cyan-500/15",
    cardGlow: "from-cyan-500/20 to-cyan-600/5",
    button: "bg-cyan-500 hover:bg-cyan-400 text-black",
    line: "bg-cyan-400/30",
  },
  blue: {
    dot: "bg-blue-400",
    border: "border-blue-500/30",
    borderHover: "hover:border-blue-500/60",
    activeBorder: "border-blue-400",
    bg: "bg-blue-500/10",
    badgeBg: "bg-blue-500/10 border-blue-500/30",
    label: "text-blue-400",
    glow: "from-blue-500/5",
    glowStrong: "from-blue-500/8",
    activeGlow: "from-blue-500/15",
    cardGlow: "from-blue-500/20 to-blue-600/5",
    button: "bg-blue-500 hover:bg-blue-400 text-white",
    line: "bg-blue-400/30",
  },
  indigo: {
    dot: "bg-indigo-400",
    border: "border-indigo-500/30",
    borderHover: "hover:border-indigo-500/60",
    activeBorder: "border-indigo-400",
    bg: "bg-indigo-500/10",
    badgeBg: "bg-indigo-500/10 border-indigo-500/30",
    label: "text-indigo-400",
    glow: "from-indigo-500/5",
    glowStrong: "from-indigo-500/8",
    activeGlow: "from-indigo-500/15",
    cardGlow: "from-indigo-500/20 to-indigo-600/5",
    button: "bg-indigo-500 hover:bg-indigo-400 text-white",
    line: "bg-indigo-400/30",
  },
  amber: {
    dot: "bg-amber-400",
    border: "border-amber-500/30",
    borderHover: "hover:border-amber-500/60",
    activeBorder: "border-amber-400",
    bg: "bg-amber-500/10",
    badgeBg: "bg-amber-500/10 border-amber-500/30",
    label: "text-amber-400",
    glow: "from-amber-500/5",
    glowStrong: "from-amber-500/8",
    activeGlow: "from-amber-500/15",
    cardGlow: "from-amber-500/20 to-amber-600/5",
    button: "bg-amber-500 hover:bg-amber-400 text-black",
    line: "bg-amber-400/30",
  },
  purple: {
    dot: "bg-purple-400",
    border: "border-purple-500/30",
    borderHover: "hover:border-purple-500/60",
    activeBorder: "border-purple-400",
    bg: "bg-purple-500/10",
    badgeBg: "bg-purple-500/10 border-purple-500/30",
    label: "text-purple-400",
    glow: "from-purple-500/5",
    glowStrong: "from-purple-500/8",
    activeGlow: "from-purple-500/15",
    cardGlow: "from-purple-500/20 to-purple-600/5",
    button: "bg-purple-500 hover:bg-purple-400 text-white",
    line: "bg-purple-400/30",
  },
  emerald: {
    dot: "bg-emerald-400",
    border: "border-emerald-500/30",
    borderHover: "hover:border-emerald-500/60",
    activeBorder: "border-emerald-400",
    bg: "bg-emerald-500/10",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30",
    label: "text-emerald-400",
    glow: "from-emerald-500/5",
    glowStrong: "from-emerald-500/8",
    activeGlow: "from-emerald-500/15",
    cardGlow: "from-emerald-500/20 to-emerald-600/5",
    button: "bg-emerald-500 hover:bg-emerald-400 text-black",
    line: "bg-emerald-400/30",
  },
  slate: {
    dot: "bg-slate-400",
    border: "border-slate-500/30",
    borderHover: "hover:border-slate-500/60",
    activeBorder: "border-slate-400",
    bg: "bg-slate-500/10",
    badgeBg: "bg-slate-700/30 border-slate-700",
    label: "text-slate-300",
    glow: "from-slate-500/5",
    glowStrong: "from-slate-500/8",
    activeGlow: "from-slate-500/15",
    cardGlow: "from-slate-500/20 to-slate-600/5",
    button: "bg-slate-500 hover:bg-slate-400 text-white",
    line: "bg-slate-700",
  },
  rose: {
    dot: "bg-rose-400",
    border: "border-rose-500/30",
    borderHover: "hover:border-rose-500/60",
    activeBorder: "border-rose-400",
    bg: "bg-rose-500/10",
    badgeBg: "bg-rose-500/10 border-rose-500/30",
    label: "text-rose-400",
    glow: "from-rose-500/5",
    glowStrong: "from-rose-500/8",
    activeGlow: "from-rose-500/15",
    cardGlow: "from-rose-500/20 to-rose-600/5",
    button: "bg-rose-500 hover:bg-rose-400 text-white",
    line: "bg-rose-400/30",
  },
  red: {
    dot: "bg-red-400",
    border: "border-red-500/30",
    borderHover: "hover:border-red-500/60",
    activeBorder: "border-red-400",
    bg: "bg-red-500/10",
    badgeBg: "bg-red-500/10 border-red-500/30",
    label: "text-red-400",
    glow: "from-red-500/5",
    glowStrong: "from-red-500/8",
    activeGlow: "from-red-500/15",
    cardGlow: "from-red-500/20 to-red-600/5",
    button: "bg-red-500 hover:bg-red-400 text-white",
    line: "bg-red-400/30",
  },
  yellow: {
    dot: "bg-yellow-400",
    border: "border-yellow-500/30",
    borderHover: "hover:border-yellow-500/60",
    activeBorder: "border-yellow-400",
    bg: "bg-yellow-500/10",
    badgeBg: "bg-yellow-500/10 border-yellow-500/30",
    label: "text-yellow-400",
    glow: "from-yellow-500/5",
    glowStrong: "from-yellow-500/8",
    activeGlow: "from-yellow-500/15",
    cardGlow: "from-yellow-500/20 to-yellow-600/5",
    button: "bg-yellow-500 hover:bg-yellow-400 text-black",
    line: "bg-yellow-400/30",
  },
};

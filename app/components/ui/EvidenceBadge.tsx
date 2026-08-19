import { colors } from "../../lib/colors";
import {
  evidenceSourceMeta,
  evidenceStatusMeta,
  type EvidenceSource,
  type EvidenceStatus,
} from "../../lib/evidence";

interface EvidenceBadgeProps {
  source: EvidenceSource;
  /** Only pass this when the status adds meaningful context (e.g. "Developing"
   * on a still-forming area) — not required on every badge. Avoid rendering
   * every internal metadata field as a visible badge. */
  status?: EvidenceStatus;
  className?: string;
}

export default function EvidenceBadge({ source, status, className = "" }: EvidenceBadgeProps) {
  const meta = evidenceSourceMeta[source];
  const c = colors[meta.color];
  const text = status ? `${meta.label} · ${evidenceStatusMeta[status].label}` : meta.label;

  return (
    <span
      className={`inline-flex items-center text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge} ${className}`}
    >
      {text}
    </span>
  );
}

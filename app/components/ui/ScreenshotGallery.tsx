import type { ScreenshotSlot } from "../../lib/projects";

export default function ScreenshotGallery({ screenshots }: { screenshots: ScreenshotSlot[] }) {
  if (screenshots.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {screenshots.map((shot, i) => (
        <div
          key={i}
          className="aspect-video rounded-lg border border-dashed border-border-strong bg-canvas flex items-center justify-center p-4 text-center"
        >
          <p className="text-xs font-mono text-muted">{shot.caption} — diagram pending</p>
        </div>
      ))}
    </div>
  );
}

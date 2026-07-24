import Image from "next/image";
import type { ScreenshotSlot } from "../../lib/projects";

export default function ScreenshotGallery({ screenshots }: { screenshots: ScreenshotSlot[] }) {
  if (screenshots.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {screenshots.map((shot, i) =>
        shot.src ? (
          <figure key={i} className="m-0">
            <div className="relative aspect-video rounded-lg border border-border overflow-hidden bg-canvas">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs font-mono text-muted mt-2">{shot.caption}</figcaption>
          </figure>
        ) : (
          <div
            key={i}
            className="aspect-video rounded-lg border border-dashed border-border-strong bg-canvas flex items-center justify-center p-4 text-center"
          >
            <p className="text-xs font-mono text-muted">{shot.caption} — evidence pending</p>
          </div>
        )
      )}
    </div>
  );
}

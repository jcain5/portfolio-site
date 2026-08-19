"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ScreenshotSlot } from "../../lib/projects";

export default function ScreenshotGallery({ screenshots }: { screenshots: ScreenshotSlot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const open = openIndex !== null ? screenshots[openIndex] : null;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleClose = () => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  };

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {screenshots.map((shot, i) =>
          shot.src ? (
            <figure key={i} className="m-0">
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                aria-haspopup="dialog"
                aria-label={`View larger image: ${shot.alt}`}
                className="relative aspect-video w-full rounded-lg border border-border overflow-hidden bg-canvas cursor-zoom-in transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F75C8]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </button>
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

      {open?.src && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 overflow-y-auto"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
        >
          <div
            className="relative w-full max-w-4xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video max-h-[75vh] rounded-lg overflow-hidden bg-canvas">
              <Image
                src={open.src}
                alt={open.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close image"
                className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <p className="text-sm font-mono text-white/80 mt-3 text-center">{open.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}

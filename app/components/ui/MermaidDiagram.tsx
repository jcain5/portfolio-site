"use client";
import { useEffect, useId, useRef, useState } from "react";

// Themed to match the site's "Operational Clarity" navy/blue/cyan palette —
// intentionally not mermaid's default green terminal theme.
const THEME_VARIABLES = {
  primaryColor: "#eef4fb",
  primaryTextColor: "#0b172a",
  primaryBorderColor: "#2f75c8",
  lineColor: "#38a6b8",
  secondaryColor: "#f4f7fa",
  tertiaryColor: "#ffffff",
  background: "#ffffff",
  mainBkg: "#eef4fb",
  nodeBorder: "#2f75c8",
  clusterBkg: "#f4f7fa",
  clusterBorder: "#cbd5e1",
  edgeLabelBackground: "#ffffff",
  fontFamily: "var(--font-plex-mono), ui-monospace, monospace",
  fontSize: "14px",
};

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    import("mermaid").then(async ({ default: mermaid }) => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: THEME_VARIABLES,
          securityLevel: "strict",
        });
        const { svg: rendered } = await mermaid.render(`mermaid-${containerId}`, chart);
        if (isMounted.current) setSvg(rendered);
      } catch {
        if (isMounted.current) setError("Diagram could not be rendered.");
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [chart, containerId]);

  if (error) {
    return <pre className="text-xs font-mono text-muted p-4 border border-border rounded-lg bg-canvas">{error}</pre>;
  }

  if (!svg) {
    return (
      <div className="h-40 rounded-lg border border-border bg-canvas animate-pulse" aria-hidden="true" />
    );
  }

  return (
    <div
      className="overflow-x-auto rounded-lg border border-border bg-white p-4 [&_svg]:mx-auto"
      // Source is the site's own committed documentation content, not
      // untrusted user input — safe to inject the rendered SVG markup.
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

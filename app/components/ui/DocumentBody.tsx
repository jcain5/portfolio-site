"use client";
import dynamic from "next/dynamic";
import { DocumentRenderer, type DocumentRendererProps } from "@keystatic/core/renderer";

const MermaidDiagram = dynamic(() => import("./MermaidDiagram"), {
  ssr: false,
  loading: () => <div className="h-40 rounded-lg border border-border bg-canvas animate-pulse" aria-hidden="true" />,
});

export default function DocumentBody({ document }: { document: DocumentRendererProps["document"] }) {
  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          code: ({ children, language }) =>
            language === "mermaid" ? (
              <MermaidDiagram chart={children} />
            ) : (
              <pre className="bg-canvas border border-border rounded-lg p-5 text-xs font-mono text-body overflow-x-auto">
                <code>{children}</code>
              </pre>
            ),
          table: ({ head, body }) => (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                {head && (
                  <thead>
                    <tr className="border-b border-border">
                      {head.map((cell, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="py-2 pr-4 font-mono text-xs uppercase tracking-wide text-muted"
                        >
                          {cell.children}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody>
                  {body.map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      {row.map((cell, j) => (
                        <td key={j} className="py-2 pr-4 text-body align-top">
                          {cell.children}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
      }}
    />
  );
}

"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/" || pathname?.startsWith("/keystatic")) {
    return null;
  }

  return (
    <footer className="bg-navy px-6 py-8">
      <div className="container-grid flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image src="/logo-mark-dark.png" alt="Jeremy Cain" width={19} height={24} className="h-6 w-auto" />
          <p className="text-slate-400 text-xs font-mono">© 2026 Jeremy Cain · Fort Worth, TX</p>
        </div>
        <p className="text-slate-500 text-xs font-mono">
          Windows | Identity | Infrastructure | Automation
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-8">
      <div className="container-grid flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image src="/logo-mark-dark.png" alt="Jeremy Cain" width={20} height={24} className="h-6 w-auto" />
          <p className="text-slate-400 text-xs font-mono">© 2026 Jeremy Cain · Fort Worth, TX</p>
        </div>
        <p className="text-slate-500 text-xs font-mono">IT Operations · Systems Administration · Identity</p>
      </div>
    </footer>
  );
}

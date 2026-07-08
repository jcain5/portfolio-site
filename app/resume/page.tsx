export const metadata = {
  title: "Resume | Jeremy Cain",
};

export default function ResumePage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">RESUME</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Download <span className="text-cyan-400">Résumé</span>
        </h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          A PDF preview, ATS-friendly text version, and print-optimized layout are coming to this page soon.
          For now, download the current résumé directly.
        </p>
        <a
          href="/Jeremy_Cain_Resume.docx"
          download
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
        >
          <span>Download Resume</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}

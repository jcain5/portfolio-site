export const metadata = {
  title: "Resume | Jeremy Cain",
};

export default function ResumePage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Resume</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6 tracking-tight">
          Download Résumé
        </h1>
        <p className="text-body mb-10 leading-relaxed">
          A PDF preview, ATS-friendly text version, and print-optimized layout are coming to this page soon.
          For now, download the current résumé directly.
        </p>
        <a
          href="/Jeremy_Cain_Resume.docx"
          download
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

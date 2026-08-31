const title = "Resume | Jeremy Cain";
const description =
  "Download Jeremy Cain's résumé covering enterprise IT operations, infrastructure, and identity & access management experience.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: { title, description, url: "/resume" },
};

export default function ResumePage() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-[#2F75C8] text-xs tracking-[0.15em] font-medium mb-3 uppercase">Resume</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-ink mb-6 tracking-tight">
          Jeremy Cain — Systems &amp; Infrastructure Administrator
        </h1>
        <p className="text-body mb-10 leading-relaxed">
          Download the résumé covering enterprise IT operations, infrastructure, and identity
          &amp; access management experience.
        </p>
        <a
          href="/Jeremy_Cain_Jr_System_Administrator.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2F75C8] text-white font-semibold rounded-lg hover:bg-[#265f9f] transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

const title = "Jeremy Cain | Site Rebuild in Progress";
const description =
  "Jeremy Cain's portfolio site is being rebuilt around real systems administration work, validation, and evidence. A more complete experience will be available soon.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.imageLayer}>
        <Image
          src="/images/site-rebuild-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.panelWrap}>
        <section className={styles.panel} aria-labelledby="page-title">
          <p className={styles.eyebrow}>
            <span className={styles.statusDot} aria-hidden="true" />
            Site rebuild in progress
          </p>
          <h1 id="page-title" className={styles.heading}>
            A stronger portfolio is under construction.
          </h1>
          <p className={styles.intro}>
            Jeremy Cain is rebuilding this site. A more complete portfolio experience will be available soon.
          </p>
          <footer className={styles.footerNote}>
            For professional inquiries:{" "}
            <a href="mailto:jeremy@jeremymcain.com" className={styles.mailLink}>
              jeremy@jeremymcain.com
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}

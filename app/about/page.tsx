import About from "../components/About";

const title = "About | Jeremy Cain";
const description =
  "IT operations professional with technical support experience spanning roles since 2018 — Active Directory, Microsoft 365, Entra ID, and endpoint management, plus hands-on infrastructure and automation work.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
};

export default function AboutPage() {
  return <About />;
}

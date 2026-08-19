import Contact from "../components/Contact";

const title = "Contact | Jeremy Cain";
const description =
  "I'm currently seeking roles in IT Operations, Systems Administration, Infrastructure Support, and Identity & Access Management where I can apply enterprise support experience, infrastructure lab work, and hands-on systems administration projects.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}

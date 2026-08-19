import Certifications from "../components/Certifications";

const title = "Certifications | Jeremy Cain";
const description = "Industry-recognized certifications spanning security, networking, cloud, and systems administration.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/certifications" },
  openGraph: { title, description, url: "/certifications" },
};

export default function CertificationsPage() {
  return <Certifications />;
}

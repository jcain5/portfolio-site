import Experience from "../components/Experience";

const title = "Experience | Jeremy Cain";
const description =
  "Enterprise IT operations experience, reinforced by hands-on infrastructure engineering through the Enterprise Infrastructure Lab — designing, building, and administering the same Windows Server, identity, virtualization, and networking systems operated professionally.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title, description, url: "/experience" },
};

export default function ExperiencePage() {
  return <Experience />;
}

import Skills, { type EvidenceProject } from "../components/Skills";
import { getCompetencies } from "../lib/competencies";
import { getAllProjects } from "../lib/projects";

const title = "Skills | Jeremy Cain";
const description =
  "Evidence-backed competency areas — systems administration, infrastructure, security, and automation — each linked to supporting projects.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/skills" },
  openGraph: { title, description, url: "/skills" },
};

export default async function SkillsPage() {
  const [competencies, projects] = await Promise.all([getCompetencies(), getAllProjects()]);

  const evidenceByCompetency: Record<string, EvidenceProject[]> = {};
  for (const competency of competencies) {
    evidenceByCompetency[competency.slug] = projects
      .filter((p) => p.competencySlugs.includes(competency.slug))
      .map((p) => ({ slug: p.slug, title: p.title }));
  }

  return <Skills competencies={competencies} evidenceByCompetency={evidenceByCompetency} />;
}

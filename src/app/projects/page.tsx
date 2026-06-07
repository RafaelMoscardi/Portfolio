import type { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projetos — Rafael Moscardi",
  description:
    "Projetos desenvolvidos por Rafael Moscardi: PulseOps, DevMatch AI e mais.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}

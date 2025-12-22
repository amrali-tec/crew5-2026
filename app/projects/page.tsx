import ProjectsHero from "./components/ProjectsHero";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsCTA from "./components/ProjectsCTA";
import GlobalBackground from "../components/GlobalBackground";

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <GlobalBackground />
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}

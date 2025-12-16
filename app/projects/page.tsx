import ProjectsHero from "./components/ProjectsHero";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectsCTA from "./components/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="bg-background">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}

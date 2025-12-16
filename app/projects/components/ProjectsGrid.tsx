import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Crew5 Agency Website",
    description:
      "A modern, high-performance website focused on brand identity and conversion.",
    category: "Web Development",
  },
  {
    title: "Brand Identity for Startup",
    description:
      "Complete branding system including logo, colors, and visual language.",
    category: "Branding",
  },
  {
    title: "Social Media Campaign",
    description:
      "Creative content strategy that increased engagement and reach.",
    category: "Marketing",
  },
  {
    title: "Promotional Video Production",
    description:
      "High-quality video production for digital advertising campaigns.",
    category: "Media Production",
  },
  {
    title: "UI/UX Redesign",
    description:
      "User experience redesign focused on clarity, speed, and usability.",
    category: "UI/UX",
  },
  {
    title: "SEO Growth Project",
    description:
      "Search engine optimization strategy that improved organic traffic.",
    category: "SEO",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

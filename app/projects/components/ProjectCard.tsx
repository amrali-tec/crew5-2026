type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
};

export default function ProjectCard({
  title,
  description,
  category,
}: ProjectCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-background/20 border border-white/10 hover:border-accent/50 transition">
      <span className="text-accent text-sm font-medium">{category}</span>
      <h3 className="text-white text-xl font-semibold mt-2 mb-3 group-hover:text-accent transition">
        {title}
      </h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
}

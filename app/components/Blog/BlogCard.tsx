import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group border border-white/10 rounded-2xl p-6 bg-background/20 hover:border-accent transition"
    >
      <p className="text-sm text-white/50 mb-3">{date}</p>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed">{excerpt}</p>

      <span className="inline-block mt-4 text-accent text-sm font-medium">
        Read more →
      </span>
    </Link>
  );
}

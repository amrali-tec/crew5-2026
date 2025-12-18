import BlogCard from "./BlogCard";

const posts = [
  {
    title: "Why Great Design Is More Than Just Visuals",
    excerpt:
      "Design is not decoration. It’s strategy, usability, and psychology working together.",
    date: "Jan 12, 2026",
    slug: "why-great-design-matters",
  },
  {
    title: "How Brands Grow Faster With Clear Positioning",
    excerpt:
      "If your brand speaks to everyone, it speaks to no one. Positioning is everything.",
    date: "Jan 05, 2026",
    slug: "brand-positioning-growth",
  },
  {
    title: "Web Performance: Why Speed Is a Business Advantage",
    excerpt:
      "Slow websites lose users, conversions, and trust. Performance is not optional.",
    date: "Dec 28, 2025",
    slug: "web-performance-business",
  },
];

export default function BlogGrid() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}

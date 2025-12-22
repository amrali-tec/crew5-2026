import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="py-20 text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Want More Insights?
      </h2>
      <p className="text-white/80 mb-8">
        Follow our journey as we explore design, tech, and digital growth.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8 py-4 rounded-xl bg-accent text-black font-semibold hover:scale-105 transition"
      >
        Let’s Talk
      </Link>
    </section>
  );
}

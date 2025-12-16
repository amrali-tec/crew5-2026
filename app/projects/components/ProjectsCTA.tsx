import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Build Your Next Project?
      </h2>
      <p className="text-white/70 max-w-xl mx-auto mb-8">
        Let’s turn your idea into a powerful digital experience.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:brightness-110 transition"
      >
        Start a Project
      </Link>
    </section>
  );
}

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Start Your Project?
      </h2>
      <p className="text-white/80 mb-8">
        Let’s turn your ideas into a powerful digital experience.
      </p>
      <Link
        href="/services"
        className="inline-block px-8 py-4 rounded-xl bg-accent text-black font-semibold hover:scale-105 transition"
      >
        Explore Our Services
      </Link>
    </section>
  );
}

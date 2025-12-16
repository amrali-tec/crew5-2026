///Users/editing2/crew5-website/app/components/About/CTASection.tsx
"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-accent text-center rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Elevate Your Brand?
      </h2>
      <p className="text-white/80 mb-6 max-w-2xl mx-auto">
        Get in touch with Crew5 Agency today and let's create digital
        experiences that truly make an impact.
      </p>
      <Link
        href="/contact"
        className="inline-block px-8 py-4 bg-background text-accent font-semibold rounded-lg hover:scale-105 transition transform"
      >
        Contact Us
      </Link>
    </section>
  );
}

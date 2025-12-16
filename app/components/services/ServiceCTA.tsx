"use client";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto text-center bg-background/20 rounded-2xl p-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Let’s talk about your project and see how our services can help you
          move forward with confidence.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-background font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background flex flex-col items-center text-center">
      {/* العنوان الرئيسي */}
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
        Ready to Elevate Your Brand?
      </h2>

      {/* الوصف */}
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
        Let’s work together to create digital experiences that convert and
        engage.
      </p>

      {/* الزر */}
      <Link
        href="/contact"
        className="inline-block px-8 py-4 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Get Started
      </Link>
    </section>
  );
}

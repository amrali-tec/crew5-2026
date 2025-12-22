///Users/editing2/crew5-website/app/components/About/IntroSection.tsx
"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-background text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-black mb-4 text-text">
          About Crew5 Agency
        </h1>
        <p className="text-muted max-w-3xl mx-auto text-base md:text-lg">
          Crew5 Agency is a creative powerhouse specializing in social media
          marketing, branding, and content creation. We help businesses grow
          online with modern strategies and cutting‑edge creative solutions.
        </p>
      </motion.div>
    </section>
  );
}

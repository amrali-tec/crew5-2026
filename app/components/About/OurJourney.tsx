///Users/editing2/crew5-website/app/components/About/OurJourney.tsx
"use client";

import { motion } from "framer-motion";

export default function OurJourney() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-black text-text mb-6">
          Our Journey
        </h2>
        <p className="text-muted max-w-3xl mx-auto mb-4 text-sm md:text-base">
          Started as a small creative team, Crew5 Agency has grown into a
          full‑service agency delivering branding, social media, and digital
          content solutions to a diverse range of clients.
        </p>
        <p className="text-muted max-w-3xl mx-auto text-sm md:text-base">
          Every project we take on is an opportunity to push creative boundaries
          and deliver measurable results.
        </p>
      </motion.div>
    </section>
  );
}

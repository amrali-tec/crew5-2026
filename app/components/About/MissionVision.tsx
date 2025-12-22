///Users/editing2/crew5-website/app/components/About/MissionVision.tsx
"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/40">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black text-text mb-3"
        >
          Our Mission &amp; Vision
        </motion.h2>
        <p className="text-muted text-sm md:text-base">
          The principles that guide how Crew5 thinks, creates, and grows with
          clients.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-7 text-left"
        >
          <h3 className="text-2xl font-semibold mb-3 text-text">Our Mission</h3>
          <p className="text-muted text-sm md:text-base">
            To empower brands with innovative digital strategies and creative
            solutions that connect with audiences, boost engagement, and drive
            measurable growth.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-7 text-left"
        >
          <h3 className="text-2xl font-semibold mb-3 text-text">Our Vision</h3>
          <p className="text-muted text-sm md:text-base">
            To be recognized as a leading agency that blends creativity and
            strategy, helping businesses achieve their full digital potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// app/components/Blog/BlogHero.tsx
"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* لمعات */}
      <div className="pointer-events-none absolute -top-24 left-[-5%] w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-10%] w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted mb-4">
          Crew5 Journal
        </p>
        <h1 className="text-3xl md:text-5xl font-black text-text mb-4 leading-tight">
          Insights, Ideas &amp; Digital Stories
        </h1>
        <p className="text-muted max-w-3xl mx-auto text-base md:text-lg">
          Thoughts on design, development, branding, and digital growth. No
          fluff. Just things that actually move brands forward.
        </p>
      </motion.div>
    </section>
  );
}

//Users/editing2/crew5-website/app/components/Contact/ContactHero.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-background">
      {/* لمعات خفيفة */}
      <div className="pointer-events-none absolute -top-24 left-[-5%] w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-[-10%] w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-black text-text mb-4">
          Let&apos;s Build Something Great
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-base md:text-lg">
          Have a project in mind or just want to say hello? We&apos;d love to
          hear from you and explore how Crew5 can help.
        </p>
      </motion.div>
    </section>
  );
}

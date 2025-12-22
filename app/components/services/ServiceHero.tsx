//Users/editing2/crew5-website/app/components/services/ServiceHero.tsx
"use client";

import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-background px-6 md:px-12 relative overflow-hidden">
      {/* لمعات خلفية */}
      <div className="pointer-events-none absolute -top-32 left-[-5%] w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-[-10%] w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-1/3 w-40 h-40 rounded-full border border-accent/30 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl text-center relative z-10"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted mb-4">
          Crew5 Service
        </p>

        <h1 className="text-text text-3xl md:text-5xl font-black mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-muted text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <motion.a
            href="#service-details"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border border-accent/70 text-accent text-sm md:text-base font-medium hover:bg-accent hover:text-background transition-all duration-300"
          >
            Explore what&apos;s included
            <span>↓</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

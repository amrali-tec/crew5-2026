///Users/editing2/crew5-website/app/components/About/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client A",
    feedback:
      "Crew5 transformed our digital presence. Truly a creative powerhouse!",
  },
  {
    name: "Client B",
    feedback:
      "Professional, fast, and innovative. Our engagement grew exponentially.",
  },
  {
    name: "Client C",
    feedback: "A team that delivers results and creativity hand-in-hand.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black text-text mb-10"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-[0_0_24px_rgba(10,15,31,0.9)] text-left"
            >
              <span className="text-accent text-3xl leading-none mb-3 block">
                “
              </span>
              <p className="text-muted text-sm md:text-base mb-4">
                {t.feedback}
              </p>
              <p className="text-text font-semibold text-sm">{t.name}</p>
              <span className="text-[11px] text-muted">Client</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

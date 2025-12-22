//Users/editing2/crew5-website/app/components/Contact/ContactForm.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-9 space-y-6 backdrop-blur-xl shadow-[0_0_30px_rgba(10,15,31,0.9)]"
    >
      <h2 className="text-2xl font-semibold text-text">Send Us a Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-background border border-white/10 text-text placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-background border border-white/10 text-text placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full p-3 rounded-lg bg-background border border-white/10 text-text placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60"
      />

      <textarea
        placeholder="Tell us about your project"
        rows={5}
        className="w-full p-3 rounded-lg bg-background border border-white/10 text-text placeholder-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/60 resize-none"
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3.5 rounded-xl bg-accent text-background font-semibold text-sm md:text-base hover:shadow-[0_0_25px_rgba(0,255,127,0.8)] transition-all duration-300"
      >
        Send Message
      </motion.button>

      <p className="text-[11px] text-muted mt-1">
        We&apos;ll get back to you within 1–2 business days.
      </p>
    </motion.form>
  );
}

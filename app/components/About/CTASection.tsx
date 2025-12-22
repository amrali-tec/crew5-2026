///Users/editing2/crew5-website/app/components/About/CTASection.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl px-6 md:px-10 py-10 md:py-12 shadow-[0_0_35px_rgba(10,15,31,0.9)]"
      >
        <h2 className="text-3xl md:text-4xl font-black text-text mb-4">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-muted mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Get in touch with Crew5 Agency today and let&apos;s create digital
          experiences that actually move your brand forward.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-accent text-background font-semibold text-sm md:text-base shadow-[0_0_28px_rgba(0,255,127,0.8)] hover:shadow-[0_0_36px_rgba(0,255,127,1)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

//Users/editing2/crew5-website/app/components/services/ServiceCTA.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceCTA() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl px-6 md:px-10 py-10 md:py-12 shadow-[0_0_40px_rgba(10,15,31,0.9)] overflow-hidden"
      >
        {/* لمعات خلفية */}
        <div className="pointer-events-none absolute -top-24 -right-10 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* النص */}
        <h2 className="relative text-3xl md:text-4xl font-black text-text mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="relative text-base md:text-lg text-muted mb-8 max-w-2xl mx-auto">
          Let&apos;s talk about your project and see how our services can help
          you move forward with clarity, confidence, and measurable results.
        </p>

        {/* الأزرار */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-accent text-background font-semibold text-lg shadow-[0_0_30px_rgba(0,255,127,0.8)] hover:shadow-[0_0_40px_rgba(0,255,127,1)] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-accent/80 text-accent font-medium text-sm md:text-base hover:bg-accent hover:text-background transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* ملاحظة صغيرة */}
        <p className="relative mt-4 text-xs text-muted">
          Share a brief about your brand and we&apos;ll come back with ideas,
          not spam.
        </p>
      </motion.div>
    </section>
  );
}

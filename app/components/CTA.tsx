//Users/editing2/crew5-website/app/components/CTA.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-3xl w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl px-6 md:px-10 py-10 md:py-12 text-center shadow-[0_0_40px_rgba(15,23,42,0.9)] overflow-hidden"
      >
        {/* لمعة خفيفة في الخلفية */}
        <div className="pointer-events-none absolute -top-20 -right-10 w-56 h-56 rounded-full bg-[#16FF68]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* العنوان */}
        <h2 className="relative text-3xl md:text-4xl font-black text-white mb-4">
          Ready to Elevate Your Brand?
        </h2>

        {/* الوصف */}
        <p className="relative text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Let&apos;s work together to create digital experiences that{" "}
          <span className="text-[#16FF68] font-semibold">engage</span>, convert,
          and grow your business.
        </p>

        {/* الأزرار */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-[#16FF68] text-[#050814] font-semibold text-lg shadow-[0_0_30px_rgba(22,255,104,0.8)] hover:shadow-[0_0_40px_rgba(22,255,104,1)] transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex"
          >
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl border border-[#16FF68]/70 text-[#16FF68] font-medium text-base hover:bg-[#16FF68] hover:text-[#050814] transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* نص ثقة صغير */}
        <p className="relative mt-4 text-xs text-gray-500">
          No long forms. Just a quick chat to see if we&apos;re a good fit.
        </p>
      </motion.div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "We create stunning brands",
    subtitle: "Designs that stand out and engage your audience",
  },
  {
    title: "We grow your social media presence",
    subtitle: "Creative strategies for engagement and reach",
  },
  {
    title: "Content that engages and converts",
    subtitle: "Visuals and campaigns that drive results",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-transparent flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden">
      {/* Animated Background Elements (neon green theme) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-lime-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-full animate-ping" />
      </motion.div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-[#16FF68] bg-clip-text text-transparent"
          >
            {slides[current].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-slate-200/90 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {slides[current].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            {/* Primary CTA - Green neon */}
            <Link
              href="#contact"
              className="group relative bg-[#16FF68] text-[#050814] px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_0_35px_rgba(22,255,104,0.6)] hover:shadow-[0_0_45px_rgba(22,255,104,0.9)] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="group border-2 border-[#16FF68] text-[#16FF68] backdrop-blur-sm px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#16FF68] hover:text-[#050814] transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                WhatsApp
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 3.636a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414 0L.636 5.05A1 1 0 011 3.636l2.121-2.121a1 1 0 011.414 0zM15.364 3.636l2.121 2.121a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414 0l-2.121-2.121a1 1 0 010-1.414l2.121-2.121a1 1 0 011.414 0zM3.636 15.364l-2.121-2.121a1 1 0 010-1.414l2.121-2.121a1 1 0 011.414 0l2.121 2.121a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414 0zM15.364 15.364l2.121 2.121a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414 0l-2.121-2.121a1 1 0 010-1.414l2.121-2.121a1 1 0 011.414 0z"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Bullets */}
      <motion.div
        className="absolute bottom-12 flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-[#16FF68] shadow-[0_0_12px_rgba(22,255,104,0.8)]"
                : "bg-white/30 hover:bg-white/70"
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        <span className="text-xs text-white/60 font-medium tracking-wider">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}

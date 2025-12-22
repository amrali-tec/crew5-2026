//Users/editing2/crew5-website/app/components/About/AboutHeader.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <header className="w-full bg-background/90 backdrop-blur-md border-b border-white/10 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-5%] w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="h-[220px] md:h-[260px] flex items-center px-6 md:px-12 pt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto w-full flex flex-col justify-center gap-3"
        >
          <h1 className="text-3xl md:text-4xl font-black text-text">
            About Us
          </h1>

          <p className="text-muted max-w-2xl text-sm md:text-base">
            We’re a creative agency focused on building brands, crafting digital
            experiences, and turning ideas into measurable results.
          </p>

          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent font-semibold">About</span>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

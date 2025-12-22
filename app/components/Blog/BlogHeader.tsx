// app/components/Blog/BlogHeader.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <header className="w-full bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="h-[220px] md:h-[260px] flex items-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-text mb-1">
              Our Blog
            </h1>
            <p className="text-muted text-sm md:text-base">
              Stories, lessons, and frameworks from the Crew5 team.
            </p>
          </div>

          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>
            <span className="text-muted">/</span>
            <span className="text-accent font-semibold">Blog</span>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

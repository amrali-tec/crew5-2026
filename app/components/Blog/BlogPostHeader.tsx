// app/components/Blog/BlogPostHeader.tsx
"use client";

import { motion } from "framer-motion";

type BlogPostHeaderProps = {
  title: string;
  category: string;
};

export default function BlogPostHeader({
  title,
  category,
}: BlogPostHeaderProps) {
  return (
    <header className="w-full bg-background/90 backdrop-blur-md border-b border-white/10 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-5%] w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="h-[220px] md:h-[260px] flex items-center px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted mb-2">
              {category}
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-text leading-snug">
              {title}
            </h1>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

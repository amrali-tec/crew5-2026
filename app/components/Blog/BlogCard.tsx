// app/components/Blog/BlogCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
}: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/blog/${slug}`}
        className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#0C1224] p-6 md:p-7 transition-all duration-300 hover:border-accent/80 hover:bg-[#10172F]"
      >
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted mb-3">
          {date}
        </p>

        <h3 className="text-lg md:text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed flex-1">{excerpt}</p>

        <div className="mt-5 flex items-center justify-between text-xs text-accent">
          <span className="font-medium">Read more</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent text-xs group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

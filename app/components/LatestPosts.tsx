//Users/editing2/crew5-website/app/components/LatestPosts.tsx
"use client";

import Link from "next/link";
import BlogCard from "../components/Blog/BlogCard";
import { posts } from "../data/blog";
import { motion } from "framer-motion";

export default function LatestPosts() {
  const latest = posts.slice(0, 3); // عرض آخر 3 مقالات

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent">
      {/* العنوان */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-black mb-3"
        >
          Latest Articles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-gray-400"
        >
          Insights, tips, and strategies from the{" "}
          <span className="text-[#16FF68] font-semibold">Crew5</span> team.
        </motion.p>
      </div>

      {/* بطاقات المقالات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {latest.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
          >
            <BlogCard
              title={post.title}
              excerpt={post.description}
              date={post.date}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </div>

      {/* زر عرض الكل */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-[#16FF68] text-[#050814] font-semibold text-sm md:text-base shadow-[0_0_25px_rgba(22,255,104,0.7)] hover:shadow-[0_0_35px_rgba(22,255,104,1)] hover:-translate-y-0.5 transition-all duration-300"
        >
          See All Articles
        </Link>
      </motion.div>
    </section>
  );
}

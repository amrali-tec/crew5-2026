"use client";

import Link from "next/link";
import BlogCard from "../components/Blog/BlogCard";
import { posts } from "../data/blog";

export default function LatestPosts() {
  const latest = posts.slice(0, 3); // عرض آخر 3 مقالات

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {latest.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.description}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-accent text-background rounded-lg hover:bg-accent/80 transition"
        >
          See All Articles
        </Link>
      </div>
    </section>
  );
}

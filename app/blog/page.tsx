///Users/editing2/crew5-website/app/blog/page.tsx
"use client";

import Link from "next/link";
import { BlogPost, posts } from "../data/blog";
import BlogHeader from "../components/Blog/BlogHeader";

export default function BlogPage() {
  const BlogHeaderAny = BlogHeader as any;

  return (
    <>
      <BlogHeaderAny title="Blog" category="All" />
      <section className="w-full py-20 px-6 md:px-12 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 bg-background/20 rounded-xl hover:scale-105 transition transform cursor-pointer"
            >
              <h3 className="text-white text-xl font-semibold mb-2">
                {post.title}
              </h3>
              <p className="text-white/80 text-sm">{post.description}</p>
              <span className="text-white/50 text-xs mt-2 block">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

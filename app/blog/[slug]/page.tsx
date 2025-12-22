//Users/editing2/crew5-website/app/blog/[slug]
"use client";

import BlogPostHeader from "../../components/Blog/BlogPostHeader";
import { posts } from "../../data/blog"; // لازم يكون export const posts

type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
};

type Params = {
  slug: string;
};

export default function BlogPostPage({ params }: { params: Params }) {
  // نوع الـ post مضبوط
  const post: Post | undefined = posts.find(
    (p: Post) => p.slug === params.slug
  );

  if (!post) {
    return <p className="text-white p-6">Article not found.</p>;
  }

  return (
    <main className="bg-background min-h-screen text-white">
      <BlogPostHeader title={post.title} category={post.category} />
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <p className="text-white/80 mb-6">{post.description}</p>
        <div
          className="prose prose-invert max-w-full"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </main>
  );
}

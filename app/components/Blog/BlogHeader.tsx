"use client";
import Link from "next/link";

export default function BlogHeader() {
  return (
    <header className="w-full h-[300px] bg-background/80 flex items-center px-6 md:px-12 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
          Our Blog
        </h1>
        <nav className="flex space-x-4 text-white/80 text-sm md:text-base">
          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>
          <span className="text-white/50">/</span>
          <span className="text-accent font-semibold">Blog</span>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";

export default function AboutHeader() {
  return (
    <header className="w-full h-[300px] bg-background/80 backdrop-blur-md flex items-center px-6 md:px-12 pt-[80px]">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Us
        </h1>

        <p className="text-white/70 max-w-2xl mb-6">
          We’re a creative agency focused on building brands, crafting digital
          experiences, and turning ideas into results.
        </p>

        <nav className="flex items-center space-x-3 text-sm text-white/80">
          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>
          <span className="text-white/50">/</span>
          <span className="text-accent font-semibold">About</span>
        </nav>
      </div>
    </header>
  );
}

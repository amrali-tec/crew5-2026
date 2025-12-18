"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[80px] flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-white">Crew</span>
          <span className="text-accent">5</span>
          <span className="text-white ml-1">Agency</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white/80">
          <Link href="/aboutus" className="hover:text-accent transition">
            About Us
          </Link>
          <Link href="/services" className="hover:text-accent transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-accent transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-accent transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-accent transition">
            Contact
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="ml-4 bg-accent text-background px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          {["aboutus", "services", "projects", "blog", "contact"].map(
            (path) => (
              <Link
                key={path}
                href={`/${path}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-white hover:text-accent"
              >
                {path === "aboutus"
                  ? "About Us"
                  : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            )
          )}

          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="mt-6 bg-accent text-background px-6 py-3 rounded-lg text-xl font-bold"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

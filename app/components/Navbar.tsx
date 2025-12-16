"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-white">Crew</span>
          <span className="text-accent">5</span>
          <span className="text-white ml-1">Agency</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/aboutus" className="hover:text-accent transition">
            About Us
          </Link>
          <Link href="/services" className="hover:text-accent transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-accent transition">
            Our Projects
          </Link>
          <Link href="#contact" className="hover:text-accent transition">
            Contact
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="bg-accent text-background px-4 py-2 rounded font-bold hover:opacity-80 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-50">
          {/* Logo */}
          <div className="absolute top-6 left-6 text-2xl font-bold flex items-center">
            <span className="text-white">Crew</span>
            <span className="text-accent">5</span>
            <span className="text-white ml-1">Agency</span>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>

          {/* Menu Links */}
          <Link
            href="/services"
            className="text-white text-2xl hover:text-accent transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-white text-2xl hover:text-accent transition"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-white text-2xl hover:text-accent transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="bg-accent text-background px-6 py-3 rounded font-bold text-xl hover:opacity-80 transition"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

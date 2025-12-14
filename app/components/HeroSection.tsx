"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "We create stunning brands",
    subtitle: "Designs that stand out and engage your audience",
  },
  {
    title: "We grow your social media presence",
    subtitle: "Creative strategies for engagement and reach",
  },
  {
    title: "Content that engages and converts",
    subtitle: "Visuals and campaigns that drive results",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-background flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-all duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            {slide.title}
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-8 max-w-2xl">
            {slide.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-accent text-background px-6 py-3 rounded-lg font-bold text-lg hover:opacity-80 transition"
            >
              Contact Us
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-bold text-lg hover:bg-accent hover:text-background transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ))}

      {/* Pagination Bullets */}
      <div className="absolute bottom-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full ${
              index === current ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

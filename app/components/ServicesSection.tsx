"use client";
import Link from "next/link";
import { FaGlobe, FaPalette, FaMusic, FaVideo, FaEdit } from "react-icons/fa";
import { services } from "../data/services";

// خريطة أيقونات لكل تصنيف
const categoryIcons: Record<string, any> = {
  "Web & Digital Experience": FaGlobe,
  "Branding & Identity": FaPalette,
  "Social Media & Content": FaEdit,
  "Media Production": FaVideo,
  "Marketing & Growth": FaMusic,
  "Consulting & Strategy": FaEdit,
};

export default function HomeServicesByCategory() {
  // ناخد أول خدمة من كل تصنيف
  const categories = Array.from(
    new Map(services.map((s) => [s.category, s])).values()
  );

  return (
    <section className="py-16 bg-background/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((service) => {
            const Icon = categoryIcons[service.category] || FaEdit;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-6 bg-background/20 rounded-xl flex flex-col items-center text-center border border-accent/30 hover:border-accent hover:scale-105 transition transform cursor-pointer shadow-lg hover:shadow-xl"
              >
                <Icon className="text-accent text-5xl mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-accent text-black rounded-lg hover:bg-accent/90 transition"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

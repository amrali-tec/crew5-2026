//Users/editing2/crew5-website/app/components/ServicesSection.tsx
"use client";
import Link from "next/link";
import { FaGlobe, FaPalette, FaMusic, FaVideo, FaEdit } from "react-icons/fa";
import { services } from "../data/services";
import { motion } from "framer-motion";

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
  // أول خدمة من كل تصنيف
  const categories = Array.from(
    new Map(services.map((s) => [s.category, s])).values()
  );

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* العنوان والوصف */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white mb-3"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            A focused set of services to help{" "}
            <span className="text-[#16FF68] font-semibold">Crew5</span> clients
            grow, stand out, and win online.
          </motion.p>
        </div>

        {/* كروت الخدمات */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((service, index) => {
            const Icon = categoryIcons[service.category] || FaEdit;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-start text-left shadow-[0_0_22px_rgba(15,23,42,0.9)] hover:shadow-[0_0_28px_rgba(22,255,104,0.6)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  {/* لمعة خفيفة */}
                  <span className="pointer-events-none absolute inset-x-0 -top-8 h-16 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#16FF68]/20 to-transparent blur-xl transition-opacity duration-300" />

                  <div className="mb-4 flex items-center justify-between w-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16FF68]/10 text-[#16FF68] text-2xl">
                      <Icon />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#16FF68] group-hover:gap-2 transition-all duration-200">
                    Learn more
                    <span>→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* زر عرض كل الخدمات */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-[#16FF68] text-[#050814] font-semibold text-sm md:text-base shadow-[0_0_25px_rgba(22,255,104,0.7)] hover:shadow-[0_0_35px_rgba(22,255,104,1)] hover:-translate-y-0.5 transition-all duration-300"
          >
            See All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

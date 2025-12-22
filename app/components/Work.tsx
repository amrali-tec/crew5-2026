//Users/editing2/crew5-website/app/components/Work.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Work = {
  title: string;
  description: string;
  color: string;
};

const works: Work[] = [
  {
    title: "Project One",
    description:
      "Brief description of the first project. Attractive user experience and creative design.",
    color: "from-[#111827] to-[#1f2937]",
  },
  {
    title: "Project Two",
    description:
      "Brief description of the second project. Complete digital content to support your business.",
    color: "from-[#111827] to-[#374151]",
  },
  {
    title: "Project Three",
    description:
      "Brief description of the third project. Engaging design and smooth experience.",
    color: "from-[#111827] to-[#4b5563]",
  },
  {
    title: "Project Four",
    description:
      "Brief description of the fourth project. Comprehensive marketing and creative solutions.",
    color: "from-[#111827] to-[#6b7280]",
  },
  {
    title: "Project Five",
    description:
      "Brief description of the fifth project. Visual content and professional production.",
    color: "from-[#111827] to-[#9ca3af]",
  },
  {
    title: "Project Six",
    description:
      "Brief description of the sixth project. Website design and digital branding.",
    color: "from-[#111827] to-[#d1d5db]",
  },
];

type WorkSectionProps = {
  limit?: number; // عدد المشاريع في الهوم
};

export default function WorkSection({ limit }: WorkSectionProps) {
  const displayedWorks = limit ? works.slice(0, limit) : works;

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent">
      {/* العنوان */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-black mb-3"
        >
          Our Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
        >
          A glimpse into the projects where{" "}
          <span className="text-[#16FF68] font-semibold">Crew5</span> brought
          ideas to life.
        </motion.p>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedWorks.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="h-full"
          >
            <div
              className={`relative rounded-2xl overflow-hidden flex flex-col justify-end p-6 h-64 cursor-pointer bg-gradient-to-br ${work.color} border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(15,23,42,0.9)] hover:shadow-[0_0_35px_rgba(22,255,104,0.7)] hover:-translate-y-2 transition-all duration-300`}
            >
              {/* overlay خفيف */}
              <div className="pointer-events-none absolute inset-0 bg-black/30" />

              <div className="relative z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{work.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#16FF68]">
                  View case study
                  <span>→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA للانتقال لكل المشاريع */}
      {limit && works.length > limit && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-[#16FF68] text-[#050814] font-semibold text-sm md:text-base shadow-[0_0_25px_rgba(22,255,104,0.7)] hover:shadow-[0_0_35px_rgba(22,255,104,1)] hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      )}
    </section>
  );
}

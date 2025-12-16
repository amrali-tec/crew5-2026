"use client";

import Link from "next/link";

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
    color: "bg-[#1f2937]",
  },
  {
    title: "Project Two",
    description:
      "Brief description of the second project. Complete digital content to support your business.",
    color: "bg-[#374151]",
  },
  {
    title: "Project Three",
    description:
      "Brief description of the third project. Engaging design and smooth experience.",
    color: "bg-[#4b5563]",
  },
  {
    title: "Project Four",
    description:
      "Brief description of the fourth project. Comprehensive marketing and creative solutions.",
    color: "bg-[#6b7280]",
  },
  {
    title: "Project Five",
    description:
      "Brief description of the fifth project. Visual content and professional production.",
    color: "bg-[#9ca3af]",
  },
  {
    title: "Project Six",
    description:
      "Brief description of the sixth project. Website design and digital branding.",
    color: "bg-[#d1d5db]",
  },
];

type WorkSectionProps = {
  limit?: number; // لو حابين نظهر عدد محدود على الصفحة الرئيسية
};

export default function WorkSection({ limit }: WorkSectionProps) {
  const displayedWorks = limit ? works.slice(0, limit) : works;

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedWorks.map((work, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden flex flex-col justify-end p-6 h-64 cursor-pointer hover:scale-105 transform transition-all ${work.color}`}
          >
            <h3 className="text-white text-xl font-semibold mb-2">
              {work.title}
            </h3>
            <p className="text-white/80 text-sm">{work.description}</p>
          </div>
        ))}
      </div>

      {/* CTA للانتقال لكل المشاريع */}
      {limit && works.length > limit && (
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:brightness-110 transition"
          >
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
}

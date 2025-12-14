"use client";

const works = [
  {
    title: "Project One",
    description:
      "Brief description of the first project. Attractive user experience and creative design.",
    color: "bg-[#1f2937]", // placeholder background
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

export default function WorkSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
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
    </section>
  );
}

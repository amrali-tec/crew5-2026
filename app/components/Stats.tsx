"use client";

const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 85 },
  { label: "Years of Experience", value: 10 },
];

export default function StatsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background/10 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-background/20 p-8 rounded-xl">
            <p className="text-accent text-4xl font-bold">{stat.value}+</p>
            <p className="text-white mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

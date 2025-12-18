"use client";

import { FaUsers, FaProjectDiagram, FaAward, FaGlobe } from "react-icons/fa";

const stats = [
  {
    title: "Clients Served",
    value: "120+",
    icon: FaUsers,
    color: "text-blue-400",
  },
  {
    title: "Projects Completed",
    value: "85+",
    icon: FaProjectDiagram,
    color: "text-green-400",
  },
  {
    title: "Awards Won",
    value: "12",
    icon: FaAward,
    color: "text-yellow-400",
  },
  {
    title: "Global Reach",
    value: "15+ Countries",
    icon: FaGlobe,
    color: "text-purple-400",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-background/20 rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition cursor-pointer"
            >
              <Icon className={`text-5xl mb-4 ${stat.color}`} />
              <h3 className="text-white text-2xl font-bold mb-2">
                {stat.value}
              </h3>
              <p className="text-white/80 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

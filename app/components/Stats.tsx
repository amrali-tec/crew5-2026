//Users/editing2/crew5-website/app/components/Stats.tsx
"use client";

import { FaUsers, FaProjectDiagram, FaAward, FaGlobe } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    title: "Clients Served",
    value: 120,
    suffix: "+",
    icon: FaUsers,
  },
  {
    title: "Projects Completed",
    value: 85,
    suffix: "+",
    icon: FaProjectDiagram,
  },
  {
    title: "Awards Won",
    value: 12,
    suffix: "",
    icon: FaAward,
  },
  {
    title: "Global Reach",
    value: 15,
    suffix: "+ Countries",
    icon: FaGlobe,
  },
];

function StatCard({
  title,
  value,
  suffix,
  Icon,
  index,
}: {
  title: string;
  value: number;
  suffix: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 800; // ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(start + (value - start) * progress);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center backdrop-blur-xl shadow-[0_0_22px_rgba(15,23,42,0.9)] hover:shadow-[0_0_30px_rgba(22,255,104,0.6)] hover:-translate-y-2 transition-all duration-300 cursor-default"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#16FF68]/10 text-[#16FF68]">
        <Icon className="text-2xl" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
        {displayValue}
        <span className="text-[#16FF68] text-2xl md:text-3xl ml-1">
          {suffix}
        </span>
      </div>
      <p className="text-gray-300 text-sm md:text-base">{title}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-4xl font-black mb-3"
          >
            Our Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Numbers that reflect the impact{" "}
            <span className="text-[#16FF68] font-semibold">Crew5</span> has
            delivered for our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              Icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

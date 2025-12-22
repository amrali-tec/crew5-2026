"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaUsersCog, FaMagic, FaChartLine } from "react-icons/fa";

const pillars = [
  {
    icon: FaBullseye,
    label: "Strategy First",
    title: "Clear, measurable strategy before design",
    description:
      "We start with your business goals, audience, and market, then translate them into a roadmap for content, design, and campaigns.",
  },
  {
    icon: FaUsersCog,
    label: "Crew of Specialists",
    title: "A focused team for each channel",
    description:
      "From branding to social to production, each pillar is led by specialists who understand the platforms and the audience.",
  },
  {
    icon: FaMagic,
    label: "Bold Creative",
    title: "Visuals that look and feel different",
    description:
      "We create bold visuals, motion, and storytelling that make your brand stand out instead of blending into the feed.",
  },
  {
    icon: FaChartLine,
    label: "Growth Mindset",
    title: "Campaigns that are built to scale",
    description:
      "We track, test, and iterate so every campaign gets smarter, more efficient, and more profitable over time.",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white mb-3"
          >
            What We Offer as Crew5
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          >
            Not just services, but a **five‑pillar** approach to digital growth:
            brand, content, media, campaigns, and strategy working together.
          </motion.p>
        </div>

        {/* الأعمدة / الركائز */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_25px_rgba(15,23,42,0.9)] hover:shadow-[0_0_30px_rgba(22,255,104,0.7)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* لمعة خفيفة */}
                <div className="pointer-events-none absolute -top-10 right-0 w-24 h-24 bg-[#16FF68]/10 blur-3xl" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16FF68]/10 text-[#16FF68] text-2xl flex-shrink-0">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

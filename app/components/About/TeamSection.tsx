///Users/editing2/crew5-website/app/components/About/TeamSection.tsx
"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Amr Ali", role: "Founder | IT, Web & Digital Media Specialist" },
  { name: "John Doe", role: "Creative Director" },
  { name: "Jane Smith", role: "Social Media Manager" },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/40">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black text-text mb-3"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-muted text-sm md:text-base">
          A multidisciplinary crew combining strategy, design, content, and
          technology.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-[0_0_24px_rgba(10,15,31,0.9)]"
          >
            <h3 className="text-lg md:text-xl font-semibold text-text mb-2">
              {member.name}
            </h3>
            <p className="text-muted text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

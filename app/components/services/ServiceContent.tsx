"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  offerings: string[];
  process: string[];
  icon: IconType;
}

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const Icon = service.icon;

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header: عنوان الخدمة + الأيقونة */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between mb-4"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted mb-2">
              Crew5 Service
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-text mb-2">
              {service.title}
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl">
              {service.shortDescription}
            </p>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent text-2xl">
              <Icon />
            </div>
          </div>
        </motion.header>

        {/* About the Service */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_30px_rgba(10,15,31,0.9)]"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            About the Service
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* What We Offer + Our Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_24px_rgba(10,15,31,0.85)]"
          >
            <h2 className="text-2xl font-semibold text-text mb-3">
              What We Offer
            </h2>
            <p className="text-muted text-sm mb-4">
              Key deliverables you can expect when working with{" "}
              <span className="text-accent font-semibold">Crew5</span> on this
              service.
            </p>
            <ul className="space-y-2 text-muted text-sm md:text-base">
              {service.offerings.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,127,0.8)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 md:p-7 shadow-[0_0_24px_rgba(10,15,31,0.85)]"
          >
            <h2 className="text-2xl font-semibold text-text mb-3">
              Our Process
            </h2>
            <p className="text-muted text-sm mb-4">
              A structured, transparent process so you know exactly what happens
              and when.
            </p>
            <ol className="space-y-3 text-muted text-sm md:text-base">
              {service.process.map((step, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

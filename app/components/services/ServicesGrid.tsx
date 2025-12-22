///Users/editing2/crew5-website/app/components/services/ServicesGrid.tsx
"use client";

import { Icon } from "@iconify/react";
import { Service } from "@/app/data/services";
import Link from "next/link";
import { motion } from "framer-motion";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex flex-col h-full rounded-2xl border border-white/10 bg-[#0C1224] p-6 md:p-7 transition-all duration-300 hover:border-accent/80 hover:bg-[#10172F] hover:-translate-y-1.5"
      >
        <div className="mb-4 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon icon={service.icon} className="text-xl" />
          </div>
          <h3 className="text-base md:text-lg font-semibold text-text group-hover:text-accent transition-colors">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-muted mb-4 flex-1">{service.description}</p>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
            View details
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent text-xs group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.slug} service={service} index={index} />
      ))}
    </div>
  );
}

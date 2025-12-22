//Users/editing2/crew5-website/app/components/Contact/ContactInfo.tsx
"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const items = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@crew5agency.com",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+966 XXX XXX XXX",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Saudi Arabia",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold text-text">Contact Information</h2>

      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="text-sm" />
          </div>
          <div>
            <p className="text-text font-medium">{label}</p>
            <p className="text-muted text-sm">{value}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

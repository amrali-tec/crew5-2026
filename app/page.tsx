"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Work from "./components/Work";
import OurJourney from "./components/About/OurJourney";
import Stats from "./components/Stats";
import Client from "./components/Client";
import Testimonials from "./components/About/Testimonials";
import LatestPosts from "./components/LatestPosts";
import WhatWeOfferSection from "./components/WhatWeOfferSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden">
      {/* Hero مع animation سلس */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      {/* Stats مع scroll trigger */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Stats />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <WhatWeOfferSection />
      </motion.div>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <ServicesSection />
      </motion.section>

      {/* Work مع stagger animation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Work limit={3} />
      </motion.section>

      {/* Latest Posts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <LatestPosts />
      </motion.div>

      {/* Our Journey */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OurJourney />
      </motion.section>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>

      {/* Clients */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Client />
      </motion.div>
    </main>
  );
}

import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Work from "./components/Work";
import OurJourney from "./components/About/OurJourney";
import Stats from "./components/Stats";
import Client from "./components/Client";
import Testimonials from "./components/About/Testimonials";
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OurJourney />

      <Stats />
      <ServicesSection />
      {/* Navbar */}
      <Work limit={3} />
      <Testimonials />
      <Client />
    </main>
  );
}

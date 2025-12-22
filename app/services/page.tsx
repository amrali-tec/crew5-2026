import React from "react";
import ServicesGrid from "@/app/components/services/ServicesGrid";
import { services } from "../data/services";
import ServiceCTA from "../components/services/ServiceCTA";
import GlobalBackground from "../components/GlobalBackground";
import ServiceHero from "../components/services/ServiceHero";

export default function ServicesPage() {
  const categories = Array.from(
    new Set(services.map((service) => service.category))
  );

  return (
    <section className="container mx-auto py-20">
      <GlobalBackground />
      <ServiceHero
        title="Our Services"
        description="We provide end-to-end digital, creative, and production services designed to help brands grow, stand out, and connect with their audience in a meaningful way."
      />

      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">{category}</h2>

          <ServicesGrid
            services={services.filter(
              (service) => service.category === category
            )}
          />
        </div>
      ))}
      <ServiceCTA />
    </section>
  );
}

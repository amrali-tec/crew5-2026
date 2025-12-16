"use client";
import { IconType } from "react-icons";

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
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-white text-3xl font-bold mb-4">
            About the Service
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        <div>
          <h2 className="text-white text-3xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            {service.offerings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white text-3xl font-bold mb-4">Our Process</h2>
          <ol className="list-decimal list-inside text-white/80 space-y-2">
            {service.process.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { services } from "../data/services";

export default function ServicesPage() {
  const categories = Array.from(
    new Set(services.map((service) => service.category))
  );

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>

      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter((service) => service.category === category)
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="border rounded-xl p-6 hover:border-primary transition"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-70">{service.description}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}

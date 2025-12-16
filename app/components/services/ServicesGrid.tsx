import Link from "next/link";
import { services } from "@/app/data/services";

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="p-6 border border-white/10 rounded-xl hover:border-white/30 transition"
        >
          <h2 className="text-xl font-semibold">{service.title}</h2>
          <p className="text-white/70 mt-2">{service.description}</p>
        </Link>
      ))}
    </div>
  );
}

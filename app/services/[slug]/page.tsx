///Users/editing2/crew5-website/app/services/[slug]/page.tsx
import { services } from "../../data/services";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const service = services.find((service) => service.slug === params.slug);

  if (!service) return notFound();

  return (
    <section className="container mx-auto py-24 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
      <p className="text-lg opacity-80 mb-10">{service.description}</p>

      <div className="space-y-4 text-sm opacity-80">
        <p>
          At Crew5, we approach <strong>{service.title}</strong> with a
          strategic mindset, combining creativity, performance, and clarity to
          deliver real results.
        </p>

        <p>
          Every project is tailored to your brand goals, audience, and growth
          strategy.
        </p>
      </div>
    </section>
  );
}

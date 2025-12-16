"use client";
interface ServiceHeroProps {
  title: string;
  description: string;
}

export default function ServiceHero({ title, description }: ServiceHeroProps) {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-background px-6 md:px-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Our Services
        </h1>
        <p className="text-white/80 text-lg md:text-xl leading-relaxed">
          We provide end-to-end digital, creative, and production services
          designed to help brands grow, stand out, and connect with their
          audience in a meaningful way.
        </p>
      </div>
    </section>
  );
}

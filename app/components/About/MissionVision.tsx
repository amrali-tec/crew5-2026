///Users/editing2/crew5-website/app/components/About/MissionVision.tsx
"use client";

export default function MissionVision() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Our Mission & Vision
      </h2>
      <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-white/80">
            To empower brands with innovative digital strategies and creative
            solutions that connect with audiences, boost engagement, and drive
            measurable growth.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-white/80">
            To be recognized as a leading agency that blends creativity and
            strategy, helping businesses achieve their full digital potential.
          </p>
        </div>
      </div>
    </section>
  );
}

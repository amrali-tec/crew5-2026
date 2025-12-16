///Users/editing2/crew5-website/app/components/About/Testimonials.tsx
"use client";

const testimonials = [
  {
    name: "Client A",
    feedback:
      "Crew5 transformed our digital presence. Truly a creative powerhouse!",
  },
  {
    name: "Client B",
    feedback:
      "Professional, fast, and innovative. Our engagement grew exponentially.",
  },
  {
    name: "Client C",
    feedback: "A team that delivers results and creativity hand-in-hand.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-background/30 p-6 rounded-xl hover:scale-105 transition transform"
          >
            <p className="text-white/80 mb-4">"{t.feedback}"</p>
            <h4 className="text-white font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

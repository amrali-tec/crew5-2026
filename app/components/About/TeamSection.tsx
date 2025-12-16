///Users/editing2/crew5-website/app/components/About/TeamSection.tsx
"use client";

const team = [
  { name: "Amr Ali", role: "Founder | IT, Web & Digital Media Specialist" },
  { name: "John Doe", role: "Creative Director" },
  { name: "Jane Smith", role: "Social Media Manager" },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background/20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-background/30 p-6 rounded-xl hover:scale-105 transition transform"
          >
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-white/80">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

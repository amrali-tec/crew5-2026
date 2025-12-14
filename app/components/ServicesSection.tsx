"use client";
import {
  FaVideo,
  FaMusic,
  FaCamera,
  FaDesktop,
  FaPalette,
  FaGlobe,
  FaSearch,
  FaEdit,
  FaPenFancy,
  FaPhotoVideo,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Professional Video Production & Editing",
    description:
      "Short videos, marketing content, ads, Reels & TikTok to deliver your message professionally.",
    icon: FaVideo,
  },
  {
    title: "Audio & Sound Effects",
    description:
      "Recording, sound editing, and effects to enhance content quality.",
    icon: FaMusic,
  },
  {
    title: "Professional Photography",
    description:
      "Event, conference, private sessions, and all types of photography with high quality.",
    icon: FaCamera,
  },
  {
    title: "Presentation & Meeting Setup",
    description:
      "Preparing screens and presentations for your conferences and meetings using the latest technology.",
    icon: FaDesktop,
  },
  {
    title: "Digital Marketing & Branding Design",
    description:
      "Logo, graphic design, unified branding to strengthen your brand identity.",
    icon: FaPalette,
  },
  {
    title: "Web Design & Development",
    description:
      "Full user experience and attractive website design to support your digital business.",
    icon: FaGlobe,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Increase your website visibility in search results and attract more targeted clients.",
    icon: FaSearch,
  },
  {
    title: "Content & Digital Creative Management",
    description:
      "Organize and publish content professionally to increase engagement and followers.",
    icon: FaEdit,
  },
  {
    title: "Marketing Copywriting",
    description:
      "Clear and engaging copy to enhance your brand and strengthen marketing messages.",
    icon: FaPenFancy,
  },
  {
    title: "Photography Sessions",
    description:
      "Private or additional shoots covering all needs for campaigns and visual materials.",
    icon: FaPhotoVideo,
  },
  {
    title: "Comprehensive Digital Services",
    description:
      "Any additional digital marketing or creative production services to fully support your business.",
    icon: FaLaptopCode,
  },
  {
    title: "Integrated Creative Content Production",
    description:
      "Combining all previous elements for a complete digital experience.",
    icon: FaLightbulb,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-background px-6 md:px-12">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-background/20 p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition transform cursor-pointer"
            >
              <Icon className="text-accent text-5xl mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

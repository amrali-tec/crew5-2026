"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Company One", logo: "/logos/company1.png" },
  { name: "Company Two", logo: "/logos/company2.png" },
  { name: "Company Three", logo: "/logos/company3.png" },
  { name: "Company Four", logo: "/logos/company4.png" },
  { name: "Company Five", logo: "/logos/company5.png" },
  // تقدر تضيف شركات أكثر هنا لملء السطر
];

export default function PartnersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // نسخ العناصر مرة واحدة لتكرار سلس
    const items = Array.from(carousel.children);
    items.forEach((item) => {
      carousel.appendChild(item.cloneNode(true));
    });

    let scrollPos = 0;
    const speed = 1.2; // سرعة أعلى لحركة مستمرة وواضحة
    let animationFrameId: number;

    const scroll = () => {
      if (!carousel) return;

      scrollPos += speed;

      const maxScroll = carousel.scrollWidth / 2;
      if (scrollPos >= maxScroll) {
        scrollPos = 0; // رجوع فوري بدون توقف
      }

      carousel.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-transparent relative">
      {/* عنوان القسم */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white mb-3"
        >
          Our Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-gray-400"
        >
          Brands that trust{" "}
          <span className="text-[#16FF68] font-semibold">Crew5 Agency</span>.
        </motion.p>
      </div>

      {/* تدرجات جانبية للـ fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050814] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050814] to-transparent z-20" />

      {/* الـ Carousel نفسه */}
      <div
        ref={carouselRef}
        className="flex overflow-hidden gap-6 relative z-10"
        aria-label="Our partners logos carousel"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-44 md:w-56 lg:w-64 h-24 md:h-28 lg:h-32 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_0_18px_rgba(15,23,42,0.7)] hover:shadow-[0_0_25px_rgba(22,255,104,0.4)]"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 md:max-h-14 lg:max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

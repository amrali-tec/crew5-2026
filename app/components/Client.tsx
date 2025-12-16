"use client";
import { useRef, useEffect } from "react";

const partners = [
  { name: "Company One", logo: "/logos/company1.png" },
  { name: "Company Two", logo: "/logos/company2.png" },
  { name: "Company Three", logo: "/logos/company3.png" },
  { name: "Company Four", logo: "/logos/company4.png" },
  { name: "Company Five", logo: "/logos/company5.png" },
];

export default function PartnersCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // نسخ العناصر مرتين لتكرار seamless
    const cloneCount = carousel.children.length;
    for (let i = 0; i < cloneCount; i++) {
      carousel.appendChild(carousel.children[i].cloneNode(true));
    }

    let scrollPos = 0;
    const speed = 1; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      if (!carousel) return;
      scrollPos += speed;
      if (scrollPos >= carousel.scrollWidth / 2) {
        scrollPos = 0; // رجوع سلس للنصف
      }
      carousel.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Our Partners
      </h2>

      <div ref={carouselRef} className="flex overflow-hidden gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 md:w-48 lg:w-56 p-4 bg-background/20 rounded-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

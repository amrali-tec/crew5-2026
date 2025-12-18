import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Work from "./components/Work";
import OurJourney from "./components/About/OurJourney";
import Stats from "./components/Stats";
import Client from "./components/Client";
import Testimonials from "./components/About/Testimonials";
import LatestPosts from "./components/LatestPosts";
export default function HomePage() {
  return (
    <main>
      <HeroSection /> {/* البداية اللافتة للانتباه */}
      <Stats /> {/* أهم الأرقام والإحصائيات */}
      <ServicesSection /> {/* الخدمات الرئيسية */}
      <Work limit={3} /> {/* أبرز المشاريع */}
      <LatestPosts /> {/* آخر المقالات / الأخبار */}
      <OurJourney /> {/* قصة الشركة / رحلة العمل */}
      <Testimonials /> {/* آراء العملاء */}
      <Client /> {/* الشركات أو الشركاء */}
    </main>
  );
}

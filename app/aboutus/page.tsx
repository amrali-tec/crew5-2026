"use client";
import IntroSection from "../components/About/IntroSection";
import MissionVision from "../components/About/MissionVision";
import OurJourney from "../components/About/OurJourney";
import TeamSection from "../components/About/TeamSection";
import Testimonials from "../components/About/Testimonials";
import CTASection from "../components/About/CTASection";
import AboutHeader from "../components/About/AboutHeader";

export default function AboutUs() {
  return (
    <div className="bg-background text-white">
      <AboutHeader />
      <IntroSection />
      <MissionVision />
      <OurJourney />
      <TeamSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}

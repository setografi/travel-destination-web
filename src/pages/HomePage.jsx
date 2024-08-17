import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedDestinations from "../components/FeaturedDestinations";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import ServicesSection from "../components/ServicesSection";

function HomePage() {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedDestinations />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

export default HomePage;

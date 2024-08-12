import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedDestinations from "../components/FeaturedDestinations";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";

function HomePage() {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <FeaturedDestinations />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;

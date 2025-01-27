import React from "react";
import ImageTransition from "../common/ImageTransition";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Container with proper padding that scales with viewport */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <ImageTransition />

        {/* Content wrapper with better positioning */}
        <div className="relative w-full h-full flex items-center">
          <div className="max-w-4xl w-full py-12 md:py-16 lg:py-20">
            {/* Text content with improved spacing */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                <h1 className="text-primary-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-merriweather font-medium leading-tight ">
                  Discover Paradise on Earth
                </h1>
                <p className="text-primary-100 text-lg sm:text-xl lg:text-2xl max-w-2xl">
                  Uncover hidden gems and explore breathtaking beaches around
                  the globe. Your dream vacation starts here with BeachVibe.
                </p>
              </div>

              {/* Button with improved hover states and spacing */}
              <div>
                <Button href="/">Explore Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import ImageTransition from "./hero/ImageTransition";

function HeroSection() {
  return (
    <section className="w-full h-screen py-6 px-6 md:px-20">
      <div className="w-full h-full relative top-0 left-0">
        <ImageTransition />

        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl text-white font-bold">BeachVibe</h1>
          <p className="text-xl text-white mt-2">
            Discover Your Perfect Beach Getaway
          </p>
          <button className="mt-6 px-8 py-3 bg-bluePrimary text-white font-semibold rounded-lg hover:bg-opacity-20">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

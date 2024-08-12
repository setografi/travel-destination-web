import React from "react";
import ImageTransition from "./ImageTransition";

function HeroSection() {
  return (
    <section className="w-full h-full relative px-6 xl:px-20 2xl:px-6 2xl:w-[83.5rem] 2xl:container 2xl:mx-auto">
      <ImageTransition />

      <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl text-white font-bold">BeachVibe</h1>
        <p className="text-xl text-white mt-2">
          Discover Your Perfect Beach Getaway
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

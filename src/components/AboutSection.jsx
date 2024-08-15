import React from "react";
import MeterImage from "../assets/img/meter.svg";

function AboutSection() {
  return (
    <section id="about" className="w-full h-full py-16 bg-white">
      {/* <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">About Us</h2>
        <p className="text-xl">
          At BeachVibe, we believe that the perfect beach getaway should be
          accessible to everyone. Whether you're looking for adventure,
          relaxation, or a bit of both, we are here to guide you to the best
          beaches around the world.
        </p>
      </div> */}

      <div className="w-full max-w-4xl mx-auto pb-24">
        <h2 className="text-4xl font-semibold mb-6 text-black">About Us</h2>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-xl font-bold max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-base text-black max-w-[520px]">
            At BeachVibe, we believe that the perfect beach getaway should be
            accessible to everyone. Whether you're looking for adventure,
            relaxation, or a bit of both, we are here to guide you to the best
            beaches around the world.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full">
        <img
          src="/images/img71.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-[580px] object-cover object-center rounded-5xl overflow-hidden"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img
            src={MeterImage}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

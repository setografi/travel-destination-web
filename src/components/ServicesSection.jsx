import React from "react";
import GridCard from "./service/GridCard";
import Icon from "./shared/Icon";

import Service01 from "../assets/img/img74.jpg";

const gridcardItem = [
  {
    title: "Beautiful Condo",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-home-4-line" />,
  },
  {
    title: "Easy to Connect",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-mail-send-line" />,
  },
  {
    title: "Restaurants & Cafe",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-restaurant-line" />,
  },
  {
    title: "24/7 Support",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-customer-service-2-line" />,
  },
];

function ServicesSection() {
  return (
    <section id="service" className="bg-whiteText w-full h-full py-16">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6 md:px-20">
        <h1 className="text-4xl text-black text-center font-semibold mb-5">
          Our Services
        </h1>
        <p className="text-base text-black text-center mb-8">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 justify-center items-center px-6 md:px-20 mb-8 gap-8">
        <div className="w-full h-full md:col-span-1 rounded-2xl overflow-hidden">
          <img
            src={Service01}
            width={4000}
            height={6000}
            alt="Service 01"
            className="w-full h-[11rem] md:h-[27rem] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full h-full md:col-span-2">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 justify-start items-start gap-8">
            {gridcardItem.map((item, index) => {
              return (
                <GridCard
                  key={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 justify-center items-center pt-16 px-6 lg:px-20 md:space-x-4 gap-6 md:gap-0">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl text-black text-start font-semibold">
            9.3113
          </h2>
          <p>No. of Travels</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl text-black text-start font-semibold">
            8.492
          </h2>
          <p>No. of Clients</p>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h2 className="text-4xl text-black text-start font-semibold">100</h2>
          <p>No. of Employess</p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl text-black text-start font-semibold">120</h2>
          <p>No. of Countries</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

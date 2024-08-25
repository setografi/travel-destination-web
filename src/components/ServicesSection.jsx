import React from "react";
import GridCard from "./service/GridCard";
import Icon from "./shared/Icon";

const gridcardItem = [
  {
    title: "Beautiful Condo",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-home-4-line" />,
  },
  {
    title: "Restaurants & Cafe",
    content:
      "Even the all-powerful Pointing has no control about the blind texts.",
    icon: <Icon className="ri-restaurant-line" />,
  },
];

function ServicesSection() {
  return (
    <section
      id="service"
      className="bg-whiteText w-full h-full py-16 px-6 md:px-20"
    >
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 flex gap-5 flex-col justify-center lg:justify-normal md:flex-row order-2 lg:order-1">
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
        <div className="lg:w-1/2 flex flex-col justify-between order-1 lg:order-2">
          <h2 className="text-4xl text-black font-semibold mb-5">
            Our Services
          </h2>
          <p className="text-black text-base">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 justify-center items-center pt-16 gap-6 md:gap-0">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black text-start font-semibold">
            9.3113
          </h2>
          <p>No. of Travels</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black text-start font-semibold">
            8.492
          </h2>
          <p>No. of Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black text-start font-semibold">100</h2>
          <p>No. of Employess</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black text-start font-semibold">120</h2>
          <p>No. of Countries</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

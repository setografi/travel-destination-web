import React, { useEffect } from "react";
import gsap from "gsap";

import { preloadImages } from "./featured/utils";
import { GridItem } from "./featured/GridItem";
import GridCell from "./featured/GridCell";
import ContentItems from "./featured/ContentItems";

function FeaturedDestinations() {
  useEffect(() => {
    // Initialize the grid
    new GridItem(document.querySelector(".grid--large"));

    // Preload images and then remove loader (loading class) from body
    preloadImages(".grid__cell-img-inner, .slide-nav__img").then(() => {
      document.body.classList.remove("loading");
    });

    // Optionally: Add any GSAP animations here
    gsap.from(".frame__title", { opacity: 5, y: -50, duration: 1 });
  }, []);

  const gridItems = [
    {
      className: "grid__cell-c1-r1",
      dataItem: "item-1",
      style: { backgroundImage: "url(/images/img71.jpg)" },
    },
    {
      className: "grid__cell-c3-r1",
      dataItem: "item-2",
      style: { backgroundImage: "url(/images/img72.jpg)" },
    },
    {
      className: "grid__cell-c4-r1",
      dataItem: "item-3",
      style: { backgroundImage: "url(/images/img73.jpg)" },
    },
    {
      className: "grid__cell-c1-r2",
      dataItem: "item-4",
      style: { backgroundImage: "url(/images/img71.jpg)" },
    },
    {
      className: "grid__cell-c3-r2",
      dataItem: "item-5",
      style: { backgroundImage: "url(/images/img72.jpg)" },
    },
    {
      className: "grid__cell-c2-r3",
      dataItem: "item-6",
      style: { backgroundImage: "url(/images/img73.jpg)" },
    },
    {
      className: "grid__cell-c4-r3",
      dataItem: "item-7",
      style: { backgroundImage: "url(/images/img71.jpg)" },
    },
    {
      className: "grid__cell-c1-r4",
      dataItem: "item-8",
      style: { backgroundImage: "url(/images/img72.jpg)" },
    },
    {
      className: "grid__cell-c3-r4",
      dataItem: "item-9",
      style: { backgroundImage: "url(/images/img73.jpg)" },
    },
    {
      className: "grid__cell-c3-r5",
      dataItem: "item-10",
      style: { backgroundImage: "url(/images/img71.jpg)" },
    },
  ];

  const contentItems = [
    {
      id: "item-1",
      number: "01",
      heading: "Bali Paradise",
      text: "Discover the exotic beaches of Bali, where turquoise waters meet vibrant culture and serene landscapes.",
    },
    {
      id: "item-2",
      number: "02",
      heading: "Maldives Getaway",
      text: "Escape to the Maldives, where luxury meets the sea. Experience crystal-clear waters and overwater bungalows.",
    },
    {
      id: "item-3",
      number: "03",
      heading: "Santorini Bliss",
      text: "Enjoy the breathtaking sunsets and unique beaches of Santorini, a picturesque destination in the Greek Isles.",
    },
    {
      id: "item-4",
      number: "04",
      heading: "Hawaiian Adventure",
      text: "Explore the diverse beaches of Hawaii, from volcanic black sands to golden shores, perfect for every traveler.",
    },
    {
      id: "item-5",
      number: "05",
      heading: "Phuket Escape",
      text: "Unwind on the pristine beaches of Phuket, Thailand, known for its turquoise waters and lively atmosphere.",
    },
    {
      id: "item-6",
      number: "06",
      heading: "Seychelles Serenity",
      text: "Relax in the untouched beauty of Seychelles, where white sand beaches and lush jungles create a perfect getaway.",
    },
    {
      id: "item-7",
      number: "07",
      heading: "Ibiza Beaches",
      text: "Enjoy the lively beaches of Ibiza, where the Mediterranean sun meets vibrant nightlife and stunning views.",
    },
    {
      id: "item-8",
      number: "08",
      heading: "Gold Coast Wonders",
      text: "Discover Australia’s Gold Coast, a surfer’s paradise with endless golden sands and thrilling beach activities.",
    },
    {
      id: "item-9",
      number: "09",
      heading: "Bora Bora Retreat",
      text: "Escape to the tranquil waters of Bora Bora, a luxury destination with stunning lagoon views and serene beaches.",
    },
    {
      id: "item-10",
      number: "10",
      heading: "Amalfi Coast Charm",
      text: "Experience the charm of Italy’s Amalfi Coast, where dramatic cliffs meet serene beaches and vibrant coastal towns.",
    },
  ];

  return (
    <section id="destinations" className="bg-whiteText w-full h-full py-16">
      <h2 className="text-4xl text-black text-center font-semibold mb-8">
        Featured Destinations
      </h2>
      <div className="loading">
        <div>
          <div className="grid grid--large">
            <div className="grid__cell grid__cell-c4-r2 grid__cell--padded">
              <div className="frame">
                <h1 className="frame__title text-base font-normal mt-8 overflow-hidden">
                  <span className="oh__inner inline-block origin-left will-change-transform">
                    Explore hidden coastal paradises with BeachVibe. Discover
                    the best beach destinations that offer natural beauty and
                    tranquility, perfect for your dream vacation.
                  </span>
                </h1>
              </div>
            </div>
            <div className="grid__cell grid__cell-c2-r2 grid__cell--padded">
              <a href="/" className="oh overflow-hidden">
                <span className="oh__inner inline-block origin-left will-change-transform">
                  @setografi
                </span>
              </a>
            </div>

            {gridItems.map((item, index) => (
              <GridCell key={index} {...item} />
            ))}
          </div>
          <div className="content">
            {contentItems.map((item, index) => {
              return (
                <ContentItems
                  key={index}
                  id={item.id}
                  number={item.number}
                  heading={item.heading}
                  text={item.text}
                />
              );
            })}

            <button className="back bg-none opacity-0 w-12 mb-6 stroke-black hover:text-bluePrimary pointer-events-none cursor-pointer z-[1000]">
              <i className="ri-arrow-left-line"></i>
              <span>Back</span>
            </button>
            <nav className="grid grid--mini">
              {gridItems.map((item, index) => {
                return (
                  <GridCell
                    key={index}
                    className={item.className}
                    style={item.style}
                  />
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;

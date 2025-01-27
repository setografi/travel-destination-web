import React from "react";
import GridCard from "../common/GridCard";
import Icon from "../common/Icon";

const gridcardItem = [
  {
    title: "Beachfront Villas",
    content:
      "Experience unmatched comfort and breathtaking ocean views with our premium beachfront villas.",
    icon: <Icon className="ri-home-4-line" />,
  },
  {
    title: "Exquisite Dining",
    content:
      "Savor world-class cuisine in picturesque settings that capture the essence of coastal living.",
    icon: <Icon className="ri-restaurant-line" />,
  },
];

const stats = [
  { value: "10,432", label: "Happy Travelers" },
  { value: "9,876", label: "Destinations Explored" },
  { value: "250+", label: "Luxury Accommodations" },
  { value: "200+", label: "Beach Adventures" },
];

function Services() {
  return (
    <section
      id="service"
      className="bg-primary-100 w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        {/* Services content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-24">
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6 order-2 lg:order-1">
            {gridcardItem.map((item, index) => (
              <GridCard
                key={index}
                title={item.title}
                content={item.content}
                icon={item.icon}
                className="flex-1"
              />
            ))}
          </div>

          <div className="lg:w-1/2 flex flex-col space-y-6 order-1 lg:order-2">
            <h2 className="text-neutral-m text-3xl sm:text-4xl font-merriweather font-semibold">
              Our Services
            </h2>
            <p className="text-neutral-m text-base sm:text-lg leading-relaxed">
              BeachVibe offers extraordinary beach experiences tailored to your
              desires. From serene getaways to thrilling adventures, we ensure
              your journey is luxurious, fun, and unforgettable. Let us handle
              everything, from accommodations to personalized itineraries, so
              you can relax and enjoy every moment.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2 items-start">
              <h2 className="text-neutral-m text-3xl sm:text-4xl font-semibold">
                {stat.value}
              </h2>
              <p className="text-neutral-m text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

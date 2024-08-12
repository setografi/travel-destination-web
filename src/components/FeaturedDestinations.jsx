import React from "react";

function FeaturedDestinations() {
  const destinations = [
    { name: "Tropical Paradise", img: "/images/img71.jpg" },
    { name: "Sunny Shores", img: "/images/img72.jpg" },
    { name: "Crystal Waters", img: "/images/img73.jpg" },
  ];

  return (
    <section id="destinations" className="w-full h-full py-16 bg-white">
      <h2 className="text-4xl text-center font-semibold mb-8">
        Featured Destinations
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">
                {destination.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;

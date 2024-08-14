import React from "react";

function FeaturedDestinations() {
  const destinations = [
    { name: "Tropical Paradise", img: "/images/img71.jpg" },
    { name: "Sunny Shores", img: "/images/img72.jpg" },
    { name: "Crystal Waters", img: "/images/img73.jpg" },
  ];

  return (
    <section
      id="destinations"
      className="w-full h-full py-16 flex items-center justify-center"
    >
      {/* <h2 className="text-4xl text-center font-semibold mb-8">
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
      </div> */}

      <div className="flex w-[900px] min-h-[550px] border-4 border-[#f1f1f1] rounded-xl overflow-hidden">
        <div className="py-5 px-3 bg-[#177edf]">
          <div className="mb-24 text-white">
            <span className="text-2xl font-bold">Bali</span> <br />
            Travel.
          </div>
          <div className="flex flex-col items-center gap-6 text-xl text-[#d3d5e8] hover:text-white cursor-pointer">
            <div className="ri-community-line sidebar--link"></div>
            <div className="ri-flight-takeoff-line sidebar--link"></div>
            <div className="ri-train-line sidebar--link"></div>
            <div className="ri-roadster-line sidebar--link"></div>
            <div className="ri-quil-pen-line sidebar--link"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="p-6 bg-[rgba(204, 238, 238, 0.5)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b-2 border-b-[#999] pb-1 mb-4">
              <input
                type="text"
                placeholder="Destination, Hotel, Attraction, etc.."
                className="w-full border-none bg-transparent outline-none"
              />
              <i className="ri-search-line search--icon text-[#999]"></i>
            </div>
            <div className="popular--stays">
              <h2 className="text-[#222]">Popular Stays</h2>
              <p className="text-xs">In Bali Indonesia</p>

              <div className="mt-4 pr-1 grid gap-2 h-[400px] overflow-y-scroll">
                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#e7f7f6] p-2 rounded-2xl">
                  <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
                    <img
                      src="./assets/stay1.jpg"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="stay--details">
                    <h6 className="text-[#222] font-normal">
                      Entire bungalow in bay area
                    </h6>
                    <h4 className="text-[#222]">Pura Tanah Lot</h4>
                    <p className="text-xs">$255 / night</p>
                    <div className="flex gap-1 mt-1">
                      <i className="ri-star-fill text-[#177edf]"></i>
                      <p className="text-xs">4.5 (120)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl p-6">
            <div className="flex items-start bg-[rgba(255, 255, 255, 0.5)] backdrop-blur-[1px] w-fit py-1 px-2 rounded-lg ml-auto gap-1">
              <div className="relative h-6 w-6 rounded-full overflow-hidden">
                <img
                  src="./assets/avatar.png"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <p>Hello, John!</p>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <div className="text-white mt-16">
              <h4 className="font-extralight text-xl">Live as if</h4>
              <h1 className="text-5xl">The Paradise</h1>
              <h4 className="font-extralight text-xl">is on earth</h4>
              <div className="w-fit border-2 py-2 px-3 mt-4 rounded-lg cursor-pointer">
                Plan a trip
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.5)] backdrop-blur-[1px] flex ml-auto p-1 gap-1 rounded-2xl">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src="./assets/gal1.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src="./assets/gal1.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src="./assets/gal1.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                <img
                  src="./assets/gal1.jpg"
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between items-center bg-white py-2 px-[2px] rounded-2xl">
                <i className="ri-arrow-right-s-line"></i>
                <i className="ri-arrow-left-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;

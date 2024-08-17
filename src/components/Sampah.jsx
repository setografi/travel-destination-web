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
      className="bg-white w-full h-full py-16 flex flex-col items-center justify-center"
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

      {/* <div className="flex w-[900px] min-h-[550px] border-4 border-[#f1f1f1] rounded-xl overflow-hidden">
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
      </div> */}

      <div>
        <div>
          {" "}
          {/* <div className="grid__cell grid__cell-c1-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-1"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c3-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-2"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c4-r1">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-3"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c1-r2">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-4"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c3-r2">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-5"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c2-r3">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-6"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c4-r3">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-7"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c1-r4">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-8"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c3-r4">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-9"
                ></div>
              </div>
            </div> */}
          {/* <div className="grid__cell grid__cell-c3-r5">
              <div className="grid__cell-img">
                <div
                  className="grid__cell-img-inner"
                  style={{ backgroundImage: "url(/images/img71.jpg)" }}
                  data-item="item-10"
                ></div>
              </div>
            </div> */}
        </div>
        <div>
          {" "}
          <div className="content__item" id="item-1">
            <span className="content__item-number oh">
              <span className="oh__inner">01</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Masses</span>
            </h2>
            <p className="content__item-text">
              The instruments by which public opinion is organized and focused
              may be misused. But such organization and focusing are necessary
              to orderly life.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-2">
            <span className="content__item-number oh">
              <span className="oh__inner">02</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Invisible</span>
            </h2>
            <p className="content__item-text">
              As civilization has become more complex, and as the need for
              invisible government has been increas ingly demonstrated, the
              technical means have been invented and developed by which opinion
              may be regimented.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-3">
            <span className="content__item-number oh">
              <span className="oh__inner">03</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Expense</span>
            </h2>
            <p className="content__item-text">
              The invisible government tends to be concentrated in the hands of
              the few because of the expense of manipulating the social
              machinery which controls the opinions and habits of the masses.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-4">
            <span className="content__item-number oh">
              <span className="oh__inner">04</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Mechanism</span>
            </h2>
            <p className="content__item-text">
              No matter how sophisticated, how cynical the public may become
              about publicity methods, it must respond to the basic appeals,
              because it will always need food, crave amusement, long for
              beauty, respond to leadership.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-5">
            <span className="content__item-number oh">
              <span className="oh__inner">05</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Millions</span>
            </h2>
            <p className="content__item-text">
              This practice of creating circumstances and of creating pictures
              in the minds of millions of persons is very common.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-6">
            <span className="content__item-number oh">
              <span className="oh__inner">06</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Continuous</span>
            </h2>
            <p className="content__item-text">
              The important thing is that it is universal and continuous; and in
              its sum total it is regimenting the public mind every bit as much
              as an army regiments the bodies of its soldiers.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-7">
            <span className="content__item-number oh">
              <span className="oh__inner">07</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Irresistible</span>
            </h2>
            <p className="content__item-text">
              When regimented, a group at times offers an irresistible pressure
              before which legislators, editors, and teachers are helpless.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-8">
            <span className="content__item-number oh">
              <span className="oh__inner">08</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Pressure</span>
            </h2>
            <p className="content__item-text">
              A desire for a specific reform, however widespread, cannot be
              translated into action until it is made articulate, and until it
              has exerted sufficient pressure upon the proper law-making bodies.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-9">
            <span className="content__item-number oh">
              <span className="oh__inner">09</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Interests</span>
            </h2>
            <p className="content__item-text">
              In the active proselytizing minorities in whom selfish interests
              and public interests coincide lie the progress and development of
              America.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
          <div className="content__item" id="item-10">
            <span className="content__item-number oh">
              <span className="oh__inner">10</span>
            </span>
            <h2 className="content__item-heading oh">
              <span className="oh__inner">Think</span>
            </h2>
            <p className="content__item-text">
              Small groups of persons can, and do, make the rest of us think
              what they please about a given subject.
            </p>
            <a className="content__item-link oh">
              <span className="oh__inner">View more</span>
            </a>
            <nav className="slide-nav">
              <div
                className="slide-nav__img slide-nav__img--prev"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
              <div
                className="slide-nav__img slide-nav__img--next"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </nav>
          </div>
        </div>
        <div>
          {" "}
          <div className="grid__cell grid__cell-c1-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c2-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r5">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(/images/img71.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;

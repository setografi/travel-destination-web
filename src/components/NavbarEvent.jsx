import React, { useEffect, useRef, useState } from "react";

const NavbarEvent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed z-20 top-6 md:top-10 w-full px-6 xl:px-20 2xl:px-6 2xl:w-[83.5rem] 2xl:container 2xl:mx-auto"
    >
      <div className=" bg-white rounded-2xl px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              <h1 className="text-gray-800 font-semibold text-sm md:text-base w-1/2 md:w-full">
                BeachVibe
              </h1>
            </div>
          </a>

          <button
            onClick={handleMenuClick}
            className="lg:hidden py-2 md:py-[10px] px-3 md:px-4 rounded-xl text-white bg-blue-100"
          >
            <i className="ri-menu-line"></i>
          </button>

          {/* Menu Laptop */}
          <div className="lg:flex items-center gap-4 hidden">
            <div className="flex gap-4 font-semibold text-sm">
              <a
                href="/"
                className="px-4 py-2 text-gray-800 hover:text-blue-100"
              >
                Home
              </a>
              <a
                href="#destinations"
                className="px-4 py-2 text-gray-800 hover:text-blue-100"
              >
                Destinations
              </a>
              <a
                href="#about"
                className="px-4 py-2 text-gray-800 hover:text-blue-100"
              >
                About Us
              </a>
              <a
                href="#testimonials"
                className="px-4 py-2 text-gray-800 hover:text-blue-100"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-gray-800 hover:text-blue-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      <div className="lg:hidden relative">
        <div
          className={` bg-white py-6 rounded-b-2xl transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 -translate-y-3"
              : "opacity-0 hidden translate-y-4"
          }`}
        >
          <div className="flex flex-col items-start gap-4 px-4">
            <div className="flex gap-2 flex-col text-white font-semibold text-sm">
              <a href="/" className="py-3 text-gray-800 hover:text-blue-100">
                Home
              </a>
              <a
                href="#destinations"
                className="py-3 text-gray-800 hover:text-blue-100"
              >
                Destinations
              </a>
              <a
                href="#about"
                className="py-3 text-gray-800 hover:text-blue-100"
              >
                About Us
              </a>
              <a
                href="#testimonials"
                className="py-3 text-gray-800 hover:text-blue-100"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="py-3 text-gray-800 hover:text-blue-100"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarEvent;

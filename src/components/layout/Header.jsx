import React, { useEffect, useRef, useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="absolute w-full z-50">
      <nav
        ref={navbarRef}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-20 pt-6 lg:pt-8"
      >
        <div className="bg-primary-100 rounded-2xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <h1 className="text-neutral-m font-semibold text-base sm:text-lg">
                BeachVibe
              </h1>
            </a>

            <button
              onClick={handleMenuClick}
              className="lg:hidden p-2.5 rounded-lg text-neutral-m hover:text-accent-500 transition-colors"
              aria-label="Toggle menu"
            >
              <i className="ri-menu-line text-lg"></i>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex gap-2 font-semibold text-sm">
                {["Home", "Services", "About", "Contact Us"].map((item) => (
                  <a
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : `#${item.toLowerCase().replace(" ", "")}`
                    }
                    className="px-4 py-2 text-neutral-m hover:text-accent-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 px-4 sm:px-6 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="bg-primary-100 mt-2 rounded-2xl shadow-lg">
            <div className="py-4 px-4 sm:px-6">
              {["Home", "Services", "About", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Home"
                      ? "/"
                      : `#${item.toLowerCase().replace(" ", "")}`
                  }
                  className="block py-3 text-neutral-m hover:text-accent-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

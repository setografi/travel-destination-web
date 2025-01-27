import React from "react";
import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-primary-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Contact and Address Section */}
          <div className="flex flex-col gap-8 lg:gap-12 max-w-md">
            <div className="space-y-6">
              <h3 className="text-neutral-m font-merriweather font-semibold text-xl">
                Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-m hover:text-neutral-light transition-colors"
                >
                  <i className="ri-phone-line text-lg"></i>
                  <span className="font-medium">+62 812-3456-7890</span>
                </a>
                <a
                  href="mailto:support@beachvibe.com"
                  className="flex items-center gap-3 text-neutral-m hover:text-neutral-light transition-colors"
                >
                  <i className="ri-mail-line text-lg"></i>
                  <span className="font-medium">support@beachvibe.com</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={Logo} alt="BeachVibe logo" className="w-12 h-12" />
              <p className="font-medium text-neutral-m">
                BeachVibe Headquarters, Jl. Pantai Indah No. 25, Kecamatan Batu
                Karang, Kota Denpasar, Bali, 80123, Indonesia
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-12 lg:gap-24">
            {/* About Links */}
            <div className="flex flex-col gap-6">
              <h3 className="text-neutral-m font-merriweather font-semibold text-xl">
                About
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "About BeachVibe",
                  "Our Vision & Mission",
                  "Meet the Team",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-m font-medium hover:text-neutral-light transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="flex flex-col gap-6">
              <h3 className="text-neutral-m font-merriweather font-semibold text-xl">
                Product
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Luxury Packages",
                  "Adventure Tours",
                  "Couples Retreats",
                  "Family Escapes",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-neutral-m font-medium hover:text-neutral-light transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

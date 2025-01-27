import React from "react";
import Button from "../common/Button";

function Cta() {
  return (
    <section id="contact" className="bg-primary-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          <div className="flex-1 max-w-3xl">
            <h2 className="text-neutral-m text-3xl sm:text-4xl font-merriweather font-semibold mb-4 sm:mb-6">
              Make Every Moment Count – Start Your Journey Today!
            </h2>

            <p className="text-base sm:text-lg text-neutral-m leading-relaxed">
              Don't just dream about the perfect beach vacation—live it. Whether
              it's relaxation or adventure, BeachVibe ensures every detail is
              perfect. Contact us and let's bring your dream getaway to life.
            </p>
          </div>

          <Button onClick={() => alert("Clicked!")}>Get in Touch Now!</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;

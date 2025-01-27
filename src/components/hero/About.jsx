import React from "react";

function About() {
  return (
    <section id="about" className="bg-accent-200 w-full">
      <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="space-y-12">
          <h2 className="text-neutral-m text-3xl sm:text-4xl font-merriweather font-semibold">
            About Us
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
            <h3 className="text-xl sm:text-2xl text-neutral-m font-bold lg:max-w-sm">
              Your Beach Adventure Awaits
            </h3>
            <p className="text-base sm:text-lg text-neutral-m leading-relaxed lg:max-w-2xl">
              At BeachVibe, we specialize in curating unforgettable beach
              experiences tailored to your needs. From serene escapes to
              thrilling water activities, we guide you to the world's most
              stunning coastlines. Let us help you create moments that last a
              lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

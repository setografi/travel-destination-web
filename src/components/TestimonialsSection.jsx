import React from "react";

function TestimonialsSection() {
  const testimonials = [
    { name: "John Doe", text: "BeachVibe made my vacation unforgettable!" },
    {
      name: "Jane Smith",
      text: "The best beach destinations all in one place.",
    },
    {
      name: "Kim Ervan",
      text: "Highly recommended for those looking for a beach tourist spot, 5 stars!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#fafafa] w-full h-full py-16 px-6 md:px-20"
    >
      <h2 className="text-4xl text-center font-semibold mb-8">
        What Our Users Say
      </h2>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-black py-6 px-8 border border-black rounded-2xl"
          >
            <p className="text-xl mb-4 text-black">"{testimonial.text}"</p>
            <h3 className="text-lg font-bold text-black">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;

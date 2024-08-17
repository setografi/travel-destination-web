import React from "react";

function TestimonialsSection() {
  const testimonials = [
    { name: "John Doe", text: "BeachVibe made my vacation unforgettable!" },
    {
      name: "Jane Smith",
      text: "The best beach destinations all in one place.",
    },
  ];

  return (
    <section id="testimonials" className="bg-whiteText w-full h-full py-16">
      <h2 className="text-4xl text-center font-semibold mb-8">
        What Our Users Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-blue-50 rounded-lg shadow">
            <p className="text-xl mb-4">"{testimonial.text}"</p>
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;

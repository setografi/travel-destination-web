import React from "react";

function CtaSection() {
  return (
    <section id="contact" className="bg-bluePrimary w-full h-full py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20">
        <div className="max-w-3xl">
          <p className="text-base text-whiteText uppercase mb-2">
            Call To Action
          </p>

          <h2 className="text-2xl md:text-4xl text-whiteText font-extrabold uppercase mb-4">
            Ready For Unforgatable Travel. Remember Us!
          </h2>

          <p className="text-base text-whiteText mb-7">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
        </div>

        <button className="bg-whiteText text-base font-semibold rounded-lg py-2 px-3 transition hover:bg-opacity-20 hover:text-whiteText">
          Contact Us !
        </button>
      </div>
    </section>
  );
}

export default CtaSection;

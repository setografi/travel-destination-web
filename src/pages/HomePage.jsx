import React from "react";

import Hero from "../components/hero/Hero";
import Services from "../components/hero/Services";
import About from "../components/hero/About";
import Featured from "../components/hero/Featured";
import Cta from "../components/hero/Cta";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Featured />
      <Cta />
    </>
  );
}

export default HomePage;

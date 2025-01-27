import React, { useEffect, useRef, useState } from "react";
import Sketch from "../../utils/Sketch";
import axios from "axios";
// import dat from "dat.gui";

function ImageTransition() {
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const [fragmentShader, setFragmentShader] = useState("");

  useEffect(() => {
    // Fetch the shader code
    axios.get("/shaders/fragmentShader.glsl").then((response) => {
      setFragmentShader(response.data);
    });
    //   .catch((error) => {
    //     console.error("Error loading shader:", error);
    //   });
  }, []);

  useEffect(() => {
    if (sliderRef.current && contentRef.current && fragmentShader) {
      new Sketch({
        debug: true,
        uniforms: {
          intensity: { value: 50, type: "f", min: 1, max: 100 },
        },
        fragment: fragmentShader,
        container: sliderRef.current,
        clicker: contentRef.current,
      });
    }
  }, [fragmentShader]);

  return (
    <div
      ref={contentRef}
      id="content"
      className="absolute inset-0 w-full h-full"
    >
      <div
        ref={sliderRef}
        id="slider"
        className="w-full h-full"
        data-images='["/images/img71.jpg","/images/img72.jpg","/images/img73.jpg"]'
        data-disp="/images/disp1.jpg"
      ></div>
    </div>
  );
}

export default ImageTransition;

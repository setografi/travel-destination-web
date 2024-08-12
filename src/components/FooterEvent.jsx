import React from "react";

function FooterEvent() {
  return (
    <footer className="w-full h-full grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 justify-evenly items-center bg-blue-500 py-8 px-6 xl:px-20 2xl:px-6 2xl:w-[83.5rem] 2xl:container 2xl:mx-auto text-white gap-10">
      {/* <div className="max-w-4xl mx-auto text-center">
        <p>© 2024 BeachVibe. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2">
            Facebook
          </a>
          <a href="#" className="mx-2">
            Instagram
          </a>
          <a href="#" className="mx-2">
            Twitter
          </a>
        </div>
      </div> */}

      <div className="flex flex-col justify-start items-start col1 gap-1">
        <h3 className="font-medium text-3xl">BeachVibe</h3>
        <p>© 2024 BeachVibe. All rights reserved.</p>
        <div className="flex flex-row justify-start gap-4">
          <a
            href="/"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-xl"
          >
            <img
              src="https://assets.codepen.io/9051928/codepen_1.png"
              alt=""
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="/"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-xl"
          >
            <img
              src="https://assets.codepen.io/9051928/x.png"
              alt=""
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="/"
            target="_blank"
            className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-xl"
          >
            <img
              src="https://assets.codepen.io/9051928/youtube_1.png"
              alt=""
              className="w-8 h-8 object-cover"
            />
          </a>
        </div>
        <p className="text-[#818181] text-sm">2024 © All Rights Reserved</p>
      </div>

      <div className="bg-blue-100 flex flex-col justify-start items-start text-black p-4 rounded-xl gap-1">
        <p>About</p>
        <p>Our mission</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
      </div>
      <div className="bg-blue-100 flex flex-col justify-start items-start text-black p-4 rounded-xl gap-1">
        <p>Services</p>
        <p>Products</p>
        <p>Join our team</p>
        <p>Partner with us</p>
      </div>
    </footer>
  );
}

export default FooterEvent;

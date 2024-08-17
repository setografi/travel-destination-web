import React from "react";

function FooterEvent() {
  return (
    <footer className="w-full h-full flex justify-center items-center bg-whiteText py-8 px-6 xl:px-20 2xl:px-6 2xl:w-[83.5rem] 2xl:container 2xl:mx-auto text-black gap-10">
      <div className="max-w-4xl mx-auto text-center">
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
      </div>
    </footer>
  );
}

export default FooterEvent;

import React from "react";

function GridCard({ title, content, icon }) {
  return (
    <div className="flex justify-center items-center text-whiteText py-6 px-8 border border-black rounded-2xl group hover:bg-bluePrimary hover:border-whiteText duration-500 transition-all">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="text-black mb-1 group-hover:text-whiteText">{icon}</div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-black text-xl font-medium mb-1 group-hover:text-whiteText">
            {title}
          </h3>
          <p className="text-black text-base group-hover:text-whiteText">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;

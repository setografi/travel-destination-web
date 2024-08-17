import React from "react";

function GridCard({ title, content, icon }) {
  return (
    <div className="bg-bluePrimary w-full h-full flex items-center text-whiteText py-6 px-8 rounded-2xl">
      <div className="flex flex-row justify-center items-start gap-4">
        <div className="mb-1">{icon}</div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-base">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;

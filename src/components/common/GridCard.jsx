import React from "react";

function GridCard({ title, content, icon }) {
  return (
    <div className="flex justify-center items-center text-whiteText py-6 px-8 border border-neutral-lighter rounded-2xl group hover:bg-accent-700 duration-300 transition-all">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="text-neutral-m mb-1 group-hover:text-primary-100">
          {icon}
        </div>
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-neutral-m text-xl font-medium mb-1 group-hover:text-primary-100">
            {title}
          </h3>
          <p className="text-neutral-m text-base group-hover:text-primary-100">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;

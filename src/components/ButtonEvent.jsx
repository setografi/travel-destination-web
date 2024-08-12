import React from "react";

const ButtonEvent = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 md:py-[10px] px-3 md:px-4 rounded-xl bg-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonEvent;

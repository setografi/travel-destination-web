import React from "react";
import cn from "classnames";

function Button({ children, className, onClick, href, type = "button" }) {
  const buttonClass = cn(
    "bg-accent-500 text-neutral-m font-semibold rounded-lg py-3 px-6 transition-all duration-300 transform",
    {
      "hover:bg-accent-600": true,
      "hover:-translate-y-0.5": true,
      "shadow-lg hover:shadow-xl": true,
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass} type={type}>
      {children}
    </button>
  );
}

export default Button;

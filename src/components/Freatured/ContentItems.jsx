import React from "react";

function ContentItems({ id, number, heading, text }) {
  return (
    <div className="content__item" id={id}>
      <span className="content__item-number block font-semibold oh overflow-hidden">
        <span className="oh__inner inline-block origin-left will-change-transform">
          {number}
        </span>
      </span>
      <h2 className="content__item-heading text-4xl font-semibold oh overflow-hidden">
        <span className="oh__inner inline-block origin-left will-change-transform">
          {heading}
        </span>
      </h2>
      <p className="content__item-text">{text}</p>
      <a href="/" className="content__item-link oh overflow-hidden">
        <span className="oh__inner inline-block origin-left will-change-transform">
          View more
        </span>
      </a>
      <nav className="slide-nav">
        <div
          className="slide-nav__img slide-nav__img--prev"
          style={{ backgroundImage: "url(/images/img71.jpg)" }}
        ></div>
        <div
          className="slide-nav__img slide-nav__img--next"
          style={{ backgroundImage: "url(/images/img71.jpg)" }}
        ></div>
      </nav>
    </div>
  );
}

export default ContentItems;

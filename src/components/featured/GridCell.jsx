import React from "react";

function GridCell({ className, style, dataItem }) {
  return (
    <div className={`grid__cell ${className}`}>
      <div className="grid__cell-img">
        <div
          className="grid__cell-img-inner"
          style={style}
          data-item={dataItem}
        ></div>
      </div>
    </div>
  );
}

export default GridCell;

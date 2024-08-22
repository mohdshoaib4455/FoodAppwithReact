import React from "react";
import "../App.css"

const Loader = () => {
  return (
    <div
      className="card d-flex justify-content-center align-items-center mx-2 skeleton"
      style={{ width: "18rem", height: "auto" }}
    >
      <div className="skeleton-image"></div>
      <div className="card-body d-flex justify-content-center align-items-center flex-column py-4">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
};

export default Loader;

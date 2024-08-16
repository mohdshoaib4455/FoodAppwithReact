import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 banner">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="bannerH1">
                Best food for <br /> your taste
              </h1>
            </div>
          </div>
          <div className="row my-3   ">
            <div className="col-lg-12">
              <p className="bannerp">
                Discover delectable cuisine and unforgettable moments <br /> in
                our welcoming, culinary haven.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button className="bannerButton">Book a table</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

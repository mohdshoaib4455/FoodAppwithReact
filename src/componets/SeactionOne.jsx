import React from "react";
import "../App.css";
import img1 from "../assets/Image1.png";

const SeactionOne = () => {
  return (
    <>
      <div className="container-fluid w-100 h-100 p-5 ">
        <div className="row">
          <div className="col-lg-6  section py-5">
            <img src={img1} alt="" />
            <div className="innerBoxContent"></div>
          </div>
          <div className="col-lg-6 py-5   d-flex justify-content-center align-items-center flex-column">
            <h1 className="sectionh1">
              We provide healthy <br /> food for your family.
            </h1>
            <p className="sectionp">
              Our story began with a vision to create a unique dining <br />{" "}
              experience that merges fine dining, exceptional service, and a{" "}
              <br /> vibrant ambiance. Rooted in city's rich culinary culture,
              we aim to <br /> honor our local roots while infusing a global
              palate.
            </p>
            <p className="sectionp1">
              At place, we believe that dining is not just about food, but also
              about the <br /> overall experience. Our staff, renowned for their
              warmth and dedication, <br /> strives to make every visit an
              unforgettable event.
            </p>
            <button className="bannerButton">Book a table</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeactionOne;

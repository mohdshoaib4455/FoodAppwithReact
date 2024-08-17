import React from "react";
import "../App.css";
import img1 from "../assets/section2img1.png";
import img2 from "../assets/sction2img2.png";
import img3 from "../assets/section2img3.png";
import img4 from "../assets/section2img4.png";

const SectionTwo = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 px-5 d-flex justify-content-start align-items-center">
            <h1 className="menuH1">Browse Our Menu</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5">
        <div className="row py-3">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card border-0 d-flex justify-content-center align-items-center"
              style={{ width: "16rem" }}
            >
              <img
                src={img1}
                className="card-img-top icon w-100 rounded"
                alt="..."
              />
              <div className="card-body d-flex justify-content-center  flex-column p-0 py-2">
                <h5 className="card-title text-start ">Caterings</h5>
                <p className="card-text text-start my-2">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card border-0 d-flex justify-content-center align-items-center"
              style={{ width: "16rem" }}
            >
              <img
                src={img2}
                className="card-img-top icon w-100 rounded"
                alt="..."
              />
              <div className="card-body d-flex justify-content-center  flex-column p-0 py-2">
                <h5 className="card-title text-start ">Birthdays</h5>
                <p className="card-text text-start my-2">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card border-0 d-flex justify-content-center align-items-center"
              style={{ width: "16rem" }}
            >
              <img
                src={img3}
                className="card-img-top icon w-100 rounded"
                alt="..."
              />
              <div className="card-body d-flex justify-content-center  flex-column p-0 py-2">
                <h5 className="card-title text-start ">Weddings</h5>
                <p className="card-text text-start my-2">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card border-0 d-flex justify-content-center align-items-center"
              style={{ width: "16rem" }}
            >
              <img
                src={img4}
                className="card-img-top icon w-100 rounded"
                alt="..."
              />
              <div className="card-body d-flex justify-content-center  flex-column p-0 py-2">
                <h5 className="card-title text-start ">Events</h5>
                <p className="card-text text-start my-2">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;

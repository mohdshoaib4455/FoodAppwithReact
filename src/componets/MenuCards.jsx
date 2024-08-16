import React from "react";
import "../App.css";
import icon from "../assets/icon1.png"
const MenuCards = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-12  d-flex justify-content-center align-items-center">
            <h1 className="menuH1">Browse Our Menu</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid  px-5">
        <div className="row py-3">
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            {" "}
            <div
              className="card d-flex justify-content-center align-items-center p-3"
              style={{ width: "18rem" }}
            >
              <img src={icon} className="card-img-top icon" alt="..." />
              <div className="card-body  d-flex justify-content-center align-items-center flex-column py-4">
                <h5 className="card-title">Beakfast</h5>
                <p className="card-text text-center my-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <a href="#" className="btn btn-outline-danger my-3">
                  Explor Menu
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            {" "}
            <div
              className="card d-flex justify-content-center align-items-center p-3"
              style={{ width: "18rem" }}
            >
              <img src={icon} className="card-img-top icon" alt="..." />
              <div className="card-body  d-flex justify-content-center align-items-center flex-column py-4">
                <h5 className="card-title">Beakfast</h5>
                <p className="card-text text-center my-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <a href="#" className="btn btn-outline-danger my-3">
                  Explor Menu
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            {" "}
            <div
              className="card d-flex justify-content-center align-items-center p-3"
              style={{ width: "18rem" }}
            >
              <img src={icon} className="card-img-top icon" alt="..." />
              <div className="card-body  d-flex justify-content-center align-items-center flex-column py-4">
                <h5 className="card-title">Beakfast</h5>
                <p className="card-text text-center my-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <a href="#" className="btn btn-outline-danger my-3">
                  Explor Menu
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center align-items-center">
            {" "}
            <div
              className="card d-flex justify-content-center align-items-center p-3"
              style={{ width: "18rem" }}
            >
              <img src={icon} className="card-img-top icon" alt="..." />
              <div className="card-body  d-flex justify-content-center align-items-center flex-column py-4">
                <h5 className="card-title">Beakfast</h5>
                <p className="card-text text-center my-2">
                  In the new era of technology we look in the future with
                  certainty and pride for our life.
                </p>
                <a href="#" className="btn btn-outline-danger my-3">
                  Explor Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCards;

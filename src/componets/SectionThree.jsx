import React from "react";

const SectionThree = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 px-5 d-flex justify-content-center align-items-center">
            <h1 className="menuH1">What Our Customers Say</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5">
        <div className="row py-3">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card p-4 bg-light border-0 d-flex justify-content-center align-items-center"
              style={{ width: "20rem" }}
            >
              <div className="card-body d-flex justify-content-center  flex-column p-3 py-2">
                <h5 className="card-title text-danger text-start ">
                  “The best restaurant”
                </h5>

                <p className="card-text text-start my-2">
                  Last night, we dined at place and were simply blown away. From
                  the moment we stepped in, we were enveloped in an inviting
                  atmosphere and greeted with warm smiles.
                </p>
                <hr class="my-4 border-dark"></hr>
                <div
                  className="card border-0 bg-light"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row no-gutters py-1">
                    <div className="col-md-4 ">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Profile Image"
                        className="img-fluid  rounded-circle"
                      />
                    </div>
                    <div className="col-md-8  d-flex justify-content-center flex-column py-3">
                      <h6 className="card-title">John Doe</h6>
                      <p className="card-text">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card p-4 bg-light border-0 d-flex justify-content-center align-items-center"
              style={{ width: "20rem" }}
            >
              <div className="card-body d-flex justify-content-center  flex-column p-3 py-2">
                <h5 className="card-title text-danger text-start ">
                  “Simply delicious”
                </h5>

                <p className="card-text text-start my-2">
                  Place exceeded my expectations on all fronts. The ambiance was
                  cozy and relaxed, making it a perfect venue for our
                  anniversary dinner. Each dish was prepared and beautifully
                  presented.
                </p>
                <hr class="my-4 border-dark"></hr>
                <div
                  className="card border-0 bg-light"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row no-gutters py-2">
                    <div className="col-md-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Profile Image"
                        className="img-fluid  rounded-circle"
                      />
                    </div>
                    <div className="col-md-8 d-flex justify-content-center flex-column py-3">
                      <h6 className="card-title">Matt Cannon</h6>
                      <p className="card-text">San Diego, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center align-items-center my-md-3 my-sm-2">
            <div
              className="card p-4 bg-light border-0 d-flex justify-content-center align-items-center"
              style={{ width: "20rem" }}
            >
              <div className="card-body d-flex justify-content-center  flex-column p-3 py-2">
                <h5 className="card-title text-danger text-start ">
                  “One of a kind restaurant”
                </h5>

                <p className="card-text text-start my-2">
                  The culinary experience at place is first to none. The
                  atmosphere is vibrant, the food - nothing short of
                  extraordinary. The food was the highlight of our evening.
                  Highly recommended.
                </p>
                <hr class="my-4 border-dark"></hr>
                <div
                  className="card border-0 bg-light"
                  style={{ maxWidth: 540 }}
                >
                  <div className="row no-gutters py-2">
                    <div className="col-md-4">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Profile Image"
                        className="img-fluid  rounded-circle"
                      />
                    </div>
                    <div className="col-md-8 d-flex justify-content-center flex-column py-3">
                      <h6 className="card-title">Andy Smith</h6>
                      <p className="card-text">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;

import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="container-fluid contactPage my-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h1 className="contacth1">Contact us</h1>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <p className="conatctPera">
            We consider all the drivers of change gives you the components{" "}
            <br /> you need to change to create a truly happens.
          </p>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div className="container bg-light shadow rounded p-5 mt-4">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger w-100 rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

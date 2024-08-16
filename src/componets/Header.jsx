import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo2.png"
import "../App.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle menu items */}
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isMenuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

           {isMenuOpen && (
            <div className="d-lg-none mt-3">
              <button className="btn btn-primary" type="button">
                Sign Up
              </button>
            </div>
          )}
        </div>

        <div className="d-none d-lg-flex">
          <button className="bannerButton">Book a table</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

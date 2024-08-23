import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4>Yumly</h4>
            <p>
              Your go-to place for delicious recipes and culinary inspiration.
              Explore, cook, and enjoy your favorite dishes.
            </p>
            <div className="d-flex">
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="text-light">
                <i className="bi bi-geo-alt-fill me-2"></i>123 Foodie Lane,
                Flavor Town, India
              </li>
              <li className="text-light">
                <i className="bi bi-telephone-fill me-2"></i>987654310
              </li>
              <li className="text-light">
                <i className="bi bi-envelope-fill me-2"></i>info@bitebuddy.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

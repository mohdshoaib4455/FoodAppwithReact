import React from "react";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Topbar = () => {
  return (
    <div className="container-fluid px-5 TopBar">
      <div className="row  h-100">
        <div className="col-lg-12 h-100  number">
          <div className="left">
            {" "}
            <div className="div">
              <i className="bi bi-telephone"></i>
              <span>+91 9084736362</span>
            </div>
            <div className="div">
              <i class="bi bi-envelope"></i>
              <span>Food@gmail.com</span>
            </div>
          </div>

          <div className="topbaricons">
            <div className="SocialMediaIcon">
              <i class="bi bi-twitter-x"></i>
            </div>
            <div className="SocialMediaIcon">
              <i class="bi bi-facebook"></i>
            </div>
            <div className="SocialMediaIcon">
              <i class="bi bi-instagram"></i>
            </div>
            <div className="SocialMediaIcon">
              <i class="bi bi-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

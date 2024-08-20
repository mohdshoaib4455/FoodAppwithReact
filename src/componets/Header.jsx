import React, { useState } from "react";
import "../css/Header.css";

const Navbar = () => {
  let [open, setopen] = useState(false)
  let openFunction = () => {
  setopen(!open)
  }
  console.log(open)
  return (
    <>
      <div className="Header">
        <div className="logo">
          <h2>Yumly</h2>
        </div>
        <div className={` navbarmain ${open ? "navbar" : "navbar1"}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search Food" />
          <button>
            <i class="bi bi-search"></i>
          </button>

          <div className="menu">
            <i onClick={openFunction} className="bi bi-list"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useContext, useRef, useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { RecipeContext } from "../store/context";

const Navbar = () => {
  let [open, setopen] = useState(false);
  const { fetchData } = useContext(RecipeContext);

  let openFunction = () => {
    setopen(!open);
  };
  const inputValue = useRef();
  let search = (event) => {
     event.preventDefault(); 
    const value = inputValue.current.value;
    fetchData(value);
   inputValue.current.value = "";
    
  };

  return (
    <>
      <div className="Header">
        <div className="logo">
          <h2>Yumly</h2>
        </div>
        <div className={` navbarmain ${open ? "navbar" : "navbar1"}`}>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="link">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={search} className="searchbar">
          <input ref={inputValue} type="text" placeholder="Search Food" />
          <button>
            <i className="bi bi-search text-white"></i>
          </button>

          <div className="menu">
            <i
              onClick={openFunction}
              className={`${open ? "bi bi-x-lg" : "bi bi-list"}`}
            ></i>
          </div>
        </form>
      </div>
    </>
  );
};

export default Navbar;

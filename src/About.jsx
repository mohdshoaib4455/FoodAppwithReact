import React from "react";
import SeactionOne from "./componets/SeactionOne";
import img from "../src/assets/About.png";
import SectionThree from "./componets/SectionThree";

const About = () => {
  return (
    <>
      <SeactionOne />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 px-5">
            <img style={{ width: "100%" }} src={img} alt="" />
          </div>
        </div>
      </div>
      <SectionThree />
    </>
  );
};

export default About;

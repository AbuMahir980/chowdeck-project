import React from "react";
import ChowdeckPort2 from "./ChowdeckPort2";
import ChowdeckMovingImages from "./ChowdeckMovingImages";
import hoverItems from "../../assets/chowdeck/web-bike-right.svg";
import hoverItems2 from "../../assets/chowdeck/trees.svg";
// import tree from "../../assets/chowdeck/cloud-two.svg";
import Navbar from "../../shared/Navbar";
import TeamFocus from "./TeamFocus";

const Company = () => {
  return (
    <div>
      <div className="bg-[#FFEDB3] bg-cover min-h-[50vh] px-2">
        <Navbar />
        <div className="h-[4rem] "></div>
        <div className="mx-9 font-bold mt-10 ">
          <h1 className="mx-11 font-bold text-9xl">Delivery Happiness</h1>
        </div>
        <div className="mt-56">
          <div className="flex mx-4">
            <img src={hoverItems} className="ml-16  md:w-[130px]" />
            <img src={hoverItems2} className="md:w-[700px] ml-96" />
          </div>
        </div>
      </div>

      <ChowdeckPort2 />

      <ChowdeckMovingImages />
      <TeamFocus />
    </div>
  );
};

export default Company;

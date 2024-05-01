import React, { useState } from "react";
import Button from "./shared/Button";
import playStoreImg from "../../assets/customersImg/playStore.svg";
import appStore from "../../assets/customersImg/appStore.svg";
import Appads from "./Appads";
import Navbar from "../../shared/Navbar";
import Texteffect from "./Texteffect";
import { text } from "./text";
import arrowDown from "../../assets/customersImg/arrowdown.svg";
const Customer = () => {
  const cloud = "https://chowdeck.com/illustrations/cloud-right.svg";
  const cloud2 = "http://www.w3.org/2000/svg";

  return (
    <div className="">
      <Navbar />
      <div className=" bg-bgImage w-[100%] h-[100vh] ">
        <div className="flex justify-around relative z-30">
          <div className="">
            <img src={cloud2} alt="" />
          </div>
          <div className="w-[25rem]">
            <img src={cloud} alt="" />
          </div>
        </div>
        <div className="">
          <div className="">
            <h1 className="lg:text-[112px] font-[700] text-center flex justify-center items-center">
              <Texteffect text={text} interval={3000} delay={1000} />
            </h1>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="bg-[#0c513f] text-white rounded-[7px]">
              <Button image={playStoreImg} text="Download on Google Play" />
            </div>
            <div className="bg-[#0c513f] text-white rounded-[7px]">
              <Button image={appStore} text="Download on App Store" />
            </div>
          </div>
        </div>
      </div>
      <Appads />
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-[65px] text-center text-[#d1d5db] mt-16">
          Join our growing network
        </h1>
        <img src={arrowDown} alt="" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Customer;

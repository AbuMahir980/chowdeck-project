import React, { useState } from "react";
import Button from "./shared/Button";
import Customerads from "./appAdsComponents/Customerads";
import VendorAds from "./appAdsComponents/VendorAds";
import Riders from "./appAdsComponents/Riders";

const Appads = () => {
  const [next, setNext] = useState(0);
  const [active, setActive] = useState(0);

  const handleTabSwitch = (index) => {
    setActive(index);
    setNext(index);
  };

  return (
    <div className="">
      <div className="mx-auto p-2 rounded-[9px] bg-[#FFF3CC] w-[20vw] flex space-x-8 justify-center items-center mt-7">
        <p
          className={`${
            active === 0 && "bg-[#FFC501] text-white px-[5px]  rounded-[10px]"
          } font-[700]`}
          onClick={() => handleTabSwitch(0)}
        >
          Customer
        </p>

        <p
          className={`${
            active === 1 && "bg-[#FFC501] text-white px-[5px]  rounded-[10px]"
          } font-[700]`}
          onClick={() => handleTabSwitch(1)}
        >
          Vendors
        </p>
        <p
          className={`${
            active === 2 && "bg-[#FFC501] text-white px-[5px]  rounded-[10px]"
          } font-[700]`}
          onClick={() => handleTabSwitch(2)}
        >
          Riders
        </p>
      </div>
      <div className="">
        {next == 0 ? (
          <Customerads />
        ) : next == 1 ? (
          <VendorAds />
        ) : next == 2 ? (
          <Riders />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Appads;

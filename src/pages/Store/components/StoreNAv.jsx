import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


import AddressModal from "../../../components/BlogComponents/AddressModal";

const Index = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const handleEnterAddress = () => {
    setShowAddressModal(true);
  };
  return (
    
    <div className="px-16 py-4 flex justify-between items-center">
      <div className="flex gap-2">
        <div>
          <img src="" />
        </div>
        <div className="flex gap-2 items-center">
        <IoLocationOutline className="text-green-700" />
          <button className="inline-flex items-center gap-1" onClick={handleEnterAddress}>Enter Address <IoIosArrowDown size={12} /> </button >
          
        </div>
        <div className="flex gap-2 items-center">
        <CiWallet />
          <p>Wallet Balance (#0)</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2 bg-[#f2f2f2] py-2 px-2 rounded-lg">
          <FiSearch />
          <input
            type="text"
            placeholder="Search Chowdeck"
            value=""
            className="bg-inherit outline-none"
          />
        </div>
        <div className="flex items-center gap-3" >
          <div className="bg-green-700 p-3 text-white rounded-full max-w-max" >
          <IoCartOutline />
          </div>
          <div className="bg-green-700 p-3 text-white rounded-full max-w-max" >
          <CiUser />
          </div>
        

        </div>

      </div>
      {showAddressModal && (
        <AddressModal closeModal={() => setShowAddressModal(false)} />
      )}
    </div>
  );
};

export default Index;
import React, { useState } from "react";
import { useParams } from 'react-router-dom'
// import foodImage from "../relayComponents/relayAssets/foodImage.png";
import Button from "./storeButton/Button";
import orderIcon from '../relayComponents/relayAssets/orderIcon.png'
import blackClock from '../relayComponents/relayAssets/blackClock.png'
import CustomButton from "./storeButton/CustomButton";
import { food } from "./data";

const SingleFoodCard = () => {
console.log('food:', food)

  const { id} = useParams()
  const data = food[id]
  console.log('data:', data)
  const [isactive, setIsactive] = useState(1)

 const handleClick =(isactive)=>{
    setIsactive(isactive)
  }
  return (
    <>
      <div className="w-full">
        <div className="w-[50%]">
          <div className="rounded-lg overflow-hidden h-[250px]  relative">
            <img src={data.image} alt="" className=" " />
            <div className="absolute bottom-3 left-3 space-x-2 flex">
                {/* <div className="flex border border-[#0c513f] w-[8rem] rounded-[0.5rem] bg-[#ececec]">
                    <img src={blackClock} alt="" className="" />
                    <button className="text-[#517c71]">51-61 mins</button>
                    </div> */}

                    <CustomButton image={blackClock} text ='51-61 mins'/>

                    {/* <div className="flex border border-[#0c513f] w-[8rem] rounded-[0.5rem] bg-[#ececec]">
                        <img src={orderIcon} alt="" className="bg-[#ebebeb]  " />
                    <button className="text-[#517c71]">Pre-order</button>
                    </div> */}
                    <CustomButton image={orderIcon} text ='Pre-order'/>
            
            </div>
           
          </div>
        

          <div className="flex  mt-6 justify-between">
            <div className="w-[208px] h-[72px]">
              <h1 className="font-bold text-xl leading-[36px]">
                {data.name}
              </h1>
            </div>
            <div>
              <h3>5.0</h3>
            </div>
          

            <div className="flex items-start border border-[#0c513f] p-[0.5rem] rounded-xl bg-[#e6f7f1]">
                <Button onClick={()=>{handleClick(1)}} isactive={isactive} text='Deliver now' cond={1} />
                <Button onClick={()=>{handleClick(2)}} isactive={isactive} text='Pre-order' cond={2}/>
                <Button onClick={()=>{handleClick(3)}} isactive={isactive} text='Pick-up' cond={3}/>
              {/* <button onClick={()=>{handleClick(1)}} className={`${isactive === 1 ?'bg-[#05aa70] text-white' : 'bg-inherit text-[#0c513f] ' } rounded-[0.5rem] w-[6rem] py-[0.4rem] text-white `} >Deliver now</button>
              <button  onClick={()=>{handleClick(2)}} className={`${isactive === 2 ?'bg-[#05aa70] text-white' : 'bg-inherit text-[#0c513f] ' } rounded-[0.5rem] w-[6rem] py-[0.4rem] text-white `} >Pre-order</button>
              <button onClick={()=>{handleClick(3)}} className={`${isactive === 3 ?'bg-[#05aa70] text-white' : 'bg-inherit text-[#0c513f] ' } rounded-[0.5rem] w-[6rem] py-[0.4rem] text-white `}>Pick-up</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFoodCard;

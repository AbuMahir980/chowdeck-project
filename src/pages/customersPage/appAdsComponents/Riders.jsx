import React from 'react'
import riderAppPic from "../../../assets/customersImg/rider-app.png"
import playStoreImg from "../../../assets/customersImg/playStore.svg"
import appStore from "../../../assets/customersImg/appStore.svg"
import pasteryTop from "../../../assets/customersImg/PastryTop.svg"
const Riders = () => {
  return (
    <div className='mx-auto mt-7 w-[40%] flex flex-col space-y-8 justify-center items-center'>
    <h1 className="text-center text-[60px] font-[700] leading-[60px]">Become a Champ</h1>
    <p className="text-[20px] leading-[28px]  text-center">Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.</p>
    <div className="flex space-x-2">
     <div className="w-[45px] h-[45px] bg-[#0c513f] rounded-full flex items-center justify-center"><img src={playStoreImg} alt="" className='w-5'/></div>
     <div className="w-[45px] h-[45px] bg-[#0c513f] rounded-full flex items-center justify-center"><img src={appStore} alt=""  className='w-7'/></div>
    </div>
    <div className="relative mt-36">
     <img src={pasteryTop} className='w-[7rem] absolute top-[-25px] right-[-10px] z-50' alt=""/>
    <img src={riderAppPic} alt="" className='w-[22rem] z-10 '/> 
    </div>
 </div> 
  )
}

export default Riders

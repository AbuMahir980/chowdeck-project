import React from 'react'
import customerAppImg from "../../../assets/customersImg/chowdeck-app.png"
import playStoreImg from "../../../assets/customersImg/playStore.svg"
import appStore from "../../../assets/customersImg/appStore.svg"
import pasteryTop from "../../../assets/customersImg/PastryTop.svg"
const Customerads = () => {

  return (
    <div className='mx-auto mt-7 w-[40%] flex flex-col space-y-8 justify-center items-center'>
       <h1 className="text-center text-[60px] font-[700] leading-[60px]">Try the App</h1>
       <p className="text-[20px] leading-[28px]  text-center">Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</p>
       <div className="flex space-x-2">
        <div className="w-[45px] h-[45px] bg-[#0c513f] rounded-full flex items-center justify-center"><img src={playStoreImg} alt="" className='w-5'/></div>
        <div className="w-[45px] h-[45px] bg-[#0c513f] rounded-full flex items-center justify-center"><img src={appStore} alt=""  className='w-7'/></div>
       </div>
       <div className="relative">
        <img src={pasteryTop} className='w-[7rem] relative top-[-15] bottom-7 z-10' alt=""/>
       <img src={customerAppImg} alt="" className='w-[22rem]'/> 
       </div>
    </div>  
  )
}

export default Customerads
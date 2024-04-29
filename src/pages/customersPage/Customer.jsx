import React from 'react'
import Button from './shared/Button'
import playStoreImg from "../../assets/playStore.svg"
import appStore from "../../assets/customersImg/appStore.svg"
const Customer = () => {
  return (
    <div className=' bg-bgImage w-[100%] h-[100vh] font-plusJakarta'>
      <div className="pt-12">
        <div className="text-[112px] font-[700] text-center flex justify-center items-center">
        <h1 className="">Have you eaten?</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
        <div className="bg-[#0c513f] text-white rounded-[7px]"><Button image={playStoreImg} text="Download on Google Play"/></div>
        <div className="bg-[#0c513f] text-white rounded-[7px]"><Button image={appStore}  text="Download on App Store"/></div>
        </div>
        </div>
        
    </div>
  )
}

export default Customer
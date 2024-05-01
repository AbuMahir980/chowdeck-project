import React from 'react'
import Button from './shared/Button'
import Customerads from './appAdsComponents/Customerads'

const Appads = () => {
  return (
    <div className=''>
        <div className="mx-auto p-2 rounded-[7px] bg-[#FFF3CC] w-[25vw] flex space-x-8 justify-center items-center mt-7">
          <div className="">
        <p className="active:bg-[#FFC501] active:text-white active:px-[5px] font-[700] active:rounded-[5px]">Customer</p>
       
        </div>
        <p className="">Vendors</p>
        <p className="">Riders</p>
        </div>
        <Customerads/>
    </div>
  )
}

export default Appads
import React from 'react'
import hoverItems from '../../assets/chowdeck/web-bike-right.svg'
import hoverItems2 from '../../assets/chowdeck/trees.svg'

const Company = () => {
  return (
    <div>
      <div className="bg-[#FFEDB3]  bg-cover min-h-[100vh]">
        <div className='h-[8rem] '></div>
        <div className="mx-9 font-bold mt-10 ">
          <h1 className="mx-4 font-bold text-9xl "> Delivery Happiness </h1>
        </div>
        <div className="mt-24">
          <div className="flex items-end -m-0.5">
            <img src={hoverItems} className="ml-10 w-[40px] md:w-[130px]" />
            <img src={hoverItems2} className="wpx] md:w-[700px] ml-auto" />
          </div>
          <div className="grid-rows-4"></div>
        </div>
      </div>
      Company
    </div>
  );
}

export default Company
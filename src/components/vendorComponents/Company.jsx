import React from 'react'
import hoverItems from '../../assets/chowdeck/web-bike-right.svg'
import hoverItems2 from '../../assets/chowdeck/trees.svg'
import tree from '../../assets/chowdeck/cloud-two.svg'
import chowFounder from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-14.svg'
import chowOwner from '../../assets/chowdeck/1698762681.jpg'
import image from '../../assets/chowdeck/image.png'
import image1 from '../../assets/chowdeck/image (1).png'
import image2 from '../../assets/chowdeck/image (2).png'
import image3 from '../../assets/chowdeck/image (3).png'
import image4 from '../../assets/chowdeck/image (4).png'
import image5 from '../../assets/chowdeck/image (5).png'
import image6 from '../../assets/chowdeck/image (6).png'
import image7 from '../../assets/chowdeck/image (7).png'

const Company = () => {
  return (
    <div>
      <div className="bg-[#FFEDB3] bg-cover min-h-[100vh] px-2">
        <div className="h-[8rem] "></div>
        <div className="mx-9 font-bold mt-10 ">
          <h1 className="mx-11 font-bold text-9xl">Delivery Happiness</h1>
        </div>
        <div className="mt-72">
          <div className="flex mx-4">
            <img src={hoverItems} className="ml-16  md:w-[130px]" />
            <img src={hoverItems2} className="md:w-[700px] ml-96" />
          </div>
        </div>
      </div>
      <div className="px-11 pb-28 ">
        <div className=" border-solid-9 outline border-black rounded-lg bg-white ">
          <div className=" border-black border-solid ">
            <p className="bg-[#0C513F] p-6 box-border flex font-semibold">
              <span src={chowFounder}></span>Founder's Story
            </p>
            <img src={chowOwner} height="450px" width="380px" />
          </div>
        </div>
      </div>

      <div className="mx-7 container flex items-center justify-between px-2">
        <p className=" flex flex-col md:flex-row md:items-end text-6xl text-bold font-bold">
          Core Values
          <span className="text-lg text-[#9581ED] font-medium md:ml-2 lg:mb-2 tracking-normal pt-24 mb-[0.1rem]">
            What keeps us grounded
          </span>
        </p>
      </div>
      <div className="flex mt-24">
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image1} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image2} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image3} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image4} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className="mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image5} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className=" mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image6} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
        <div className=" mx-5">
          <marquee behavior="scroll" direction="left">
            <img src={image7} height="440px" className="min-w-[320px]" />
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Company
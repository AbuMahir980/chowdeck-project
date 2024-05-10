import React from 'react'
import image from '../../assets/chowdeck/image.png'
import image1 from '../../assets/chowdeck/image (1).png'
import image2 from '../../assets/chowdeck/image (2).png'
import image3 from '../../assets/chowdeck/image (3).png'
import image4 from '../../assets/chowdeck/image (4).png'
import image5 from '../../assets/chowdeck/image (5).png'
import image6 from '../../assets/chowdeck/image (6).png'
import image7 from '../../assets/chowdeck/image (7).png'



const ChowdeckMovingImages = () => {
  return (
    <div className="mb-72">
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

export default ChowdeckMovingImages
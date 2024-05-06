import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import acceptOrder from '../relayAssets/acceptOrder.png'
import pickUp from '../relayAssets/pickUp.png'
import starLike from '../relayAssets/starLike.svg'
import pearl from '../relayAssets/pearl.svg'
import halfMoon from '../relayAssets/halfMoon.svg'
import star from '../relayAssets/star.svg'
import orderTransit from '../relayAssets/orderTransit.png'
import orderArrived from '../relayAssets/orderArrived.png'



const AutoPlay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
<div className="slider-container pt-20">
      <Slider {...settings}>
        {/* 1 */}
     <div>
      <div className='flex w-[20rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
        <img src={starLike} alt=""  style={{ fill: '#8c77ec' }} />
        <h2 className='text-base font-semibold' >Live updates on deliveries</h2>
      </div>
      <div className='mt-4'>
            <img src={acceptOrder} alt=""  className='w-[369px]' />  
      </div>
  </div>
{/* 2 */}
    <div>
        <div className='flex w-[20rem] mt-4 items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
        <img src={pearl} alt=""  style={{ fill: '#8c77ec' }} />
        <h2 className='text-base font-semibold' >Highly-rated and vetted riders</h2>
      </div>
      <div className='mt-4'>
        <img src={pickUp } alt=""  className='w-[369px]'  />
      </div>
    </div>
{/* 3 */}
  <div>
    <div className='flex w-[20rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
       <img src={halfMoon} alt=""  style={{ fill: '#8c77ec' }} />
       <h2 className='text-base font-semibold' >24/7 support for customers</h2>
    </div>
    <div className='mt-4'>
       <img src={orderTransit} alt=""  className='w-[369px]' /> 
      </div>
      </div>
{/* 4 */}
    <div>
      <div className='flex w-[20rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
         <img src={star} alt=""  style={{ fill: '#8c77ec' }} />
         <h2 className='text-base font-semibold' >Quick and easy onboarding</h2>
      </div>
      <div className='mt-4'>
        <img src={orderArrived} alt="" className='w-[369px]' />
        </div>
      </div>
        
       
      </Slider>
    </div>
  )
}

export default AutoPlay

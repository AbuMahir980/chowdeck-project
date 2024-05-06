import React from 'react'
import Slider from "react-slick";
import starLike from '../relayAssets/starLike.svg'
import pearl from '../relayAssets/pearl.svg'
import halfMoon from '../relayAssets/halfMoon.svg'
import star from '../relayAssets/star.svg'

const AnotherAutoplay = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div>
<div className="flex justify-between">
   <div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
     <img src={starLike} alt=""  style={{ fill: '#8c77ec' }} />
    <h2 className='text-base font-semibold' >Live updates on deliveries</h2>
   </div>
        {/* <h3>1</h3> */}
</div>

<div>
     
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
     <img src={pearl} alt=""  style={{ fill: '#8c77ec' }} />
     <h2 className='text-base font-semibold' style={{border:'5px red'}}>Highly-rated and vetted riders</h2>
</div>
        {/* <h3>2</h3> */}
 </div>

<div>
     
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
          <img src={halfMoon} alt=""  style={{ fill: '#8c77ec' }} />
          <h2 className='text-base font-semibold' style={{border:'5px red'}}>24/7 support for customers</h2>
</div>
   {/* <h3>3</h3> */}
      </div>
    
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
  <img src={star} alt=""  style={{ fill: '#8c77ec' }} />
  <h2 className='text-base font-semibold' style={{border:'5px red'}}>Quick and easy onboarding</h2>
</div>

</div>  
    </Slider>
  </div>
  )
}

export default AnotherAutoplay

import React from 'react'
import bikeCard from '../assets/far assets1/unlocknewlevelsofgrowth.png'
import metricesLogo from '../assets/far assets1/metrices.png'

const Info = () => {
  return (
    <div className='mx-7 bg-white border-black border-4 rounded-[7px] p-7 z-10 relative top-[-50px]'>
        <div className="flex">
            {/* <h1 className="font-black text-[50px] w-[900px] leading-[60px]">Unlock new levels of growth.</h1>
            <div className=""> <img src={bikeCard} alt="" /> </div> */}
            <div>
            <h1 className="font-black text-[40px] w-[700px] leading-[60px]">Track your metrics & bonuses earned.</h1>
                        <p className="text-[20px] w-[350px] m">Monitor your growth and earn huge bonuses as you go.</p>
                          <div className="rounded-full h-1"></div>
                        </div>
            <div className=""> <img src={metricesLogo} alt="" /></div>
        </div>
       
    </div>
  )
}

export default Info

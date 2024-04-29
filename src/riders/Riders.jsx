import React from 'react'
import bgImage from '../assets/far assets1/bg-logo.svg'
import Button from './shared/button/Button'
import applelogo from '../assets/far assets1/apple-Logo.png'
import playstore from '../assets/far assets1/playstore-logo.avif'
import Info from './Info'
import Cards from './shared/cards'
import Navbar from '../shared/Navbar'



const Riders = () => {
    return (
        <div className="">
            <Navbar/>
            <div className='flex-col gap-[7rem] '>
                <div className="bg-[#0c513f] p-5">

                    <div className="flex mt-36">
                        <div className="flex flex-col gap-[3rem]">
                            <h1 className="text-white text-[112px] leading-[134px] font-bold w-[700px]">Become a Champion</h1>
                            <div className="flex gap-[7px]">

                                <Button image={playstore} text="Download on Google Play" /> <Button image={applelogo} text="Download on App Store" />

                            </div>
                        </div>
                        <div className=""> <img src={bgImage} alt="" /></div>.
                    
                    </div>
                </div>

            </div>
            <div>
                            <Info/>
                        </div>
                        {/* <div>
                            <Cards/>
                        </div> */}
            
        </div>
    )
}

export default Riders

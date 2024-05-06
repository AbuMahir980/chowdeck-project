import React from 'react'
import bgImage from '../assets/far assets1/bg-logo.svg'
import Button from './shared/button/Button'
import applelogo from '../assets/far assets1/apple-Logo.png'
import playstore from '../assets/far assets1/playstore-logo.avif'
import Info from './Info'
import Cards from '../riders/shared/cards'
import arrowDown from '../assets/far assets1/arrowDown.svg'
import { cardDatas } from './data'






const Riders = () => {
    return (
        <div className="">
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
                <Info />
            </div>

            <h1 className="flex items-center justify-center  text-[3rem] text-[#d1d5db] ">Join our growing network <img src={arrowDown} alt="" className='ml-[5px] mt-[15rem]' /></h1>

            <div className="grid grid-cols-3 mx-7 " >
                {
                    cardDatas.map((cardData) => (<Cards key={cardData.id} {...cardData} >
                        <div className="mb-[6rem] px-6 py-6 ">
                            <img src={cardData.icon} alt="" className='w-9 h-12' />
                            <div className='h-[6rem]'>
                                <h1 className=" font-bold text-[28px] h-[60px]">{cardData.heading}</h1>
                                <div className="mt-[10px]">
                                    <p className="text-[16px] font-sans-serif">{cardData.text}</p>
                                </div>
                                <div className="mt-[2rem] ]">
                                    <p className="font-Plus Jakarta Display font-bold text-[20px]">{cardData.link}</p>
                                </div>
                            </div>
                        </div>
                    </Cards>))
                }

            </div>
            <div className="border-black border-4 bg-[#fff3cc] flex items-center justify-center ">Hello</div>




            {/* <div className="grid grid-cols-3 mx-7 mt-[20rem]" >
                {
                    cardDatas.map((cardData) => (<Cards key={cardData.id} {...cardData} className='flex-col-reverse' >
                        <div className="mt-9 px-6 py-6">
                            <h1 className=""><img src={cardData.crewImage} alt="" /></h1>
                            <p className="">{cardData.kfcImage}</p>
                            <p className="">{cardData.link}</p>
                        </div>
                    </Cards>))
                }

            </div>
 */}

            
                
            



        </div>
    )
}

export default Riders

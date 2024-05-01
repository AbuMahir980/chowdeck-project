import React, { useEffect, useState } from 'react'
import applelogo from '../assets/far assets1/apple-Logo.png'
import unlockLogo from '../assets/far assets1/unlocknewlevelsofgrowth.png'
import metrisLogo from '../assets/far assets1/metrices.png'
import playstore from '../assets/far assets1/playstore.png'
const InfoCard = ({ images, interval }) => {

    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {

        const dataLength = images.length

        const setInt = setInterval(() => (
            setCurrentIndex(prev => (prev + 1) % dataLength)
        ), interval)

        return () => clearInterval(setInt)

    }, [currentIndex, interval])


    return (
        <div className="flex">


            <div className="flex flex-col justify-between">
                <div className='space-y-6'>
                    <h1 className="font-black text-[40px] w-[700px] leading-[60px]">{images[currentIndex].text}</h1>
                    <p className="text-[20px] w-[350px]">Monitor your growth and earn huge bonuses as you go.</p>
                    <div className="flex gap-2">
                        <div className='flex h-[50px] w-[50px] bg-green-700 rounded-full justify-center items-center' > <img src={playstore} alt="" className='w-[1rem] ' /></div>
                        <div className='h-[50px] w-[50px] bg-green-700 rounded-full flex justify-center items-center'><img src={applelogo} alt="" /></div>
                    </div>

                </div>
                <div className="flex gap-2">
                    <div className={`flex h-[50px] w-[50px]  ${currentIndex === 0 ? "border" : "  border-none bg-black text-white"}  rounded-full justify-center items-center`} > 1</div>
                    <div className={`flex h-[50px] w-[50px]  ${currentIndex === 1 ? "border" : "  border-none bg-black text-white"}   rounded-full justify-center items-center`}>2</div>
                    <div className={`flex h-[50px] w-[50px]  ${currentIndex === 2 ? "border" : "  border-none bg-black text-white"}   rounded-full justify-center items-center`} >3</div>
                </div>
            </div>

            <div className="  w-[20rem] "> <img src={images[currentIndex].image} alt="" /></div>
        </div>
    )
}

export default InfoCard

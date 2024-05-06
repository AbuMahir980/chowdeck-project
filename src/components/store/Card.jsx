import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({loveIcon,foodImage,description,clockIon,time, to}) => {
  return (
    <>
    <Link to={to}>
      <div className='w-[20rem] rounded-lg  bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2 relative'>
            <div className='absolute left-[21px] top-[12px] bg-[#ffc501] rounded-full w-[32px] h-[32px] flex justify-center'>
                <img src={loveIcon} alt="" className='w-8'/>
                </div>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3 pl-2'>
            <h3 className='text-lg font-medium'>{description}</h3>
            <div className='flex mt-2'>
            <img src={clockIon} alt="" className='' />
            <h2>{time}</h2>
            </div>
        </div>
        </div>
        </Link>
    </>
  )
}

export default Card

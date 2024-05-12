import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({loveIcon,image,name,clock,time, route}) => {
  return (
    <>
    <Link to={route}>
      <div className='w-full rounded-lg  bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2 relative'>
            <div className='absolute left-[21px] top-[12px] bg-[#ffc501] rounded-full w-[32px] h-[32px] flex justify-center'>
                <img src={loveIcon} alt="" className='w-8'/>
                </div>
            <img src={image} alt="" className='w-full h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3 pl-2'>
            <h3 className='text-lg font-medium'>{name}</h3>
            <div className='flex mt-2'>
            <img src={clock} alt="" className='' />
            <h2>{time}</h2>
            </div>
        </div>
        </div>
        </Link>
    </>
  )
}

export default Card

import React from 'react'
import { Link } from 'react-router-dom'

import loveIcon from '../../components/relayComponents/relayAssets/loveIcon.png'
import clock from  "../relayComponents/relayAssets/clockIcon.png"
import { FaClock } from "react-icons/fa";

// const Card = ({loveIcon,image,name,clock,time, route}) => {
  const Card = (props) => {

  localStorage.setItem('product', JSON.stringify(props))

  return (

    <>
    
    
    <Link to={`/singlefoodcard/${props.product_id}`}>
      <div className='w-full rounded-lg  bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2 relative'>
            <div className='absolute left-[21px] top-[12px] bg-[#ffc501] rounded-full w-[32px] h-[32px] flex justify-center'>
                <img src={loveIcon} alt="" className='w-8'/>
                </div>
            <img src={props.images} alt="" className='w-full h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3 pl-2'>
            <h3 className='text-lg font-medium'>{props.product_name}</h3>
            <div className='flex flex-col mt-2'>
             <div className='flex'>
              <FaClock />
                <h2>{props.approximate_delivery_time}</h2>
             </div>
              <h3 className='pt-2 text-green-500'>{props.slugs.replaceAll(',', '            ')} </h3>
            </div>
        </div>
        </div>
        </Link>
    </>
  )
}

export default Card

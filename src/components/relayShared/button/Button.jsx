import React from 'react'

const Button = ({image,text}) => {
  return (
    <div className='flex md:flex-row  rounded-lg bg-[#990038] w-[70%] md:w-[40%] lg:w-[24%] h-16 gap-2 py-3 px-6 mb-4 pt-4 text-white  font-medium'>
      <img className='w-6 h-6' src={image} alt="" />
      <p className='text-sm md:text-base text-center '>{text}</p>
    </div>
  )
}

export default Button

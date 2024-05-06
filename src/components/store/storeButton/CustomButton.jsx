
import React from 'react'

const CustomButton = ({image, text}) => {
  return (
    <>
      <div className="flex border border-[#0c513f] w-[8rem] rounded-[0.5rem] bg-[#ececec]">
                        <img src={image} alt="" className="bg-[#ebebeb]  " />
                    <button className="text-[#517c71]">{text}</button>
                    </div>
    </>
  )
}

export default CustomButton

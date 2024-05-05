
import React from 'react'

const Button = ({isactive,  text, cond, ...props}) => {
  return (
    <div>
      <button {...props} className={`${isactive === cond ?'bg-[#05aa70] text-white' : 'bg-inherit text-[#0c513f] ' } rounded-[0.5rem] w-[6rem] py-[0.4rem] text-white `}>{text}</button>
    </div>
  )
}

export default Button

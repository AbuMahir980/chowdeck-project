import React from 'react'

const Button = ({ text, image, className, ...props }) => {
    return (

        <button className={`${className} flex gap-x-3 items-center rounded-[7px]  px-[1rem] py-[0.8rem]  `} {...props} >
            <div>
            <img src={image} alt="" className='w-6 h-6 flex items-center' />
            </div>
            <p>{text}</p>
            
            </button>


    )
}

export default Button
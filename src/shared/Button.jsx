import React from 'react'

const Button = ({text, image,width,...props}) => {
  return (
<button className='rounded-[5px] bg-[red]'>
  <img src={image} alt="" />
  {text}
</button>
  )
}

export default Button

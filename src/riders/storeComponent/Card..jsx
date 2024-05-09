import React from 'react'
import { datas } from '.'
import CardItem from './CardItem'
const Card = () => {
  return (
    <div className='grid grid-cols-2 gap-5 w-[50%]'>
        {
            datas.map((data, i) => (<CardItem key={i} {...data} />))
        }
      
    </div>
  )
}

export default Card

import React from 'react'
import { food } from './data'
import Card from './Card'

const FoodCard = () => {
  return (
    <>
    <div className='px-6 mb-32'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            food.map((item, id)=>(<Card key={id} {...item} route={`/singlefoodcard/${id}`}/>))
        }
    </div>
    </div>
      
    </>
  )
}

export default FoodCard

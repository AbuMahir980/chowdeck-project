import React from 'react'
import Card from './Card'
import Empty from '../../components/Empty'

const FoodCard = ({foodData}) => {

 

  return (
    <>

    <div className='px-6 mb-32'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            (foodData.length > 0) ? foodData.map((item, id)=>(<Card key={id} {...item} route={`/singlefoodcard/${id}`}/>)):  <Empty />
        }
    </div>
    </div>
      
    </>
  )
}

export default FoodCard

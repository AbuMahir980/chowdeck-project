import React from 'react'
import foodImage from '../relayComponents/relayAssets/foodImage.png'
import loveIcon from '../relayComponents/relayAssets/loveIcon.png'
import clockIon from '../relayComponents/relayAssets/icons8-clock-25.png'
import Card from '../../components/store/Card'

const Store = () => {
  return (
    <>
    <div className='flex justify-center'>
    <div className=' grid grid-cols-3 gap-10'>
        {/* first card */}
        <Card loveIcon={loveIcon} foodImage={foodImage} description='ChildaCassandra Restaurant' clockIon={clockIon} time='51-61 mins'/>
        {/* <div className='w-[20rem] rounded-lg  bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2 relative'>
            <div className='absolute left-[21px] top-[12px] bg-[#ffc501] rounded-full w-[32px] h-[32px] flex justify-center'>
                <img src={loveIcon} alt="" className='w-8'/>
                </div>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3 pl-2'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <div className='flex mt-2'>
            <img src={clockIon} alt="" className='' />
            <h2>51-61 mins</h2>
            </div>
        </div>
        </div> */}

        {/* second card */}
        <div className='w-[20rem] rounded-lg border bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2'>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <p>loremhckhosvgb</p>
        </div>
        </div>
        {/* third card */}
        <div className='w-[20rem] rounded-lg border bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2'>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <h2>loremhckhosvgb</h2>
        </div>
        </div>

        {/* second batch */}
        {/* first card */}
        <div className='w-[20rem] rounded-lg border bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2'>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <p>loremhckhosvgb</p>
        </div>
        </div>
        {/* second card */}
        <div className='w-[20rem] rounded-lg border bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2'>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <p>loremhckhosvgb</p>
        </div>
        </div>
        {/* third card */}
        <div className='w-[20rem] rounded-lg border bg-[white] cursor-pointer hover:shadow-md'>
        <div className='p-2'>
            <img src={foodImage} alt="" className='w-[366px] h-[160px] overflow-hidden rounded-lg' />
        </div>
        <div className='py-3'>
            <h3 className='text-lg font-medium'>ChildaCassandra Restaurant</h3>
            <p>loremhckhosvgb</p>
        </div>
        </div>
    </div>
    </div>
      
    </>
  )
}

export default Store

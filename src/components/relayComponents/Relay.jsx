import React from 'react'
import '../RelayStyles/relay.css'
import Button from '../relayShared/button/Button'
import googlePlayStore from '../../assets/googlePlayStore.svg'
import appleStore from '../../assets/appleStore.svg'
import boxOne from '../../assets/boxOne.svg'
import heroThunder from '../../assets/heroThunder.svg'

const Relay = () => {
  
  return (
    
    <>

<div className="text-center background_container">
    <h1 className="text-5xl md:text-6xl lg:text-[112px] font-bold mb-6 lg:leading-[144.93px]">
      <span className="block">Delivery</span>
      <span className="block">On-The-Go</span>
   </h1>
   <h2 className='lg:text-xl mb-10'>Send and receive packages easily with Relay!</h2>
   <div className='flex flex-col md:flex-row items-center justify-center md:gap-4'>

  <Button image={googlePlayStore} text='Download on Google Playstore'/>
  <Button  image={appleStore} text='Download on Applestore'/>
  </div>
  <span className='flex flex-col items-center relative'>
    <div className='w-[80%] lg:w-1/2 mt-20 relative z-50'> 
    <img src={boxOne} alt="" />
    </div>
    <div  className='absolute bottom-12 w-full z-20'>
      <img src={heroThunder} alt="" /> 
    </div>
  </span>
  
</div>

<h3 className='font-sans font-medium pl-5 mt-20 md:mt-8 lg:mt-28 text-2xl md:text-[64px] md:font-bold'>How Relay Works</h3>
<div className='flex flex-row mt-20 space-x-10 items-center'>
  <div className='w-[15%] bg-[pink] h-[30vh]'>
    <h2>first card</h2>
  </div>
  <div className='flex flex-row w-[70%] bg-[blue] h-[60vh]'>
    <div className='w-[50%]'>
    <h2>second card</h2>
    </div>
    <div className='w-[50%] bg-[red] '>
    <h2>extra</h2>
    </div>
    
   
  </div>
  <div className='w-[15%] bg-[green] h-[30vh]'>
    <h2>third card</h2>
  </div>
</div>
  

   

</>

  )
}

export default Relay

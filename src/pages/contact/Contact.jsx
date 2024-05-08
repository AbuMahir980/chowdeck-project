import React from 'react'
import firstSectionImg1 from "../../assets/images/1.svg";
import firstSectionImg2 from "../../assets/images/2.svg";
import firstSectionImg3 from "../../assets/images/3.svg";
import firstSectionImg4 from "../../assets/images/4.svg";
import firstSectionImg5 from "../../assets/images/5.svg";
import secondSectionImg1 from "../../assets/images/6.svg";
import SecondSvgOne from "../../assets/images/secSecSvg.svg";
import letter from "../../assets/images/letter.svg";
import contact from "../../assets/images/contact.svg";
import Button from '../../shared/Button';

// import forthSectionImg1 from "../../assets/images/7.svg";
// import forthSectionImg2 from "../../assets/images/8.svg";
// import Button from "../../shared/button";

const Contact = () => {

const cloud = "https://chowdeck.com/illustrations/cloud-right.svg"
    return (
        <div>
    <div class="bg-[#0c513f] w-[full] h-[28rem] relative">
    <div class="w-[25rem] h-[25rem] absolute right-0 top-0">  
     <img src={cloud} alt="cloud" /></div>
        <div class="absolute top-[10rem] z-500 mx-[2rem] m-[7rem]">

            
        <div class="bg-white text-black border-4 border-black p-6 rounded-3xl md:p-10 lg:p-16">
            
        <div class="flex flex-col justify-between md:flex-row md:items-between mb-6">
        <p class="w-[15rem] font-bold text-3xl md:text-5xl">Live Chat</p>
        <div class="flex flex-col gap-2 justify-evenly ml-[40rem] md:flex-row gap-2 md:items-between">
       <img src={firstSectionImg1} alt="logo1" />
        <img src={firstSectionImg2} alt="logo2" />
        <img src={firstSectionImg3} alt="logo3" />
        <img src={firstSectionImg4} alt="logo4" />
      </div>
        </div>

<p><span class="block font-medium text-lg md:text-2xl mb-4">Urgently want to reach us ? </span></p>
        
<span class="block md:text-xl">We're available 9 am - 11 pm WAT, seven days a week. (And we respond within 5 mins!)</span>
<button class="flex items-center gap-2 text-[#02c27f] text-sm uppercase font-bold mt-10 tracking-widest"> <img src={firstSectionImg5} alt="" /> start a conversation </button>[] 
       
        </div>

        <div class="bg-white mt-[5rem] text-black border-4 border-black p-6 rounded-3xl md:p-10 lg:p-16">
            
            <div class="flex flex-col justify-between md:flex-row md:items-between mb-6">
            <p class="w-[15rem] font-bold text-3xl md:text-5xl">Email Us</p>
            <div><img src={secondSectionImg1} alt="" /></div>
            </div>
    
    <p><span class="block font-medium text-m md:text-2xl mb-4">Want to mail us instead ? </span></p>
     <div class="flex flex-rol justify-between">      
    <span class="block md:text-xl">
      <div class="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
      <span><img src={SecondSvgOne} alt="" />
    </span>
    <input type="text" class="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black" placeholder="Your Name" value=""/></div> 
    </span>
    <span class="block md:text-xl"><div class="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
      <span><img src={contact} alt="" />
    </span>
    <input type="text" class="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black" placeholder="Your Name" value=""/></div> 
    </span>
    <span class="block md:text-xl"><div class="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
      <span><img src={letter} alt="" />
    </span>
    <input type="text" class="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black" placeholder="Your Email" value=""/></div> 
    </span>
    </div> 
    <span class="pt-[2rem] block md:text-xl"><div class="bg-gray-100 rounded-lg px-4 md:px-5 border border-gray-100 flex items-center col-span-3 md:col-span-1">
      <span><img src={SecondSvgOne} alt="" />
    </span>
    <input type="text" class="flex w-full bg-transparent h-14 px-3 outline-none placeholder:text-black" placeholder="Your Phone" value=""/></div> 
    </span>
    <Button text="welcome to our home page" className="w-[550px]"/>
           
            </div>
    

</div>
    


            {/* <Button class="w-[5rem] h-[3rem] bg-gray-500"><img src={forthSectionImg1} alt="firstImage" /></Button> */}

        
   </div>
   </div>
  
)} 

export default Contact
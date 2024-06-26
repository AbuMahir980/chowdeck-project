import shoppingCart from '../../assets/shoppingcart.svg';
import exit from '../../assets/exit.svg';
import { items } from '../../utils/ListItems';
import { useState } from 'react';


const NavList = ({onClose}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    

    return (
            <div className='fixed top-0 left-0 h-screen w-screen bg-black flex flex-col divide-y divide-gray-500 divide-opacity-30 transition delay-1000 duration-1000 ease-in-out'>
                
                <div className='flex justify-end items-end align-middle pb-6 h-[113px] pr-2 gap-4 sticky top-0 z-10'>
                    <a href="#" className='bg-white rounded-full p-3'>
                        <img src={shoppingCart} alt="" />
                    </a>
                    <button className='pb-2 ' onClick={onClose}>
                        <img src={exit} alt="" />
                    </button>
                </div>

                <div className='overflow-y-scroll  flex-1 divide-y divide-gray-500 divide-opacity-30'>
                    {items.map((item, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`text-white flex items-center h-20 gap-3 font-medium text-xl hover:bg-[#0c513f] pl-10 ${activeIndex === index ? 'text-yellow-500' : ''}`}
                            onClick={() => handleActive(index)}
                        >
                            <img src={item.icon} alt="" />
                            <span>{item.text}</span>
                        </a>
                    ))}
                        
                    <p className='text-gray-200 text-opacity-35 h-20 font-normal text-xs pt-10 pb-10 text-center'>© All Rights Reserved. 2024 Chowdeck Technologies</p>
                </div>

                
            </div>
        )
}

export default NavList;

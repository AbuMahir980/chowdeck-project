import logo from '../assets/logo.svg';
import shoppingCart from '../assets/shoppingcart.svg';
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react';
import NavList from './components/NavList';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        
        <nav className='flex items-center justify-center h-20 bg-transparent shadow'>
            <div className='container mx-auto px-4 flex justify-between items-center w-full h-full'>
                <a href="" className='bg-[#0c513f] rounded-full h-12 w-12 pl-3 pt-3 pb-2 pr-2'>
                    <img src={logo} alt=""/>
                </a>
            
                <div className='flex gap-3'>
                    <a href="" className='bg-white rounded-full p-3'>
                        <img src={shoppingCart} alt="" />
                    </a>
                    <div>
                        <button className='pb-3 bg-[#0c513f] rounded-full p-3 ' onClick={toggleMenu}>
                        <img src={hamburger} alt="" />
                    </button>
                    {isOpen && <NavList onClose={() => setIsOpen(false)}/>}
                    </div>
                    
                </div>
            </div>
            
        </nav>
        
    )
}

export default Navbar

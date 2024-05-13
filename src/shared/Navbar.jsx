
import shoppingCart from '../assets/shoppingcart.svg';
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react';
import NavList from './components/NavList';
import BrandLogo from './components/BrandLogo';
import LgMenuList from './components/LgMenuList';
import { Link } from "react-router-dom";
import NavDropDown from './components/NavDropDown';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        
        <nav className='flex items-center justify-center h-20 bg-transparent bg-opacity-35 w-full fixed top-0 z-10 mt-6'>
            <div className='container mx-auto px-4 flex justify-between items-center w-full h-full'>
                <BrandLogo/>

                <LgMenuList />
                
            
                <div className='flex gap-3 relative'>
                    {/* <Client /> */}
                    <div className='absolute top-0 right-14'>
                        <NavDropDown />
                    </div>
                    
                    
                    <Link to="/store" className='bg-white rounded-full p-3'>
                        <img src={shoppingCart} alt="Shopping Cart" />
                    </Link>
                    <div className='lg:hidden'>
                        <button className='pb-3 bg-[#0c513f] rounded-full p-3 ' onClick={toggleMenu}>
                            <img src={hamburger} alt="" />
                        </button>
                        {isOpen && <NavList onClose={() => setIsOpen(false)}/>}
                    </div>
                    
                </div>
            </div>
            
        </nav>    
    );
}

export default Navbar

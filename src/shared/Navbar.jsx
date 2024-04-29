<<<<<<< .merge_file_qw8rAQ
// import logo from '../assets/logo.svg'
// import dropdown from '../assets/chevroletdown.svg'
// import shoppingcart from '../assets/shoppingcart.svg'
// import { useState } from 'react'
=======
import shoppingCart from '../assets/shoppingcart.svg';
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react';
import NavList from './components/NavList';
import BrandLogo from './components/BrandLogo';
import LgMenuList from './components/LgMenuList';
import Client from './components/Clients';
>>>>>>> .merge_file_IMzswh

// const Navbar = () => {

<<<<<<< .merge_file_qw8rAQ
//     // const [dropDown, setDropDown] = useState(false)
    
//     // const handleDropDown = () => {
//     //     setDropDown(!dropDown)
//     // }
//     const [isHovered, setIsHovered] = useState(false);
//     const handleMouseOver = () => {
//         setIsHovered(true);
//     };

//     const handleMouseOut = () => {
//         setIsHovered(false);
//     };

//     return(
//             <nav className='flex flex-row justify-between items-center'>
//                 <div className=''>
//                     <a className='flex'>
//                         <img src={logo} alt="Logo" /><span>chowdeck</span>
//                     </a>
//                 </div>
//                 <div>
//                     <a href="">Relay</a>
//                     <a href="">Company</a>
//                     <a href="">FAQs</a>
//                     <a href="">Blog</a>
//                     <a href="">Contact</a>
//                 </div>
//                 <div>
//                     <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//                         <span>Customers</span><img src={dropdown} alt="" />
//                     </button>
//                     <button>
//                         <img src={shoppingcart} alt="" />
//                     </button>
//                 </div>
//             </nav>
//     )
// }
=======
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        
        <nav className='flex items-center justify-center h-20'>
            <div className='container mx-auto px-4 flex justify-between items-center w-full h-full'>
                <BrandLogo/>

                <LgMenuList />
            
                <div className='flex gap-3'>
                    {/* <Client /> */}
                    <a href="" className='bg-white rounded-full p-3'>
                        <img src={shoppingCart} alt="" />
                    </a>
                    <div className='lg:hidden'>
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
>>>>>>> .merge_file_IMzswh

// export default Navbar

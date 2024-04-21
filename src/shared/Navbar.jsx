import logo from '../assets/logo.svg'
import dropdown from '../assets/chevroletdown.svg'
import shoppingcart from '../assets/shoppingcart.svg'
import { useState } from 'react'

const Navbar = () => {

    // const [dropDown, setDropDown] = useState(false)
    
    // const handleDropDown = () => {
    //     setDropDown(!dropDown)
    // }
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return(
            <nav className='flex flex-row justify-between items-center'>
                <div className=''>
                    <a className='flex'>
                        <img src={logo} alt="Logo" /><span>chowdeck</span>
                    </a>
                </div>
                <div>
                    <a href="">Relay</a>
                    <a href="">Company</a>
                    <a href="">FAQs</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
                <div>
                    <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <span>Customers</span><img src={dropdown} alt="" />
                    </button>
                    <button>
                        <img src={shoppingcart} alt="" />
                    </button>
                </div>
            </nav>
    )
}

export default Navbar

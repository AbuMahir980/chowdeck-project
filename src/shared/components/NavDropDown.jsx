import React, { useState } from 'react'
import dropArrow from '../../assets/droparrow.svg'
import { Link } from 'react-router-dom'
const NavDropDown = () => {
    const [isHover, setIsHover] = useState(false)

    const onMouseHover = () => {
        setIsHover(!isHover)
    }

    const onMouseOut = () => {
        setIsHover(false)
    }
    return (
        <div className='lg:flex lg:flex-col hidden gap-5 relative'>
            <div className='lg:flex bg-white text-center rounded-full justify-around gap-5 mb-3 px-4 pr-8 py-2 w-fit drop-shadow lg:text-base lg:font-semibold absolute top-0 right-1' onClick={onMouseHover} >
                {/* <div className='' > */}
                    <span className='flex justify-between'>Customer <img src={dropArrow} alt="" /></span>
                    
                {/* </div> */}
                
            </div>
            {
                isHover && (
                    <div className='text-right lg:text-base lg:font-semibold relative top-12 py-2 w-fit drop-shadow flex justify-end flex-col gap-3 '>
                            <Link to='/vendors' className='bg-white rounded-full px-3 py-2'>
                                <span>Vendors</span>
                            </Link>
                            <Link to='/riders' className='bg-white rounded-full py-2 px-2 w-fit self-end'>
                                <span>Riders</span>
                            </Link>
                        </div>
                    )
                }

        </div>
    )
}

export default NavDropDown
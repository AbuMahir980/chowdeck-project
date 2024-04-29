import logo from '../../assets/logo.svg';
import lgLogo from '../../assets/lgLogo.svg'

const BrandLogo = () => {
    return(
        <div className='flex flex-row justify-center h-full py-4'>
            <a href="" className='flex lg:items-center bg-[#0c513f] rounded-full h-full w-12 lg:w-auto lg:px-5 lg:py-4 pl-3 pt-3 pb-2 pr-2 self-center'>
                {/* Show logo.svg on small screens */}
                <img src={logo} alt="" className='lg:hidden'/>
                {/* Show lglogo.svg on large screens */}
                <img src={lgLogo} alt="" className="hidden lg:block -mr-1"/>
                {/* Text nested to the image on large screens*/}
                <span className='hidden lg:inline-block lg:text-white lg:text-base lg:font-medium ml-1'>Chowdeck</span>
            </a>
        </div>
    )
}

export default BrandLogo
import chowPrice from '../../../assets/chowdeck/chow-combo-price.svg';
import chowImage from '../../../assets/chowdeck/chow-combo.png';
import relayLine from '../../../assets/chowdeck/relay-line.png';
import relayLogo from '../../../assets/chowdeck/relay-logo.svg';


const BannerDisplay = () => {
    return(
        <div className="flex  justify-between">
            <div className="relative h-[170px] w-[640px] bg-[#0c513f] rounded-2xl">
                <img src={chowImage} alt="" className='w-full z-10 h-full '/>
                <div className='absolute top-10 left-9 max-w-40'>
                    <span className='md:text-xl text-white font-bold break-words whitespace-normal'>Get the Chow Combo now</span>
                    <img src={chowPrice} alt="" />
                </div>    
            </div>
            <div className="relative h-[170px] w-[640px] rounded-2xl">
                <img src={relayLine} alt="" className='w-full z-10 h-full rounded-2xl'/>
                <div className='flex absolute top-10 left-9 max-w-80 items-end'>
                    <img src={relayLogo} alt="" />
                    <span className='text-white text-xs md:text-base lg:text-[18px] font-medium md:leading-5'>Send packages easily with relay!</span>
                    
                </div>    
            </div>
        </div>
    )
}

export default BannerDisplay
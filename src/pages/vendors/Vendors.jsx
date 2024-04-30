// import hero from '../../assets/vendors/hero.svg';
import Buttons from '../../components/vendorComponents/Buttons';
import Navbar from '../../shared/Navbar';
import playStore from '../../assets/vendors/googlePlay.svg';
import appStore from '../../assets/vendors/appStore.svg';
import downArrow from '../../assets/vendors/networks/downArrow.svg'



const Vendors = () => {
    return (
        <div className='w-screen'>
            <Navbar />
            <div 
            className="relative min-h-screen w-screen md:flex md:min-w-screen flex flex-col items-center justify-center gap-4 bg-hero bg-cover bg-no-repeat">
                <div className='mb-10'></div>
                <h1 className='font-bold text-6xl text-center mt-40 tracking-tighter align-bottom md:container md:text-left md:text-8xl md:text-balance md:ml-5 lg:container lg:px-auto lg:text-left lg:text-balance lg:text-9xl lg:ml-5 lg:leading-tight lg:tracking-tighter mb-5'>Grow your Food Business</h1>

                <div className='flex flex-col justify-center md:flex md:flex-row gap-4 md:justify-start md:self-start md:container md:ml-5 lg:container lg:mx-auto lg:px-4 xl:container xl:mx-auto xl:px-4'>
                    <Buttons img={playStore} bgColor="bg-black" text="Download on Google Play" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
                    <Buttons img={appStore} bgColor="bg-black" text="Download on App Store" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
                </div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <h2 className='font-bold text-[32px] leading-[48px] text-center mb-5 mt-10 md:text-[48px] md:leading-[48px] md:text-center lg:text-[64px] lg:leading-[80px]'>Get Started, download the app.</h2>
                <div className='flex flex-col justify-center md:flex md:flex-row gap-4 md:justify-center'>
                    <Buttons img={playStore} bgColor="bg-[#0c513f]" text="Download on Google Play" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
                    <Buttons img={appStore} bgColor="bg-[#0c513f]" text="Download on App Store" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
                </div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
                <div className='mb-10'></div>
            </div>
            <div className='flex justify-center items-center container mx-auto px-4 gap-2'>
                <h2 className='text-[#d1d5db] font-normal text-[32px] leading-[48px] md:text-[48px] md:leading-[48px] md:tracking-tighter lg:text-[64px] lg:leading-[80px]'>Join our growing network</h2>
                <img src={downArrow} alt="" className='w-6 h-6 md:w-14 md:h-14 lg:w-16 lg:h-16' />
            </div>
        </div>
    ); 

}

export default Vendors
import hero from '../../assets/vendors/hero.svg';
import Buttons from '../../components/vendorComponents/Buttons';
import Navbar from '../../shared/Navbar';
import playStore from '../../assets/vendors/googlePlay.svg';
import appStore from '../../assets/vendors/appStore.svg'


const Vendors = () => {
    return (
        <div>
            <Navbar />
            <div 
            className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center gap-4 bg-hero">
                <h1 className='font-bold text-6xl text-center mt-40 tracking-tighter align-bottom md:container md:text-left md:text-8xl md:text-balance md:ml-5 lg:container lg:px-auto lg:text-left lg:text-balance lg:text-9xl lg:mr-6 lg:leading-tight lg:tracking-tighter mb-5'>Grow your Food Business</h1>

                <Buttons img={playStore} bgColor="bg-black" text="Download on Google Play" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
                <Buttons img={appStore} bgColor="bg-black" text="Download on App Store" width="w-72" height="h-16" textWeight="font-medium" textSize="text-base"/>
            </div>
        </div>
    ); 

}

export default Vendors
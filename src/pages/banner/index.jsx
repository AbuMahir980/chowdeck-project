import phonePic from "../../assets/selim/phoneImage.webp"
import drinks from "../../assets/selim/drink.svg"
import promocode from "../../assets/selim/Promo-code.svg"


const Banner = () => {
    return(
        <div className="flex w-full  mx-auto gap-10 py-9">
            <div className="w-[50%] bg-[#0c513f] rounded-[7px] max-h-full p-12 relative">
                <h1 className="font-bold text-white text-[60px]">Place your <br />
                order in seconds</h1>
                <div className="bg-white rounded-[7px] p-4 w-[45%] mt-5">Download on Google Play</div>
                <div className="bg-white rounded-[7px] p-4 w-[45%] mt-5">Download on App Store</div>
                <div className="flex justify-between">
                <img src={promocode} alt="" className="absolute bottom-36"/>
                <img src={drinks} alt="" className="w-[12rem] absolute bottom-4 right-11"/>
                <p className="text-white font-medium absolute bottom-20">Get <span className="text-[#ffc501] ">₦300 off</span> your first order when you use <br /> this promo code!</p>
                </div>
            </div>
            <div className="w-[50%] h-full"><img src={phonePic} alt="" /></div>

        </div>
    )
}

export default Banner
import overallImg from "../../assets/selim/overall.PNG"
import logo from "../../assets/selim/chowdelogoWhite.PNG"

const Footer = () => {

    return (
        <>
            <div className="bg-[#ffff] text-white bg-black w-full p-10 mx-auto">
                <div className="w-[90%] justify-around mx-auto flex border-y-2 border-[#1d1d1d] pb-5 ">
                    <div className="w-[40%] border-r-2 border-[#1d1d1d]">
                        <div className="flex flex-col justify-between mt-7 h-full">
                            <img src={overallImg} alt="" className="w-[7rem]" />
                            <img src={logo} alt="" className="w-[11rem]" />
                        </div>
                    </div>
                    <div className="w-[60%]  px-7">
                        <div className="grid grid-cols-3">
                        <div className="  border-r-2 border-[#1d1d1d] px-5">
                            <div className="flex flex-col gap-y-5 my-14">
                                <span className="font-medium text-[#616161]">COMPANY</span>
                                <a href="#">Customers</a>
                                <a href="#">vendors</a>
                                <a href="#">riders</a>
                                <a href="#">storefront</a>
                                <a href="#">about</a>
                                <a href="#">careers</a>
                                <a href="#">FAQs</a>
                                <a href="#">Blog</a>
                                <a href="#">Contact</a>
                                <a href="#">Terms of use</a>
                                <a href="#">privacy policy</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 border-r-2 border-[#1d1d1d] px-5">
                            <div className="flex flex-col gap-y-5 my-14">
                                <span className="font-medium text-[#616161]">CUISINES</span>
                                <a href="#">Pasta near me</a>
                                <a href="#">Rice near me</a>
                                <a href="#">fast food near me</a>
                                <a href="#">Asian food in lagos </a>
                                <a href="#">African food in lagos </a>
                                <a href="#">breakfast food in lagos </a>
                                <a href="#">fitfarm store in lagos</a>
                                <a href="#">American in lagos</a>
                                <a href="#">pastries in lagos</a>
                                <a href="#">salad in lagos</a>
                                <a href="#">fruit in lagos</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 px-5">
                            <div className="flex flex-col gap-y-5 my-14">
                                <span className="font-medium text-[#616161]">POPULAR</span>
                                <a href="#">Food delivery</a>
                                <a href="#">surulere</a>
                                <a href="#">ogudu</a>
                                <a href="#">yaba</a>
                                <a href="#">ikeja</a>
                                <a href="#">lekki</a>
                                <a href="#">king glab</a>
                                <a href="#">korede spaghetti</a>
                                <a href="#">iyan aladuke</a>
                                <a href="#">food fusion</a>
                                <a href="#">belle full</a>
                            </div>
                        </div>
                        </div>
                        <div className="grid grid-cols-2 gap-11 justify-center items-center">
                            <div className=""><span className="font-bold text-[25px]">Twitter</span></div>
                            <div className=""><span className="font-bold text-[25px]">Instagram</span></div>
                            <div className=""><span className="font-bold text-[25px]">Facebook</span></div>
                            <div className=""><span className="font-bold text-[25px]">LinkedIn</span></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="px-20 py-5 text-center flex justify-center items-center bg-black w-full"><span className="text-[#bbbbbc]">© All Rights Reserved. 2022, Chowdeck Logistics Inc.</span></div>

        </>

    )
}

export default Footer
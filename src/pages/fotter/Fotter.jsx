import chowlogo from "../../assets/selim/chowlogo.webp"



const Fotter = () => {
    return (
        <>
        <div className="bg-[#ffff] text-black w-full flex justify-evenly px-6 mt-20">
            <div className="w-[50%]">
            <img src={chowlogo} alt="" />
            </div>
            <div className="w-[50%] grid grid-cols-4">
                <div className=" flex flex-col gap-y-5"><span className="font-medium">LOCATIONS</span>
                <a href="#">Unilag</a>
                <a href="#">Alagomeji</a>
                <a href="#">Fola Agoro</a>
                <a href="#">Ibadan 1</a>
                <a href="#">Ibadan 2</a>
                <a href="#">Apo</a>
                </div>
                <div className="flex flex-col gap-y-5"><span className="font-medium">DOWNLOAD</span>
                <a href="#">Google Play Store</a>
                <a href="#">iOS App Store</a>
                </div>
                <div className="flex flex-col gap-y-5"><span className="font-medium">GET HELP</span>
                <a href="#">Email</a>
                <a href="#">Chat</a>
                </div>
                <div className="flex flex-col gap-y-5"><span className="font-medium">LEGAL</span>
                <a href="">Privacy Policy</a>
                <a href="">Terms of use</a>
                </div>

            </div>
        </div>
        <div className="px-20 py-5 w-full  border-t-2 border-[#bbbbbc] border-opacity-25"><span className="text-[#bbbbbc] ">© 2022, Chowdeck.</span></div>
        {/* border-t-2 border-[#bbbbbc] border-opacity-25 */}
        </>

    )
}

export default Fotter
const Card = ({icon, heading, text, actionTxt, actionIcon, contImg}) => {
    return(
        <div>
            <div className="flex flex-col w-full h-[429px] bg-white border border-black border-4 rounded-xl mb-4 pt-5 overflow-hidden md:w-full">
                <div className="flex flex-col mx-auto px-6  gap-4">
                    <img src={icon} alt="" className="w-8 h-8 text-[#0c513f]"/>
                    <h3 className="text-[20px] leading-[28px] font-bold">{heading}</h3>
                    <p className="font-normal text-[16px] leading-[24px]">{text}</p>
                    <a href="#" className="flex justify-start items-center gap-1 font-bold text-[14px] leading-[20px] tracking-widest">
                        {actionTxt}
                        <img src={actionIcon} alt="" className="w-3 h-4 font-thin opacity-50 "/>
                    </a>
                </div>
                <div className="flex w-full mt-10">
                    <img src={contImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card
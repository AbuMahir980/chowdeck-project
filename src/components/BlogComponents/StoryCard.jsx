const StoryCard = ({img, heading, text, btnText}) => {
    return(
        <div>
            <div className="flex flex-col justify-between w-full h-full bg-white border-black border-4 rounded-xl mb-4 pt-5 overflow-hidden md:w-full">
                <div className="flex flex-col items-center border-b-4 border-black justify-center h-[200px] overflow-hidden">
                    <img src={img} alt="" className="w-full h-full"/>
                </div>
                <div className="bg-white p-4 h-[240px] flex flex-col">
                    <h3 className="uppercase flex text-center items-center justify-center text-sm font-bold mb-3">{heading}</h3>
                    <p className="text-base text-center font-medium overflow-hidden">{text}</p>
                    <button className="bg-green-400 inline-flex items-center justify-center py-3 font-medium px-6 mt-auto bg-opacity-5 text-green-500 rounded-lg hover:bg-green-500 hover:text-white">{btnText}</button>
                </div>
            </div>
        </div>
        
    )
}

export default StoryCard
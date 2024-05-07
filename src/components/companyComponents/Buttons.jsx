
const Buttons = ({img,text,bgColor,width,height, textWeight, textSize}) => {
    return (
        <button className={`flex flex-row justify-center items-center ${width} ${height} ${bgColor} rounded-lg px-4 py-2`}>
            <img src={img} alt="" className={`pt-1 pl-1 w-7 h-7`}/>
            <p className={`text-white ${textWeight} ${textSize}`}>{text}</p>
        </button>
    );
}

export default Buttons
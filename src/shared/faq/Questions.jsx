
const Questions = ({text,className,...props}) => {


    return(

        <div {...props} className={`${className} cursor-pointer  p-4 border-2 rounded-[5px]  w-[575px] `}><span id="1" className="">{text}</span></div>

    )
}

export default Questions
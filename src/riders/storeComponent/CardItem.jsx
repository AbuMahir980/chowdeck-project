const CardItem = ({heading, description, price, image}) => {
    return(
        <div className="border-t-[2px] w-[19rem]">
            <div className="my-6">
            <div className="flex border-[1px] border-[#a3abb2\] rounded-[10px] w-full overflow-hidden  ">
                <div className="">
                    <h3 className=" font-bold ">{heading}</h3>
                    <span className="text-[15px] text-[#ced1d4]">{description}</span>
                    <p className="tex-[ 12px] text-[rgb(153, 153, 153)]  w-60 text-[#135644] ">{price} </p>    
                </div>
                <div className="my-6">
                    <img src={image} alt="" className="w-[150px] pr-5" />
                </div>
            </div>
            </div>
            </div>
    )
}


export default CardItem
const CardItem = ({heading, description, price, image}) => {
    return(
            <div className="flex border-2 border-black rounded-xl w-full ">
                <div className="">
                    <h3 className=" font-bold ">{heading}</h3>
                    <span className="">{description}</span>
                    <p className="tex-[ 12px] text-[rgb(153, 153, 153)]  w-60">{price} </p>    
                </div>
                <div className="">
                    <img src={image} alt="" className="w-25 " />
                </div>
            </div>
    )
}


export default CardItem
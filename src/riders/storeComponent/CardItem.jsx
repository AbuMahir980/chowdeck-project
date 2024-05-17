const CardItem = ({product_name, description, price, images, onClick}) => {
    return(
        <div className="  w-[19rem] my-6" onClick={onClick}>
            <div className="flex border-[1px] p-5 border-[#a3abb2\] rounded-[10px] w-full overflow-hidden  ">
                <div className="">
                    <h3 className=" font-bold ">{product_name}</h3>
                    <span className="text-[15px] text-[#ced1d4]">{description}</span>
                    <p className="tex-[ 12px] text-[rgb(153, 153, 153)]  w-60 text-[#135644] ">₦{price} </p>    
                </div>
                <div className="w-[50%]">
                    <img src={images} alt="" className="w-full" />
                </div>
            </div>
    </div>
    )
}


export default CardItem
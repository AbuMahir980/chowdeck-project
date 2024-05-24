import { useState } from "react"
import AddToCartCard from "../../components/addtocart/AddToCartCard"

const CardItem = ({items, setPaymentItems}) => {
    const [toggleModal, setToggleModal] = useState(false)
    console.log("items: ", items)

    function handleToggleModal(){
        
        setToggleModal(!toggleModal)
    }

    return(
        // {product_name, description, price, images, onClick}

            items.map((item, i) => {
                return (
                    <>
                    <div key={i} className=" w-[19rem] my-6" onClick={()=>handleToggleModal(console.log(item.product_id))}>
                        <div className="flex border-[1px] p-5 border-[#a3abb2\] rounded-[10px] w-full overflow-hidden  ">
                        <div className="">
                        <h3 className=" font-bold ">{item.product_name}</h3>
                        <span className="text-[15px] text-[#ced1d4]">{item.description || ""}</span>
                        <p className="tex-[ 12px] text-[rgb(153, 153, 153)]  w-60 text-[#135644] ">₦{item.price || 0.00}  </p>    
                        </div>
                        <div className="w-[50%]">
                        <img src={item.images} alt="" className="w-full" />
                        </div>
                        </div>
                    </div>
                    {
                        toggleModal &&  <AddToCartCard item={item} handleToggleModal={handleToggleModal} setPaymentItems={setPaymentItems} />
                    }    
                    </>
                )
            })

    )
}


export default CardItem
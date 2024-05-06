import takeAway from "../../assets/selim/image.webp"

const Checkout = () => {
    return(
        <>
        <div className="w-[40%] bg-white">
            <div className="border-b-2 border-[#bbbbbc]">
                <p className="">Checkout</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={takeAway} alt="" />
                <h3 className="text-center">
                Your cart is empty. <br />Add items to get started
                </h3>
            </div>
        </div>
        </>
    )
}
export default Checkout
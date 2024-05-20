const OrdersPayment = ({SubCost,DeliveryFee,ServiceFee,Total}) => {
    return(
        <div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <p className="">Sub Total</p>
                    <span>₦600</span>
                </div>
                <div className="flex justify-between">
                    <p>Delivery fee</p>
                    <span>₦600</span>
                </div>
                <div className="flex justify-between">
                    <p>Service Fee</p>
                    <span>₦600</span>
                </div>
                <div className="flex justify-between">
                    <p>Total</p>
                    <span>₦600</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-3">
                <button className="w-full h-16 rounded-xl bg-[#0c513f] text-white">Place order</button>
                <button className="w-full h-16 rounded-xl bg-[#fdefeb] text-red-400">Clear orders</button>
                <button className="w-full h-16 rounded-xl text-[#0c513f]">Save for later</button>
            </div>
        </div>
    )
}

export default OrdersPayment
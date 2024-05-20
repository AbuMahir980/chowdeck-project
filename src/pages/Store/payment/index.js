import OrdersPayment from "./components/OrdersPayment"
import Pack from "./components/Pack"
import Heads from "./components/Heads"

const Payment = () => {
    return(
        <div className="w-[30%] flex flex-col h-screen gap-10 px-6">
            <Heads />
            <Pack />
            <OrdersPayment />
        </div>
    )
}

export default Payment
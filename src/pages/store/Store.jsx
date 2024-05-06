import SignUpCard from "../../components/storeComponents/SignUpCard";
import LogInCard from "../../components/storeComponents/LogInCard"
import AddToCartCard from "../../components/addtocart/AddToCartCard";
import VerifyOtp from '../verfiyOtp/VerifyOtp'

const Store = () => {
    return(
        <>
            <div className=" flex justify-center items-center h-screen">
                <h1>Welcome to store</h1>
                
                

            </div>
            <SignUpCard/> 
            {/* <LogInCard/>
            <VerifyOtp />
            <AddToCartCard /> */}
        </>
    )
}

export default Store
import axios from 'axios'
import { START_PAYMENT } from '../../../../services/api'
import { toast } from 'react-toastify'
import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';

const OrdersPayment = ({SubCost,DeliveryFee,ServiceFee,Total}) => {

    const [amount, setAmount] = useState(100)
    const [email, setEmail] = useState('roshbon@gmail.com')



    // const handlePayment = async() => {
    // const amount  = 5000
    // const email = 'roshbon@gmail.com'

// try{
//     const start_payment = await axios({
//         method: "POST",
//         url: START_PAYMENT,
//         data: {
//             amount,
//             email
//         }
//     })
//     if(!start_payment.data.status ) throw new Error('Sorry, we caouldnt start the transaction this time, try again ')

//     const {authorization_url} = start_payment.data.data

//     window.location.replace(authorization_url)

// }catch(error){
  
//     toast(error.message)

// }

 //   }


const config = {
   
    email: email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_b0a3283469dbd8036e680d409d425006719e7c25',
};

const initializePayment = usePaystackPayment(config);

 // you can call this function anything
 const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    alert("yooooooo")
    toast('Payment received, we are confirming this....')
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }



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
                <button className="w-full h-16 rounded-xl bg-[#0c513f] text-white" onClick={() => {initializePayment(onSuccess, onClose)}}>Place order</button>
                <button className="w-full h-16 rounded-xl bg-[#fdefeb] text-red-400">Clear orders</button>
                <button className="w-full h-16 rounded-xl text-[#0c513f]">Save for later</button>
            </div>
        </div>
    )
}

export default OrdersPayment
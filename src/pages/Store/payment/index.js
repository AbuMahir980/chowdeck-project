import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { usePaystackPayment } from 'react-paystack';

const Payment = ({ items, setPaymentItems, storeName }) => {
    const [email, setEmail] = useState('roshbon@gmail.com');
    const [deliveryFee, setDeliveryFee] = useState(600);  // Fixed delivery fee
    const [serviceFee, setServiceFee] = useState(100);   // Fixed service fee
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const calcSubtotal = items.reduce((total, item) => total + (item.price * item.count), 0);
        setSubtotal(calcSubtotal);
    }, [items]);

    const config = {
        email: email,
        amount: (subtotal + deliveryFee + serviceFee) * 100,  // Paystack amount in kobo
        publicKey: 'pk_test_b0a3283469dbd8036e680d409d425006719e7c25',
    };

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference) => {
        console.log(reference);
        alert("Payment successful!");
        toast('Payment received, we are confirming this....');
    };

    const onClose = () => {
        console.log('Payment dialog closed');
    }

    const clearOrders = () => {
        setPaymentItems([]);
    };

    const saveOrders = () => {
        // // Save orders logic (could be saving to local storage, backend, etc.)
        // alert("Orders saved for later!");
    };

    return (
        <div className="w-full flex flex-col h-screen gap-10 px-6 my-5">
            <div className="flex justify-between">
                <h3 className="text-[#0c513f] my-auto font-bold text-sm">{storeName}</h3>
                <button className='bg-[#e6f7f1] text-[#0c513f] font-normal text-sm rounded-full p-2'>
                    + Add another pack
                </button>
            </div>
            <div className="flex flex-col border-dashed border border-gray-400 rounded-xl px-4 py-4 gap-5">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <p className="font-normal text-xs">Pack {index + 1}</p>
                            <button>
                                <img src="" alt="" />
                            </button>
                        </div>
                        <div className="flex py-0 justify-between">
                            <p className="font-normal text-sm">{item.product_name} <br /><span>₦{item.price}</span></p>
                            <div className='flex rounded-full w-[20%] h-7 bg-gray-300'>
                                <button className='w-full items-center justify-center' onClick={() => {
                                    const newItems = [...items];
                                    newItems[index].count = Math.max(newItems[index].count - 1, 1);
                                    setPaymentItems(newItems);
                                }}>-</button>
                                <div className='flex items-center justify-center w-full font-normal text-xs'>{item.count}</div>
                                <button className='w-full items-center justify-center' onClick={() => {
                                    const newItems = [...items];
                                    newItems[index].count++;
                                    setPaymentItems(newItems);
                                }}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex flex-col gap-3 my-5">
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Sub Total</p>
                        <span className="font-bold text-sm">₦{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Delivery fee</p>
                        <span className="font-bold text-sm">₦{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Service Fee</p>
                        <span className="font-bold text-sm">₦{serviceFee}</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">Total</p>
                        <span className="font-bold text-sm">₦{subtotal + deliveryFee + serviceFee}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="w-full h-16 rounded-xl bg-[#0c513f] text-white" onClick={() => { initializePayment(onSuccess, onClose) }}>
                        Place order
                    </button>
                    <button className="w-full h-16 rounded-xl bg-[#fdefeb] text-red-400" onClick={clearOrders}>
                        Clear orders
                    </button>
                    <button className="w-full h-16 rounded-xl text-[#0c513f]" onClick={saveOrders}>
                        Save for later
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment;

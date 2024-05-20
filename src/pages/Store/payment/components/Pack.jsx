import { useState } from "react";

const Pack = ({packNumber,productName,price}) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count < 10000 ? count + 1 : count);
    };
    const decrement = () => {
        setCount(count > 1 ? count - 1 : count);
    };
    return(
        <div className="flex flex-col border-dashed border border-gray-400 rounded-xl px-4 py-4 gap-5">
            <div className="flex justify-between">
                <p className="font-normal text-xs">Pack 1</p>
                <button><img src="" alt="" /></button>
            </div>
            <div className="flex py-0 justify-between">
                <p className="font-normal text-sm">Chicken topper Salad <br /><span>₦600</span></p>
                <div className='flex rounded-full w-[20%] h-7 bg-gray-300'>
                        <button className='w-full items-center justify-center' onClick={decrement}>-</button>
                        <div className='flex items-center justify-center w-full font-normal text-xs'>{count}</div>
                        <button className='w-full items-center justify-center' onClick={increment}>+</button>
                </div>
            </div>
            <div className="flex justify-between">
                <button className='rounded-full  h-7 border-solid border font-normal text-xs' onClick={increment}>+ Add to this pack</button>
                <button className='rounded-full h-7 border-dashed border font-normal text-xs' onClick={increment}>Duplicate pack</button>
            </div>
            
        </div>
    )
}

export default Pack
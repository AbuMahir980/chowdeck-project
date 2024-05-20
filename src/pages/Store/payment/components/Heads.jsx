import { useState } from "react";
// import { headData } from "./data";

const Heads = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count < 10000 ? count + 1 : count);
    };
    return(
        <div className="flex justify-between">
            <h3 className="text-[#0c513f] font-normal text-sm">Mega Chicken</h3>
            <button className='bg-[#e6f7f1] text-[#0c513f] font-normal text-sm rounded-full p-2' onClick={increment}>+ Add another pack</button>
        </div>
    )
}

export default Heads
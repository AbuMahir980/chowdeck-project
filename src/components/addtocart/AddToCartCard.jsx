import { useState } from 'react';
import efoEgusi from '../../assets/store/efoEgusi.png'


const AddToCartCard = ({ handleToggleModal }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count < 10000 ? count + 1 : count);
    };
    const decrement = () => {
        setCount(count > 1 ? count - 1 : count);
    };

    function handleCloseModal(e) {

        e.target.id === "closeModal" && handleToggleModal()
    }

    return (
        <div className='bg-black bg-opacity-60 w-full min-h-screen flex justify-center fixed top-0' id='closeModal' onClick={handleCloseModal} >
            <div className='max-h-[95vh] w-[90vw] bg-white rounded-3xl overflow-y-auto text-center  pb-5 mt-5 sm:px-20 md:w-[65vw] md:overflow-hidden lg:w-[55vw] xl:w-[40vw]'>

                <p className='cursor-pointer' onClick={handleToggleModal}   >x</p>
                <div className=' mb-5 sm:flex min-w-[50%] mx-auto px-10 md:px-0 lg:h-[60%]'>
                    <img src={efoEgusi} alt="" className='w-full' />
                </div>
                <div className='flex flex-col items-start mx-5 mb-3 md:mx-[-50px] md:flex md:flex-row'>
                    <div className='flex flex-col items-start md:w-[70%] mb-3 gap-3'>
                        <h3 className='text-[18px] leading-[28px]'>Egusi Soup</h3>
                        <p className='text-balance text-left text-[#999999] text-[14px] leading-[20px] text-sm md:text-pretty'>yummy Egusi made with shredded Stockfish, Pomo and Dryfish, note that th is price doesn't include protein</p>
                    </div>

                    <div className=''>
                        <p className='text-[18px] leading-[28px] text-[#0c513f]'>2000.00 <span className='text-[12px] leading-[16px] text-[#0c513f]'>portion</span></p>
                    </div>
                </div>
                <div className='flex mx-5 md:mx-[-50px] gap-3'>
                    <div className='flex flex-row w-[40%] h-16 rounded-lg border border-solid border-[#0c513f]'>
                        <button className='w-full' onClick={decrement}>-</button>
                        <div className='flex items-center justify-center w-full'>{count}</div>
                        <button className='w-full' onClick={increment}>+</button>
                    </div>
                    <button className='rounded-lg h-16 w-[60%] bg-[#0c513f] text-white flex self-start items-center justify-center mb-6 sm:w-full p-5'>Add {count} item to my order</button>
                </div>

            </div>
        </div>
    )
}

export default AddToCartCard
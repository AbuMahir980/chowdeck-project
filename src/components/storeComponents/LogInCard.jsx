const LogInCard = () => {
    return(
        <div className="flex justify-center bg-black bg-opacity-60 w-full min-h-screen fixed top-0">
            <div className='max-h-[95vh] w-[90vw] bg-white rounded-3xl overflow-y-auto text-center p-5 mt-5 sm:pt-16 sm:px-20 lg:w-[55vw] xl:w-[40vw]'>
                {/* <img src={exit} alt="" className=''/> */}
                <h1 className='font-medium text-2xl mb-2'>Sign In</h1>
                <p className='text-[#999999] mb-10'>Sign in to continue</p>
                <div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Phone Number</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="tel" name="tel" id="tel" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>                     
                    <button className='rounded-lg h-16 w-full bg-[#0c513f] text-white flex self-start items-center justify-center mb-6 sm:w-full'>Sign In</button>
                </div>
                <p className='text-base font-normal text-[#999999] sm:font-medium'>New to Chowdeck? <span className='text-[#0c513f]'>Sign Up</span></p>
            </div>
        </div>
    )
}

export default LogInCard
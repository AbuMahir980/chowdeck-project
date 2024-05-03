import account from '../../assets/store/account.svg';
import email from '../../assets/store/email.svg';
// import exit from '../../assets/exit.svg'
const SignUpCard = () => {
    return(
        <>
            <div className='max-h-[95vh] w-[90vw] bg-white rounded-3xl overflow-y-auto text-center p-5 mt-5 sm:pt-16 sm:px-20 lg:w-[55vw] xl:w-[40vw]'>
                {/* <img src={exit} alt="" className=''/> */}
                <h1 className='font-medium text-2xl mb-2'>Sign Up</h1>
                <p className='text-[#999999] mb-10'>Sign up to continue</p>
                <div>
                    <div className='sm:flex sm:justify-between lg:gap-4'>
                        <div className='flex flex-col items-start mb-6'>
                            <label className='text-[#0c513f] mb-3 text-base font-normal'>First Name</label>
                            <div className='flex justify-center items-center gap-2 relative w-full'>
                                <img src={account} alt="" className="w-5 h-5 absolute left-[10px] lg:hidden"/>
                                <input type="text" name="firstName" id="firstName" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-64 lg:w-[100%]' />
                            </div>
                        </div>
                        
                        <div className='flex flex-col items-start'>
                            <label className='text-[#0c513f] mb-3 text-base font-normal'>Last Name</label>
                            <div className='flex justify-center items-center gap-2 relative mb-6 w-full'>
                                <img src={account} alt="" className="w-5 h-5 absolute left-[10px] lg:hidden"/>
                                <input type="text" name="lastName" id="lastName" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-64 lg:w-[100%]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Email</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <img src={email} alt="" className="w-5 h-5 absolute left-[10px]"/>
                            <input type="text" name="email" id="email" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Phone Number</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="tel" name="tel" id="tel" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Referral Code (Optional)</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="tel" name="tel" id="tel" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>                        
                    <button className='rounded-lg h-16 w-full bg-[#0c513f] text-white flex self-start items-center justify-center mb-6 sm:w-full'>Next</button>
                </div>
                <p className='text-base font-normal text-[#999999] sm:font-medium'>Have an account? <span className='text-[#0c513f]'>Sign In</span></p>
            </div>
        </>
    );
}

export default SignUpCard
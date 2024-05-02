import account from '../../assets/store/account.svg';
import email from '../../assets/store/email.svg';
// import exit from '../../assets/exit.svg'
const AccountCard = () => {
    return(
        <>
            <div className='max-h-[95vh] w-[90vw] bg-white rounded-3xl overflow-y-auto text-center p-5 mt-5'>
                {/* <img src={exit} alt="" className=''/> */}
                <h1 className='font-medium text-2xl mb-2'>Sign Up</h1>
                <p className='text-[#999999] mb-10'>Sign up to continue</p>
                <div>
                    <div className='flex flex-col items-start mb-6'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>First Name</label>
                        <div className='flex justify-center items-center gap-2 relative '>
                            <img src={account} alt="" className="w-5 h-5 absolute left-[10px]"/>
                            <input type="text" name="firstName" id="firstName" className='rounded-lg h-16 w-60 pl-[40px]' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Last Name</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6'>
                            <img src={account} alt="" className="w-5 h-5 absolute left-[10px]"/>
                            <input type="text" name="lastName" id="lastName" className='rounded-lg h-16 w-60 pl-[40px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Email</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6'>
                            <img src={email} alt="" className="w-5 h-5 absolute left-[10px]"/>
                            <input type="text" name="email" id="email" className='rounded-lg h-16 w-60 pl-[40px]'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Phone Number</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6'>
                            <input type="tel" name="tel" id="tel" className='rounded-lg h-16 w-60'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Referral Code (Optional)</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6'>
                            <input type="tel" name="tel" id="tel" className='rounded-lg h-16 w-60 pl-[20px]'/>
                        </div>
                    </div>                        
                    <button className='rounded-lg h-16 w-60 bg-[#0c513f] text-white flex self-start items-center justify-center mb-6'>Next</button>
                </div>
                <p className='text-base font-normal text-[#999999]'>Have an account? <span className='text-[#0c513f]'>Sign In</span></p>
            </div>
        </>
    );
}

export default AccountCard
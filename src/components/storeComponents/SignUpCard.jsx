import account from '../../assets/store/account.svg';
import email from '../../assets/store/email.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { SIGNUP_URL } from '../../services/api'
import axios from 'axios'
import { toast } from 'react-toastify';
// import exit from '../../assets/exit.svg'
import { useNavigate } from 'react-router-dom'
import { VERIFY_OTP_SCREEN} from '../../routes'

const SignUpCard = () => {

    const Redirect = useNavigate()
    const [isSubmit, setIsSubmit] = useState(false)

    const [data, setData] = useState({
        surname : '',
        othernames: '',
        sex: 'OTHERS',
        email: '',
        phone: '',
        password: '' ,
        referred: ''
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsSubmit(() => !isSubmit)
        try{
        const result = await axios({
            method: 'post',
            url: SIGNUP_URL,
            data
          });

        if(!result.status) throw new Error(result.message)
        toast(result.message)
        localStorage.setItem('email', email)
        Redirect(VERIFY_OTP_SCREEN)

        }catch(err){
           toast(err.response.data.message || "Something went wrong...")
        }
        finally{
             setIsSubmit(() => false)
        }
    }

    // function  updateData(newData) { 
    //     if(typeof newData === 'object'){
    //         return setData({...data, newData })
    //     }
       
    // }
    return(
        <div className='bg-black bg-opacity-60 w-full min-h-screen flex justify-center fixed top-0'>
            <div className='max-h-[95vh] w-[90vw] bg-white rounded-3xl overflow-y-auto text-center p-5 mt-5 sm:pt-16 sm:px-20 lg:w-[55vw] xl:w-[40vw]'>
                {/* <img src={exit} alt="" className=''/> */}
               
                <h1 className='font-medium text-2xl mb-2'>Sign Up</h1>
           
                <p className='text-[#999999] mb-10'>Sign up to continue</p>
                <div>
                <form onSubmit={handleSubmit}>
                    <div className='sm:flex sm:justify-between lg:gap-4'>
                        <div className='flex flex-col items-start mb-6'>
                            <label className='text-[#0c513f] mb-3 text-base font-normal'>Surname</label>
                            <div className='flex justify-center items-center gap-2 relative w-full'>
                                <img src={account} alt="" className="w-5 h-5 absolute left-[10px] lg:hidden"/>
                                <input type="text" onChange={(e) => setData({...data, surname: e.target.value}) } name="firstName" id="firstName" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-64 lg:w-[100%]' />
                                {/* <input type="text" onChange={(e) => updateData({surname: e.target.value}) } name="firstName" id="firstName" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-64 lg:w-[100%]' /> */}
                            </div>
                        </div>
                        
                        <div className='flex flex-col items-start'>
                            <label className='text-[#0c513f] mb-3 text-base font-normal'>OtherNames</label>
                            <div className='flex justify-center items-center gap-2 relative mb-6 w-full'>
                                <img src={account} alt="" className="w-5 h-5 absolute left-[10px] lg:hidden"/>
                                <input type="text" onChange={(e) => setData({...data, othernames: e.target.value}) }  name="lastName" id="lastName" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-64 lg:w-[100%]'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Email</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <img src={email} alt="" className="w-5 h-5 absolute left-[10px]"/>
                            <input type="text" onChange={(e) => setData({...data, email: e.target.value})}  name="email" id="email" className='rounded-lg h-16 w-full pl-[40px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Phone Number</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="tel"  onChange={(e) => setData({...data, phone: e.target.value})}  name="tel" id="tel" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Password</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="passsword" onChange={(e) => setData({...data, password: e.target.value})}  name="password" id="password" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>  
                    {/* <div className='flex flex-col items-start'>
                        <label className='text-[#0c513f] mb-3 text-base font-normal'>Referral Code (Optional)</label>
                        <div className='flex justify-center items-center gap-2 relative mb-6 w-full sm:w-full'>
                            <input type="tel" onChange={(e) => setData({...data, referred: e.target.value})}  name="tel" id="tel" className='rounded-lg h-16 w-full pl-[30px] border-0 bg-[#f2f7f5] outline-none focus:ring-0 text-gray-800 sm:w-full'/>
                        </div>
                    </div>   */}
                                   
                    <button type='submit' className={`rounded-lg mt-4 h-16 w-full bg-[#0c513f] text-white flex self-start items-center justify-center mb-6 sm:w-full`}>
                           { isSubmit ? "...logging in" : 'Next'} 
                    </button>
                </form>
                 
                    
                    
                </div>
                <p className='text-base font-normal text-[#999999] sm:font-medium'>Have an account? <span className='text-[#0c513f]'>
                <Link to ="/login">Sign In </Link></span></p>
            </div>
        </div>
    );
}

export default SignUpCard
import logo from '../../assets/far assets1/compass.png' 
const Empty = () => {
 
    return (
        <div className='border-[1px] border-[#red] rounded-sm w-[40rem] h-[30rem] flex justify-center items-center mx-auto '>

                    <div className='flex flex-col justify-center items-center gap-y-5'>
                        
                        <img src={logo} alt="" className='w-24 flex items-center'/>
                        <div className="flex flex-col justify-center   items-center ">
                        <h1 className='text-[#9ca3af]'>Nothing found here!</h1> 
                        <h1 className='text-[#9ca3af]'>Please try another category</h1>
                        </div>
                    </div>

         </div>
    )
}

export default Empty
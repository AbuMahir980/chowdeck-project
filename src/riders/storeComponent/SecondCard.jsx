import React from 'react'
import { datas } from './SecondIndex'

const SecondCard = () => {
    return (
        <div className='border-[1px] border-[#b3b2b2] rounded-sm w-[40rem] h-[30rem] flex justify-center items-center '>
            <div>
                {/* {datas.map((data, i) => (
                    <div key={i}>
                        <img src={data.image} alt="" />
                        <h1>{data.text1}</h1>
                    </div>
                ))} */}
                      {datas.map((data, i) => {
                        return(
                    <div key={i} className='flex flex-col justify-center items-center gap-y-5'>
                        
                        <img src={data.image} alt="" className='w-24 flex items-center'/>
                        <div className="flex flex-col justify-center   items-center ">
                        <h1>{data.text1}</h1>
                        
                        
                        <h1 className=''>{data.text2}</h1>
                        </div>
                    </div>)
 } )}
            </div>

        </div>
    )
}

export default SecondCard

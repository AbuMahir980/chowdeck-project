import React from 'react'
import linkedin from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-16.svg'
import twitter from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-17.svg'

const PeopleChowdeck = () => {
  return (
    <div>
      <div>
        <div className="container mx-11 mt-32">
          <p className="mb-6 text-7xl font-bold">People</p>
        </div>

        <div className="container flex gap-7 lg-hidden">
          <div className="md:min-w-[50%]">
            <div className="border-[3px] w-[501.28px] h-[626.3px] rounded-2xl border-black overflow-hidden">
              <div className="w-[500.28px] h-[625.3px] max-h-[600px] overflow-hidden bg-slate-200">
                <img
                  src="https://files.chowdeck.com/images/62_9f18c5d8f0/1698762681.jpg"
                  className="aspect-auto scale-110 translate-y-5 w-full"
                />
              </div>
            </div>
          </div>

          <div className="col-span-3 border-t border-black">
            <button className="grid grid-cols-7 gap-3 w-full border-b border-black items-center py-10 text-yellow-100 border-b-yellow-100">
              <span className="text-32 text-left leading-none tracking-[-1px] font-medium col-span-3">
                Femi
              </span>
              <span className="uppercase text-left text-sm leading-none tracking-[3px] font-bold col-span-3">
                anywork
              </span>
              <span className="flex items-center space-x-2">
                <ul className='flex'>
                    <li className='border rounded-md w-[40px] h-[40px]'>
                        <img src={linkedin} />
                    </li>
                    <li className='border rounded-md w-[40px] h-[40px]'>
                        <img src={twitter}/>
                    </li>
                </ul>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleChowdeck
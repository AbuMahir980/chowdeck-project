import React from 'react'
import shawarma from '../../assets/chowdeck/Shawarma.svg'
import arrow from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-22.svg'

const JoinUs = () => {
  return (
    <div>
      <div>
        <div className="container mx-11 mt-24">
          <div className="mx-3 border-black rounded-lg border-4 ">
            <p className="my-6 mx-11  flex items-center justify-between">
              <span className="text-7xl font-bold">Join us.</span>
              <img
                src={shawarma}
                style={{ width: "110px", height: "110px" }}
                className=""
              />
            </p>

            <div className="mt-10 mx-11 ">
              <span className="border w-[1160px] text-green-950 text-lg mb-5 hover:text-white  flex justify-between h-[4rem] ml-auto cursor-pointer hover:bg-green-950 rounded-lg bg-[#FAFCFB]">
                <span className="font-semibold my-5 ml-5 ">
                  Technical Product Specialist
                </span>
                <span className="font-semibold static my-5  mr-7 ml-3">
                  APPLY NOW
                  <span className="static inline-block">
                    <img
                      src={arrow}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "10px",
                      }}
                    />
                  </span>
                </span>
              </span>

              <span className="border w-[1160px] text-green-950 text-lg mb-5 hover:text-white  flex justify-between h-[4rem] ml-auto cursor-pointer hover:bg-green-950 rounded-lg bg-[#FAFCFB]">
                <span className="font-semibold my-5 ml-5 ">
                  Social Media Intern
                </span>
                <span className="font-semibold static my-5  mr-7 ml-3">
                  APPLY NOW
                  <span className="static inline-block">
                    <img
                      src={arrow}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "10px",
                      }}
                    />
                  </span>
                </span>
              </span>

              <span className="border w-[1160px] text-green-950 text-lg mb-5 hover:text-white  flex justify-between h-[4rem] ml-auto cursor-pointer hover:bg-green-950 rounded-lg bg-[#FAFCFB]">
                <span className="font-semibold my-5 ml-5 ">
                  Junior Customer Support Representative
                </span>
                <span className="font-semibold static my-5  mr-7 ml-3">
                  APPLY NOW
                  <span className="static inline-block">
                    <img
                      src={arrow}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "10px",
                      }}
                    />
                  </span>
                </span>
              </span>

              <span className="border w-[1160px] text-green-950 text-lg mb-5 hover:text-white  flex justify-between h-[4rem] ml-auto cursor-pointer hover:bg-green-950 rounded-lg bg-[#FAFCFB]">
                <span className="font-semibold my-5 ml-5 ">
                  Senior Backend Engineer
                </span>
                <span className="font-semibold static my-5  mr-7 ml-3">
                  APPLY NOW
                  <span className="static inline-block">
                    <img
                      src={arrow}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "10px",
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs
import React, { useState } from 'react'
import chowStar from "../../assets/chowdeck/chow-star.svg"
import ChowdeckFocus from './ChowdeckFocus'
import LastChowdeckFocus from './LastChowdeckFocus'


const TeamFocus = () => {

    const [teams, setTeams] = useState(1)

    const handleNextCard = (team) => {
        setTeams(team)
    }


  return (
    <div>
      <div className=" bg-green-950 py-20 ">
        <div className="relative mr-10  -mt-36">
          <img
            src={chowStar}
            style={{
              height: "128px",
              width: "128px",
              position: "absolute",
              right: "0",
            }}
          />
        </div>
        <div className=" flex mx-16 mt-44">
          <div className="">
            <p className="text-7xl text-white mb-11 font-semibold">Teams.</p>
            <ul>
              <li
                onClick={() => handleNextCard(1)}
                className={`${
                  teams === 1
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg  leading-relaxed">01</span>
                <span className="text-5xl leading-relaxed">Engineering</span>
              </li>
              <li
                onClick={() => handleNextCard(2)}
                className={`${
                  teams === 2
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg leading-relaxed">02</span>
                <span className="text-5xl leading-relaxed">
                  Business & Finance
                </span>
              </li>
              <li
                onClick={() => handleNextCard(3)}
                className={`${
                  teams === 3
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg font-extrabold leading-relaxed">
                  03
                </span>
                <span className="text-5xl leading-relaxed">Operations</span>
              </li>
              <li
                onClick={() => handleNextCard(4)}
                className={`${
                  teams === 4
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg leading-relaxed">04</span>
                <span className="text-5xl leading-relaxed">
                  Customer Success
                </span>
              </li>
              <li
                onClick={() => handleNextCard(5)}
                className={`${
                  teams === 5
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg leading-relaxed">05</span>
                <span className="text-5xl leading-relaxed">
                  Growth & Marketing
                </span>
              </li>
              <li
                onClick={() => handleNextCard(6)}
                className={`${
                  teams === 6
                    ? "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-3xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg leading-relaxed">06</span>
                <span className="text-5xl leading-relaxed">
                  Product & Design
                </span>
              </li>
              <li
                onClick={() => handleNextCard(7)}
                className={`${
                  teams === 7
                    ? "cursor-pointer text-xl mb-14 font-bold w-[624px] h-[48px] text-[#FFC501]"
                    : "cursor-pointer text-xl mb-14 font-bold w-[624px] h-[48px] text-white"
                }`}
              >
                <span className="text-lg leading-relaxed">07</span>
                <span className="text-5xl leading-relaxed">
                  Human Resources
                </span>
              </li>
            </ul>
          </div>
          <div className="flex space-x-[-12rem] ">
            <p className="text-7xl  text-white">
              <span className="pl-26 font-semibold">Focus</span>
            </p>
            {teams === 1 && (
              <ChowdeckFocus Focus="We work closely with Product and Design to bring life to all our products, using various technologies such as NodeJS and MySQL for the backend and React and React Native for the front end. We're constantly tuning our APIs and apps for speed and efficiency and translating our unique UI designs into functional and delightful experiences for our customers" />
            )}

            {teams === 2 && (
              <ChowdeckFocus Focus="Our Business & Finance team operates as a cohesive unit, ensuring the seamless functioning of financial operations and fostering partnerships with restaurants. Handling reconciliations, managing merchant and rider payments, overseeing salary disbursements, and meticulously monitoring unit economics, our Finance team ensures meticulous financial management to drive sustainable growth." />
            )}

            {teams === 3 && (
              <ChowdeckFocus Focus="Operating at the heart of our ecosystem. The team ensures the efficiency and effectiveness of our delivery operations, rider welfare, and adherence to operational standards. Dedicated to recruiting, training, and onboarding new riders, our team ensures they are equipped with the skills and knowledge to deliver exceptional service and to provide timely delivery and customer satisfaction." />
            )}

            {teams === 4 && (
              <ChowdeckFocus Focus="Our team comprises of different sub-teams working together to ensure everything runs smoothly for our customers, riders, and our partner vendors. These teams work together to resolve inquiries, share feedback, and make recommendations to ensure satisfaction and a seamless experience for every user, rider, and vendor within our ecosystem." />
            )}

            {teams === 5 && (
              <ChowdeckFocus Focus="We work hand-in-hand with design and engineering in developing our products and features, creating and implementing public-facing communication strategies through effective positioning, messaging and marketing programs" />
            )}

            {teams === 6 && (
              <ChowdeckFocus Focus="We create desirable product, brand and growth experiences for our customers with the core belief that form and function are equally important parts for great design to happen. Our work constantly accepts off-the-wall methods, we embrace empathy and are focused on creating experiences that cause remarkable change." />
            )}

            {teams === 7 && <LastChowdeckFocus />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamFocus
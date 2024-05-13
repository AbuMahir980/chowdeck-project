import React from 'react'
import chowDistort from '../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-25.svg'
const LastChowdeckFocus = () => {
  return (
    <div>
      <p className="border bg-[#FFEDB3] mt-32 w-[624px] h-[672px] rounded-2xl">
        <img
          src={chowDistort}
          style={{
            width: "60px",
            height: "65px",
            color: "[#FFC501]",
            marginBottom: "1rem",
            marginTop: "2rem",
            marginLeft: "0",
          }}
          className="text-[#FFC501]"
        />
        <span className="text-[1.5rem] mr-11 pr-7  leading-loose md:text-2xl ">
          <span className=" mr-5">
            <ul>
              <li>Recruiting, training & onboarding the best of talents.</li>
              <li>
                The monthly processing of the payroll, tax and pension &
                employees benefits.
              </li>
              <li>
                Neutralizing conflicts and enforcing a safe space for employees.
              </li>
              <li>
                Creating and updating company policies to guide the smooth
                running of the work place and prevent infractions of any kind.
              </li>
            </ul>
          </span>
        </span>
      </p>
    </div>
  );
}

export default LastChowdeckFocus
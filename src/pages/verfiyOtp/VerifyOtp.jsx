import React from "react";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
// import Button from "../customersPage/shared/Button";
const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [counter, setCounter] = useState(60);
  const [resend, setResend] = useState(false);


  const handleOtp = (e) => {
    setOtp(e);
    if (otp.length < process.env.OTP_LENGTH) {
      setButtonActive(false);
    }
  };
  const handleResend = () => {
    if (counter === 0) {
      setResend(true);
      setCounter(60);

    }
    setResend(false);
    setOtp("");
  };

  useEffect(() => {
    if (otp.length === process.env.OTP_LENGTH) {
      setButtonActive(true);
    }
  }, [otp]);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="flex justify-center items-center  bg-black bg-opacity-60 fixed top-[10rem] sm:top-0 z-40 min-h-screen w-full">
        <div className="w-[40%] h-[80vh] bg-white rounded-[25px] p-16 flex flex-col justify-center items-center gap-y-5">
          <h1 className="text-black text-center text-[24px] font-[500] mb-2">
            Verify Phone Number
          </h1>
          <p className="text-center text-[#acacac]">
            Please input code sent to number
          </p>
          <div className="mx-auto w-[90%] mt-5">
            <OtpInput
              value={otp}
              skipDefaultStyles={true}
              inputStyle="  items-center lg:w-[80px] lg:h-[60px] w-[40px] h-[40px] text-center rounded-[5px] font-semibold text-[20px] bg-[#f3f6f5] outline-none"
              onChange={setOtp}
              containerStyle="gap-5"
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="mx-auto w-[80%]">
            {/* <Button
              text="verfify"
              className="bg-[#0c513f] text-white text-center mt-5 w-full"
              Disabled={otp.length < 4 ? true : false}
            /> */}
            <button className={`${otp.length<process.env.OTP_LENGTH?'bg-[#0c513f] opacity-55':'bg-[#0c513f]'} text-white w-full p-3 rounded-[10px]`} disabled={otp.length<process.env.OTP_LENGTH?true:false}>
                verify
            </button>
          </div>
          <span className="md:text-center text-base font-normal text-[#acacac]">
            Didn’t receive code?{" "}
            <span
              className={`font-bold ${
                counter === 0
                  ? "text-[#0c513f] hover:scale-105 hover:cursor-pointer"
                  : " hover:cursor-wait"
              }`}
              onClick={handleResend}
            >
              RESEND
            </span>{" "}
            {counter > 0 && <span>in ({counter})s</span>}
          </span>
          <h3 className="text-[#acacac]">New to Chowdeck ? <Link to="#"><span className="text-[#33ba8a] cursor-pointer">Sign Up</span></Link></h3>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;

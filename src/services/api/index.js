
const SIGNUP_URL = `${process.env.REACT_APP_BASE_URL}/create`
const SIGNUP_OTP = `${process.env.REACT_APP_BASE_URL}/verify/:email/:otp`
const SIGNUP_RESEND_OTP = `${process.env.REACT_APP_BASE_URL}/resend-otp/:email`
const LOGIN_URL = `${process.env.REACT_APP_BASE_URL}/login`
const CUSTOMER_DETAILS = `${process.env.REACT_APP_BASE_URL}/customer`





export {
    SIGNUP_URL,
    SIGNUP_OTP,
    SIGNUP_RESEND_OTP,
    LOGIN_URL,
    CUSTOMER_DETAILS
}
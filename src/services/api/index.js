
const SIGNUP_URL = `${process.env.REACT_APP_BASE_URL}/create`
const SIGNUP_VERIFY_OTP = `${process.env.REACT_APP_BASE_URL}/verify`
const SIGNUP_RESEND_OTP = `${process.env.REACT_APP_BASE_URL}/resend-otp/:email`
const LOGIN_URL = `${process.env.REACT_APP_BASE_URL}/login`
const CUSTOMER_DETAILS = `${process.env.REACT_APP_BASE_URL}/customer`
const PRODUCT_CATEGORY = `${process.env.REACT_APP_BASE_URL}/categories`
const PRODUCTS = `${process.env.REACT_APP_BASE_URL}/products`
const START_PAYMENT = `${process.env.REACT_APP_BASE_URL}/payment/start`
const COMPLETE_PAYMENT = `${process.env.REACT_APP_BASE_URL}/payment/confirm/:reference`




export {
    SIGNUP_URL,
    SIGNUP_VERIFY_OTP,
    SIGNUP_RESEND_OTP,
    LOGIN_URL,
    CUSTOMER_DETAILS,
    PRODUCT_CATEGORY,
    PRODUCTS,
    START_PAYMENT,
    COMPLETE_PAYMENT
}
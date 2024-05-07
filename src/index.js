<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/contact/Contact';
import Customer from './pages/customersPage/Customer';
import Relay from './components/relayComponents/Relay';
import Riders from './riders/Riders';
import Vendors from './pages/vendors/Vendors';
import FAQS from './pages/faq/Faq';
import Blog from './pages/blog/Blog';
import Store from './pages/store';
import SignUpCard from './components/storeComponents/SignUpCard';
import LogInCard from './components/storeComponents/LogInCard';
import VerifyOtp from './pages/verfiyOtp/VerifyOtp';
import AddToCartCard from './components/addtocart/AddToCartCard';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./shared/Navbar";
// import NavList from './shared/components/NavList';
import LgMenuList from "./shared/components/LgMenuList";
import Company from "./components/companyComponents/Company";
import MyOrders from "./components/companyComponents/MyOrders";
import Card from "./components/companyComponents/Card";
>>>>>>> origin/lymyn
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Customer />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/vendors',
    element: <Vendors />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/relay',
    element: <Relay />
  },
  {
    path: '/riders',
    element: <Riders />
  },
  {
    path: '/faqs',
    element: <FAQS />
  },
  {
    path:'/blog' ,
    element: <Blog  />
  },
  {
    path: '/signup',
    element: <SignUpCard/> 
  },
  {
    path: '/login',
    element: <LogInCard/>
  },
  {
    path: '/verifyotp',
    element: <VerifyOtp />
  },
  {
    path: '/addtocart',
    element: <AddToCartCard />
  }


]);
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById('root'));
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> origin/lymyn
root.render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
      <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

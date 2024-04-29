import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './shared/Navbar';
import Contact from './pages/contact/Contact';
import Vendors from './pages/vendors/Vendors';
// import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='bg-slate-200 h-screen flex justify-center items-center'><h1 className=' flex justify-center items-center bg-white p-5 rounded-lg font-bold drop-shadow-lg text-bold text-center text-blue-700'>Hi Guys! 👋<br /> Welcome to the Chwdck FullStack Project clone onboarding 🎉. <br /> Please kindly go through the README.md file - not the readme.md.txt file - for necessary instructions 🤭. <br /> Happy coding guys! 🚀</h1></div>,
  },
  {
    path: '/navbar',
    element: <Navbar />
  },
  {
    path: '/vendors',
    element: <Vendors />
  },
  {
    path: '/contact',
    element: <Contact />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

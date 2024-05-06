import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Info from './riders/Info'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './shared/Navbar';
import Riders from './riders/Riders';
import Vendors from './pages/vendors/Vendors';
import Card from './riders/storeComponent/Card.';

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
    path: '/riders',
    element: <Riders />
  },
  {
    path: '/card',
    element: <Card />
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Info/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

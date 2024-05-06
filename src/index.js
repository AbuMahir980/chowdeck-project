import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './shared/Navbar';
import Relay from './components/relayComponents/Relay';
import Riders from './riders/Riders';
import Vendors from './pages/vendors/Vendors';
// import Store from './components/store/FoodCard';
import SingleFoodCard from './components/store/SingleFoodCard'
import FoodCard from './components/store/FoodCard';
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
   path: '/relay',
    element: <Relay />
  },
  {
    path: '/riders',
    element: <Riders />
  },
  {
    path: '/foodcard',
    element: <FoodCard />
  },
  {
    // path: '/singlefoodcard/:id',
    path: '/singlefoodcard/',
    element: <SingleFoodCard />
  }
  
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

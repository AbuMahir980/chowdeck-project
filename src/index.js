import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './shared/Navbar';
import Customer from './pages/customersPage/Customer';
import Relay from './components/relayComponents/Relay';
import Riders from './riders/Riders';
import Vendors from './pages/vendors/Vendors';
// import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Customer />
  },
  {
    path: '/navbar',
    // element: <Navbar />
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

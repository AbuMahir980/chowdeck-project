// import shoppingCart from '../../assets/shoppingcart.svg';
// import exit from '../../assets/exit.svg';
// import parcel from '../../assets/parcel.svg';
// import bike from '../../assets/bike.svg';
// import vendor from '../../assets/vendor.svg';
// import rider from '../../assets/rider.svg';
// import company from '../../assets/company.svg';
// import blog from '../../assets/blog.svg';
// import contact from '../../assets/contact.svg';
// import star from '../../assets/star.svg';
// import circle from '../../assets/circle.svg';
// import { useState } from 'react';


// const NavList = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const handleActive = (index) => {
//         setActiveIndex(index === activeIndex ? null : index);
//     };

//     const items = [
//         { text: 'Customers', icon: parcel },
//         { text: 'Relay', icon: bike },
//         { text: 'Vendors', icon: vendor },
//         { text: 'Riders', icon: rider },
//         { text: 'Company', icon: company },
//         { text: 'Blog', icon: blog },
//         { text: 'Contact', icon: contact },
//         { text: 'Twitter', icon: star },
//         { text: 'Instagram', icon: circle }
//     ];

//     return (
//         <div className='h-screen bg-black flex flex-col divide-y divide-gray-500 divide-opacity-30'>
            
//             <div className='flex justify-end items-end align-middle pb-6 h-[113px] pr-2 gap-4 sticky top-0 z-10'>
//                 <a href="" className='bg-white rounded-full p-3'>
//                     <img src={shoppingCart} alt="" />
//                 </a>
//                 <div className='pb-2'>
//                     <img src={exit} alt="" />
//                 </div>
//             </div>

//             <div className='overflow-y-auto flex-1 divide-y divide-gray-500 divide-opacity-30'>
//                 {items.map((item, index) => (
//                     <a
//                         href=""
//                         key={index}
//                         className={`text-white flex items-center h-20 gap-3 font-medium text-xl hover:bg-[#0c513f] pl-10 ${activeIndex === index ? 'text-yellow-500' : ''}`}
//                         onClick={() => handleActive(index)}
//                     >
//                         <img src={item.icon} alt="" />
//                         <span>{item.text}</span>
//                     </a>
//                 ))}
//                 <p className='text-gray-200 text-opacity-35 h-20 font-normal text-xs pt-10 pb-10 text-center'>© All Rights Reserved. 2024 Chowdeck Technologies</p>
//             </div>

            
//         </div>
//     );
// }

// export default NavList;

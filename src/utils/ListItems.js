import parcel from '../assets/parcel.svg';
import bike from '../assets/bike.svg';
import vendor from '../assets/vendor.svg';
import rider from '../assets/rider.svg';
import company from '../assets/company.svg';
import blog from '../assets/blog.svg';
import contact from '../assets/contact.svg';
import star from '../assets/star.svg';
import circle from '../assets/circle.svg';
import relaySvg from '../assets/hoverItems/relay-hover.svg';
import companySvg from '../assets/hoverItems/company-hover.svg';
import faqSvg1 from '../assets/hoverItems/faq-hover-1.svg';
import faqSvg2 from '../assets/hoverItems/faq-hover-2.svg';
import blogSvg1 from '../assets/hoverItems/blog-hover-1.svg';
import blogSvg2 from '../assets/hoverItems/blog-hover-2.svg';
import blogSvg3 from '../assets/hoverItems/blog-hover-3.svg';
import blogSvg4 from '../assets/hoverItems/blog-hover-4.svg';
import contactSvg from '../assets/contact.svg';
import location from '../assets/vendors/networks/location.svg';
import halfCircle from '../assets/vendors/networks/halfCircle.svg';
import star1 from '../assets/vendors/networks/star1.svg';
import fwdArrowThin from '../assets/vendors/networks/fwdArrowThin.svg';
import order from '../assets/vendors/networks/order.webp';
import deliver from '../assets/vendors/networks/deliver.webp';
import scenes from '../assets/vendors/networks/scenes.webp';

export const items = [
        { text: 'Customers', icon: parcel},
        { text: 'Relay', icon: bike },
        { text: 'Vendors', icon: vendor },
        { text: 'Riders', icon: rider },
        { text: 'Company', icon: company },
        { text: 'Blog', icon: blog },
        { text: 'Contact', icon: contact },
        { text: 'Twitter', icon: star },
        { text: 'Instagram', icon: circle }
    ];



export const lgItems = [
    { text: 'Relay', background: relaySvg },
    { text: 'Company', background: companySvg },
    { text: 'FAQs', background: [faqSvg1, faqSvg2] }, // Array for multiple backgrounds
    { text: 'Blog', background: [blogSvg1, blogSvg2, blogSvg3, blogSvg4] }, // Array for multiple backgrounds
    { text: 'Contact', background: contactSvg }
];

export const networks = [
    { 
        icon:location, 
        heading:"Order in 3 steps", 
        text: "Hungry ? Too tired to cook ? Having friends over or you just wan chop life ? Get started and allow us deliver happiness to your door step.", 
        actionTxt: "SEE MORE", 
        actionIcon: fwdArrowThin, 
        contImg: order
    },
    { 
        icon:halfCircle, 
        heading:"Deliver happiness", 
        text: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.", 
        actionTxt: "SEE MORE", 
        actionIcon: fwdArrowThin, 
        contImg: deliver
    },
    { 
        icon:star1, 
        heading:"Behind the scenes", 
        text: "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.", 
        actionTxt: "SEE MORE", 
        actionIcon: fwdArrowThin, 
        contImg: scenes
    }
]
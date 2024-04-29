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
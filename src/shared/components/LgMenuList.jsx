import { lgItems } from "../../utils/ListItems";
import { useState } from 'react';
import { Link } from "react-router-dom";


const LgMenuList = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return(
            <ul className="hidden lg:flex bg-white rounded-full items-center justify-around gap-12 px-14 py-4 w-fit drop-shadow">
                {lgItems.map((item, index) => (
                        <li
                            href=""
                            key={index}
                            className={`lg:text-base lg:font-semibold ${activeIndex === index ? 'text-yellow-500' : ''}`}
                            onClick={() => handleActive(index)}
                        >
                            <Link to={`/${item.text.toLowerCase()}`}>{item.text}</Link>
                        </li>
                    ))}
            </ul>
    )
}

export default LgMenuList
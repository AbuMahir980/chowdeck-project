
import React, { useEffect, useState } from 'react'

const Texteffect = ({ text, interval, delay }) => {
    const [currentText, setCurrentText] = useState(0);
    useEffect(() => {
      const textCount = text.length;
  
      const textTimer = setInterval(() => {
        setCurrentText((prevIndex) => (prevIndex + 1) % textCount);
      }, interval + delay); 
  
      return () => clearInterval(textTimer);
    }, [text, interval, delay]);
  
    return (
      <div className=''>
        <h1 className="lg:text-[112px] font-[700] text-center flex justify-center items-center transition-all duration-1000 ease-out">
          {text[currentText].description}
        </h1>
      </div>
    );
  };
export default Texteffect
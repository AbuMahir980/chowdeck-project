/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/ImageCarouselTwo.js
import { useState, useEffect } from "react"

const Carousel = ({ cards, interval,bg }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndexOne, setCurrentIndexOne] = useState(1)
  const [currentIndexTwo, setCurrentIndexTwo] = useState(2)

  useEffect(() => {
    const imageCount = cards.length

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount)
      setCurrentIndexOne((prevIndex) => (prevIndex + 1) % imageCount)
      setCurrentIndexTwo((prevIndex) => (prevIndex + 1) % imageCount)
    }, interval)

    return () => clearInterval(timer)
  }, [cards, interval])

  return (
    <div className="flex w-full items-center justify-between ">
      <img
        src={cards[currentIndexTwo].image}
        alt={`Image ${currentIndexTwo + 1}`}
        className=" w-[180px] h-[150px] "
      />
      <div className={`flex ${cards[currentIndex].bg} `}>
        <div >
          {cards[currentIndex].description}
        </div>
        <img
          src={cards[currentIndex].image}
          alt={`Image ${currentIndex + 1}`}
          className=" w-[500px] h-[350px] "
        />
      </div>
      <img
        src={cards[currentIndexOne].image}
        alt={`Image ${currentIndexOne + 1}`}
        className=" w-[180px] h-[150px] "
      />
    </div>


  )
}

export default Carousel

import { useState, useEffect } from "react"

const Carousel = ({ cards, interval,bg }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentIndexOne, setCurrentIndexOne] = useState(1)
  const [currentIndexTwo, setCurrentIndexTwo] = useState(cards.length - 1)

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
    <div className="lg:flex w-full items-center justify-between ">

      <img
        src={cards[currentIndexTwo].image}
        alt={`Image ${currentIndex.length - 1}`}
        className=" w-[180px] h-[150px] hidden sm:block "
      />

      <div className={` sm:flex  w-full ${cards[currentIndex].bg} `}>
        <div className="w-full sm:w-[50%] border rounded-md text-center">
          <p className="font-medium  lg:text-[40px] text-4xl leading-[2.9rem] w-[26rem] sm:w-[10rem] pl-8 mt-10">{cards[currentIndex].description}</p>
        </div>
      <div className="w-full sm:w-[50%] rounded-lg">
      <img
          src={cards[currentIndex].image}
          alt={`Image ${currentIndex + 1}`}
          className=" w-[500px] h-[350px] "
        />
      </div>
        

      </div>
      <img
        src={cards[currentIndexOne].image}
        alt={`Image ${currentIndexOne + 1}`}
        className=" w-[180px] h-[150px]  hidden sm:block "
      />
    </div>


  )
}

export default Carousel
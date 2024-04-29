import React from "react";
import { scrollingCard } from "../utils/blog";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="flex gap-12 h-[25rem]">
      <div className="flex items-end w-[50%]">
        <div className="text-white" ><h3 className="text-7xl">Blog & Stories</h3><p>The good stuff. Follow our social media for the latest updates, features and even sneak peeks 👀</p>
        </div>
        </div>
      <div className="flex w-[50%]  ">
        <div className="flex lg:scrollbar-hide lg:overflow-x-auto   flex-col space-y-4 ">
          {scrollingCard.map((card, index) => (
            <HeroCards
              key={index}
              image={card.image}
              morelink={card.morelink}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
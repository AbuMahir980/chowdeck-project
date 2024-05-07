import restaurant from "../../assets/chowdeck/restaurant.webp";
import supermarkets from "../../assets/chowdeck/supermarkets.webp";
import pharmacy from "../../assets/chowdeck/pharmacy.svg";
import africanMeal from "../../assets/chowdeck/African Meals.webp";
import fitFarm from "../../assets/chowdeck/Fit Fam.webp";
import drinks from "../../assets/chowdeck/drink.svg";

const Cards = (image, text) => {
  const datas = [
    {
      id: 1,
      image: restaurant,
      text: "Restaurant",
    },
    {
      id: 2,
      image: supermarkets,
      text: "Supermarkets",
    },
    {
      id: 3,
      image: pharmacy,
      text: "Pharmacy",
    },
    {
      id: 4,
      image: africanMeal,
      text: "African Meal",
    },
    {
      id: 5,
      image: fitFarm,
      text: "Fit Fam",
    },
    {
      id: 6,
      image: drinks,
      text: "Drinks",
    },
  ];
  return (
    <>
      <div className="border-black mt-40 ml-7 border-2 rounded-md h-32 w-32">
        <div className="mt-5 ">
          <span className="h-[37px] w-[29px]">[image]</span>
          <span className="text-[14px] mt-4">[text]</span>
        </div>
      </div>
    </>
  );
};

export default Cards;

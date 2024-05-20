import React, { useState } from "react";
import { useParams } from 'react-router-dom'
// import foodImage from "../relayComponents/relayAssets/foodImage.png";
import Button from "./storeButton/Button";
import orderIcon from '../relayComponents/relayAssets/orderIcon.png'
import blackClock from '../relayComponents/relayAssets/blackClock.png'
import CustomButton from "./storeButton/CustomButton";
import { food } from "./data";
import Layout from '../../pages/Store/Layout';
import Card from "../../riders/storeComponent/Card";
import Checkout from "../../pages/checkout/Checkout"
import AddToCartCard from "../addtocart/AddToCartCard";
import CardItem from "../../riders/storeComponent/CardItem";

const SingleFoodCard = () => {
  // console.log('food:', food)


      const { id } = useParams()
      const data = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
      console.log( id, data)
      const singleProducts = data.filter((item) =>  item.vendor_id == id )

      console.log('singleProducts --:', singleProducts)
      const [isactive, setIsactive] = useState(1)

      const [toggleModal, setToggleModal] = useState(false)

      function handleToggleModal(){
    
        setToggleModal(!toggleModal)
      }
    
      const handleClick = (isactive) => {
        setIsactive(isactive)
      }

      return (
        <Layout>
          
              <div className="flex px-4">
              <div className="flex flex-col w-[60%] px-4">
                <div className="rounded-lg overflow-hidden  w-full relative">
                  <img src={data[0].store_image} alt="" className="w-full" />
                  <div className="absolute bottom-3 left-3 space-x-2 flex">
                          <CustomButton image={blackClock} text = {`${data[0].available_hours}`}/> 
                          {/* <CustomButton image={orderIcon} text ={`${data[0].available_hours}`}/>  */}
                  </div>
                </div>
                <div className="block md:flex md:justify-between mt-6">
                    <div className="w-[104px] h-[35px] md:w-[208px] md:h-[72px]">
                      <h1 className="font-medium text-xl md:text-[28px] mr-4 leading-[36px]">
                        {data[0].product_name} <span className="text-sm">5.0</span>
                      </h1>
                      
                    </div>
                    <div className="flex items-start border border-[#0c513f] p-[0.5rem] rounded-xl bg-[#000] mb-16">
                        <Button onClick={()=>{handleClick(1)}} isactive={isactive} text='Deliver now' cond={1} />
                        <Button onClick={()=>{handleClick(2)}} isactive={isactive} text='Pre-order' cond={2}/>
                        <Button onClick={()=>{handleClick(3)}} isactive={isactive} text='Pick-up' cond={3}/>
                    </div>
                  
                </div>

                {/* <Card handleToggleModal={handleToggleModal} /> */}
                <div className=' flex justify-between w-full cursor-pointer overflow-hidden '    >
                {/* { JSON.stringify(singleProducts)} */}
                { 
      
                  
                    singleProducts.map((item, id) => (
                      <CardItem key={id} items={item.products}  onClick={handleToggleModal} />
                        
                    
                  ))

                  }
                  </div>
        
                
              </div>
              <div className="w-[40%]">
                    <Checkout />
                  </div>
            </div>
        
      
          {
          toggleModal &&  <AddToCartCard items={singleProducts.products} handleToggleModal={handleToggleModal}  />
        }
          </Layout>
    
    );
};

export default SingleFoodCard;

import { categoryData as catData } from '../../../utils/ListItems'
import { useEffect, useState } from 'react';
import BannerDisplay from './BannerDisplay';
import CategorySingleCard from './CategorySingleCard';
import { PRODUCT_CATEGORY, PRODUCTS } from '../../../services/api'
import axios from 'axios'

const Categories = ({categoryData}) => {

    return (
       
        <div className='px-6 mt-10 mb-20'>
            <h1 className=' mb-6 text-xl md:text-2xl font-medium'>Explore Categories</h1>
      
            <div className='flex mb-14'>
            {
                categoryData.map((category, i) => (<CategorySingleCard key={i} {...category}/>))
            }
            </div>
            <div>
                <BannerDisplay />
            </div>
        </div>
    );
};

export default Categories;


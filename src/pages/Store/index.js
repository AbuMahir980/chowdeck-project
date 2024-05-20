// import StoreNav from './components/StoreNav';
import Categories from './components/Categories';
import FoodCard from '../../components/store/FoodCard';
// import Fotter from '../fotter/Fotter'
import Layout from './Layout'
import { PRODUCT_CATEGORY,  PRODUCTS } from '../../services/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { categoryData as catData } from '../../utils/ListItems'
import { LuAlignVerticalJustifyEnd } from 'react-icons/lu';

const Store = () => {

    const [categoryData, setCategoryData] = useState([]) 
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        (async() => {
                const productCategoryCall = await axios({
                    method: 'GET',
                    url: PRODUCT_CATEGORY
                })
        
                const products = await axios({
                    method: "GET",
                    url: PRODUCTS
                })

            
                //was to map the icon in the catData to the date coing from the backend
                const newCategoryData = productCategoryCall.data.data.map((item)=> {
                        const foundObj = catData.find((item2) => item.category_id == item2.id)
        
                return { ...item , ...foundObj }
        
                })

                setCategoryData(newCategoryData)
                setProductData(products.data.data)
                localStorage.setItem('product', JSON.stringify(products.data.data))
        
        
            })()
    }, [])
    return(
        <Layout>
            <Categories  categoryData={categoryData} />
            <FoodCard foodData={productData} />
        </Layout>
    )
}

export default Store
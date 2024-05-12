// import StoreNav from './components/StoreNav';
import Categories from './components/Categories';
import FoodCard from '../../components/store/FoodCard';
// import Fotter from '../fotter/Fotter'
import Layout from './Layout'

const Store = () => {
    return(
        <Layout>
            <Categories />
            <FoodCard />
        </Layout>
    )
}

export default Store
import StoreNav from './components/StoreNav';
import Categories from './components/Categories';
import FoodCard from '../../components/store/FoodCard';
import Fotter from '../fotter/Fotter'

const Store = () => {
    return(
        <div className=''>
            <StoreNav />
            <Categories />
            <FoodCard />
            <Fotter />
        </div>
    )
}

export default Store
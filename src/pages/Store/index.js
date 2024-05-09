import StoreNav from './components/StoreNav';
import Categories from './components/Categories';
import FoodCard from ''
const Store = () => {
    return(
        <div className=''>
            <StoreNav />
            <div>
                <div>
                    <Categories />
                </div>
                <div>
                    <FoodCard />
                </div>
            </div>
        </div>
    )
}

export default Store
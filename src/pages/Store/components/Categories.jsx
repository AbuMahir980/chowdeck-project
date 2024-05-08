import { categoryData } from '../../../utils/ListItems'
import BannerDisplay from './BannerDisplay';
import CategorySingleCard from './CategorySingleCard';

const Categories = () => {

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
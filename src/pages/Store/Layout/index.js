import StoreNav from '../components/StoreNav'
import Fotter from '../../fotter/Fotter'


const Layout = ({children}) => {
    return(
        <div className='w-[75%] mx-auto'>
            <StoreNav />
            <div>
                {children}
            </div>
            <Fotter />
        </div>
    )
}

export default Layout
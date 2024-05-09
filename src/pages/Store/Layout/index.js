import StoreNav from '../components/StoreNav'
import Fotter from '../../fotter/Fotter'


const Layout = ({children}) => {
    return(
        <div>
            <StoreNav />
            <div>
                {children}
            </div>
            <Fotter />
        </div>
    )
}

export default Layout
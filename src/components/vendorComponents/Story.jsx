import pasta from '../../assets/vendors/stories/Pasta.svg'
import { storiesData } from '../../utils/ListItems'
import StoryCard from './StoryCard'

const Stories = () => {
    return(
        <div className='flex flex-col justify-center items-center container mx-auto px-6 gap-12 mt-36'>
            <div className='container flex items-center justify-between'>
                <p className='section-title flex items-center text-[32px] leading-[48px] text-black font-bold tracking-tighter md:text-[48px] md:leading-[48px] lg:text-[64px] lg:leading-[80px]'>Stories <span><img src={pasta} alt="" className='ml-2 w-12 lg:w-full'/></span></p>
            </div>
            
            <div className='gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
                {
                    storiesData.map((story, index) => (<StoryCard key={index} {...story}/>))
                }
            </div>
        </div>
    )
}

export default Stories
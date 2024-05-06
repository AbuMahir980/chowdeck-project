import Buttons from "./Buttons";
import Tweets from '../../assets/vendors/tweet.svg';


const Community = () => {
    return(
        <div className="flex flex-col gap-7 justify-end">
            <div className="flex items-center justify-center bg-[#fff3b9] border-[3px] border-black font-bold text-2xl lg:text-3xl rounded-lg w-fit p-3 text-center mx-auto tracking-tighter">
                <span className="bg-[#FFB3CE] border-[3px] border-black block w-4 h-4 rounded-full mr-2"></span>
                <p>Street Cred</p>
            </div>
            <Buttons img={Tweets} text="Join our community" bgColor="bg-[#1DA1F2]" width="w-52" height="h-12" textWeight="font-medium" textSize="text-base" />
        </div>
    )
}

export default Community